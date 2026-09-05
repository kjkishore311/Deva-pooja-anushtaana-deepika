import React, { useState } from 'react';
import { SUKTAS_DATA } from '../data/suktasData';
import { Language } from '../types';
import {
  Scroll,
  ExternalLink,
  Sparkles,
  Play,
  Volume2
} from 'lucide-react';

interface SuktasReaderProps {
  lang: Language;
}

export const SuktasReader: React.FC<SuktasReaderProps> = ({ lang }) => {
  const [selectedSuktaId, setSelectedSuktaId] = useState<string>(SUKTAS_DATA[0].id);
  const [scriptType, setScriptType] = useState<'kn' | 'sa' | 'en'>('kn');

  const currentSukta = SUKTAS_DATA.find((s) => s.id === selectedSuktaId) || SUKTAS_DATA[0];

  const getYoutubeEmbedUrl = (youtubeId?: string) => {
    if (!youtubeId) return null;
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&enablejsapi=1`;
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-6 text-[#fef3c7]">
      {/* Header Card */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/15 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933] shadow-[0_0_15px_rgba(255,153,51,0.3)] shrink-0">
              <Scroll className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg sm:text-2xl text-[#ff9933]">
                {lang === 'kn' ? 'ವೇದ ಸೂಕ್ತಗಳು (ಯೂಟ್ಯೂಬ್ ಪಠಣ)' : 'Vedic Suktas (YouTube Chanting)'}
              </h2>
              <p className="text-xs sm:text-sm text-[#ffd700]/70 font-sans">
                {lang === 'kn'
                  ? 'ಪುರುಷ ಸೂಕ್ತ, ಶ್ರೀ ಸೂಕ್ತ ಹಾಗೂ ಮನ್ಯು ಸೂಕ್ತಗಳ ಮೂಲ ವೇದ ಪಠಣ ಸಹಿತ'
                  : 'Purusha Sukta, Sri Sukta & Manyu Sukta with authentic Vedic chanting'}
              </p>
            </div>
          </div>

          {/* Script Selector */}
          <div className="flex items-center gap-1 bg-[#140404] p-1 rounded-full border border-[#ffd700]/15 self-start sm:self-auto shrink-0">
            <button
              onClick={() => setScriptType('kn')}
              className={`px-3 py-1 rounded-full text-xs font-sans font-semibold transition-all ${
                scriptType === 'kn' ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow' : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
              }`}
            >
              ಕನ್ನಡ
            </button>
            <button
              onClick={() => setScriptType('sa')}
              className={`px-3 py-1 rounded-full text-xs font-sans font-semibold transition-all ${
                scriptType === 'sa' ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow' : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
              }`}
            >
              संस्कृत
            </button>
            <button
              onClick={() => setScriptType('en')}
              className={`px-3 py-1 rounded-full text-xs font-sans font-semibold transition-all ${
                scriptType === 'en' ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow' : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Sukta Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 pb-0.5">
          {SUKTAS_DATA.map((sukta) => (
            <button
              key={sukta.id}
              onClick={() => setSelectedSuktaId(sukta.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold whitespace-nowrap transition-all border shrink-0 ${
                selectedSuktaId === sukta.id
                  ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.35)]'
                  : 'bg-[#3d1111]/70 hover:bg-[#3d1111] text-[#fef3c7]/80 border-[#ffd700]/10'
              }`}
            >
              {lang === 'kn' ? sukta.titleKn : sukta.titleEn}
            </button>
          ))}
        </div>
      </div>

      {/* Embedded YouTube Video for Selected Sukta */}
      {currentSukta.youtubeId && (
        <div className="bg-[#250a0a]/90 border border-[#ffd700]/25 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ffd700]/15 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
                {lang === 'kn' ? `${currentSukta.titleKn} - ವೇದ ಮಂತ್ರೋಚ್ಛಾರಣೆ (ಯೂಟ್ಯೂಬ್)` : `${currentSukta.titleEn} - Vedic Chanting Video`}
              </h3>
            </div>

            {currentSukta.youtubeUrl && (
              <a
                href={currentSukta.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#ff9933] hover:text-[#ffd700] flex items-center gap-1 font-sans transition-colors self-start sm:self-auto"
              >
                <span>{lang === 'kn' ? 'ಯೂಟ್ಯೂಬ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ' : 'Open in YouTube'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* 16:9 Responsive Video Iframe */}
          <div className="w-full relative aspect-video rounded-2xl overflow-hidden border border-[#ffd700]/20 bg-black shadow-inner">
            <iframe
              src={getYoutubeEmbedUrl(currentSukta.youtubeId)!}
              title={currentSukta.titleEn}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          <p className="text-[11px] text-[#ffd700]/70 font-sans text-center">
            {lang === 'kn'
              ? 'ಅಭಿಷೇಕ ಮಾಡುವಾಗ ಅಥವಾ ಅಧ್ಯಯನ ಮಾಡುವಾಗ ಮೇಲಿನ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೋವನ್ನು ಆಲಿಸುತ್ತಾ ಕೆಳಗಿನ ಮಂತ್ರಗಳನ್ನು ಪಠಿಸಿ.'
              : 'Listen to the Vedic chanting in the video above while following the sacred verses and meanings below.'}
          </p>
        </div>
      )}

      {/* Sukta Viniyoga & Rishi-Devata Box */}
      <div className="bg-[#250a0a]/70 border border-[#ffd700]/15 rounded-2xl p-4 sm:p-5 space-y-2 shadow-xl">
        <h3 className="font-serif font-bold text-base text-[#ff9933]">
          {lang === 'kn' ? currentSukta.titleKn : currentSukta.titleEn}
        </h3>
        <p className="text-xs text-[#fef3c7]/90 font-sans leading-relaxed">
          {lang === 'kn' ? currentSukta.overviewKn : currentSukta.overviewEn}
        </p>
        <div className="text-[11px] text-[#ffd700]/80 bg-[#140404]/80 p-3 rounded-xl border border-[#ffd700]/10 font-serif">
          <span className="font-bold text-[#ff9933]">ವಿನಿಯೋಗಃ: </span>
          {lang === 'kn' ? currentSukta.viniyogaKn : currentSukta.viniyogaEn}
        </div>
      </div>

      {/* Verses List (Without priest voice buttons, clean and bounded) */}
      <div className="space-y-4">
        {currentSukta.verses.map((vs) => (
          <div
            key={vs.vsNo}
            className="rounded-2xl border transition-all p-4 sm:p-5 space-y-3 shadow-xl bg-[#250a0a]/60 border-[#ffd700]/10 hover:border-[#ffd700]/25"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/40 text-xs font-bold flex items-center justify-center font-serif shrink-0">
                {vs.vsNo}
              </span>
              <span className="text-xs font-bold text-[#ffd700] font-serif">
                {lang === 'kn' ? `ಮಂತ್ರ ${vs.vsNo}` : `Verse ${vs.vsNo}`}
              </span>
            </div>

            {/* Verse Text */}
            <div className="bg-[#140404]/90 p-4 rounded-2xl border border-[#ffd700]/10 shadow-inner overflow-x-auto">
              <p className="font-serif text-base sm:text-lg text-[#ff9933] leading-loose whitespace-pre-line tracking-wide">
                {scriptType === 'kn'
                  ? vs.kannada
                  : scriptType === 'sa'
                  ? vs.sanskrit
                  : vs.english}
              </p>
            </div>

            {/* Meaning */}
            <div className="text-xs text-[#fef3c7]/80 bg-[#140404]/50 p-3 rounded-xl border border-[#ffd700]/10 leading-relaxed font-sans">
              <span className="font-bold text-[#ffd700] block mb-0.5 font-sans">
                {lang === 'kn' ? 'ಅರ್ಥ:' : 'Meaning:'}
              </span>
              {lang === 'kn' ? vs.meaningKn : vs.meaningEn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
