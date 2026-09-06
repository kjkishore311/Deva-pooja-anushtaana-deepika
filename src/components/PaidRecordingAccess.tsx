import React from 'react';
import { ExternalLink, FolderOpen, PlayCircle, ShieldCheck } from 'lucide-react';
import { Language, PoojaMode } from '../types';

interface PaidRecordingAccessProps {
  lang: Language;
  mode: PoojaMode;
  isUnlocked: boolean;
}

const THIRTY_MINUTE_RECORDINGS = [
  'https://drive.google.com/file/d/1KKYCeraUBL7GZjZDyWhvt5Vij5mjxE4P/view?usp=drive_link',
  'https://drive.google.com/file/d/1TqrwKWi--oF85mCXEHxogUgh0yka5SFC/view?usp=drive_link',
  'https://drive.google.com/file/d/1GitWmYwG3DQ-1tN-1F85Vtrt87sUcCzW/view?usp=drive_link',
];

const COMPLETE_RECORDINGS_FOLDER =
  'https://drive.google.com/drive/folders/13QBxgztRIiiZPMwOaqLf1tK3L6B7sxzo';

export const PaidRecordingAccess: React.FC<PaidRecordingAccessProps> = ({
  lang,
  mode,
  isUnlocked,
}) => {
  if (mode === '10min' || !isUnlocked) return null;

  const isComplete = mode === 'full';

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#ffd700]/30 bg-gradient-to-br from-[#3d1111] via-[#250a0a] to-[#140404] p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ff9933]/10 blur-2xl" />
      <div className="relative space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#ffd700]/30 bg-[#ffd700]/10 text-[#ffd700]">
            {isComplete ? <FolderOpen className="h-5 w-5" /> : <PlayCircle className="h-5 w-5" />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="font-serif text-lg font-bold text-[#ffb45c] sm:text-xl">
                {isComplete
                  ? (lang === 'kn' ? 'ಸಂಪೂರ್ಣ ಪೂಜಾ ಧ್ವನಿಮುದ್ರಣ ಸಂಗ್ರಹ' : 'Complete Pooja Recording Library')
                  : (lang === 'kn' ? '೩೦ ನಿಮಿಷ ಪೂಜಾ ಧ್ವನಿಮುದ್ರಣಗಳು' : '30-Minute Pooja Recordings')}
              </h2>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                <ShieldCheck className="h-3 w-3" />
                {lang === 'kn' ? 'ಪಾವತಿಸಿದ ಪ್ರವೇಶ' : 'Paid access'}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#fef3c7]/70">
              {isComplete
                ? (lang === 'kn'
                    ? 'ಸಂಪೂರ್ಣ ಪೂಜೆಯನ್ನು ಹೇಗೆ ನಡೆಸಬೇಕು ಎಂಬ ಎಲ್ಲಾ ಧ್ವನಿಮುದ್ರಣಗಳ Google Drive ಸಂಗ್ರಹವನ್ನು ತೆರೆಯಿರಿ.'
                    : 'Open the Google Drive folder containing the full set of recordings for conducting the complete pooja.')
                : (lang === 'kn'
                    ? '೩೦ ನಿಮಿಷ ಪೂಜೆಯ ಕ್ರಮವನ್ನು ಅನುಸರಿಸಲು ಕೆಳಗಿನ ಮೂರು ಧ್ವನಿಮುದ್ರಣಗಳನ್ನು ತೆರೆಯಿರಿ.'
                    : 'Use these three recordings to follow the 30-minute pooja in sequence.')}
            </p>
          </div>
        </div>

        {isComplete ? (
          <a
            href={COMPLETE_RECORDINGS_FOLDER}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[#ffd700]/35 bg-[#ffd700]/10 px-4 py-3 text-left transition-all hover:border-[#ffd700]/70 hover:bg-[#ffd700]/15 active:scale-[0.99]"
          >
            <span>
              <span className="block text-sm font-bold text-[#ffd700]">
                {lang === 'kn' ? 'Google Drive ಸಂಗ್ರಹ ತೆರೆಯಿರಿ' : 'Open Complete Recording Folder'}
              </span>
              <span className="block text-[10px] text-[#fef3c7]/55">
                {lang === 'kn' ? 'ಎಲ್ಲ ಸಂಪೂರ್ಣ ಪೂಜಾ ಧ್ವನಿಮುದ್ರಣಗಳು' : 'All complete pooja recordings'}
              </span>
            </span>
            <ExternalLink className="h-4 w-4 shrink-0 text-[#ff9933]" />
          </a>
        ) : (
          <div className="grid gap-2 sm:grid-cols-3">
            {THIRTY_MINUTE_RECORDINGS.map((recordingUrl, index) => (
              <a
                key={recordingUrl}
                href={recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-2 rounded-2xl border border-[#ffd700]/20 bg-[#140404]/70 px-3 py-3 transition-all hover:border-[#ff9933]/60 hover:bg-[#3d1111] active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff9933]/15 text-[11px] font-bold text-[#ffb45c]">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold text-[#fef3c7]">
                    {lang === 'kn' ? `ಧ್ವನಿಮುದ್ರಣ ${index + 1}` : `Recording ${index + 1}`}
                  </span>
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-[#ffd700]/55 transition-colors group-hover:text-[#ffd700]" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
