import React, { useState } from 'react';
import { MUDRAS_DATA } from '../data/mudrasData';
import { Language } from '../types';
import { MudraHandDiagram } from './MudraHandDiagram';
import { ChevronLeft, ChevronRight, Sparkles, Hand, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PanchaMudraMobileStepperProps {
  lang: Language;
  onOpenAllMudras?: () => void;
  activeId?: string;
  onSelectMudra?: (id: string) => void;
}

const PANCHA_MUDRA_IDS = [
  'avahani',
  'sthapani',
  'sannidhayini',
  'sannirodhini',
  'sammukhi',
];

export const PanchaMudraMobileStepper: React.FC<PanchaMudraMobileStepperProps> = ({
  lang,
  onOpenAllMudras,
  activeId,
  onSelectMudra,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (activeId) {
      const idx = PANCHA_MUDRA_IDS.indexOf(activeId);
      if (idx !== -1) return idx;
    }
    return 0;
  });

  const panchaMudras = PANCHA_MUDRA_IDS.map(
    (id) => MUDRAS_DATA.find((m) => m.id === id) || MUDRAS_DATA[0]
  );

  const currentMudra = panchaMudras[currentIndex];

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    if (onSelectMudra) {
      onSelectMudra(PANCHA_MUDRA_IDS[index]);
    }
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + PANCHA_MUDRA_IDS.length) % PANCHA_MUDRA_IDS.length;
    handleSelect(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % PANCHA_MUDRA_IDS.length;
    handleSelect(nextIdx);
  };

  return (
    <div className="w-full bg-[#1e0707] border-2 border-[#ffd700]/30 rounded-3xl p-3.5 sm:p-5 shadow-2xl space-y-3.5">
      {/* Mobile Top Header */}
      <div className="flex items-center justify-between gap-2 border-b border-[#ffd700]/15 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933]">
            <Hand className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#ffd700] leading-tight">
              {lang === 'kn' ? 'ಆವಾಹನದ ೫ ಪ್ರಮುಖ ಮುದ್ರೆಗಳು' : 'The 5 Primary Invocation Mudras'}
            </h3>
            <p className="text-[10px] sm:text-xs text-[#ffd700]/70 font-sans">
              {lang === 'kn' ? 'ಪೂಜಾ ಕಾಲದಲ್ಲಿ ಕೈ ಬೆರಳುಗಳನ್ನು ಹಿಡಿಯುವ ಸರಿಯಾದ ಶೈಲಿ' : 'Hand & finger positions for daily pooja'}
            </p>
          </div>
        </div>

        <span className="text-[10px] font-sans font-bold bg-[#ff9933]/20 text-[#ffd700] border border-[#ff9933]/40 px-2 py-0.5 rounded-full shrink-0">
          {currentIndex + 1} / 5
        </span>
      </div>

      {/* Mobile-Friendly Number Tabs (Grid on mobile so it NEVER clips or gets cut off) */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {panchaMudras.map((mudra, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={mudra.id}
              onClick={() => handleSelect(idx)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all border text-center ${
                isSelected
                  ? 'bg-gradient-to-b from-[#ff9933] to-[#d97706] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.5)] scale-[1.03]'
                  : 'bg-[#140404] hover:bg-[#250a0a] text-[#fef3c7]/70 border-[#ffd700]/15'
              }`}
            >
              <span className="text-xs sm:text-sm font-serif font-bold leading-none">
                {['೧', '೨', '೩', '೪', '೫'][idx]}
              </span>
              <span className="text-[9px] sm:text-[10px] truncate max-w-full font-sans mt-0.5">
                {lang === 'kn' ? mudra.nameKn.split(' ')[0] : mudra.nameEn.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Active Mudra Card (Phone Optimized) */}
      <div className="bg-[#140404]/90 border border-[#ffd700]/20 rounded-2xl p-3.5 sm:p-4 space-y-3 shadow-inner">
        {/* Mudra Graphic + Name Header */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          {/* Detailed Hand & Finger Diagram */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-b from-[#2a0c0c] to-[#120303] border-2 border-[#ff9933]/40 p-2 flex items-center justify-center shrink-0 shadow-lg relative">
            <MudraHandDiagram id={currentMudra.id} className="w-full h-full" showLabels={false} />
            <span className="absolute top-1.5 left-2 text-[9px] font-bold font-sans bg-[#3d1111] text-[#ffd700] px-1.5 py-0.5 rounded border border-[#ffd700]/30">
              {currentMudra.badge}
            </span>
          </div>

          {/* Title, Category & Mantra */}
          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <div className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#3d1111] text-[#ff9933] border border-[#ff9933]/40 px-2 py-0.5 rounded-full font-sans">
              {currentMudra.badge} • {currentMudra.category.toUpperCase()}
            </div>
            <h4 className="font-serif font-bold text-base sm:text-lg text-[#ffeedd] leading-snug">
              {lang === 'kn' ? currentMudra.nameKn : currentMudra.nameEn}
            </h4>
            <div className="text-xs text-[#ffd700] font-serif font-semibold bg-[#250a0a] px-2.5 py-1 rounded-lg border border-[#ffd700]/15 inline-block">
              {lang === 'kn' ? currentMudra.purposeKn : currentMudra.purposeEn}
            </div>
          </div>
        </div>

        {/* Clear Finger Position Guide (Specific to user request) */}
        <div className="bg-[#250a0a] border border-[#ffd700]/15 rounded-xl p-2.5 sm:p-3 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#ff9933] uppercase tracking-wide font-sans">
            <Hand className="w-3.5 h-3.5 text-[#ff9933]" />
            <span>{lang === 'kn' ? 'ಬೆರಳುಗಳನ್ನು ಹಿಡಿಯುವ ನಿಖರ ವಿಧಾನ:' : 'How Fingers Must Be Held:'}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#fef3c7]/95 font-sans leading-relaxed">
            {lang === 'kn' ? currentMudra.howToFormKn : currentMudra.howToFormEn}
          </p>
        </div>

        {/* Meaning and Spiritual Sanctity */}
        <div className="bg-[#1e0707] border border-[#ffd700]/10 rounded-xl p-2.5 space-y-0.5 text-xs text-[#fef3c7]/80 font-sans">
          <span className="text-[#ffd700] font-semibold">
            {lang === 'kn' ? 'ಆಧ್ಯಾತ್ಮಿಕ ಫಲ:' : 'Spiritual Significance:'}
          </span>{' '}
          {lang === 'kn' ? currentMudra.meaningKn : currentMudra.meaningEn}
        </div>
      </div>

      {/* Touch-Friendly Bottom Action Buttons for Phones */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          onClick={handlePrev}
          className="flex-1 py-2 px-3 rounded-xl bg-[#250a0a] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/20 text-xs font-bold font-sans flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{lang === 'kn' ? 'ಹಿಂದಿನ ಮುದ್ರೆ' : 'Previous'}</span>
        </button>

        {onOpenAllMudras && (
          <button
            onClick={onOpenAllMudras}
            className="py-2 px-3 rounded-xl bg-[#3d1111] hover:bg-[#4d1717] text-[#fef3c7] border border-[#ffd700]/20 text-[11px] font-sans font-semibold active:scale-95 transition-all shrink-0"
          >
            {lang === 'kn' ? 'ಸಮಸ್ತ ೧೪ ಮುದ್ರೆಗಳು' : 'All 14 Mudras'}
          </button>
        )}

        <button
          onClick={handleNext}
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] text-[#1a0606] text-xs font-bold font-sans flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md"
        >
          <span>{lang === 'kn' ? 'ಮುಂದಿನ ಮುದ್ರೆ' : 'Next Mudra'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
