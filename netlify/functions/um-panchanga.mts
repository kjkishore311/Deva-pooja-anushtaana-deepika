import type { Config } from '@netlify/functions';
import { parseOfficialPanchanga } from '../../src/services/panchangaSource';

export default async (request: Request) => {
  if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET' } });
  const source = 'https://uttaradimath.org/panchanga';
  try {
    const response = await fetch(source, { cache: 'no-store', signal: AbortSignal.timeout(8000), headers: { Accept: 'text/html' } });
    if (!response.ok) throw new Error('Source unavailable');
    const calendar = parseOfficialPanchanga(await response.text());
    return Response.json({ ...calendar, source, retrievedAt: new Date().toISOString() }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return Response.json({ error: 'The official Uttaradi Math calendar is temporarily unavailable. Please retry or open the official source.' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
};

export const config: Config = { path: '/api/um-panchanga' };
