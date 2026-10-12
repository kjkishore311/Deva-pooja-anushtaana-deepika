import { getUser, verifyRequestOrigin } from '@netlify/identity';
import type { Config } from '@netlify/functions';
import { and, desc, eq } from 'drizzle-orm';
import { getDatabase } from '../../db/index';
import { sandhyavandanePayments } from '../../db/schema';
import { SANDHYAVANDANE_PRICE } from '../../src/data/sandhyavandaneData';

function json(body: unknown, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'private, no-store' } });
}

function isDuplicate(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  if ('code' in error && error.code === '23505') return true;
  return 'cause' in error && isDuplicate(error.cause);
}

export default async (request: Request) => {
  if (!['GET', 'POST', 'PATCH'].includes(request.method)) {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, POST, PATCH' } });
  }
  if (request.method !== 'GET') {
    try {
      verifyRequestOrigin(request);
    } catch {
      return json({ error: 'Requests must come from this website.' }, 403);
    }
  }

  const user = await getUser();
  if (!user?.email || !user.confirmedAt) return json({ error: 'Sign in with a confirmed email to continue.' }, 401);
  const isAdmin = user.roles?.includes('admin') === true;
  if (request.method === 'PATCH' && !isAdmin) return json({ error: 'Administrator access required.' }, 403);

  try {
    const database = getDatabase();
    if (request.method === 'GET') {
      const [payment] = await database.select().from(sandhyavandanePayments).where(eq(sandhyavandanePayments.userId, user.id));
      if (new URL(request.url).searchParams.get('admin') === 'true') {
        if (!isAdmin) return json({ error: 'Administrator access required.' }, 403);
        const queue = await database.select().from(sandhyavandanePayments)
          .where(eq(sandhyavandanePayments.status, 'pending')).orderBy(desc(sandhyavandanePayments.updatedAt)).limit(100);
        return json({ request: payment ?? null, isAdmin, queue });
      }
      return json({ request: payment ?? null, isAdmin });
    }

    if (request.headers.get('content-type')?.split(';')[0] !== 'application/json') {
      return json({ error: 'JSON required.' }, 415);
    }
    if (Number(request.headers.get('content-length')) > 4096) return json({ error: 'Request too large.' }, 413);
    let body: Record<string, unknown>;
    try {
      const raw = await request.text();
      if (raw.length > 4096) return json({ error: 'Request too large.' }, 413);
      body = JSON.parse(raw);
      if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid body');
    } catch {
      return json({ error: 'Invalid request.' }, 400);
    }

    if (request.method === 'POST') {
      const transactionRef = typeof body.transactionRef === 'string' ? body.transactionRef.trim() : '';
      if (!/^\d{12}$/.test(transactionRef)) return json({ error: 'Enter the 12-digit UPI transaction reference (UTR).' }, 400);
      const [existing] = await database.select().from(sandhyavandanePayments).where(eq(sandhyavandanePayments.userId, user.id));
      if (existing && existing.status !== 'rejected') {
        return json({ error: existing.status === 'approved' ? 'Your downloads are already approved.' : 'Your payment is already awaiting review.' }, 409);
      }
      const values = { userId: user.id, email: user.email, transactionRef, amount: SANDHYAVANDANE_PRICE };
      if (existing) {
        const [payment] = await database.update(sandhyavandanePayments)
          .set({ ...values, status: 'pending', reviewNote: null, reviewedBy: null, reviewedAt: null, updatedAt: new Date() })
          .where(and(eq(sandhyavandanePayments.id, existing.id), eq(sandhyavandanePayments.status, 'rejected'))).returning();
        if (!payment) return json({ error: 'This request changed. Refresh and try again.' }, 409);
        return json({ request: payment }, 201);
      }
      const [payment] = await database.insert(sandhyavandanePayments).values(values).returning();
      return json({ request: payment }, 201);
    }

    const id = typeof body.id === 'string' ? body.id : '';
    const status = body.status;
    const reviewNote = typeof body.reviewNote === 'string' ? body.reviewNote.trim() : '';
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) || !['approved', 'rejected'].includes(String(status)) || reviewNote.length > 500) {
      return json({ error: 'Invalid review.' }, 400);
    }
    if (status === 'rejected' && !reviewNote) return json({ error: 'Include a reason so the visitor can correct the payment request.' }, 400);
    const [payment] = await database.update(sandhyavandanePayments)
      .set({ status: status as 'approved' | 'rejected', reviewNote: reviewNote || null, reviewedBy: user.id, reviewedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(sandhyavandanePayments.id, id), eq(sandhyavandanePayments.status, 'pending'))).returning();
    if (!payment) return json({ error: 'This request is no longer pending. Refresh the queue.' }, 409);
    return json({ request: payment });
  } catch (error) {
    if (isDuplicate(error)) return json({ error: 'This transaction reference or account already has a payment request.' }, 409);
    return json({ error: 'Payment requests are temporarily unavailable. Please try again later.' }, 503);
  }
};

export const config: Config = { path: '/api/sandhyavandane-requests' };
