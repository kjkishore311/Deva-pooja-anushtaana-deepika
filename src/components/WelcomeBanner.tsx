import React, { useState } from 'react';
import { Flame, ChevronRight, Flower2, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';

interface WelcomeBannerProps {
  lang: Language;
  onStartPooja?: () => void;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ lang, onStartPooja }) => {
  const [showSwamijiFull, setShowSwamijiFull] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2a0c0c] via-[#1e0707] to-[#140404] border border-[#ffd700]/30 p-3.5 sm:p-5 shadow-xl text-[#fef3c7]">
      {/* Subtle Aura */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ff9933]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-2.5">
        {/* Top Header Row: Badge & Action Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff9933]/20 border border-[#ff9933]/40 text-[#ffd700] text-[11px] font-semibold">
              <Flame className="w-3 h-3 text-[#ff9933]" />
              <span>
                {lang === 'kn'
                  ? 'ಶ್ರೀ ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ ನಿತ್ಯ ಪೂಜೆ'
                  : 'Tantrasara Sangraha Daily Pooja'}
              </span>
            </span>
            <span className="text-[10px] text-[#ffd700]/70 hidden md:inline font-sans">
              {lang === 'kn' ? 'ಉತ್ತರಾದಿ ಮಠ ಪದ್ಧತಿ' : 'Uttaradi Matha Tradition'}
            </span>
          </div>

          {/* Compact CTA */}
          {onStartPooja && (
            <button
              onClick={onStartPooja}
              className="w-full sm:w-auto px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa44] hover:to-[#ffe055] text-[#1a0606] font-bold font-sans text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all shrink-0"
            >
              <Flower2 className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ದೇವಪೂಜೆ ಆರಂಭಿಸಿ' : 'Begin Daily Pooja'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Condensed Crisp Welcome Statement (User explicitly requested condensation) */}
        <p className="text-xs sm:text-sm text-[#fef3c7]/95 font-sans leading-relaxed">
          {lang === 'kn' ? (
            <>
              ಶಾಸ್ತ್ರೋಕ್ತ <strong className="text-[#ffd700]">ತಂತ್ರಸಾರ ವಿಧಿ</strong>, ಪುರುಷ-ಶ್ರೀ ಸೂಕ್ತ, ಮಂತ್ರ ಪಠ್ಯ ಹಾಗೂ ಗರ್ಭಗುಡಿಯ ಸಾಲಿಗ್ರಾಮ-ಮೂರ್ತಿಗಳ ದರ್ಶನದೊಂದಿಗೆ ಭಕ್ತಿಪೂರ್ವಕ ದೈನಂದಿನ ದೇವತಾರ್ಚನೆ.
            </>
          ) : (
            <>
              Perform authentic <strong className="text-[#ffd700]">Tantrasara Deva Pooja</strong> with Vedic Suktas, guided mantra text, and divine Saligrama darshan.
            </>
          )}
        </p>

        {/* Sacred Shloka: Compact & Elegant */}
        <div className="bg-[#140404]/85 border border-[#ffd700]/25 rounded-xl px-3 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-inner">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#ff9933]">🪔</span>
            <div className="font-serif text-xs sm:text-sm font-bold text-[#ffeedd] tracking-wide">
              {lang === 'kn' ? (
                <span>॥ ಹರೇಃ ಪೂಜಾ ಪರಂ ಧರ್ಮೋ ಹರೇಃ ಪೂಜಾ ಪರಂ ತಪಃ । ಹರೇಃ ಪೂಜಾ ಪರಂ ಜ್ಞಾನಂ ಹರೇಃ ಪೂಜಾ ಪರಾ ಗತಿಃ ॥</span>
              ) : (
                <span>॥ hareḥ pūjā paraṁ dharmo hareḥ pūjā paraṁ tapaḥ । hareḥ pūjā paraṁ jñānaṁ hareḥ pūjā parā gatiḥ ॥</span>
              )}
            </div>
          </div>

          <button
            onClick={() => setShowSwamijiFull(!showSwamijiFull)}
            className="text-[10px] text-[#ff9933] hover:text-[#ffd700] font-sans flex items-center gap-1 shrink-0 ml-auto"
          >
            <span>{showSwamijiFull ? (lang === 'kn' ? 'ಸಂಕ್ಷಿಪ್ತಗೊಳಿಸಿ' : 'Show Less') : (lang === 'kn' ? 'ಶ್ರೀಗಳವರ ಸಂದೇಶ' : "Swamiji's Benediction")}</span>
            {showSwamijiFull ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Expandable Swamiji Full Guidance (Only when user taps "ಶ್ರೀಗಳವರ ಸಂದೇಶ", zero scroll pollution by default) */}
        {showSwamijiFull && (
          <div className="bg-[#1a0505] border border-[#ffd700]/20 rounded-xl p-3 text-xs text-[#fef3c7]/90 font-sans space-y-1.5 animate-fade-in">
            <div className="font-bold text-[#ffd700] flex items-center gap-1.5 font-serif">
              <span>॥ ಶ್ರೀ ಸತ್ಯಾತ್ಮ ತೀರ್ಥ ಶ್ರೀಪಾದಂಗಳವರ ದೇವಪೂಜಾ ಸಂದೇಶ ॥</span>
            </div>
            <p className="leading-relaxed">
              {lang === 'kn'
                ? 'ಶ್ರೀಮನ್ ಮಧ್ವಾಚಾರ್ಯರ ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ ದೇವಪೂಜೆಯು ಕೇವಲ ದೈನಂದಿನ ಕರ್ಮವಲ್ಲ; ಅದು ಸಕಲ ಪಾಪಗಳನ್ನು ಕಳೆದು ಬಿಂಬಮೂರ್ತಿ ಶ್ರೀಹರಿಯ ಅನುಗ್ರಹವನ್ನು ಪಡೆಯುವ ಪರಮೋಚ್ಚ ಸಾಧನ. ಪ್ರತಿಯೊಬ್ಬ ಸದ್ಭಕ್ತನೂ ಶ್ರದ್ಧೆಯಿಂದ, ಪುರುಷ-ಶ್ರೀ ಸೂಕ್ತ ಮಂತ್ರ, ಶಂಖೋದಕ ಹಾಗೂ ತುಳಸೀ ದಳಗಳಿಂದ ಶ್ರೀ ಸಾಲಿಗ್ರಾಮ-ಮೂರ್ತಿಗಳನ್ನು ಅರ್ಚಿಸಿದಾಗ ಆ ಗೃಹದಲ್ಲಿ ಶಾಂತಿ, ಆಯುಷ್ಯ ಮತ್ತು ಸಕಲ ಮಂಗಳಗಳು ನೆಲೆಸುತ್ತವೆ.'
                : "Deva Pooja as codified in Sri Madhvacharya's Tantrasara Sangraha is the supreme pathway to worship Lord Sri Hari. Worshiping the consecrated Saligramas daily with Vedic Suktas, sanctified Shankhodaka, and sacred Tulasi blesses the home with peace, health, and supreme grace."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
