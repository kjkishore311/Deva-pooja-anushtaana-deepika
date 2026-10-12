import { integer, pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const sandhyavandanePaymentStatus = pgEnum('sandhyavandane_payment_status', ['pending', 'approved', 'rejected']);

export const sandhyavandanePayments = pgTable('sandhyavandane_payments', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').notNull().unique(),
  email: text('email').notNull(),
  transactionRef: text('transaction_ref').notNull().unique(),
  amount: integer('amount').notNull().default(100),
  status: sandhyavandanePaymentStatus('status').notNull().default('pending'),
  reviewNote: text('review_note'),
  reviewedBy: text('reviewed_by'),
  reviewedAt: timestamp('reviewed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});
