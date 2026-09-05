import React from 'react';
import { Language, PoojaMode } from '../types';
import { Flame, Clock, Sparkles, BookOpen, ChevronRight, Lock, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PoojaLauncherCardProps {
  lang: Language;
  onSelectMode: (mode: PoojaMode) => void;
  unlockedTiers?: PoojaMode[];
}

export const PoojaLauncherCard: React.FC<PoojaLauncherCardProps> = ({
  lang,
  onSelectMode,
  unlockedTiers = ['10min'],
}) => {
  const is30Unlocked = unlockedTiers.includes('30min') || unlockedTiers.includes('full');
  const isFullUnlocked = unlockedTiers.includes('full');

  const options = [
    {
      mode: '10min' as PoojaMode,
      titleKn: '೧೦ ನಿಮಿಷ (ಸಂಕ್ಷಿಪ್ತ ಪೂಜೆ)',
      titleEn: '10-Min Quick Pooja',
      descKn: 'ಅವಸರದ ದಿನಗಳಿಗೆ ಸಂಕ್ಷಿಪ್ತ ಪಂಚೋಪಚಾರ ಹಾಗೂ ಮುಖ್ಯ ನೈವೇದ್ಯ',
      descEn: 'Essential 5-upacharas for busy workday mornings',
      icon: Sparkles,
      priceLabelKn: 'ಉಚಿತ ಪ್ರವೇಶ',
      priceLabelEn: 'Free Access',
      isUnlocked: true,
      badgeKn: 'ಸಂಕ್ಷಿಪ್ತ',
      badgeEn: 'Quick',
    },
    {
      mode: '30min' as PoojaMode,
      titleKn: '೩೦ ನಿಮಿಷ (ದೈನಂದಿನ ಪೂಜೆ)',
      titleEn: '30-Min Daily Pooja',
      descKn: 'ಶೋಡಶೋಪಚಾರ, ಪುರೋಹಿತ ಮಂತ್ರ ಧ್ವನಿ, ಶಂಖ ತೀರ್ಥ ಹಾಗೂ ನೈವೇದ್ಯ',
      descEn: 'Full 16-step shodashopachara with Male Hindu Priest Chanting',
      icon: Flame,
      priceLabelKn: is30Unlocked ? 'ಅನ್‌ಲಾಕ್ ಆಗಿದೆ' : '₹150+ ಸೇವಾ ದಕ್ಷಿಣೆ',
      priceLabelEn: is30Unlocked ? 'Unlocked' : '₹150+ Seva Dakshina',
      isUnlocked: is30Unlocked,
      badgeKn: 'ದೈನಂದಿನ',
      badgeEn: 'Daily',
      recommended: true,
    },
    {
      mode: 'full' as PoojaMode,
      titleKn: 'ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರ ಪದ್ಧತಿ',
      titleEn: 'Complete Tantrasara',
      descKn: 'ಮಧ್ವಾಚಾರ್ಯರ ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ ಸಮಗ್ರ ವಿಧಿ-ವಿಧಾನ, ನ್ಯಾಸ ಹಾಗೂ ಸೂಕ್ತಗಳು',
      descEn: 'Complete Vedic mantras, nyasas, and detailed suktas recitation',
      icon: BookOpen,
      priceLabelKn: isFullUnlocked ? 'ಅನ್‌ಲಾಕ್ ಆಗಿದೆ' : '₹350+ ತಂತ್ರಸಾರ ದಕ್ಷಿಣೆ',
      priceLabelEn: isFullUnlocked ? 'Unlocked' : '₹350+ Seva Dakshina',
      isUnlocked: isFullUnlocked,
      badgeKn: 'ಸಂಪೂರ್ಣ',
      badgeEn: 'Complete',
    },
  ];

  return (
    <div className="bg-[#250a0a]/90 rounded-3xl border border-[#ffd700]/25 p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#ffd700]/15 pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933]">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#ffd700]">
              {lang === 'kn' ? 'ದೇವಪೂಜಾ ಕಾಲಾವಧಿ ಹಾಗೂ ಸೇವಾ ದಕ್ಷಿಣೆ' : 'Choose Pooja Duration to Begin'}
            </h2>
            <p className="text-xs text-[#fef3c7]/70 font-sans">
              {lang === 'kn'
                ? '೧೦ ನಿಮಿಷ ಉಚಿತ; ೩೦ ನಿಮಿಷಕ್ಕೆ ಕನಿಷ್ಠ ₹150 ಹಾಗೂ ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರಕ್ಕೆ ಕನಿಷ್ಠ ₹350 ಆನ್‌ಲೈನ್ ಸೇವೆ (UPI: kjkishore311@okhdfcbank)'
                : '10-min is Free; 30-min requires min ₹150 and Complete Tantrasara requires min ₹350 online seva (UPI: kjkishore311@okhdfcbank)'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#ff9933] bg-[#1a0606] px-3 py-1 rounded-full border border-[#ffd700]/15 self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>GPay • UPI • Cards • Netbanking</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.mode}
              onClick={() => onSelectMode(opt.mode)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                opt.recommended
                  ? 'bg-gradient-to-b from-[#3d1111] to-[#250a0a] border-[#ffd700]/50 hover:border-[#ffd700] shadow-[0_0_20px_rgba(255,153,51,0.2)]'
                  : 'bg-[#1a0606]/80 hover:bg-[#3d1111]/70 border-[#ffd700]/20 hover:border-[#ffd700]/40'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#ff9933]/15 border border-[#ff9933]/30 flex items-center justify-center text-[#ff9933] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Price & Unlock status badge */}
                  <span
                    className={`text-[10px] font-sans font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 shrink-0 max-w-[65%] truncate ${
                      opt.isUnlocked
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                        : 'bg-[#ff9933] text-[#1a0606] border-[#ffd700]'
                    }`}
                  >
                    {opt.isUnlocked ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    ) : (
                      <Lock className="w-3 h-3 shrink-0" />
                    )}
                    <span className="truncate">{lang === 'kn' ? opt.priceLabelKn : opt.priceLabelEn}</span>
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#ff9933] group-hover:text-[#ffd700] transition-colors">
                      {lang === 'kn' ? opt.titleKn : opt.titleEn}
                    </h3>
                  </div>
                  <p className="text-xs text-[#fef3c7]/75 font-sans mt-1 leading-relaxed">
                    {lang === 'kn' ? opt.descKn : opt.descEn}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#ffd700]/10 flex items-center justify-between text-xs font-sans font-semibold text-[#ffd700]/90 group-hover:text-[#ff9933]">
                <span>
                  {opt.isUnlocked
                    ? (lang === 'kn' ? 'ಪೂಜೆ ಆರಂಭಿಸಿ' : 'Open Pooja Steps')
                    : (lang === 'kn' ? 'ಅನ್‌ಲಾಕ್ ಮಾಡಿ ಆರಂಭಿಸಿ' : 'Unlock & Start Pooja')}
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

