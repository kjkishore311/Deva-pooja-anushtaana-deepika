CREATE TYPE "sandhyavandane_payment_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TABLE "sandhyavandane_payments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" text NOT NULL UNIQUE,
	"email" text NOT NULL,
	"transaction_ref" text NOT NULL UNIQUE,
	"amount" integer DEFAULT 100 NOT NULL,
	"status" "sandhyavandane_payment_status" DEFAULT 'pending'::"sandhyavandane_payment_status" NOT NULL,
	"review_note" text,
	"reviewed_by" text,
	"reviewed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
