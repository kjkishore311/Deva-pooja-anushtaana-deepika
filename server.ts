import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// In-memory audio cache so each chanted mantra is only generated once, then instantaneous!
const audioCache = new Map<string, { wavBase64: string; mimeType: string }>();

// Helper to convert 24kHz 16-bit mono PCM into standard WAV
function pcmToWav(pcmData: Buffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16): Buffer {
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);
  const dataSize = pcmData.length;
  const header = Buffer.alloc(44);

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // Subchunk1Size
  header.writeUInt16LE(1, 20); // AudioFormat PCM
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmData]);
}

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Human Vedic Priest Voice Chanting Endpoint
app.post('/api/chant', async (req, res) => {
  try {
    const { text, mantraId, voiceName = 'Fenrir', speed = 'slow' } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required for chanting' });
    }

    const cacheKey = `${mantraId || text.slice(0, 40)}_${voiceName}_${speed}`;
    if (audioCache.has(cacheKey)) {
      const cached = audioCache.get(cacheKey)!;
      return res.json({
        audioBase64: cached.wavBase64,
        mimeType: cached.mimeType,
        cached: true,
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ error: 'GEMINI_API_KEY is not configured' });
    }

    // Clean mantra text to ensure natural, reverent pronunciation
    const cleanedText = text
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/[0-9]/g, '')
      .trim();

    const speedInstruction =
      speed === 'very-slow'
        ? 'Recite very slowly, solemn and deep, allowing every syllable and Vedic vowel to resonate.'
        : 'Recite slowly, clearly, and reverently in the authentic deep voice of a traditional Vedic Hindu male priest (ಆಚಾರ್ಯ / ಪುರೋಹಿತ). Maintain solemn pauses between sacred names and dandas.';

    const prompt = `You are an authentic Vedic Hindu male priest (ಆಚಾರ್ಯ / ಪುರೋಹಿತ) performing sacred Deva Pooja in a sanctified temple. ${speedInstruction} Only chant the following sacred Sanskrit mantra, with no English commentary, translations, or introductory words:\n\n${cleanedText}`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-tts-preview:generateContent?key=${apiKey}`;

    const apiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: voiceName || 'Fenrir', // Fenrir: deep, reverent male priest voice
              },
            },
          },
        },
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      console.error('Gemini TTS API error:', apiRes.status, errText);
      return res.status(apiRes.status).json({ error: 'Failed to generate human voice chant', details: errText });
    }

    const data = await apiRes.json();
    const candidatePart = data.candidates?.[0]?.content?.parts?.[0];
    const rawBase64 = candidatePart?.inlineData?.data;

    if (!rawBase64) {
      return res.status(500).json({ error: 'No audio returned from speech synthesis model' });
    }

    // Convert raw PCM to standard WAV
    const pcmBuffer = Buffer.from(rawBase64, 'base64');
    const wavBuffer = pcmToWav(pcmBuffer, 24000, 1, 16);
    const wavBase64 = wavBuffer.toString('base64');

    audioCache.set(cacheKey, { wavBase64, mimeType: 'audio/wav' });

    res.json({
      audioBase64: wavBase64,
      mimeType: 'audio/wav',
      cached: false,
    });
  } catch (error: any) {
    console.error('Chant endpoint error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// PWA & PWABuilder Manifest & Service Worker Endpoints
app.get(['/manifest.json', '/manifest.webmanifest'], (_req, res) => {
  const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
  res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile(manifestPath);
});

app.get(['/sw.js', '/service-worker.js'], (_req, res) => {
  const swPath = path.join(process.cwd(), 'public', 'service-worker.js');
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Service-Worker-Allowed', '/');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile(swPath);
});

// Direct Download Endpoint for the full PWA Offline Bundle (.zip)
app.get('/api/download/pwa-zip', (_req, res) => {
  const zipPath = path.join(process.cwd(), 'public', 'deva-pooja-pwa-package.zip');
  res.download(zipPath, 'deva-pooja-pwa-package.zip', (err) => {
    if (err) {
      console.error('Error sending ZIP:', err);
      res.status(500).send('Could not download package');
    }
  });
});

// Serve public static assets (images, icons, manifest)
app.use(express.static(path.join(process.cwd(), 'public')));

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pooja Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
