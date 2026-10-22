import { findRecitation, generateRecording, priestVoiceStore, recordingKey } from '../priest-voice';

// Generates one priest recording with Gemini text-to-speech and saves it for every later visitor.
export default async (request: Request) => {
  const { id } = await request.json().catch(() => ({ id: '' }));
  const recitation = findRecitation(String(id));
  if (!recitation) return;
  const store = priestVoiceStore();
  const key = recordingKey(String(id), recitation);
  if (await store.getMetadata(key)) return;
  try {
    const wav = await generateRecording(recitation);
    await store.set(key, new Uint8Array(wav).buffer);
    await store.delete(`failed/${key}`);
  } catch (error) {
    console.error(`Priest voice generation failed for ${id}:`, error instanceof Error ? error.message : error);
    await store.set(`failed/${key}`, String(Date.now()));
  } finally {
    await store.delete(`pending/${key}`);
  }
};
