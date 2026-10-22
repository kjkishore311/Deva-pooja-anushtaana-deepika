import React, { useState } from 'react';
import { Language } from '../types';
import { TabType } from './BottomNav';
import {
  Flame,
  Hand,
  Layers,
  Calendar,
  Scroll,
  HelpCircle,
  Sparkles,
  Menu,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
  lang: Language;
  onOpenAnjaniputra?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onChangeTab,
  lang,
  onOpenAnjaniputra,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tabs = [
    {
      id: 'guru-stuti' as TabType,
      labelKn: 'ಮಧ್ವ ಗುರು ಸ್ತುತಿ',
      labelEn: 'Guru Stuti',
      icon: Scroll,
    },
    {
      id: 'sandhyavandane' as TabType,
      labelKn: 'ಸಂಧ್ಯಾವಂದನೆ',
      labelEn: 'Sandhyavandane',
      icon: Scroll,
    },
    {
      id: 'darshan' as TabType,
      labelKn: 'ಮುಖಪುಟ',
      labelEn: 'Main Page',
      icon: Sparkles,
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
    <aside aria-label={lang === 'kn' ? 'ಮೆನು' : 'Main navigation'} className={`hidden lg:flex flex-col shrink-0 ${isExpanded ? 'w-64' : 'w-16'} bg-[#140404] border-r border-[#ffd700]/15 h-[calc(100vh-64px)] overflow-y-auto sticky top-16`}>
      <button onClick={() => setIsExpanded((current) => !current)} aria-expanded={isExpanded} aria-controls="desktop-navigation-options" aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'} className="m-3 flex items-center justify-center gap-2 rounded-xl border border-[#ffd700]/25 p-2 text-[#ffd700] focus-visible:outline-2 focus-visible:outline-[#ffd700]">{isExpanded ? <ChevronLeft size={20} /> : <Menu size={20} />}{isExpanded && <span className="text-sm">{lang === 'kn' ? 'ಮೆನು ಮರೆಮಾಡಿ' : 'Collapse menu'}</span>}</button>
      {isExpanded && <div id="desktop-navigation-options" className="p-4 space-y-2">
        <h2 className="text-xs font-bold text-[#ffd700]/50 uppercase tracking-widest mb-4 px-2">
          {lang === 'kn' ? 'ಆಯ್ಕೆಗಳು' : 'Options'}
        </h2>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => { onChangeTab(tab.id); setIsExpanded(false); }}
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
            </button>
          );
        })}
        
        {/* Vayu putra Hanuman Guide Assistant */}
        {onOpenAnjaniputra && (
          <div className="pt-2">
            <button
              id="sidebar-btn-anjaniputra"
              onClick={onOpenAnjaniputra}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#2d0e0e] to-[#1f0606] hover:from-[#3d1414] hover:to-[#2a0909] border border-[#ff9933]/40 text-[#ffd700] transition-all group shadow-sm active:scale-95"
            >
              <img src="/images/vayuputra/hanuman-sanjeevini-avatar.jpg" alt="" draggable={false} className="h-8 w-8 rounded-full object-cover ring-1 ring-[#ff9933]/60 group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <div className="text-xs font-bold text-[#ff9933] font-sans">
                  {lang === 'kn' ? 'ವಾಯುಪುತ್ರ' : 'Vayu putra'}
                </div>
                <div className="text-[10px] text-[#fef3c7]/70 font-sans">
                  {lang === 'kn' ? 'ಸಂದೇಹಗಳ ಪರಿಹಾರ' : 'Ask Any Question'}
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
              {lang === 'kn' ? 'ಉತ್ತರಾದಿಮಠ ಅಧ್ಯಾತ್ಮವಾಣಿ ಚಾನೆಲ್' : 'Uttaradimath Adhyatmavani channel'}
            </span>
          </a>
        </div>
      </div>}
    </aside>
  );
};
