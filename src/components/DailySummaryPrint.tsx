import React from 'react';
import { Language, PoojaMode } from '../types';
import { POOJA_STEPS } from '../data/poojaData';
import { Printer, X, Download, Flame, Sparkles } from 'lucide-react';

interface DailySummaryPrintProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  mode: PoojaMode;
}

export const DailySummaryPrint: React.FC<DailySummaryPrintProps> = ({
  isOpen,
  onClose,
  lang,
  mode,
}) => {
  if (!isOpen) return null;

  const activeSteps = POOJA_STEPS.filter((step) => step.modes.includes(mode));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div className="bg-white text-stone-900 w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-amber-300 print:max-h-none print:shadow-none print:border-none print:w-full">
        {/* Printable Modal Header */}
        <div className="px-5 py-3.5 bg-amber-900 text-amber-50 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="font-serif font-bold text-base">
              {lang === 'kn' ? '೧-ಪುಟದ ದೈನಂದಿನ ದೇವಪೂಜಾ ಚೀಟ್‌ಶೀಟ್ ಕಾರ್ಡ್' : '1-Page Daily Deva Pooja Reference Card'}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'kn' ? 'ಪ್ರಿಂಟ್ ಮಾಡಿ' : 'Print / Save PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-amber-800 hover:bg-amber-700 text-amber-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 print:p-4 print:text-black">
          {/* Card Title Banner */}
          <div className="border-b-2 border-amber-600 pb-3 text-center space-y-1">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-widest">
              ॥ ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ ॥ ಶ್ರೀ ಭಾರತೀರಮಣಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು ॥
            </div>
            <h1 className="font-serif font-extrabold text-2xl text-amber-950">
              {lang === 'kn' ? 'ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾ ಪದ್ಧತಿ - ದೈನಂದಿನ ಕ್ರಮ' : 'Tantrasarokta Deva Pooja Daily Summary'}
            </h1>
            <div className="text-xs text-stone-600 font-sans">
              {lang === 'kn'
                ? `ಪೂಜಾ ಕಾಲಾವಧಿ: ${mode === '10min' ? '೧೦ ನಿಮಿಷ (ಸಂಕ್ಷಿಪ್ತ)' : mode === '30min' ? '೩೦ ನಿಮಿಷ (ದೈನಂದಿನ)' : 'ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರ'} | ಒಟ್ಟು ಹಂತಗಳು: ${activeSteps.length}`
                : `Ritual Mode: ${mode} | Total Steps: ${activeSteps.length}`}
            </div>
          </div>

          {/* Sequential Step Summaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 print:grid-cols-2 print:gap-2.5">
            {activeSteps.map((st, idx) => (
              <div
                key={st.id}
                className="border border-amber-200 rounded-xl p-3 bg-amber-50/40 space-y-1 text-xs print:bg-white print:border-stone-300"
              >
                <div className="flex items-center justify-between font-serif font-bold text-amber-950">
                  <span>
                    {idx + 1}. {lang === 'kn' ? st.titleKn : st.titleEn}
                  </span>
                  <span className="text-[10px] text-amber-700 font-sans">~{st.durationEstimateMinutes}m</span>
                </div>
                <p className="text-stone-700 leading-snug font-sans">
                  {lang === 'kn' ? st.subtitleKn : st.subtitleEn}
                </p>
                {st.mantras[0] && (
                  <div className="bg-white/80 border border-amber-100 rounded p-1.5 text-[11px] font-serif text-amber-900 truncate">
                    {st.mantras[0].mantraKannada.split('\n')[0]}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Golden Rule Footer */}
          <div className="border-t-2 border-amber-600 pt-3 text-center space-y-1">
            <p className="font-serif font-bold text-xs text-amber-900">
              ನಾಹಂ ಕರ್ತಾ ಹರಿಃ ಕರ್ತಾ ತತ್ಪೂಜಾ ಕರ್ಮ ಚಾಖಿಲಮ್ । ತಥಾಪಿ ಮತ್ಕೃತಾ ಪೂಜಾ ತತ್ಪ್ರಸಾದೇನ ನಾನ್ಯಥಾ ॥
            </p>
            <p className="text-[10px] text-stone-500 font-sans">
              ಶ್ರೀ ಉತ್ತರಾದಿ ಮಠ ಪರಂಪರೆಯ ದೇವಪೂಜಾ ಅನುಷ್ಠಾನ | ದೇವಪೂಜಾ ಆ್ಯಪ್
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
