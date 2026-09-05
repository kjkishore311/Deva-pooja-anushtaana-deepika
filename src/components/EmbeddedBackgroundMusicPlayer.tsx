import React, { useEffect, useRef } from 'react';
import { Language } from '../types';
import { Music, Volume2, VolumeX, Pause, Play } from 'lucide-react';

interface EmbeddedBackgroundMusicPlayerProps {
  lang: Language;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const EmbeddedBackgroundMusicPlayer: React.FC<EmbeddedBackgroundMusicPlayerProps> = ({
  lang,
  isPlaying,
  onTogglePlay,
}) => {
  const youtubeVideoId = 'QZqvHozeCVk';
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Hidden audio iframe URL with autoplay when isPlaying
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=${
    isPlaying ? '1' : '0'
  }&mute=${isPlaying ? '0' : '1'}&loop=1&playlist=${youtubeVideoId}&playsinline=1&rel=0`;

  return (
    <>
      {/* Off-screen hidden YouTube audio iframe for Madhwarayara Devataarchane */}
      <div className="fixed -left-[9999px] -top-[9999px] w-1 h-1 opacity-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          title="Sri Madhwarayara Devataarchane Background Music"
          allow="autoplay; encrypted-media"
          className="w-1 h-1"
        />
      </div>

      {/* Floating mini pill control when playing or minimized */}
      <div className="fixed bottom-16 right-4 sm:bottom-6 sm:right-6 z-40 transition-all">
        <button
          id="btn-floating-bg-music-toggle"
          onClick={onTogglePlay}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md text-xs font-sans font-semibold transition-all active:scale-95 ${
            isPlaying
              ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] shadow-[0_0_15px_rgba(255,153,51,0.4)] animate-pulse'
              : 'bg-[#250a0a]/90 hover:bg-[#3d1111] text-[#fef3c7]/80 border-[#ffd700]/25'
          }`}
          title={
            lang === 'kn'
              ? 'ಶ್ರೀ ಮಧ್ವರಾಯರ ದೇವತಾರ್ಚನೆ ಹಿನ್ನೆಲೆ ಸಂಗೀತ ಆನ್/ಆಫ್'
              : 'Sri Madhwarayara Devataarchane Background Music On/Off'
          }
        >
          <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="hidden xs:inline truncate max-w-[140px] sm:max-w-none">
            {lang === 'kn'
              ? isPlaying
                ? 'ದೇವತಾರ್ಚನೆ ಸಂಗೀತ ನುಡಿಯುತ್ತಿದೆ'
                : 'ದೇವತಾರ್ಚನೆ ಸಂಗೀತ'
              : isPlaying
              ? 'Devataarchane Playing'
              : 'Devataarchane Music'}
          </span>
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <Play className="w-3 h-3 text-[#ff9933] shrink-0" />
          )}
        </button>
      </div>
    </>
  );
};
