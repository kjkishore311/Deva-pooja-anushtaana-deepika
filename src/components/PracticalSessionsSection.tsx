import React from 'react';
import { ExternalLink, PlayCircle, Youtube } from 'lucide-react';
import { Language } from '../types';

interface PracticalSessionsSectionProps {
  lang: Language;
}

// YouTube recordings of the Deva Pooja being performed, step by step.
const PRACTICAL_SESSIONS = [
  {
    url: 'https://www.youtube.com/watch?v=hTSDBlRFJkQ',
    titleEn: 'Deva Pooja Paddhati — Detailed',
    titleKn: 'ದೇವಪೂಜಾ ಪದ್ಧತಿ — ವಿಸ್ತೃತ',
    byline: 'Vid. Sriramavittala Achar · JnanaGamya Prasarana',
    durationEn: '56 min · 47 steps',
    durationKn: '೫೬ ನಿಮಿಷ · ೪೭ ಹಂತಗಳು',
  },
  {
    url: 'https://www.youtube.com/watch?v=dNfaFhNGfaY',
    titleEn: 'Deva Pooja Paddhati — Concise',
    titleKn: 'ದೇವಪೂಜಾ ಪದ್ಧತಿ — ಸಂಕ್ಷಿಪ್ತ',
    byline: 'SCT · musically chanted',
    durationEn: '35 min · 29 steps',
    durationKn: '೩೫ ನಿಮಿಷ · ೨೯ ಹಂತಗಳು',
  },
  {
    url: 'https://www.youtube.com/watch?v=sxnnYn9Iu94',
    titleEn: 'Madhwa Sampradaya Devara Pooje — Sung',
    titleKn: 'ಮಾಧ್ವ ಸಂಪ್ರದಾಯ ದೇವರ ಪೂಜೆ — ಗಾಯನ',
    byline: 'Nithya Devatharchane · with bhajans & discourse',
    durationEn: '67 min · 38 steps',
    durationKn: '೬೭ ನಿಮಿಷ · ೩೮ ಹಂತಗಳು',
  },
];

export const PracticalSessionsSection: React.FC<PracticalSessionsSectionProps> = ({ lang }) => (
  <section
    id="practical-sessions"
    className="rounded-3xl border border-[#ffd700]/30 bg-gradient-to-br from-[#3d1111] via-[#250a0a] to-[#140404] p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] space-y-4"
  >
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-400/30 bg-red-500/10 text-red-400">
        <Youtube className="h-5 w-5" />
      </div>
      <div>
        <h2 className="font-serif text-lg font-bold text-[#ffb45c] sm:text-xl">
          {lang === 'kn' ? 'ಪ್ರಾಯೋಗಿಕ ತರಗತಿಗಳು — ದೇವಪೂಜೆ' : 'Practical Sessions — Deva Pooja'}
        </h2>
        <p className="text-xs leading-relaxed text-[#fef3c7]/70">
          {lang === 'kn'
            ? 'ದೇವಪೂಜೆಯನ್ನು ಪ್ರತ್ಯಕ್ಷವಾಗಿ ಹೇಗೆ ಮಾಡಬೇಕೆಂದು ತೋರಿಸುವ ವೀಡಿಯೊ ಧ್ವನಿಮುದ್ರಣಗಳು. ಕ್ಲಿಕ್ ಮಾಡಿದರೆ YouTube ನಲ್ಲಿ ತೆರೆಯುತ್ತದೆ.'
            : 'Video recordings showing how the Deva Pooja is performed in practice. Each link opens on YouTube.'}
        </p>
      </div>
    </div>

    <div className="grid gap-2 sm:grid-cols-3">
      {PRACTICAL_SESSIONS.map((session) => (
        <a
          key={session.url}
          href={session.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start justify-between gap-3 rounded-2xl border border-[#ffd700]/25 bg-[#ffd700]/5 px-4 py-3 transition-all hover:border-[#ffd700]/60 hover:bg-[#ffd700]/10 active:scale-[0.99]"
        >
          <span className="flex items-start gap-2">
            <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9933]" />
            <span>
              <span className="block text-sm font-bold text-[#ffd700]">
                {lang === 'kn' ? session.titleKn : session.titleEn}
              </span>
              <span className="block text-[11px] text-[#fef3c7]/60">{session.byline}</span>
              <span className="block text-[10px] text-[#fef3c7]/45">
                {lang === 'kn' ? session.durationKn : session.durationEn}
              </span>
            </span>
          </span>
          <ExternalLink className="h-4 w-4 shrink-0 text-[#ff9933]" />
        </a>
      ))}
    </div>
  </section>
);
