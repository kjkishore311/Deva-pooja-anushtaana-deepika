import { getUser } from '@netlify/identity';
import { getDeployStore } from '@netlify/blobs';
import type { Config } from '@netlify/functions';
import { and, eq } from 'drizzle-orm';
import { getDatabase } from '../../db/index';
import { sandhyavandanePayments } from '../../db/schema';
import { sandhyavandaneAudio } from '../../src/data/sandhyavandaneData';

function failure(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: { 'Cache-Control': 'private, no-store' } });
}

export default async (request: Request) => {
  if (request.method !== 'GET') return failure('Method not allowed.', 405);
  const track = sandhyavandaneAudio.find((item) => item.id === new URL(request.url).searchParams.get('part'));
  if (!track) return failure('Recording not found.', 404);
  const user = await getUser();
  if (!user?.email || !user.confirmedAt) return failure('Sign in to download.', 401);
  try {
    const [payment] = await getDatabase().select({ id: sandhyavandanePayments.id }).from(sandhyavandanePayments)
      .where(and(eq(sandhyavandanePayments.userId, user.id), eq(sandhyavandanePayments.status, 'approved'))).limit(1);
    if (!payment) return failure('Audio downloads are available only after manual payment approval.', 403);
    const stream = await getDeployStore().get(`sandhyavandane/${track.id}`, { type: 'stream' });
    if (!stream) return failure('This recording is temporarily unavailable. Please try again later.', 503);
    return new Response(stream, {
      headers: {
        'Content-Type': 'audio/mp4',
        'Content-Disposition': `attachment; filename="${track.filename}"`,
        'Cache-Control': 'private, no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return failure('Downloads are temporarily unavailable. Please try again later.', 503);
  }
};

export const config: Config = { path: '/api/sandhyavandane-download' };
