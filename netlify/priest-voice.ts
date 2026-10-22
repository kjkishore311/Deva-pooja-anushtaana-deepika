import { createHash } from 'node:crypto';
import { getStore } from '@netlify/blobs';
import { POOJA_STEPS } from '../src/data/poojaData';

// Recordings are stored site-wide so they survive new deploys. Changing a mantra's text changes its key, so it is re-recorded.
export const priestVoiceStore = () => getStore('priest-voice');

const VOICE = 'Charon';
const MODELS = [process.env.GEMINI_TTS_MODEL, 'gemini-3.8-flash-tts', 'gemini-3.1-flash-tts-preview', 'gemini-2.5-pro-preview-tts', 'gemini-2.5-flash-preview-tts']
  .filter((model): model is string => Boolean(model));

interface Recitation {
  kind: 'mantra' | 'guidance';
  text: string;
}

// Only text from the site's own pooja data can be recited, so the endpoint cannot be used to voice arbitrary input.
export function findRecitation(id: string): Recitation | null {
  for (const step of POOJA_STEPS) {
    const mantra = step.mantras.find((item) => item.id === id);
    if (mantra) return { kind: 'mantra', text: mantra.mantraSanskrit };
    for (const lang of ['kn', 'en'] as const) {
      if (id === `guidance_${step.id}_${lang}`) {
        const title = lang === 'kn' ? step.titleKn : step.titleEn;
        const instructions = lang === 'kn' ? step.instructionsKn : step.instructionsEn;
        return { kind: 'guidance', text: `${title}. ${instructions.join(' ')}` };
      }
    }
  }
  return null;
}

export function recordingKey(id: string, recitation: Recitation) {
  const hash = createHash('sha256').update(`${VOICE}:${recitation.text}`).digest('hex').slice(0, 12);
  return `v1/${id}-${hash}.wav`;
}

function buildPrompt({ kind, text }: Recitation) {
  const cleaned = text.replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').replace(/[0-9]/g, '').trim();
  if (kind === 'guidance') {
    return `Speak as a calm, kind, elderly male Madhwa priest (ಆಚಾರ್ಯರು) guiding a beginner through Deva Pooja at home. Speak slowly and clearly, pronouncing every word distinctly, with gentle pauses between sentences. Read only the following text, without adding anything:\n\n${cleaned}`;
  }
  return `You are a traditional Madhwa Vaishnava priest (ಆಚಾರ್ಯರು / ಪುರೋಹಿತರು) of the Uttaradi Matha sampradaya, with a deep, steady, devotional male voice, chanting for a beginner who is learning to recite along. Chant slowly and very clearly. Pronounce every word and every syllable distinctly, with correct Sanskrit pronunciation, aspirated consonants and long vowels, and leave a short pause after each word so the listener can repeat it. Pause longer at each danda (। and ॥). Do not speed up. Chant only the following mantra, with no introduction, translation or commentary:\n\n${cleaned}`;
}

function pcmToWav(pcm: Buffer, sampleRate = 24000) {
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

export async function generateRecording(recitation: Recitation): Promise<Buffer> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY is not configured');
  let lastError = 'No speech model available';
  for (const model of MODELS) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        contents: [{ parts: [{ text: buildPrompt(recitation) }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } } },
        },
      }),
    });
    if (response.status === 404 || response.status === 400) {
      lastError = `${model}: ${response.status} ${(await response.text()).slice(0, 200)}`;
      continue;
    }
    if (!response.ok) throw new Error(`${model}: ${response.status} ${(await response.text()).slice(0, 300)}`);
    const data = await response.json();
    const audio = data.candidates?.[0]?.content?.parts?.find((part: any) => part.inlineData?.data)?.inlineData;
    if (!audio) throw new Error(`${model}: no audio returned`);
    const rate = Number(/rate=(\d+)/.exec(audio.mimeType || '')?.[1]) || 24000;
    return pcmToWav(Buffer.from(audio.data, 'base64'), rate);
  }
  throw new Error(lastError);
}
