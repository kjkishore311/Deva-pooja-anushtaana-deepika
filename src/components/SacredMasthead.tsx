import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface SacredMastheadProps {
  lang: Language;
}

export const SacredMasthead: React.FC<SacredMastheadProps> = ({ lang }) => {
  // Rotate languages or show elegantly stacked
  const [activeLangIndex, setActiveLangIndex] = useState<number>(0);

  const lines = [
    {
      kannada: '॥ ಶ್ರೀ ಹರಿಃ ಸರ್ವೋತ್ತಮಃ • ವಾಯುರ್ಜೀವೋತ್ತಮಃ ॥',
      sanskrit: '॥ श्री हरिः सर्वोत्तमः • वायुर्जीवोत्तमः ॥',
      english: 'Sri Hariḥ Sarvottamaḥ • Vāyur Jīvottamaḥ',
      label: 'ಮಧ್ವ ಸಿದ್ಧಾಂತ'
    },
  ];

  const mathaLines = {
    kn: '॥ ಶ್ರೀಮದ್ ಉತ್ತರಾದಿ ಮಠ ॥',
    sa: '॥ श्रीमदुत्तरादिमठः ॥',
    en: 'Shree Uttaradi Matha',
  };

  return (
    <aside aria-label="Sacred invocation" className="w-full bg-gradient-to-r from-[#140404] via-[#2d0909] to-[#140404] border-b border-[#ffd700]/30 shadow-[0_2px_12px_rgba(0,0,0,0.7)] text-center py-1.5 px-2 relative overflow-hidden select-none">
      {/* Subtle Golden Sacred Glow Line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/60 to-transparent" />

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-0.5">
        {/* Top Sacred Motto: Hari Sarvottama • Vayu Jeevottama in Multi-Languages */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-0.5 text-center">
          {/* Kannada */}
          <span className="font-serif font-bold text-xs sm:text-sm text-[#ffd700] tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            ॥ ಶ್ರೀ ಹರಿಃ ಸರ್ವೋತ್ತಮಃ • ವಾಯುರ್ಜೀವೋತ್ತಮಃ ॥
          </span>

          <span className="hidden md:inline text-[#ff9933]/50 text-xs">❖</span>

          {/* Sanskrit / Devanagari */}
          <span className="hidden sm:inline font-serif font-semibold text-xs sm:text-sm text-[#ffe49e] tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            ॥ श्री हरिः सर्वोत्तमः • वायुर्जीवोत्तमः ॥
          </span>

          <span className="hidden lg:inline text-[#ff9933]/50 text-xs">❖</span>

          {/* English Transliteration */}
          <span className="hidden lg:inline font-serif text-[11px] sm:text-xs text-[#fef3c7]/80 tracking-wider">
            Sri Hariḥ Sarvottamaḥ • Vāyur Jīvottamaḥ
          </span>
        </div>

        {/* Bottom Line: Shree Uttaradi Matha */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-serif font-bold tracking-wider text-[#ff9933]">
          <span className="text-[#ffd700]/80">🪔</span>
          <span>{mathaLines.kn}</span>
          <span className="text-[#ffd700]/50">•</span>
          <span className="text-[#ffe066]">{mathaLines.en}</span>
          <span className="hidden sm:inline text-[#ffd700]/50">•</span>
          <span className="hidden sm:inline text-[#fef3c7]/75">{mathaLines.sa}</span>
          <span className="text-[#ffd700]/80">🪔</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff9933]/40 to-transparent" />
    </aside>
  );
};
