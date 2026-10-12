import React, { useState } from 'react';
import { Language } from '../types';
import {
  Flame,
  Hand,
  Layers,
  Calendar,
  Scroll,
  HelpCircle,
  Sparkles,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';

export type TabType = 'darshan' | 'pooja' | 'panchanga' | 'mudras' | 'samagri' | 'ekadashi' | 'suktas' | 'qna' | 'sandhyavandane' | 'guru-stuti';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
  lang: Language;
  onOpenSupport?: () => void;
  onOpenAnjaniputra?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
  lang,
  onOpenSupport,
  onOpenAnjaniputra,
}) => {
  // Toggle state to hide or view the navigation icons on the left side
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <aside aria-label="Quick navigation" className="fixed left-2 sm:left-3 top-1/2 -translate-y-1/2 z-40 flex items-center select-none pointer-events-auto">
      {/* Left-Aligned Docked Navigation Panel */}
      {isOpen && <div id="quick-navigation-options" className="flex items-center">
        <div className="bg-[#1a0505]/95 backdrop-blur-xl border border-[#ffd700]/30 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-[0_10px_30px_rgba(0,0,0,0.85)] flex flex-col gap-1 max-h-[85vh] overflow-y-auto no-scrollbar">
          {/* Header with quick hide button */}
          <div className="flex items-center justify-between px-1.5 py-1 border-b border-[#ffd700]/15 mb-0.5">
            <span className="text-[10px] font-serif font-bold text-[#ffd700] tracking-wider">
              {lang === 'kn' ? 'ಮೆನು' : 'Menu'}
            </span>
            <button
              id="btn-nav-collapse"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#ffd700]/70 hover:text-[#ffd700] hover:bg-[#3d1111]/80 transition-all"
              title={lang === 'kn' ? 'ಮೆನು ಮರೆಮಾಡಿ' : 'Hide Menu Icons'}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Navigation Items aligned vertically on the left */}
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
              onClick={() => { onChangeTab(tab.id); setIsOpen(false); }}
                title={lang === 'kn' ? tab.labelKn : tab.labelEn}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-xl text-left transition-all relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] font-bold shadow-[0_0_12px_rgba(255,153,51,0.4)]'
                    : 'text-[#fef3c7]/75 hover:text-[#ffd700] hover:bg-[#3d1111]/60'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#1a0606]/20 text-[#1a0606]'
                      : 'bg-[#2a0c0c] text-[#ffd700] group-hover:scale-110'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <span className="text-xs font-sans whitespace-nowrap pr-1">
                  {lang === 'kn' ? tab.labelKn : tab.labelEn}
                </span>

              </button>
            );
          })}

          {/* Dedicated Support Button */}
          {onOpenSupport && (
            <button
              id="nav-tab-support-icon"
              onClick={onOpenSupport}
              title={lang === 'kn' ? 'ಸಹಾಯ & ಸಂಪರ್ಕ' : 'Support & Contact'}
              className="flex items-center gap-2 px-2 py-1.5 rounded-xl text-left transition-all text-[#ffd700] hover:bg-[#3d1111]/80 mt-1 border-t border-[#ffd700]/15 pt-1.5"
            >
              <div className="p-1.5 rounded-lg bg-[#ff9933]/20 text-[#ff9933]">
                <PhoneCall className="w-4 h-4" />
              </div>
              <span className="text-xs font-sans font-bold whitespace-nowrap">
                {lang === 'kn' ? 'ಸಹಾಯ' : 'Support'}
              </span>
            </button>
          )}

          {/* Vayu putra Shortcut */}
          {onOpenAnjaniputra && (
            <button
              id="nav-tab-anjaniputra-icon"
              onClick={onOpenAnjaniputra}
              title={lang === 'kn' ? 'ವಾಯುಪುತ್ರ ಚಾಟ್‌ಬಾಟ್' : 'Vayu putra Bot'}
              className="flex items-center gap-2 px-2 py-1.5 rounded-xl text-left transition-all text-[#ffaa44] hover:bg-[#3d1111]/80"
            >
              <img src="/images/vayuputra/hanuman-avatar.jpg" alt="" draggable={false} className="h-7 w-7 rounded-lg object-cover ring-1 ring-[#ff9933]/50" />
              <span className="text-xs font-sans font-bold whitespace-nowrap">
                {lang === 'kn' ? 'ವಾಯುಪುತ್ರ' : 'Vayu putra'}
              </span>
            </button>
          )}
        </div>
      </div>}

      {/* Floating Toggle Button to Hide or View the Left Icons */}
      {!isOpen && (
        <button
          id="btn-nav-expand-toggle"
          aria-expanded={isOpen}
          aria-controls="quick-navigation-options"
          onClick={() => setIsOpen(true)}
          className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] font-bold shadow-[0_4px_16px_rgba(255,153,51,0.5)] border border-[#ffd700] flex items-center gap-1 active:scale-95 transition-all group"
          title={lang === 'kn' ? 'ಮೆನು ಐಕಾನ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ' : 'View Navigation Icons'}
        >
          <Menu className="w-4 h-4 text-[#1a0606] group-hover:rotate-90 transition-transform" />
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}
    </aside>
  );
};
