import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { SUKTAS_DATA } from '../data/suktasData';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Scroll,
  Sparkles,
  Video,
  Headphones,
  BookOpen
} from 'lucide-react';

interface SuktaAbhishekaPlayerProps {
  lang: Language;
  stepNumber: number;
  modeName: string;
}

interface SuktaTrack {
  id: string;
  suktaDataId: string;
  nameKn: string;
  nameEn: string;
  youtubeId: string;
  youtubeUrl: string;
  descKn: string;
  descEn: string;
}

const SUKTA_TRACKS: SuktaTrack[] = [
  {
    id: 'purusha',
    suktaDataId: 'purusha_sukta',
    nameKn: 'ಶ್ರೀ ಪುರುಷ ಸೂಕ್ತಮ್',
    nameEn: 'Sri Purusha Suktam',
    youtubeId: 'kyYfT94hNU4',
    youtubeUrl: 'https://youtu.be/kyYfT94hNU4',
    descKn: 'ಅಭಿಷೇಕದ ಪ್ರಮುಖ ವೇದ ಸೂಕ್ತ - ಸಮಸ್ತ ಸೃಷ್ಟಿ ನಿಯಾಮಕ ಶ್ರೀಹರಿಯ ಆರಾಧನೆ',
    descEn: 'Primary Abhisheka Hymn to Omnipresent Supreme Lord Sri Vishnu',
  },
  {
    id: 'sri',
    suktaDataId: 'sri_sukta',
    nameKn: 'ಶ್ರೀ ಸೂಕ್ತಮ್',
    nameEn: 'Sri Suktam',
    youtubeId: '_yQs6-v0584',
    youtubeUrl: 'https://youtu.be/_yQs6-v0584',
    descKn: 'ಲಕ್ಷ್ಮೀ ಆವಾಹನೆ ಹಾಗೂ ಶುದ್ಧ ಸುವರ್ಣ-ಸಂಪತ್ತು ವೃದ್ಧಿಗಾಗಿ',
    descEn: 'Sacred Hymn to Sri Mahalakshmi for Divine Grace & Prosperity',
  },
  {
    id: 'manyu',
    suktaDataId: 'manyu_sukta',
    nameKn: 'ಶ್ರೀ ಮನ್ಯು ಸೂಕ್ತಮ್',
    nameEn: 'Sri Manyu Suktam',
    youtubeId: 'IG3J5iLzc_Y',
    youtubeUrl: 'https://youtu.be/IG3J5iLzc_Y',
    descKn: 'ಶ್ರೀ ನರಸಿಂಹದೇವರ ಅಖಂಡ ರಕ್ಷಣೆ ಹಾಗೂ ಶತ್ರು-ಭಯ ನಿವಾರಣೆಗಾಗಿ',
    descEn: 'Vedic Invocation to Lord Narasimha for Total Fearlessness',
  },
];

export const SuktaAbhishekaPlayer: React.FC<SuktaAbhishekaPlayerProps> = ({
  lang,
  stepNumber,
  modeName,
}) => {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showVideoPreview, setShowVideoPreview] = useState<boolean>(true);
  const [scriptType, setScriptType] = useState<'kn' | 'sa' | 'en'>('kn');
  const [showLyrics, setShowLyrics] = useState<boolean>(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const currentTrack = SUKTA_TRACKS[selectedTrackIndex];
  const activeSuktaData = SUKTAS_DATA.find((s) => s.id === currentTrack.suktaDataId) || SUKTAS_DATA[0];

  // Send postMessage to YouTube IFrame to Pause / Play
  const sendIframeCommand = (command: 'playVideo' | 'pauseVideo') => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: command, args: '' }),
          '*'
        );
      } catch (e) {
        // Safe catch
      }
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      sendIframeCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendIframeCommand('playVideo');
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = (index: number) => {
    setSelectedTrackIndex(index);
    setIsPlaying(true);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      sendIframeCommand('pauseVideo');
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#3d1111] via-[#250a0a] to-[#1a0606] border-2 border-[#ffd700]/40 rounded-3xl p-3.5 sm:p-5 shadow-[0_0_30px_rgba(255,153,51,0.25)] space-y-4 text-[#fef3c7]">
      {/* Top Banner Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ffd700]/15 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#ff9933] text-[#1a0606] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(255,153,51,0.4)] shrink-0">
            <Scroll className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans font-bold bg-[#ff9933]/20 text-[#ff9933] px-2 py-0.5 rounded-full border border-[#ff9933]/40 uppercase tracking-wide">
                {lang === 'kn' ? `ಹಂತ ${stepNumber} ವೇದ ಸೂಕ್ತ ಪಠಣ` : `Step ${stepNumber} Vedic Suktas`}
              </span>
              {isPlaying && (
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-sans font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {lang === 'kn' ? 'ಆಡಿಯೋ ಸಕ್ರಿಯ' : 'Vedic Audio Active'}
                </span>
              )}
            </div>
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#ffd700] mt-0.5">
              {lang === 'kn'
                ? 'ಶುದ್ಧಾಭಿಷೇಕ & ಸೂಕ್ತ ಪಠಣ (ಅಧಿಕೃತ ವೇದ ಮಂತ್ರಗಳು)'
                : 'Shuddhabhisheka & Vedic Suktas Audio Chanting'}
            </h4>
          </div>
        </div>

        {/* Script Selection Toggle */}
        <div className="flex items-center gap-1 bg-[#140404] p-1 rounded-full border border-[#ffd700]/15 self-start sm:self-auto shrink-0">
          <button
            onClick={() => setScriptType('kn')}
            className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold transition-all ${
              scriptType === 'kn' ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow' : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
            }`}
          >
            ಕನ್ನಡ
          </button>
          <button
            onClick={() => setScriptType('sa')}
            className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold transition-all ${
              scriptType === 'sa' ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow' : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
            }`}
          >
            संस्कृत
          </button>
          <button
            onClick={() => setScriptType('en')}
            className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold transition-all ${
              scriptType === 'en' ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow' : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Sukta Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {SUKTA_TRACKS.map((track, idx) => {
          const isSelected = idx === selectedTrackIndex;
          return (
            <button
              key={track.id}
              onClick={() => handleSelectTrack(idx)}
              className={`p-2.5 sm:p-3 rounded-2xl text-left border transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-gradient-to-r from-[#ff9933]/25 to-[#ffd700]/10 border-[#ffd700] shadow-[0_0_15px_rgba(255,153,51,0.25)] ring-1 ring-[#ffd700]/40'
                  : 'bg-[#140404]/70 hover:bg-[#1f0606] border-[#ffd700]/15'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-serif font-bold text-xs sm:text-sm text-[#ffd700]">
                  {lang === 'kn' ? track.nameKn : track.nameEn}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#ff9933] shadow-[0_0_6px_#ff9933]" />
                )}
              </div>
              <p className="text-[11px] text-[#fef3c7]/70 font-sans line-clamp-1 mt-0.5">
                {lang === 'kn' ? track.descKn : track.descEn}
              </p>
            </button>
          );
        })}
      </div>

      {/* Playback Controls & Video Toggle Bar */}
      <div className="bg-[#140404]/90 rounded-2xl p-3 border border-[#ffd700]/20 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleTogglePlay}
            className="px-3.5 py-1.5 rounded-full bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,153,51,0.5)] active:scale-95 transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{lang === 'kn' ? 'ಆಡಿಯೋ ನಿಲ್ಲಿಸಿ' : 'Pause Audio'}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{lang === 'kn' ? 'ಆಡಿಯೋ ಪ್ಲೇ ಮಾಡಿ' : 'Play Audio'}</span>
              </>
            )}
          </button>

          <span className="text-xs text-[#ffd700] font-serif font-semibold">
            {lang === 'kn' ? currentTrack.nameKn : currentTrack.nameEn}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle Video Preview */}
          <button
            onClick={() => setShowVideoPreview(!showVideoPreview)}
            className="px-2.5 py-1 rounded-full bg-[#250a0a] hover:bg-[#351010] text-[#fef3c7] text-xs font-sans font-medium border border-[#ffd700]/20 flex items-center gap-1 transition-all"
          >
            <Video className="w-3.5 h-3.5 text-[#ff9933]" />
            <span>
              {showVideoPreview
                ? (lang === 'kn' ? 'ವೀಡಿಯೋ ಅಡಗಿಸಿ' : 'Hide Video')
                : (lang === 'kn' ? 'ವೀಡಿಯೋ ನೋಡಿ' : 'Show Video')}
            </span>
          </button>

          {/* Toggle Lyrics */}
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="px-2.5 py-1 rounded-full bg-[#250a0a] hover:bg-[#351010] text-[#ffd700] text-xs font-sans font-medium border border-[#ffd700]/20 flex items-center gap-1 transition-all"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>
              {showLyrics
                ? (lang === 'kn' ? 'ಸಾಹಿತ್ಯ ಮುಚ್ಚಿ' : 'Hide Lyrics')
                : (lang === 'kn' ? 'ಸಾಹಿತ್ಯ ವೀಕ್ಷಿಸಿ' : 'Show Lyrics')}
            </span>
          </button>

          {/* Direct YouTube Link */}
          <a
            href={currentTrack.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-[#250a0a] text-[#ff9933] hover:text-[#ffd700] border border-[#ffd700]/20 transition-all"
            title="Open in YouTube"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded YouTube Video Container */}
      <div
        className={`relative rounded-2xl overflow-hidden border border-[#ffd700]/30 bg-black aspect-video transition-all ${
          showVideoPreview ? 'max-h-[340px]' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <iframe
          ref={iframeRef}
          key={currentTrack.youtubeId}
          src={`https://www.youtube-nocookie.com/embed/${currentTrack.youtubeId}?autoplay=1&rel=0&enablejsapi=1&playsinline=1`}
          title={currentTrack.nameEn}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>

      {/* Embedded Multi-Language Lyrics & Chanting Verses */}
      {showLyrics && activeSuktaData && (
        <div className="bg-[#140404]/90 rounded-2xl border border-[#ffd700]/25 p-3.5 sm:p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-[#ffd700]/15 pb-2">
            <div className="flex items-center gap-2">
              <Scroll className="w-4 h-4 text-[#ff9933]" />
              <span className="font-serif font-bold text-xs sm:text-sm text-[#ffd700]">
                {lang === 'kn'
                  ? `${currentTrack.nameKn} - ಪಠಣ ಸಾಹಿತ್ಯ & ಅರ್ಥ:`
                  : `${currentTrack.nameEn} - Chanting Verses & Meaning:`}
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#ff9933] bg-[#250a0a] px-2 py-0.5 rounded-full border border-[#ff9933]/30 uppercase">
              {scriptType === 'kn' ? 'ಕನ್ನಡ ಲಿಪಿ' : scriptType === 'sa' ? 'संस्कृतम्' : 'English Script'}
            </span>
          </div>

          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 no-scrollbar">
            {activeSuktaData.verses.map((verse) => (
              <div
                key={verse.vsNo}
                className="p-2.5 rounded-xl bg-[#1c0505] border border-[#ffd700]/15 space-y-1.5"
              >
                <div className="flex items-center justify-between text-[10px] text-[#ff9933] font-mono">
                  <span>{lang === 'kn' ? `ಋಕ್ ${verse.vsNo}` : `Verse ${verse.vsNo}`}</span>
                </div>
                <p className="font-serif text-xs sm:text-sm text-[#fef3c7] whitespace-pre-line leading-relaxed">
                  {scriptType === 'kn'
                    ? verse.kannada
                    : scriptType === 'sa'
                    ? verse.sanskrit
                    : verse.english}
                </p>
                <p className="text-[11px] text-[#ffd700]/70 font-sans italic border-t border-[#ffd700]/10 pt-1">
                  {lang === 'kn' ? verse.meaningKn : verse.meaningEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
