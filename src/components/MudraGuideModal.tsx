import React, { useState } from 'react';
import { MUDRAS_DATA } from '../data/mudrasData';
import { Language } from '../types';
import { MudraHandDiagram } from './MudraHandDiagram';
import { PanchaMudraMobileStepper } from './PanchaMudraMobileStepper';
import { X, Sparkles, Hand, ShieldCheck, CheckCircle, Smartphone } from 'lucide-react';

interface MudraGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialMudraId?: string;
}

export const MudraGuideModal: React.FC<MudraGuideModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialMudraId,
}) => {
  const [selectedMudraId, setSelectedMudraId] = useState<string>(
    initialMudraId || MUDRAS_DATA[0].id
  );
  // Allow toggling between Pancha Mudras mobile flow and the full 14 mudras list
  const [activeTab, setActiveTab] = useState<'pancha' | 'all'>('pancha');

  if (!isOpen) return null;

  const currentMudra = MUDRAS_DATA.find((m) => m.id === selectedMudraId) || MUDRAS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#1a0606] text-[#fef3c7] w-full max-w-3xl max-h-[92vh] rounded-3xl border border-[#ffd700]/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-4 sm:px-5 py-3.5 border-b border-[#ffd700]/15 flex items-center justify-between bg-[#250a0a]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#ff9933]/20 border border-[#ff9933]/40 text-[#ff9933]">
              <Hand className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-base sm:text-lg text-[#ff9933]">
                {lang === 'kn' ? 'ವೈದಿಕ ಪೂಜಾ ಮುದ್ರಾ ಕೈಪಿಡಿ' : 'Vedic Pooja Mudras Guide'}
              </h2>
              <p className="text-[11px] sm:text-xs text-[#ffd700]/75 font-sans">
                {lang === 'kn'
                  ? 'ಕೈ ಬೆರಳುಗಳನ್ನು ಹಿಡಿಯುವ ನಿಖರ ಶೈಲಿ ಹಾಗೂ ಆಧ್ಯಾತ್ಮಿಕ ಫಲ'
                  : 'Anatomical finger postures and spiritual meanings for daily pooja'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#3d1111] hover:bg-[#4d1717] text-[#fef3c7] border border-[#ffd700]/15 transition-colors active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector: 5 Pancha Mudras (Mobile-first) vs All 14 Mudras */}
        <div className="px-2 sm:px-4 py-2 bg-[#140404] border-b border-[#ffd700]/15 flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-1.5 bg-[#250a0a] p-1 rounded-xl border border-[#ffd700]/20 shrink-0">
            <button
              onClick={() => setActiveTab('pancha')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-sans font-semibold transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'pancha'
                  ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] shadow-md'
                  : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'kn' ? '೫ ಆವಾಹನ ಮುದ್ರೆಗಳು' : '5 Invocation Mudras'}</span>
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-sans font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] shadow-md'
                  : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
              }`}
            >
              <span>{lang === 'kn' ? 'ಎಲ್ಲಾ ೧೪ ಮುದ್ರೆಗಳು' : 'All 14 Mudras'}</span>
            </button>
          </div>

          <span className="text-[10px] text-[#ffd700]/60 hidden sm:inline font-sans shrink-0">
            {lang === 'kn' ? 'ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ' : 'Tantrasara Tradition'}
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-3 sm:p-5 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'pancha' ? (
            /* Dedicated Mobile-First Stepper for the 5 Invocation Mudras */
            <PanchaMudraMobileStepper
              lang={lang}
              activeId={selectedMudraId}
              onSelectMudra={(id) => setSelectedMudraId(id)}
              onOpenAllMudras={() => setActiveTab('all')}
            />
          ) : (
            /* Full Mudra Guide View for all 14 */
            <div className="space-y-4">
              {/* Mudra Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
                {MUDRAS_DATA.map((mudra) => (
                  <button
                    key={mudra.id}
                    onClick={() => setSelectedMudraId(mudra.id)}
                    className={`px-2.5 py-1 rounded-full text-xs font-sans whitespace-nowrap transition-all flex items-center gap-1 border ${
                      selectedMudraId === mudra.id
                        ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.4)]'
                        : 'bg-[#250a0a] text-[#fef3c7]/70 hover:text-[#fef3c7] border-[#ffd700]/10'
                    }`}
                  >
                    <span>{mudra.badge}</span>
                    <span>{lang === 'kn' ? mudra.nameKn.split(' ')[0] : mudra.nameEn.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                {/* Visual Hand Diagram Card */}
                <div className="md:col-span-5 bg-[#250a0a]/90 p-4 rounded-2xl border border-[#ffd700]/20 flex flex-col items-center justify-center text-center shadow-xl">
                  <div className="w-52 h-56 sm:w-64 sm:h-64 max-w-full rounded-2xl bg-white border-2 border-[#ff9933]/40 flex items-center justify-center mb-3 relative overflow-hidden shadow-inner p-2">
                    <MudraHandDiagram id={currentMudra.id} className="w-full h-full" showLabels={true} allowZoom />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#ff9933]/20 text-[10px] font-bold text-[#ff9933] border border-[#ff9933]/40 font-sans">
                      {currentMudra.badge}
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#ffd700]">
                    {lang === 'kn' ? currentMudra.nameKn : currentMudra.nameEn}
                  </h3>
                  <span className="text-xs text-[#ffd700]/75 font-sans mt-0.5">
                    {currentMudra.category.toUpperCase()}
                  </span>
                </div>

                {/* Mudra Instructions and Purpose */}
                <div className="md:col-span-7 space-y-3">
                  <div className="bg-[#140404]/90 border border-[#ffd700]/15 rounded-2xl p-3.5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#ff9933] uppercase tracking-wider font-sans">
                      <Hand className="w-3.5 h-3.5" />
                      <span>{lang === 'kn' ? 'ಬೆರಳುಗಳನ್ನು ಹಿಡಿಯುವ ನಿಖರ ವಿಧಾನ' : 'How Fingers Must Be Held'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fef3c7]/95 leading-relaxed font-sans">
                      {lang === 'kn' ? currentMudra.howToFormKn : currentMudra.howToFormEn}
                    </p>
                  </div>

                  <div className="bg-[#140404]/90 border border-[#ffd700]/15 rounded-2xl p-3.5 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider font-sans">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{lang === 'kn' ? 'ಆಧ್ಯಾತ್ಮಿಕ ಉದ್ದೇಶ ಮತ್ತು ಫಲ' : 'Spiritual Meaning & Purpose'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fef3c7]/90 leading-relaxed font-sans">
                      {lang === 'kn' ? currentMudra.meaningKn : currentMudra.meaningEn}
                    </p>
                    <div className="text-xs bg-emerald-950/70 text-emerald-300 px-3 py-1.5 rounded-xl border border-emerald-700/40 flex items-center gap-1.5 font-sans font-medium">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>{lang === 'kn' ? currentMudra.purposeKn : currentMudra.purposeEn}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 14 Mudras Quick Selector Grid */}
              <div className="border-t border-[#ffd700]/15 pt-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff9933] mb-2 flex items-center gap-1.5 font-sans">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'kn' ? 'ಸಮಸ್ತ ೧೪ ಪೂಜಾ ಮುದ್ರೆಗಳ ಪಟ್ಟಿ' : 'All 14 Pooja Mudras'}</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {MUDRAS_DATA.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMudraId(m.id)}
                      className={`p-2 rounded-xl text-left border transition-all flex items-center gap-2 ${
                        selectedMudraId === m.id
                          ? 'bg-[#3d1111] border-[#ff9933] text-[#ff9933] shadow-md'
                          : 'bg-[#250a0a]/70 hover:bg-[#250a0a] border-[#ffd700]/10 text-[#fef3c7]/70 hover:text-[#fef3c7]'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#140404] p-0.5 border border-[#ffd700]/15 shrink-0 flex items-center justify-center">
                        <MudraHandDiagram id={m.id} className="w-full h-full" showLabels={false} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-[#ffd700] font-sans leading-none">{m.badge}</div>
                        <div className="text-xs font-bold truncate mt-0.5 font-sans">
                          {lang === 'kn' ? m.nameKn.split(' ')[0] : m.nameEn.split(' ')[0]}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-5 py-3 border-t border-[#ffd700]/15 bg-[#250a0a] flex items-center justify-between">
          <span className="text-[11px] sm:text-xs text-[#ffd700]/70 font-sans truncate">
            {lang === 'kn' ? 'ಪೂಜೆಯ ಸಮಯದಲ್ಲಿ ಆಯಾ ಹಂತದಲ್ಲಿ ಮುದ್ರೆ ತೋರಿಸಿ' : 'Display mudras at respective ritual steps'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] font-bold text-xs font-sans transition-all active:scale-95 shadow-[0_0_12px_rgba(255,153,51,0.3)] shrink-0"
          >
            {lang === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
