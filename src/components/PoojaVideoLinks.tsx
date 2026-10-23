import React from 'react';
import { ExternalLink, PlayCircle, ShieldCheck, Youtube } from 'lucide-react';
import { Language, PoojaMode } from '../types';

interface PoojaVideoLinksProps {
  lang: Language;
  mode: PoojaMode;
  isUnlocked: boolean;
}

interface PoojaVideo {
  url: string;
  coverageKn?: string;
  coverageEn?: string;
  timingKn?: string;
  timingEn?: string;
}

// Ati Sankshipta (very concise) Deva Pooja, in three parts, for the 30-minute pooja.
const THIRTY_MINUTE_VIDEOS: PoojaVideo[] = [
  {
    url: 'https://youtu.be/VoRhRZBujgQ',
    coverageKn: 'ಸಂಕಲ್ಪ — ನಿರ್ಮಾಲ್ಯ',
    coverageEn: 'Sankalpa — Nirmalya',
    timingKn: 'ನಿರ್ಮಾಲ್ಯ 58:30 ರವರೆಗೆ',
    timingEn: 'Up to Nirmalya at 58:30',
  },
  {
    url: 'https://youtu.be/gA0snlOOAmc',
    coverageKn: 'ಶುದ್ಧೋದಕ — ನೈವೇದ್ಯ ಆರಂಭ',
    coverageEn: 'Shuddodaka — start of Naivedya',
    timingKn: 'ನೈವೇದ್ಯ ಆರಂಭ 14:38',
    timingEn: 'Naivedya starts at 14:38',
  },
  {
    url: 'https://youtu.be/BmoJ5q8Ahe0',
    coverageKn: 'ನೈವೇದ್ಯ — ಮಂಗಳಾರತಿ',
    coverageEn: 'Naivedya — Mangalarati',
  },
];

// Complete Tantrasara Sangraha Paddhati, in six parts.
const COMPLETE_VIDEOS: PoojaVideo[] = [
  { url: 'https://youtu.be/gA0snlOOAmc' },
  { url: 'https://youtu.be/o8J2seKYMEM' },
  { url: 'https://youtu.be/ZcbPiRclswY' },
  { url: 'https://youtu.be/vw7BXR80eV0' },
  { url: 'https://youtu.be/wlrnkqw4OaY' },
  { url: 'https://youtu.be/lgwH2x5MXdg' },
];

const KN_DIGITS = ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'];
const toKnDigits = (n: number) => String(n).replace(/\d/g, (d) => KN_DIGITS[Number(d)]);

export const PoojaVideoLinks: React.FC<PoojaVideoLinksProps> = ({ lang, mode, isUnlocked }) => {
  if (mode === '10min' || !isUnlocked) return null;

  const isComplete = mode === 'full';
  const videos = isComplete ? COMPLETE_VIDEOS : THIRTY_MINUTE_VIDEOS;

  return (
    <section
      id="pooja-video-links"
      className="rounded-3xl border border-[#ffd700]/30 bg-gradient-to-br from-[#3d1111] via-[#250a0a] to-[#140404] p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] space-y-4"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-400/30 bg-red-500/10 text-red-400">
          <Youtube className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h2 className="font-serif text-lg font-bold text-[#ffb45c] sm:text-xl">
              {isComplete
                ? (lang === 'kn' ? 'ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರ ಸಂಗ್ರಹ ಪದ್ಧತಿ — ವೀಡಿಯೊಗಳು' : 'Complete Tantrasara Sangraha Paddhati — Videos')
                : (lang === 'kn' ? 'ಅತಿ ಸಂಕ್ಷಿಪ್ತ ದೇವಪೂಜೆ — ವೀಡಿಯೊಗಳು' : 'Ati Sankshipta Deva Pooja — Videos')}
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              <ShieldCheck className="h-3 w-3" />
              {lang === 'kn' ? 'ಪಾವತಿಸಿದ ಪ್ರವೇಶ' : 'Paid access'}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#fef3c7]/70">
            {lang === 'kn'
              ? 'ಪೂಜೆ ಆರಂಭಿಸುವ ಮೊದಲು ಈ ವೀಡಿಯೊಗಳನ್ನು ಕ್ರಮವಾಗಿ ನೋಡಿ. ಪ್ರತಿಯೊಂದು ಲಿಂಕ್ ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ YouTube ನಲ್ಲಿ ತೆರೆಯುತ್ತದೆ; ನೋಡಿದ ನಂತರ ಈ ಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ.'
              : 'Watch these videos in order as you perform the pooja. Each link opens YouTube in a new tab, so you can watch and come back to this page.'}
          </p>
        </div>
      </div>

      <div className={`grid gap-2 ${isComplete ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-3'}`}>
        {videos.map((video, index) => (
          <a
            key={`${video.url}-${index}`}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-3 rounded-2xl border border-[#ffd700]/25 bg-[#ffd700]/5 px-4 py-3 transition-all hover:border-[#ffd700]/60 hover:bg-[#ffd700]/10 active:scale-[0.99]"
          >
            <span className="flex items-start gap-2">
              <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9933]" />
              <span>
                <span className="block text-sm font-bold text-[#ffd700]">
                  {lang === 'kn' ? `ಭಾಗ ${toKnDigits(index + 1)}` : `Part ${index + 1}`}
                  {!isComplete && (
                    <span className="ml-1 text-[11px] font-semibold text-[#fef3c7]/60">
                      · {lang === 'kn' ? 'ಅತಿ ಸಂಕ್ಷಿಪ್ತ' : 'Ati Sankshipta'}
                    </span>
                  )}
                </span>
                {video.coverageEn && (
                  <span className="block text-[11px] text-[#fef3c7]/75">
                    {lang === 'kn' ? video.coverageKn : video.coverageEn}
                  </span>
                )}
                {video.timingEn && (
                  <span className="block text-[10px] text-[#fef3c7]/45">
                    {lang === 'kn' ? video.timingKn : video.timingEn}
                  </span>
                )}
                <span className="mt-1 block text-[10px] font-semibold text-emerald-300/80">
                  {lang === 'kn' ? 'YouTube ನಲ್ಲಿ ನೋಡಿ' : 'Watch on YouTube'}
                </span>
              </span>
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-[#ff9933]/70 transition-colors group-hover:text-[#ff9933]" />
          </a>
        ))}
      </div>
    </section>
  );
};
