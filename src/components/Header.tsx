import React from 'react';
import { Language, PoojaMode } from '../types';
import { SacredMasthead } from './SacredMasthead';
import { Volume2, VolumeX, Sparkles, Languages, Clock, Flame, Lock, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onSelectLang?: (lang: Language) => void;
  mode: PoojaMode;
  onSelectMode: (mode: PoojaMode) => void;
  currentStepIndex?: number;
  totalSteps?: number;
  onOpenDarshan?: () => void;
  isBgMusicPlaying?: boolean;
  onToggleBgMusic?: () => void;
  activeTab?: string;
  onSelectTab?: (tab: any) => void;
  unlockedTiers?: PoojaMode[];
  onOpenAnjaniputra?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onSelectLang,
  mode,
  onSelectMode,
  currentStepIndex = 0,
  totalSteps = 16,
  onOpenDarshan,
  isBgMusicPlaying = false,
  onToggleBgMusic,
  activeTab = 'darshan',
  onSelectTab,
  unlockedTiers = ['10min'],
  onOpenAnjaniputra,
}) => {
  const is30MinUnlocked = unlockedTiers.includes('30min') || unlockedTiers.includes('full');
  const isFullUnlocked = unlockedTiers.includes('full');

  const handleLangChange = (target: Language) => {
    if (onSelectLang) {
      onSelectLang(target);
    } else if (lang !== target) {
      onToggleLang();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#250a0a]/95 text-[#fef3c7] border-b border-[#ffd700]/15 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Sacred Masthead: Hari Sarvottama • Vayu Jeevottama & Shree Uttaradi Matha */}
      <SacredMasthead lang={lang} />

      {/* Center-Aligned App Name Block */}
      <div className="max-w-6xl mx-auto px-3 pt-2.5 pb-1.5 text-center">
        <div 
          className="inline-flex items-center justify-center gap-2 sm:gap-3 cursor-pointer select-none transition-transform hover:scale-[1.01]"
          onClick={onOpenDarshan}
          title={lang === 'kn' ? 'ಮುಖಪುಟ ದರ್ಶನ' : 'Home Darshan'}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ff9933] flex items-center justify-center shadow-[0_0_15px_rgba(255,153,51,0.5)] text-[#1a0606] font-serif font-bold text-base sm:text-xl shrink-0">
            <span className="leading-none">ॐ</span>
          </div>
          <div className="text-center">
            <h1 className="font-serif font-bold tracking-wider text-base sm:text-2xl text-[#ffd700] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {lang === 'kn' ? 'ದೇವಪೂಜಾ ಅನುಷ್ಠಾನ' : 'Deva Pooja Anushthana'}
            </h1>
          </div>
        </div>
        <p className="text-[10px] sm:text-xs text-[#ffd700]/75 font-serif tracking-widest uppercase mt-0.5">
          {lang === 'kn'
            ? '॥ ಶ್ರೀ ಉತ್ತರಾದಿ ಮಠ • ತಂತ್ರಸಾರ ಸಂಗ್ರಹ ಪದ್ಧತಿ ॥'
            : '|| Sri Uttaradi Matha • Tantrasara Sangraha Tradition ||'}
        </p>
      </div>

      {/* Options Row Below App Name: Centered with Darshan, Pooja, Music, Language and Anjaniputra */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-1.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 border-t border-[#ffd700]/10">
        {/* Darshan Trigger */}
        {onOpenDarshan && (
          <button
            id="btn-darshan-cinematic-header"
            onClick={onOpenDarshan}
            title={lang === 'kn' ? 'ದಿವ್ಯ ದರ್ಶನ' : 'Divine Darshan'}
            className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-bold text-xs flex items-center gap-1 sm:gap-1.5 border transition-all active:scale-95 shrink-0 ${
              activeTab === 'darshan'
                ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] shadow-[0_0_12px_rgba(255,153,51,0.4)]'
                : 'bg-[#ff9933]/15 hover:bg-[#ff9933]/30 text-[#ffd700] border-[#ffd700]/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff9933] shrink-0 animate-spin" />
            <span className="font-serif">{lang === 'kn' ? 'ದರ್ಶನ' : 'Darshan'}</span>
          </button>
        )}

        {/* Deva Pooja Trigger */}
        {onSelectTab && (
          <button
            id="btn-pooja-header"
            onClick={() => onSelectTab('pooja')}
            title={lang === 'kn' ? 'ದೇವಪೂಜೆ ಕ್ರಮ' : 'Deva Pooja Steps'}
            className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-bold text-xs flex items-center gap-1 sm:gap-1.5 border transition-all active:scale-95 shrink-0 ${
              activeTab === 'pooja'
                ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] shadow-[0_0_12px_rgba(255,153,51,0.4)]'
                : 'bg-[#3d1111] hover:bg-[#4d1717] text-[#ffd700] border-[#ffd700]/30'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-[#ff9933] shrink-0" />
            <span className="font-serif">{lang === 'kn' ? 'ದೇವಪೂಜೆ' : 'Pooja'}</span>
          </button>
        )}

        {/* Background Music Toggle */}
        <button
          id="btn-bg-music-toggle"
          onClick={onToggleBgMusic}
          title={lang === 'kn' ? 'ಹಿನ್ನೆಲೆ ಸಂಗೀತ' : 'Background Music'}
          className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium flex items-center gap-1 sm:gap-1.5 border transition-all active:scale-95 shrink-0 ${
            isBgMusicPlaying
              ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.4)] animate-pulse'
              : 'bg-[#3d1111] hover:bg-[#4d1717] text-[#fef3c7] border-[#ffd700]/20'
          }`}
        >
          {isBgMusicPlaying ? <Volume2 className="w-3.5 h-3.5 shrink-0" /> : <VolumeX className="w-3.5 h-3.5 opacity-60 shrink-0" />}
          <span className="font-sans text-[11px]">
            {lang === 'kn' ? (isBgMusicPlaying ? 'ಸಂಗೀತ ಆಫ್' : 'ಸಂಗೀತ ಆನ್') : (isBgMusicPlaying ? 'Music Off' : 'Music On')}
          </span>
        </button>

        {/* Language Switch Options (Kannada / English) */}
        <div className="flex items-center bg-[#140404] p-0.5 rounded-full border border-[#ffd700]/30 shrink-0 shadow-inner">
          <button
            id="btn-lang-kn"
            onClick={() => handleLangChange('kn')}
            className={`px-2.5 py-1 rounded-full text-xs font-sans font-bold transition-all ${
              lang === 'kn'
                ? 'bg-[#ff9933] text-[#1a0606] shadow-[0_0_8px_rgba(255,153,51,0.5)]'
                : 'text-[#ffd700]/70 hover:text-[#ffd700]'
            }`}
            title="ಕನ್ನಡ ಭಾಷೆ"
          >
            ಕನ್ನಡ
          </button>
          <button
            id="btn-lang-en"
            onClick={() => handleLangChange('en')}
            className={`px-2.5 py-1 rounded-full text-xs font-sans font-bold transition-all ${
              lang === 'en'
                ? 'bg-[#ff9933] text-[#1a0606] shadow-[0_0_8px_rgba(255,153,51,0.5)]'
                : 'text-[#ffd700]/70 hover:text-[#ffd700]'
            }`}
            title="English Language"
          >
            English
          </button>
        </div>

        {/* Anjaniputra Chatbot Quick Access */}
        {onOpenAnjaniputra && (
          <button
            id="btn-open-anjaniputra-header"
            onClick={onOpenAnjaniputra}
            className="px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa44] hover:to-[#ffe055] text-[#1a0606] font-bold text-xs flex items-center gap-1.5 border border-[#ffd700] shadow-[0_0_12px_rgba(255,153,51,0.4)] active:scale-95 transition-all group shrink-0"
            title={lang === 'kn' ? 'ಅಂಜನೀಪುತ್ರ ಚಾಟ್‌ಬಾಟ್ ಮಾರ್ಗದರ್ಶಿ' : 'Anjaniputra Guide Chatbot'}
          >
            <span className="text-sm group-hover:scale-125 transition-transform inline-block">🐒</span>
            <span className="font-sans font-bold">
              {lang === 'kn' ? 'ಅಂಜನೀಪುತ್ರ' : 'Anjaniputra'}
            </span>
          </button>
        )}
      </div>

      {/* Ritual Mode Bar - ONLY VISIBLE WHEN USER CLICKS ON DEVAPOOJA BUTTON */}
      {activeTab === 'pooja' && (
        <div className="bg-[#1a0606]/90 border-t border-[#ffd700]/10 px-4 py-2 transition-all duration-300">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[#ff9933] uppercase tracking-widest hidden sm:flex items-center gap-1 font-sans">
                <Clock className="w-3 h-3" /> {lang === 'kn' ? 'ಕಾಲಾವಧಿ:' : 'Mode:'}
              </span>

              {/* 10 Min Mode (Free) */}
              <button
                id="mode-btn-10min"
                onClick={() => onSelectMode('10min')}
                className={`px-3 py-1 rounded-full text-xs font-sans transition-all flex items-center gap-1.5 border ${
                  mode === '10min'
                    ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.3)]'
                    : 'bg-[#3d1111]/70 hover:bg-[#3d1111] text-[#fef3c7]/80 border-[#ffd700]/10'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>{lang === 'kn' ? '೧೦ ನಿಮಿಷ (ಸಂಕ್ಷಿಪ್ತ)' : '10-Min Quick'}</span>
              </button>

              {/* 30 Min Mode (₹150 Seva) */}
              <button
                id="mode-btn-30min"
                onClick={() => onSelectMode('30min')}
                className={`px-3 py-1 rounded-full text-xs font-sans transition-all flex items-center gap-1.5 border ${
                  mode === '30min'
                    ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.3)]'
                    : 'bg-[#3d1111]/70 hover:bg-[#3d1111] text-[#fef3c7]/80 border-[#ffd700]/10'
                }`}
              >
                <span>{lang === 'kn' ? '೩೦ ನಿಮಿಷ (ದೈನಂದಿನ)' : '30-Min Standard'}</span>
                {is30MinUnlocked ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <span className="text-[10px] bg-[#1a0606] px-1.5 py-0.2 rounded text-[#ff9933] font-mono flex items-center gap-0.5 border border-[#ff9933]/30">
                    <Lock className="w-2.5 h-2.5" /> ₹150
                  </span>
                )}
              </button>

              {/* Full Paddhati Mode (₹350 Seva) */}
              <button
                id="mode-btn-full"
                onClick={() => onSelectMode('full')}
                className={`px-3 py-1 rounded-full text-xs font-sans transition-all flex items-center gap-1.5 border ${
                  mode === 'full'
                    ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.3)]'
                    : 'bg-[#3d1111]/70 hover:bg-[#3d1111] text-[#fef3c7]/80 border-[#ffd700]/10'
                }`}
              >
                <span>{lang === 'kn' ? 'ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರ' : 'Full Tantrasara'}</span>
                {isFullUnlocked ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <span className="text-[10px] bg-[#1a0606] px-1.5 py-0.2 rounded text-[#ffd700] font-mono flex items-center gap-0.5 border border-[#ffd700]/30">
                    <Lock className="w-2.5 h-2.5" /> ₹350
                  </span>
                )}
              </button>
            </div>

            <div className="text-[11px] text-[#ffd700]/80 whitespace-nowrap font-sans font-medium flex items-center gap-1.5 bg-[#250a0a] px-2.5 py-0.5 rounded-full border border-[#ffd700]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                {lang === 'kn'
                  ? `ಹಂತ ${currentStepIndex + 1} / ${totalSteps}`
                  : `Step ${currentStepIndex + 1} of ${totalSteps}`}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
