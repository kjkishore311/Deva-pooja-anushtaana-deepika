import React from 'react';
import { ExternalLink, Lock, PlayCircle, Sparkles, Youtube } from 'lucide-react';
import { Language } from '../types';
import { PRACTICAL_SESSIONS_MIN_AMOUNT } from '../services/paymentService';

interface PracticalSessionsSectionProps {
  lang: Language;
  isUnlocked: boolean;
  onRequestUnlock?: () => void;
}

const UNLOCK_AMOUNT = PRACTICAL_SESSIONS_MIN_AMOUNT + 1;

// YouTube recordings showing how the Deva Pooja Paddhati is performed, one per pace.
const PRACTICAL_SESSIONS = [
  {
    url: 'https://www.youtube.com/watch?v=dNfaFhNGfaY',
    titleEn: 'Deva Pooja Paddhati — Concise',
    titleKn: 'ದೇವಪೂಜಾ ಪದ್ಧತಿ — ಸಂಕ್ಷಿಪ್ತ',
    byline: 'SCT · musically chanted',
    durationEn: '35 min · 29 steps',
    durationKn: '೩೫ ನಿಮಿಷ · ೨೯ ಹಂತಗಳು',
    suitsEn: 'Best for the 10 & 30 min pooja',
    suitsKn: '೧೦ ಹಾಗೂ ೩೦ ನಿಮಿಷದ ಪೂಜೆಗೆ ಸೂಕ್ತ',
  },
  {
    url: 'https://www.youtube.com/watch?v=hTSDBlRFJkQ',
    titleEn: 'Deva Pooja Paddhati — Detailed',
    titleKn: 'ದೇವಪೂಜಾ ಪದ್ಧತಿ — ವಿಸ್ತೃತ',
    byline: 'Vid. Sriramavittala Achar · JnanaGamya Prasarana',
    durationEn: '56 min · 47 steps',
    durationKn: '೫೬ ನಿಮಿಷ · ೪೭ ಹಂತಗಳು',
    suitsEn: 'Best for the complete pooja',
    suitsKn: 'ಸಂಪೂರ್ಣ ಪೂಜೆಗೆ ಸೂಕ್ತ',
  },
  {
    url: 'https://www.youtube.com/watch?v=sxnnYn9Iu94',
    titleEn: 'Madhwa Sampradaya Devara Pooje — Sung',
    titleKn: 'ಮಾಧ್ವ ಸಂಪ್ರದಾಯ ದೇವರ ಪೂಜೆ — ಗಾಯನ',
    byline: 'Nithya Devatharchane · with bhajans & discourse',
    durationEn: '67 min · 38 steps',
    durationKn: '೬೭ ನಿಮಿಷ · ೩೮ ಹಂತಗಳು',
    suitsEn: 'Best for the complete pooja with bhajans',
    suitsKn: 'ಭಜನೆಯೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಪೂಜೆಗೆ ಸೂಕ್ತ',
  },
];

export const PracticalSessionsSection: React.FC<PracticalSessionsSectionProps> = ({
  lang,
  isUnlocked,
  onRequestUnlock,
}) => (
  <section
    id="practical-sessions"
    className="rounded-3xl border border-[#ffd700]/30 bg-gradient-to-br from-[#3d1111] via-[#250a0a] to-[#140404] p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] space-y-4"
  >
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-400/30 bg-red-500/10 text-red-400">
        <Youtube className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h2 className="font-serif text-lg font-bold text-[#ffb45c] sm:text-xl">
            {lang === 'kn' ? 'ಪ್ರಾಯೋಗಿಕ ತರಗತಿಗಳು — ದೇವಪೂಜೆ' : 'Practical Sessions — Deva Pooja'}
          </h2>
          <span className="inline-flex items-center gap-1 rounded-full border border-[#ffd700]/40 bg-[#ffd700]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#ffd700]">
            <Sparkles className="h-3 w-3" />
            {lang === 'kn' ? 'ವಿಶೇಷ ಸೌಲಭ್ಯ' : 'Special feature'}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-[#fef3c7]/70">
          {lang === 'kn'
            ? 'ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಅವಧಿಗೆ ತಕ್ಕಂತೆ ದೇವಪೂಜಾ ಪದ್ಧತಿಯನ್ನು ಸುಲಭವಾಗಿ ಮಾಡಲು, ಪೂಜೆಯನ್ನು ಪ್ರತ್ಯಕ್ಷವಾಗಿ ತೋರಿಸುವ ಈ ವೀಡಿಯೊಗಳನ್ನು ನೋಡಿ ಅನುಸರಿಸಿ.'
            : 'Watch the pooja being performed and follow along, so the Deva Pooja Paddhati is easy to do at whichever duration you choose.'}
        </p>
      </div>
    </div>

    <div className="grid gap-2 sm:grid-cols-3">
      {PRACTICAL_SESSIONS.map((session) => {
        const details = (
          <span className="flex items-start gap-2">
            {isUnlocked ? (
              <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9933]" />
            ) : (
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd700]/60" />
            )}
            <span>
              <span className="block text-sm font-bold text-[#ffd700]">
                {lang === 'kn' ? session.titleKn : session.titleEn}
              </span>
              <span className="block text-[11px] text-[#fef3c7]/60">{session.byline}</span>
              <span className="block text-[10px] text-[#fef3c7]/45">
                {lang === 'kn' ? session.durationKn : session.durationEn}
              </span>
              <span className="mt-1 block text-[10px] font-semibold text-emerald-300/80">
                {lang === 'kn' ? session.suitsKn : session.suitsEn}
              </span>
            </span>
          </span>
        );

        return isUnlocked ? (
          <a
            key={session.url}
            href={session.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-3 rounded-2xl border border-[#ffd700]/25 bg-[#ffd700]/5 px-4 py-3 transition-all hover:border-[#ffd700]/60 hover:bg-[#ffd700]/10 active:scale-[0.99]"
          >
            {details}
            <ExternalLink className="h-4 w-4 shrink-0 text-[#ff9933]" />
          </a>
        ) : (
          <div
            key={session.url}
            className="flex items-start rounded-2xl border border-[#ffd700]/15 bg-[#140404]/60 px-4 py-3 opacity-80"
          >
            {details}
          </div>
        );
      })}
    </div>

    {!isUnlocked && (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[#ffd700]/40 bg-[#ffd700]/5 p-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs leading-relaxed text-[#fef3c7]/80">
          {lang === 'kn'
            ? `₹${PRACTICAL_SESSIONS_MIN_AMOUNT} ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಸೇವಾ ದಕ್ಷಿಣೆ ಸಮರ್ಪಿಸಿ ಈ ಮೂರೂ ಪ್ರಾಯೋಗಿಕ ವೀಡಿಯೊಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ.`
            : `Contribute more than ₹${PRACTICAL_SESSIONS_MIN_AMOUNT} to unlock all three practical session videos.`}
        </p>
        {onRequestUnlock && (
          <button
            onClick={onRequestUnlock}
            className="shrink-0 rounded-2xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] px-5 py-2.5 font-sans text-xs font-bold text-[#1a0606] shadow-[0_0_20px_rgba(255,153,51,0.35)] transition-all hover:from-[#ffaa4d] hover:to-[#ffe033] active:scale-95"
          >
            {lang === 'kn' ? `₹${UNLOCK_AMOUNT} ಸಮರ್ಪಿಸಿ ಅನ್‌ಲಾಕ್ ಮಾಡಿ` : `Contribute ₹${UNLOCK_AMOUNT} to Unlock`}
          </button>
        )}
      </div>
    )}
  </section>
);
