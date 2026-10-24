import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { Language, PoojaMode, PaymentMethod, PaymentRecord } from '../types';
import {
  UPI_RECIPIENT_ID,
  UPI_RECIPIENT_NAME,
  TIER_PRICING,
  PRACTICAL_SESSIONS_MIN_AMOUNT,
  PaymentService,
} from '../services/paymentService';
import {
  X,
  CheckCircle2,
  Copy,
  CreditCard,
  QrCode,
  Building2,
  Sparkles,
  ShieldCheck,
  Flame,
  ArrowRight,
  Receipt,
  Download,
  ArrowLeft,
  Youtube,
} from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  tier: PoojaMode;
  lang: Language;
  onClose: () => void;
  onSuccess: (tier: PoojaMode) => void;
  initialAmount?: number;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  tier,
  lang,
  onClose,
  onSuccess,
  initialAmount,
}) => {
  if (!isOpen) return null;

  const minPrice = TIER_PRICING[tier] || 150;
  const [amount, setAmount] = useState<number>(Math.max(minPrice, initialAmount ?? minPrice));
  const practicalUnlockAmount = PRACTICAL_SESSIONS_MIN_AMOUNT + 1;
  const unlocksPracticalSessions = amount > PRACTICAL_SESSIONS_MIN_AMOUNT;
  const [activeTab, setActiveTab] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [copied, setCopied] = useState(false);
  const [txnRef, setTxnRef] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [successRecord, setSuccessRecord] = useState<PaymentRecord | null>(null);

  // Card form state
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Netbanking state
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');

  const tierTitleKn =
    tier === '30min'
      ? '೩೦ ನಿಮಿಷ ದೈನಂದಿನ ಪೂಜಾ ಸಂಕಲ್ಪ & ಮಾಸ್ಟರ್ ವೀಡಿಯೋ'
      : 'ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರ ಸಂಗ್ರಹ ಪದ್ಧತಿ';

  const tierTitleEn =
    tier === '30min'
      ? '30-Min Daily Pooja & Sudha Pandita Master Videos'
      : 'Complete Tantrasara Sangraha Paddhati';

  const tierDescKn =
    tier === '30min'
      ? 'ಸುಧಾ ಪಂಡಿತ ಪೂಜ್ಯ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿಯವರ ೨ ಲೈವ್ ವೀಡಿಯೋಗಳು & ಪ್ರತಿಯೊಂದು ಹಂತಕ್ಕೂ ಪೂಜ್ಯರ ಅಧಿಕೃತ ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ'
      : 'ಮಧ್ವಾಚಾರ್ಯರ ತಂತ್ರಸಾರ ಮಂತ್ರಗಳು, ವಿಧಿ-ವಿಧಾನಗಳು, ಋಷಿ-ನ್ಯಾಸ, ಸೂಕ್ತಗಳು ಹಾಗೂ ಆಚಾರ್ಯರ ಪೂರ್ಣ ಶ್ರವಣ';

  const tierDescEn =
    tier === '30min'
      ? 'Unlock 2 Master Videos by Sudha Pandita Shri Venugopalacharya Joshi + Authentic Priest Voice guidance for every step'
      : 'Complete Tantrasara Vedic Mantras, Nyasas, Purusha & Sri Suktas, and in-depth Priest Recitation';

  const quickAmounts =
    tier === '30min'
      ? [150, 201, 250, 300, 501]
      : [350, 501, 750, 1000];

  const upiUrl = PaymentService.generateUpiUrl(tier, amount);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(UPI_RECIPIENT_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCompletePayment = (method: PaymentMethod, customRef?: string) => {
    if (amount < minPrice) {
      alert(
        lang === 'kn'
          ? `ಕನಿಷ್ಠ ದಕ್ಷಿಣೆ ₹${minPrice} ಇರಬೇಕು.`
          : `Minimum amount must be at least ₹${minPrice}.`
      );
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const record = PaymentService.unlockTier(tier, {
        amount,
        paymentMethod: method,
        transactionRef: customRef || txnRef,
      });

      setIsProcessing(false);
      setSuccessRecord(record);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffd700', '#ff9933', '#ffffff', '#e11d48'],
        });
      } catch {
        // noop
      }
    }, 1200);
  };

  const handleConfirmUpiBankPayment = () => {
    if (amount < minPrice) {
      alert(
        lang === 'kn'
          ? `ಕನಿಷ್ಠ ದಕ್ಷಿಣೆ ₹${minPrice} ಇರಬೇಕು.`
          : `Minimum amount must be at least ₹${minPrice}.`
      );
      return;
    }

    setIsProcessing(true);

    // Automatic bank confirmation without requiring manual UPI transaction number
    setTimeout(() => {
      const autoBankTxnRef = `UPI-HDFC-${Date.now().toString().slice(-8)}`;
      const record = PaymentService.unlockTier(tier, {
        amount,
        paymentMethod: 'upi_qr',
        transactionRef: autoBankTxnRef,
      });

      setIsProcessing(false);
      setSuccessRecord(record);

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ffd700', '#ff9933', '#ffffff', '#10b981'],
        });
      } catch {
        // noop
      }
    }, 1100);
  };

  // The parent closes the modal and opens the unlocked pooja; calling onClose here
  // would send the user back to the main page instead.
  const handleFinishAndOpen = () => {
    onSuccess(tier);
  };

  // Once payment is confirmed, dismissing the modal still opens the unlocked pooja.
  const handleDismiss = successRecord ? handleFinishAndOpen : onClose;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[94vh] bg-[#1f0707] border border-[#ffd700]/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.95)] text-[#fef3c7] flex flex-col overflow-hidden my-auto">
        {/* Sticky Modal Header with Prominently Visible Back Button at the Top */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-[#3d1111] via-[#250a0a] to-[#3d1111] border-b border-[#ffd700]/30 px-3 sm:px-5 py-3 flex items-center justify-between gap-2 shadow-lg backdrop-blur-md">
          {/* Prominent Golden Top Back Button */}
          <button
            id="btn-payment-modal-top-back"
            onClick={handleDismiss}
            className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa44] hover:to-[#ffe055] text-[#1a0606] font-bold text-xs sm:text-sm font-sans flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,153,51,0.5)] border border-[#ffd700] transition-all active:scale-95 shrink-0"
            title={lang === 'kn' ? 'ಹಿಂದಕ್ಕೆ ಹೋಗಿ (Back to Main Menu)' : 'Back to Main Menu'}
          >
            <ArrowLeft className="w-4 h-4 text-[#1a0606] stroke-[2.5]" />
            <span className="font-bold tracking-wide">
              {lang === 'kn' ? '← ಹಿಂದಕ್ಕೆ' : '← Back'}
            </span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 text-center flex-1 justify-center min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#ff9933]/20 border border-[#ff9933]/50 flex items-center justify-center text-[#ff9933] shadow-[0_0_12px_rgba(255,153,51,0.3)] shrink-0">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
            </div>
            <div className="text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="font-serif font-bold text-xs sm:text-base text-[#ffd700] truncate">
                  {lang === 'kn' ? 'ದೇವಪೂಜಾ ದಕ್ಷಿಣಾ ಗೇಟ್‌ವೇ' : 'Devapooja Seva Gateway'}
                </h2>
                <span className="text-[10px] font-sans font-bold bg-[#ff9933] text-[#1a0606] px-1.5 py-0.2 rounded-full shrink-0">
                  ₹{minPrice}+
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#fef3c7]/70 font-sans truncate hidden sm:block">
                {lang === 'kn'
                  ? 'ಶಾಸ್ತ್ರೋಕ್ತ ನಿತ್ಯ ಪೂಜೆ ಹಾಗೂ ಪುರೋಹಿತ ಧ್ವನಿ ಸೌಲಭ್ಯ'
                  : 'Unlock authentic Shastric Pooja & Male Priest Voice'}
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="p-2 rounded-xl bg-[#250a0a] hover:bg-[#3d1111] text-[#fef3c7]/70 hover:text-[#ffd700] border border-[#ffd700]/20 transition-all shrink-0"
            title={lang === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content with Smooth Scrolling */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 no-scrollbar">
          {successRecord ? (
            /* Success Receipt View */
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-[#ffd700]">
                  {lang === 'kn' ? 'ಸೇವಾ ದಕ್ಷಿಣೆ ಸಮರ್ಪಣೆ ಯಶಸ್ವಿಯಾಗಿದೆ!' : 'Payment & Seva Confirmed!'}
                </h3>
                <p className="text-xs sm:text-sm text-[#fef3c7]/80 font-sans mt-1">
                  {lang === 'kn'
                    ? 'ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಪಾವತಿಯು ಯಶಸ್ವಿಯಾಗಿ ದಾಖಲಾಗಿದ್ದು, ಪೂಜಾ ಹಂತಗಳು ಸಕ್ರಿಯಗೊಂಡಿವೆ.'
                    : 'Your seva dakshina has been recorded successfully. Complete pooja steps are now fully unlocked!'}
                </p>
              </div>

              {successRecord.amount > PRACTICAL_SESSIONS_MIN_AMOUNT && (
                <div className="max-w-md mx-auto flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-left text-xs text-emerald-200">
                  <Youtube className="w-5 h-5 shrink-0 text-red-400" />
                  <span>
                    {lang === 'kn'
                      ? 'ವಿಶೇಷ ಸೌಲಭ್ಯ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ: ಪ್ರಾಯೋಗಿಕ ತರಗತಿಗಳ ವೀಡಿಯೊಗಳು ಪೂಜಾ ಹಂತಗಳ ಕೊನೆಯಲ್ಲಿ ಲಭ್ಯ.'
                      : 'Special feature unlocked: the Practical Sessions videos are now available at the end of the pooja steps.'}
                  </span>
                </div>
              )}

              {/* Receipt Card */}
              <div className="bg-[#140404] border border-[#ffd700]/30 rounded-2xl p-4 text-left font-sans space-y-2.5 max-w-md mx-auto text-xs">
                <div className="flex items-center justify-between border-b border-[#ffd700]/15 pb-2 text-[#ff9933] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Receipt className="w-4 h-4" />
                    {lang === 'kn' ? 'ದೇವಪೂಜಾ ದಕ್ಷಿಣಾ ರಸೀದಿ' : 'Official Pooja Receipt'}
                  </span>
                  <span className="text-emerald-400 font-mono">PAID / ಸಕ್ರಿಯ</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#ffd700]/10">
                  <span className="text-[#fef3c7]/70">{lang === 'kn' ? 'ಸೇವೆ / ಪದ್ಧತಿ:' : 'Seva Tier:'}</span>
                  <span className="font-bold text-[#ffd700]">{lang === 'kn' ? tierTitleKn : tierTitleEn}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#ffd700]/10">
                  <span className="text-[#fef3c7]/70">{lang === 'kn' ? 'ಸಮರ್ಪಿಸಿದ ಮೊತ್ತ:' : 'Amount Paid:'}</span>
                  <span className="font-bold text-lg text-emerald-400">₹{successRecord.amount}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#ffd700]/10">
                  <span className="text-[#fef3c7]/70">{lang === 'kn' ? 'ಸ್ವೀಕೃತಿ UPI ID:' : 'Beneficiary UPI:'}</span>
                  <span className="font-mono text-[#ff9933]">{successRecord.upiId}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#ffd700]/10">
                  <span className="text-[#fef3c7]/70">{lang === 'kn' ? 'ರೆಫರೆನ್ಸ್ ಸಂಖ್ಯೆ:' : 'Ref / Txn ID:'}</span>
                  <span className="font-mono text-[#fef3c7]">{successRecord.transactionRef}</span>
                </div>

                <div className="flex justify-between pt-1">
                  <span className="text-[#fef3c7]/70">{lang === 'kn' ? 'ದಿನಾಂಕ:' : 'Date:'}</span>
                  <span className="text-[#fef3c7]/80">{new Date(successRecord.date).toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleFinishAndOpen}
                  className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] hover:to-[#ffe033] text-[#1a0606] font-bold font-sans text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,153,51,0.4)] transition-all active:scale-95"
                >
                  <span>{lang === 'kn' ? 'ಪೂಜೆ ಆರಂಭಿಸಿ' : 'Open Pooja Steps Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Payment Workflow */
            <>
              {/* Selected Plan Details */}
              <div className="bg-[#290c0c] border border-[#ffd700]/25 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#ff9933] bg-[#ff9933]/15 px-2 py-0.5 rounded-md border border-[#ff9933]/30">
                    {lang === 'kn' ? 'ಆಯ್ಕೆ ಮಾಡಿದ ಆವೃತ್ತಿ' : 'Selected Tier'}
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#ffd700] mt-1">
                    {lang === 'kn' ? tierTitleKn : tierTitleEn}
                  </h3>
                  <p className="text-xs text-[#fef3c7]/75 font-sans mt-0.5">
                    {lang === 'kn' ? tierDescKn : tierDescEn}
                  </p>
                </div>

                <div className="bg-[#1a0606] border border-[#ffd700]/30 rounded-xl px-4 py-2 text-right self-stretch sm:self-auto flex sm:flex-col items-center sm:items-end justify-between">
                  <div className="text-[10px] text-[#fef3c7]/60 font-sans">
                    {lang === 'kn' ? 'ಕನಿಷ್ಠ ಮೊತ್ತ' : 'Minimum Required'}
                  </div>
                  <div className="text-xl font-bold font-mono text-[#ff9933]">
                    ₹{minPrice}
                  </div>
                </div>
              </div>

              {/* Promo: contributions above the threshold also unlock the Practical Sessions videos */}
              <button
                type="button"
                onClick={() => setAmount(Math.max(amount, practicalUnlockAmount))}
                className={`w-full flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                  unlocksPracticalSessions
                    ? 'border-emerald-400/50 bg-emerald-500/10'
                    : 'border-dashed border-[#ffd700]/50 bg-[#ffd700]/5 hover:bg-[#ffd700]/10'
                }`}
              >
                <Youtube className="w-6 h-6 shrink-0 text-red-400 mt-0.5" />
                <span className="space-y-0.5">
                  <span className="block text-xs font-bold font-sans text-[#ffd700]">
                    {unlocksPracticalSessions
                      ? (lang === 'kn' ? '✓ ಪ್ರಾಯೋಗಿಕ ತರಗತಿಗಳು ಸೇರಿವೆ' : '✓ Practical Sessions included')
                      : (lang === 'kn'
                          ? `ವಿಶೇಷ ಕೊಡುಗೆ: ₹${PRACTICAL_SESSIONS_MIN_AMOUNT} ಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮರ್ಪಿಸಿ, ಪ್ರಾಯೋಗಿಕ ತರಗತಿಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ`
                          : `Special offer: contribute more than ₹${PRACTICAL_SESSIONS_MIN_AMOUNT} to unlock Practical Sessions`)}
                  </span>
                  <span className="block text-[11px] font-sans text-[#fef3c7]/70">
                    {lang === 'kn'
                      ? '೩ ಪ್ರಾಯೋಗಿಕ YouTube ವೀಡಿಯೊಗಳು — ಸಂಕ್ಷಿಪ್ತ (೩೫ ನಿ), ವಿಸ್ತೃತ (೫೬ ನಿ) ಹಾಗೂ ಗಾಯನ (೬೭ ನಿ) — ನೋಡಿ ಪೂಜೆಯನ್ನು ಸುಲಭವಾಗಿ ಅನುಸರಿಸಿ.'
                      : '3 YouTube videos of the pooja being performed — concise (35 min), detailed (56 min) and sung (67 min) — to follow along easily.'}
                    {!unlocksPracticalSessions && (
                      <span className="ml-1 font-bold text-[#ff9933]">
                        {lang === 'kn' ? `₹${practicalUnlockAmount} ಆಯ್ಕೆ ಮಾಡಿ →` : `Choose ₹${practicalUnlockAmount} →`}
                      </span>
                    )}
                  </span>
                </span>
              </button>

              {/* Amount Selection & Custom Dakshina */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-semibold text-[#ffd700] flex items-center justify-between">
                  <span>{lang === 'kn' ? 'ದಕ್ಷಿಣಾ ಮೊತ್ತ (ರೂಪಾಯಿಗಳಲ್ಲಿ):' : 'Dakshina Amount (INR):'}</span>
                  <span className="text-[11px] text-[#ff9933]">
                    {lang === 'kn' ? `ಕನಿಷ್ಠ ₹${minPrice}` : `Min ₹${minPrice}`}
                  </span>
                </label>

                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {quickAmounts.map((q) => (
                    <button
                      key={q}
                      onClick={() => setAmount(q)}
                      className={`py-2 rounded-xl text-xs font-bold font-sans border transition-all ${
                        amount === q
                          ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] shadow-[0_0_12px_rgba(255,153,51,0.3)] scale-[1.02]'
                          : 'bg-[#250a0a] hover:bg-[#3d1111] text-[#fef3c7] border-[#ffd700]/20'
                      }`}
                    >
                      ₹{q}
                    </button>
                  ))}
                </div>

                {tier === '30min' && (
                  <p className="text-[11px] text-[#ffd700]/80 font-sans italic bg-[#250a0a] p-2 rounded-xl border border-[#ffd700]/15">
                    {lang === 'kn'
                      ? 'ಆಯ್ಕೆ: ಕನಿಷ್ಠ ₹150 ಅಥವಾ ₹200 ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಇಷ್ಟಾನುಸಾರ ಸೇವಾ ದಕ್ಷಿಣೆ (ಉದಾ: ₹201, ₹250, ₹300, ₹501) ಪಾವತಿಸಿ ಆಚಾರ್ಯರ ೨ ಲೈವ್ ವೀಡಿಯೋ & ಪ್ರತಿಯೊಂದು ಹಂತದ ಧ್ವನಿ ಶ್ರವಣ ಪಡೆಯಿರಿ.'
                      : 'Option: Pay base ₹150 or any voluntary amount > ₹200 (e.g. ₹201, ₹250, ₹300, ₹501) to unlock Sudha Pandita’s 2 Master Videos & voice for every step.'}
                  </p>
                )}

                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-[#fef3c7]/70 font-sans">
                    {lang === 'kn' ? 'ಅಥವಾ ಇಷ್ಟಾನುಸಾರ ಮೊತ್ತ:' : 'Or custom amount:'}
                  </span>
                  <div className="relative flex-1 max-w-[160px]">
                    <span className="absolute left-3 top-2 text-xs text-[#ff9933] font-bold">₹</span>
                    <input
                      type="number"
                      min={minPrice}
                      value={amount}
                      onChange={(e) => setAmount(Math.max(minPrice, Number(e.target.value) || minPrice))}
                      className="w-full pl-7 pr-3 py-1.5 rounded-xl bg-[#140404] border border-[#ffd700]/30 text-xs font-bold font-mono text-[#ffd700] focus:border-[#ff9933] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Mode Tabs (UPI / Cards / Netbanking) */}
              <div className="space-y-3">
                <div className="flex border-b border-[#ffd700]/15 gap-2">
                  <button
                    onClick={() => setActiveTab('upi')}
                    className={`pb-2 text-xs font-sans font-bold flex items-center gap-1.5 border-b-2 transition-all px-2 ${
                      activeTab === 'upi'
                        ? 'border-[#ff9933] text-[#ff9933]'
                        : 'border-transparent text-[#fef3c7]/60 hover:text-[#fef3c7]'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>{lang === 'kn' ? 'Google Pay / UPI' : 'Google Pay & UPI'}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('card')}
                    className={`pb-2 text-xs font-sans font-bold flex items-center gap-1.5 border-b-2 transition-all px-2 ${
                      activeTab === 'card'
                        ? 'border-[#ff9933] text-[#ff9933]'
                        : 'border-transparent text-[#fef3c7]/60 hover:text-[#fef3c7]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>{lang === 'kn' ? 'ಕ್ರೆಡಿಟ್ / ಡೆಬಿಟ್ ಕಾರ್ಡ್' : 'Credit / Debit Card'}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('netbanking')}
                    className={`pb-2 text-xs font-sans font-bold flex items-center gap-1.5 border-b-2 transition-all px-2 ${
                      activeTab === 'netbanking'
                        ? 'border-[#ff9933] text-[#ff9933]'
                        : 'border-transparent text-[#fef3c7]/60 hover:text-[#fef3c7]'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>{lang === 'kn' ? 'ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್' : 'Net Banking'}</span>
                  </button>
                </div>

                {/* Tab 1: UPI / Google Pay */}
                {activeTab === 'upi' && (
                  <div className="bg-[#140404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      {/* Live Dynamic QR Code */}
                      <div className="bg-white p-3 rounded-2xl shadow-xl border-2 border-[#ffd700] flex flex-col items-center shrink-0">
                        <QRCodeSVG
                          value={upiUrl}
                          size={150}
                          level="M"
                          includeMargin={false}
                        />
                        <div className="text-[10px] text-gray-700 font-sans font-bold mt-2 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#ff9933]" />
                          <span>Scan with any UPI App</span>
                        </div>
                      </div>

                      {/* UPI Info & Copy */}
                      <div className="space-y-3 flex-1 text-left w-full">
                        <div>
                          <div className="text-[11px] text-[#fef3c7]/60 font-sans">
                            {lang === 'kn' ? 'ಅಧಿಕೃತ UPI ID:' : 'Official UPI ID:'}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="bg-[#250a0a] border border-[#ffd700]/30 rounded-xl px-3 py-1.5 font-mono text-xs sm:text-sm text-[#ffd700] font-bold select-all flex-1 truncate">
                              {UPI_RECIPIENT_ID}
                            </div>
                            <button
                              onClick={handleCopyUpi}
                              title={lang === 'kn' ? 'ಕಾಪಿ ಮಾಡಿ' : 'Copy UPI'}
                              className="px-3 py-2 rounded-xl bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                            >
                              {copied ? <CheckCircle2 className="w-4 h-4 text-green-900" /> : <Copy className="w-4 h-4" />}
                              <span>{copied ? (lang === 'kn' ? 'ಕಾಪಿ ಆಗಿದೆ!' : 'Copied!') : (lang === 'kn' ? 'ಕಾಪಿ' : 'Copy')}</span>
                            </button>
                          </div>
                        </div>

                        <div className="text-xs text-[#fef3c7]/80 font-sans space-y-1">
                          <p>
                            {lang === 'kn'
                              ? '• Google Pay, PhonePe, Paytm, ಅಥವಾ ಯಾವುದೇ ಬ್ಯಾಂಕಿಂಗ್ ಆ್ಯಪ್‌ನಲ್ಲಿ QR ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ UPI ID ಗೆ ಪಾವತಿಸಿ.'
                              : '• Scan this QR code or send ₹' + amount + ' directly to ' + UPI_RECIPIENT_ID + ' via Google Pay, PhonePe, Paytm or BHIM.'}
                          </p>
                        </div>

                        {/* Direct Mobile UPI Intent Button */}
                        <div className="pt-1 flex flex-wrap gap-2">
                          <a
                            href={upiUrl}
                            className="px-4 py-2 rounded-xl bg-[#250a0a] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 text-xs font-bold font-sans flex items-center gap-1.5 transition-all"
                          >
                            <span>{lang === 'kn' ? '📱 UPI ಆ್ಯಪ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ' : '📱 Pay via UPI App (GPay/PhonePe)'}</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* No UPI transaction number required - Instant bank receipt confirmation */}
                    <div className="border-t border-[#ffd700]/15 pt-3 space-y-3">
                      <div className="bg-[#240a0a] border border-emerald-500/40 rounded-xl p-3 flex items-start gap-2.5 text-xs text-[#fef3c7]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-emerald-400">
                            {lang === 'kn' ? 'UPI ರೆಫರೆನ್ಸ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಬೇಕಾಗಿಲ್ಲ' : 'No UPI Transaction / UTR Number Required'}
                          </p>
                          <p className="text-[11px] text-[#fef3c7]/75 mt-0.5">
                            {lang === 'kn'
                              ? 'ನೀವು GPay / PhonePe / Paytm ನಲ್ಲಿ ಪಾವತಿಸಿದ ನಂತರ, ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಸ್ವೀಕೃತಿ ದೃಢಪಟ್ಟ ತಕ್ಷಣ ಪೂಜಾ ಹಂತಗಳು ತಕ್ಷಣವೇ ಸಕ್ರಿಯಗೊಳ್ಳುತ್ತವೆ.'
                              : 'Once payment is sent via Google Pay, PhonePe or any UPI app, click below. As soon as confirmed at the bank, it immediately unlocks your pooja rituals.'}
                          </p>
                        </div>
                      </div>

                      <button
                        disabled={isProcessing}
                        onClick={handleConfirmUpiBankPayment}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#ff9933] via-[#ffaa44] to-[#ffd700] hover:from-[#ffaa44] hover:to-[#ffe055] text-[#1a0606] font-bold font-sans text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,153,51,0.4)] transition-all active:scale-95 disabled:opacity-60"
                      >
                        {isProcessing ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-[#1a0606] border-t-transparent rounded-full animate-spin" />
                            <span>
                              {lang === 'kn'
                                ? 'HDFC ಬ್ಯಾಂಕ್ ಖಾತೆಯಲ್ಲಿ ರಶೀದಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...'
                                : 'Verifying bank receipt from kjkishore311@okhdfcbank...'}
                            </span>
                          </span>
                        ) : (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-emerald-950" />
                            <span>
                              {lang === 'kn'
                                ? 'ನಾನು UPI ಮೂಲಕ ಪಾವತಿಸಿದ್ದೇನೆ — ದೃಢೀಕರಿಸಿ & ಪೂಜೆ ಆರಂಭಿಸಿ'
                                : 'I Have Paid via UPI — Confirm & Open Pooja Steps'}
                            </span>
                            <ArrowRight className="w-4 h-4 text-emerald-950" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 2: Credit / Debit Card */}
                {activeTab === 'card' && (
                  <div className="bg-[#140404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#fef3c7]/70 border-b border-[#ffd700]/10 pb-2">
                      <div className="flex items-center gap-1.5 text-[#ff9933] font-bold">
                        <CreditCard className="w-4 h-4" />
                        <span>{lang === 'kn' ? 'ಆನ್‌ಲೈನ್ ಕಾರ್ಡ್ ಗೇಟ್‌ವೇ' : 'Card Gateway (Visa / Master / RuPay)'}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>256-bit Encrypted</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-[11px] font-sans text-[#fef3c7]/70 block mb-1">
                          {lang === 'kn' ? 'ಕಾರ್ಡ್ ನಂಬರ್:' : 'Card Number:'}
                        </label>
                        <input
                          type="text"
                          maxLength={19}
                          placeholder="4532 •••• •••• 8890"
                          value={cardNumber}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 16);
                            const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
                            setCardNumber(formatted);
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-[#250a0a] border border-[#ffd700]/30 text-xs font-mono text-[#ffd700] outline-none focus:border-[#ff9933]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-sans text-[#fef3c7]/70 block mb-1">
                            {lang === 'kn' ? 'ಕಾರ್ಡ್ ಮೇಲಿನ ಹೆಸರು:' : 'Cardholder Name:'}
                          </label>
                          <input
                            type="text"
                            placeholder="Kishore Kumar"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-[#250a0a] border border-[#ffd700]/30 text-xs font-sans text-[#ffd700] outline-none focus:border-[#ff9933]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[11px] font-sans text-[#fef3c7]/70 block mb-1">
                              {lang === 'kn' ? 'ವ್ಯಾಲಿಡಿಟಿ:' : 'Expiry:'}
                            </label>
                            <input
                              type="text"
                              maxLength={5}
                              placeholder="MM/YY"
                              value={cardExpiry}
                              onChange={(e) => {
                                let val = e.target.value.replace(/\D/g, '').slice(0, 4);
                                if (val.length >= 3) val = `${val.slice(0, 2)}/${val.slice(2)}`;
                                setCardExpiry(val);
                              }}
                              className="w-full px-3 py-2 rounded-xl bg-[#250a0a] border border-[#ffd700]/30 text-xs font-mono text-[#ffd700] text-center outline-none focus:border-[#ff9933]"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-sans text-[#fef3c7]/70 block mb-1">
                              {lang === 'kn' ? 'ಸಿವಿವಿ:' : 'CVV:'}
                            </label>
                            <input
                              type="password"
                              maxLength={3}
                              placeholder="•••"
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                              className="w-full px-3 py-2 rounded-xl bg-[#250a0a] border border-[#ffd700]/30 text-xs font-mono text-[#ffd700] text-center outline-none focus:border-[#ff9933]"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        disabled={isProcessing}
                        onClick={() => handleCompletePayment('card')}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] text-[#1a0606] font-bold font-sans text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <span>{lang === 'kn' ? 'ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ...' : 'Processing 3D-Secure...'}</span>
                        ) : (
                          <>
                            <ShieldCheck className="w-4 h-4" />
                            <span>{lang === 'kn' ? `ಸುರಕ್ಷಿತವಾಗಿ ₹${amount} ಪಾವತಿಸಿ` : `Pay ₹${amount} Securely & Unlock`}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 3: Net Banking */}
                {activeTab === 'netbanking' && (
                  <div className="bg-[#140404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-4">
                    <div className="text-xs text-[#fef3c7]/80 font-sans">
                      {lang === 'kn'
                        ? 'ನಿಮ್ಮ ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ಖಾತೆಯಿಂದ ನೇರವಾಗಿ ಸೇವಾ ದಕ್ಷಿಣೆಯನ್ನು ಪಾವತಿಸಿ:'
                        : 'Select your preferred bank to proceed with direct Net Banking:'}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'HDFC Bank',
                        'State Bank of India',
                        'ICICI Bank',
                        'Axis Bank',
                        'Canara Bank',
                        'Kotak Mahindra Bank',
                        'Punjab National Bank',
                        'Bank of Baroda',
                      ].map((bank) => (
                        <button
                          key={bank}
                          onClick={() => setSelectedBank(bank)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-sans transition-all flex items-center gap-2 ${
                            selectedBank === bank
                              ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-md'
                              : 'bg-[#250a0a] hover:bg-[#3d1111] text-[#fef3c7]/90 border-[#ffd700]/20'
                          }`}
                        >
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{bank}</span>
                        </button>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        disabled={isProcessing}
                        onClick={() => handleCompletePayment('netbanking')}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] text-[#1a0606] font-bold font-sans text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <span>{lang === 'kn' ? 'ಬ್ಯಾಂಕ್ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ...' : 'Connecting to Bank...'}</span>
                        ) : (
                          <>
                            <Building2 className="w-4 h-4" />
                            <span>
                              {lang === 'kn'
                                ? `${selectedBank} ಮೂಲಕ ₹${amount} ಪಾವತಿಸಿ`
                                : `Authorize ₹${amount} via ${selectedBank}`}
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Back to Main Menu Action Button before making payment */}
              <div className="pt-2 border-t border-[#ffd700]/15 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#250a0a] hover:bg-[#380e0e] text-[#fef3c7]/80 hover:text-[#ffd700] border border-[#ffd700]/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4 text-[#ff9933]" />
                  <span>
                    {lang === 'kn'
                      ? '← ಪಾವತಿಯಿಲ್ಲದೆ ಮುಖ್ಯ ಮೆನುಗೆ ಹಿಂತಿರುಗಿ'
                      : '← Back to Main Menu (Exit without paying)'}
                  </span>
                </button>
                <div className="text-[11px] text-[#fef3c7]/60 font-sans hidden sm:block">
                  {lang === 'kn' ? 'ಯಾವುದೇ ಪಾವತಿ ಕಡಿತವಾಗುವುದಿಲ್ಲ' : 'No payment will be deducted'}
                </div>
              </div>

              {/* Direct Support & Clarifications */}
              <div className="bg-[#140404] border border-[#ffd700]/25 rounded-2xl p-3 sm:p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans font-bold text-[#ff9933]">
                    {lang === 'kn' ? 'ಸಹಾಯ & ಸ್ಪಷ್ಟೀಕರಣ ಸಂಪರ್ಕ' : 'Support & Clarification Contact'}
                  </span>
                  <span className="text-[10px] text-[#ffd700]/70 font-sans">
                    {lang === 'kn' ? 'ನೇರ ಕರೆ / ವಾಟ್ಸಾಪ್' : 'Direct Call / WhatsApp'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs font-sans">
                  <div className="bg-[#250a0a] p-2.5 rounded-xl border border-[#ffd700]/15">
                    <p className="text-[11px] text-[#fef3c7]/60">{lang === 'kn' ? 'ಆ್ಯಪ್ ನೆರವು & ಸ್ಪಷ್ಟೀಕರಣ:' : 'App Assistance & Clarifications:'}</p>
                    <p className="font-bold text-[#fef3c7] mt-0.5">Kishore: <a href="tel:+917259458890" className="text-[#ffd700] hover:underline">+91 7259458890</a></p>
                  </div>
                </div>
              </div>

              {/* Security & Shastric Assurance Note */}
              <div className="flex items-center gap-2 text-[11px] text-[#ffd700]/70 bg-[#1a0606] px-4 py-2.5 rounded-xl border border-[#ffd700]/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {lang === 'kn'
                    ? 'ಸಮರ್ಪಿಸಿದ ದಕ್ಷಿಣೆಯು ನೇರವಾಗಿ ಶ್ರೀ ದೇವಪೂಜಾ ನಿರ್ವಹಣೆಗೆ ವಿನಿಯೋಗವಾಗುತ್ತದೆ. (UPI: kjkishore311@okhdfcbank)'
                    : 'Your pious dakshina directly supports sacred daily pooja service. Beneficiary UPI: kjkishore311@okhdfcbank'}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
