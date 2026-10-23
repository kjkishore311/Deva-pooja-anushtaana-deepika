import { PoojaMode, PaymentMethod, PaymentRecord } from '../types';

export const UPI_RECIPIENT_ID = 'kjkishore311@okhdfcbank';
export const UPI_RECIPIENT_NAME = 'Kishore - Sri Deva Pooja Seva';

export const TIER_PRICING: Record<PoojaMode, number> = {
  '10min': 0,
  '30min': 150,
  'full': 350,
};

// Contributions above this amount also unlock the Practical Sessions videos.
export const PRACTICAL_SESSIONS_MIN_AMOUNT = 500;

const STORAGE_KEY_TIERS = 'pooja_unlocked_tiers';
const STORAGE_KEY_RECORDS = 'pooja_payment_records';

export class PaymentService {
  static getUnlockedTiers(): PoojaMode[] {
    if (typeof window === 'undefined') return ['10min'];
    try {
      const stored = localStorage.getItem(STORAGE_KEY_TIERS);
      if (stored) {
        const parsed = JSON.parse(stored) as PoojaMode[];
        if (Array.isArray(parsed) && !parsed.includes('10min')) {
          parsed.push('10min');
        }
        return parsed;
      }
    } catch {
      // noop
    }
    return ['10min'];
  }

  static isTierUnlocked(tier: PoojaMode): boolean {
    if (tier === '10min') return true;
    const unlocked = this.getUnlockedTiers();
    if (unlocked.includes('full')) return true; // Full unlocks everything
    return unlocked.includes(tier);
  }

  static hasPracticalSessionsAccess(): boolean {
    return this.getPaymentRecords().some((record) => record.amount > PRACTICAL_SESSIONS_MIN_AMOUNT);
  }

  static unlockTier(
    tier: PoojaMode,
    paymentDetails: {
      amount: number;
      paymentMethod: PaymentMethod;
      transactionRef?: string;
    }
  ): PaymentRecord {
    const current = this.getUnlockedTiers();
    const updated = Array.from(new Set([...current, tier]));
    if (tier === 'full') {
      updated.push('30min'); // Full version unlocks 30min as well
    }

    try {
      localStorage.setItem(STORAGE_KEY_TIERS, JSON.stringify(updated));
    } catch {
      // noop
    }

    const ref =
      paymentDetails.transactionRef ||
      'TXN_' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();

    const record: PaymentRecord = {
      tier,
      amount: paymentDetails.amount,
      paymentMethod: paymentDetails.paymentMethod,
      transactionRef: ref,
      date: new Date().toISOString(),
      upiId: UPI_RECIPIENT_ID,
    };

    try {
      const records = this.getPaymentRecords();
      records.push(record);
      localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(records));
    } catch {
      // noop
    }

    return record;
  }

  static getPaymentRecords(): PaymentRecord[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY_RECORDS);
      if (raw) return JSON.parse(raw);
    } catch {
      // noop
    }
    return [];
  }

  static generateUpiUrl(tier: PoojaMode, amount: number): string {
    const note = tier === '30min' ? '30 Min Deva Pooja Access' : 'Complete Tantrasara Pooja Access';
    return `upi://pay?pa=${encodeURIComponent(UPI_RECIPIENT_ID)}&pn=${encodeURIComponent(
      UPI_RECIPIENT_NAME
    )}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
  }

  static generateSandhyavandaneUpiUrl(): string {
    const parameters = new URLSearchParams({
      pa: UPI_RECIPIENT_ID,
      pn: UPI_RECIPIENT_NAME,
      am: '100',
      cu: 'INR',
      tn: 'Rigveda Trikala Sandhyavandane Audio',
    });
    return `upi://pay?${parameters.toString()}`;
  }
}
