import React from 'react';
import { Language } from '../types';
import { TabType } from './BottomNav';
import {
  Flame,
  Hand,
  Layers,
  Calendar,
  Scroll,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
  lang: Language;
  onOpenAnjaniputra?: () => void;
  onOpenPlayStore?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onChangeTab,
  lang,
  onOpenAnjaniputra,
  onOpenPlayStore,
}) => {
  const tabs = [
    {
      id: 'darshan' as TabType,
      labelKn: 'ದರ್ಶನ',
      labelEn: 'Darshan',
      icon: Sparkles,
      badge: '4K',
    },
    {
      id: 'pooja' as TabType,
      labelKn: 'ದೇವಪೂಜೆ',
      labelEn: 'Pooja',
      icon: Flame,
    },
    {
      id: 'panchanga' as TabType,
      labelKn: 'ಪಂಚಾಂಗ',
      labelEn: 'Panchanga',
      icon: Calendar,
    },
    {
      id: 'mudras' as TabType,
      labelKn: 'ಮುದ್ರೆಗಳು',
      labelEn: 'Mudras',
      icon: Hand,
    },
    {
      id: 'samagri' as TabType,
      labelKn: 'ಸಾಮಗ್ರಿ',
      labelEn: 'Setup',
      icon: Layers,
    },
    {
      id: 'ekadashi' as TabType,
      labelKn: 'ಏಕಾದಶಿ',
      labelEn: 'Ekadashi',
      icon: Calendar,
    },
    {
      id: 'suktas' as TabType,
      labelKn: 'ಸೂಕ್ತಗಳು',
      labelEn: 'Suktas',
      icon: Scroll,
    },
    {
      id: 'qna' as TabType,
      labelKn: 'ಸಂಶಯಗಳು',
      labelEn: 'Q&A',
      icon: HelpCircle,
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-[#140404] border-r border-[#ffd700]/15 h-[calc(100vh-64px)] overflow-y-auto sticky top-16">
      <div className="p-4 space-y-2">
        <h2 className="text-xs font-bold text-[#ffd700]/50 uppercase tracking-widest mb-4 px-2">
          {lang === 'kn' ? 'ಆಯ್ಕೆಗಳು' : 'Options'}
        </h2>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-[#ff9933]/15 text-[#ff9933] border border-[#ff9933]/30 shadow-[0_0_15px_rgba(255,153,51,0.1)]'
                  : 'text-[#fef3c7]/70 hover:bg-[#250a0a] hover:text-[#fef3c7]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-sans font-medium text-sm flex-1 text-left">
                {lang === 'kn' ? tab.labelKn : tab.labelEn}
              </span>
              {tab.badge && (
                <span className="text-[9px] bg-[#ff9933] text-[#1a0606] px-1.5 py-0.5 rounded-full font-bold font-sans">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
        
        {/* Anjaniputra Hanuman Guide Assistant */}
        {onOpenAnjaniputra && (
          <div className="pt-2">
            <button
              id="sidebar-btn-anjaniputra"
              onClick={onOpenAnjaniputra}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#2d0e0e] to-[#1f0606] hover:from-[#3d1414] hover:to-[#2a0909] border border-[#ff9933]/40 text-[#ffd700] transition-all group shadow-sm active:scale-95"
            >
              <span className="text-xl group-hover:scale-125 transition-transform inline-block">🐒</span>
              <div className="text-left flex-1">
                <div className="text-xs font-bold text-[#ff9933] font-sans">
                  {lang === 'kn' ? 'ಅಂಜನೀಪುತ್ರ' : 'Anjaniputra'}
                </div>
                <div className="text-[10px] text-[#fef3c7]/70 font-sans">
                  {lang === 'kn' ? 'ಸಂದೇಹಗಳ ಪರಿಹಾರ' : 'Ask Any Question'}
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>
          </div>
        )}

        {/* Google Play Store & Direct Android Install Link */}
        {onOpenPlayStore && (
          <div className="pt-1.5">
            <button
              id="sidebar-btn-playstore"
              onClick={onOpenPlayStore}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-[#1b0606] hover:from-emerald-900/80 hover:to-[#2b0a0a] border border-emerald-500/40 text-emerald-300 transition-all group shadow-sm active:scale-95"
            >
              <span className="text-base group-hover:scale-110 transition-transform inline-block">▶️</span>
              <div className="text-left flex-1">
                <div className="text-xs font-bold text-emerald-300 font-sans">
                  {lang === 'kn' ? 'ಪ್ಲೇ ಸ್ಟೋರ್ & ಆ್ಯಪ್' : 'Google Play Store'}
                </div>
                <div className="text-[10px] text-[#fef3c7]/70 font-sans">
                  {lang === 'kn' ? 'ಮೊಬೈಲ್‌ನಲ್ಲಿ ಇನ್‌ಸ್ಟಾಲ್' : 'Install on Android'}
                </div>
              </div>
            </button>
          </div>
        )}

        {/* LIVE Darshan Link */}
        <div className="pt-4 mt-4 border-t border-[#ffd700]/15">
          <a
            href="https://www.youtube.com/@uttaradimath/live"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all bg-red-950/40 hover:bg-red-900/60 text-red-100 border border-red-500/30 hover:border-red-500/60 group"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full h-full bg-red-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            </div>
            <span className="font-sans font-medium text-sm flex-1 text-left">
              {lang === 'kn' ? 'ಚಾತುರ್ಮಾಸ್ಯ ದರ್ಶನ (LIVE)' : 'Chaturmasya Darshan (LIVE)'}
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
};
