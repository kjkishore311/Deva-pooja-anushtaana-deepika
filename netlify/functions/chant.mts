import type { Config } from '@netlify/functions';
import { findRecitation, priestVoiceStore, recordingKey } from '../priest-voice';

const PENDING_MS = 3 * 60 * 1000;
const FAILED_MS = 10 * 60 * 1000;

const json = (body: object, status: number) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

// Streams a saved priest recording, or starts generating it in the background and asks the browser to check back.
export default async (request: Request) => {
  if (request.method !== 'GET') return json({ error: 'Method not allowed.' }, 405);
  const id = new URL(request.url).searchParams.get('id') || '';
  const recitation = findRecitation(id);
  if (!recitation) return json({ error: 'Unknown mantra.' }, 404);

  const store = priestVoiceStore();
  const key = recordingKey(id, recitation);
  const audio = await store.get(key, { type: 'stream' });
  if (audio) {
    return new Response(audio, { headers: { 'Content-Type': 'audio/wav', 'Cache-Control': 'public, max-age=86400', 'X-Content-Type-Options': 'nosniff' } });
  }
  if (!process.env.GEMINI_API_KEY) return json({ status: 'unavailable', error: 'The priest voice is not configured yet.' }, 503);

  const failedAt = Number(await store.get(`failed/${key}`, { type: 'text' }));
  if (failedAt && Date.now() - failedAt < FAILED_MS) return json({ status: 'failed', error: 'The priest voice could not be generated. Please try again later.' }, 502);

  const pendingAt = Number(await store.get(`pending/${key}`, { type: 'text' }));
  if (!pendingAt || Date.now() - pendingAt > PENDING_MS) {
    await store.set(`pending/${key}`, String(Date.now()));
    await fetch(new URL('/.netlify/functions/chant-background', request.url), { method: 'POST', body: JSON.stringify({ id }) });
  }
  return json({ status: 'generating' }, 202);
};

export const config: Config = { path: '/api/chant' };
