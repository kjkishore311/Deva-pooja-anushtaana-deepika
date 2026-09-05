import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface SequentialDarshanVideoPlayerProps {
  lang: Language;
  onStartPooja?: () => void;
  onTogglePhotos?: () => void;
  showPhotoOption?: boolean;
  isActive?: boolean; // When false (user navigated to other tabs), pause video & auto-rotate!
}

const DARSHAN_SHORTS = [
  { id: 'DOBxYEsUalQ', title: 'Short 1' },
  { id: 'vuZMagmXfg4', title: 'Short 2' },
  { id: 'XMFnYGLxUR8', title: 'Short 3' },
  { id: 'bgqdehciL7g', title: 'Short 4' },
  { id: 'TGRzFPZFqnQ', title: 'Short 5' },
  { id: 'kf1_AQgSzyY', title: 'Short 6' },
];

export const SequentialDarshanVideoPlayer: React.FC<SequentialDarshanVideoPlayerProps> = ({
  lang,
  onStartPooja,
  onTogglePhotos,
  showPhotoOption = false,
  isActive = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isExpandedFit, setIsExpandedFit] = useState<boolean>(false);
  const [rotationSeconds, setRotationSeconds] = useState<number>(15);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const currentVideo = DARSHAN_SHORTS[currentIndex];

  // Auto-rotate the videos sequentially every 15 seconds ONLY when active on landing page
  useEffect(() => {
    if (!isAutoRotate || !isActive) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DARSHAN_SHORTS.length);
    }, rotationSeconds * 1000);

    return () => clearInterval(interval);
  }, [isAutoRotate, isActive, rotationSeconds, currentIndex]);

  // When tab becomes inactive, pause playback via postMessage
  useEffect(() => {
    if (!isActive && iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
          '*'
        );
      } catch (e) {
        // Safe catch
      }
    }
  }, [isActive]);

  const handleNextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % DARSHAN_SHORTS.length);
  };

  const handlePrevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + DARSHAN_SHORTS.length) % DARSHAN_SHORTS.length);
  };

  const toggleAudio = () => {
    setIsAudioEnabled((prev) => !prev);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotate((prev) => !prev);
  };

  // Construct iframe embed URL for YouTube Shorts with HD clarity and responsive player parameters
  // vq=hd1080 ensures maximum pixel clarity without compression artifacts
  const embedUrl = `https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&mute=${
    isAudioEnabled ? '0' : '1'
  }&enablejsapi=1&rel=0&playsinline=1&modestbranding=1&controls=1&vq=hd1080`;

  return (
    <div className="w-full max-w-full overflow-hidden bg-black rounded-3xl border border-[#ffd700]/30 shadow-[0_12px_45px_rgba(0,0,0,0.8)] relative group transition-all">
      {/* Video Container (Responsive display with expandable fit to prevent pixel distortion) */}
      <div className={`relative w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden bg-gradient-to-b from-[#1c0505] via-black to-[#140404] transition-all ${
        isExpandedFit ? 'min-h-[460px] sm:min-h-[600px]' : 'min-h-[380px] sm:min-h-[480px] max-h-[580px]'
      }`}>
        {/* Frame container: fits video with pixel clarity preserved */}
        <div
          className={`relative rounded-2xl overflow-hidden border border-[#ffd700]/40 shadow-[0_0_35px_rgba(255,153,51,0.25)] bg-black transition-all duration-300 ${
            isExpandedFit
              ? 'w-full max-w-2xl sm:max-w-3xl aspect-[9/16] sm:aspect-auto sm:h-[580px]'
              : 'w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] max-h-[520px]'
          }`}
        >
          {/* Only render active playing iframe when landing tab is active to pause completely when user navigates away */}
          {isActive ? (
            <iframe
              ref={iframeRef}
              key={`${currentVideo.id}-${isAudioEnabled}-${isActive}`}
              src={embedUrl}
              title={`Darshan Video ${currentIndex + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <div className="absolute inset-0 bg-black/90 flex items-center justify-center">
              <span className="text-xs text-[#ffd700]/60 font-sans">
                {lang === 'kn' ? 'ವೀಡಿಯೋ ವಿರಾಮಗೊಂಡಿದೆ' : 'Video paused'}
              </span>
            </div>
          )}
        </div>

        {/* Floating Controls: Sound Toggle, Expand/Fit, and Auto-Rotate */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 flex items-center gap-1.5 sm:gap-2">
          {/* Expand/Fit View Toggle to prevent pixel distortion and fit widget perfectly */}
          <button
            id="btn-darshan-expand-toggle"
            onClick={() => setIsExpandedFit(!isExpandedFit)}
            className="p-2 sm:px-2.5 sm:py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1 transition-all shadow-lg backdrop-blur-md active:scale-95 border bg-black/75 hover:bg-black text-[#ffd700] border-[#ffd700]/40"
            title={
              lang === 'kn'
                ? isExpandedFit
                  ? 'ಕಿರಿದಾದ ನೋಟ (Standard Fit)'
                  : 'ವಿಸ್ತೃತ ನೋಟ (Expanded Fit)'
                : isExpandedFit
                ? 'Standard Fit'
                : 'Expand Video Fit'
            }
          >
            {isExpandedFit ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-[#ffd700]" />
                <span className="hidden sm:inline text-[11px]">{lang === 'kn' ? 'ಸಹಜ ನೋಟ' : 'Standard'}</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-[#ffd700]" />
                <span className="hidden sm:inline text-[11px]">{lang === 'kn' ? 'ವಿಸ್ತರಿಸಿ' : 'Expand'}</span>
              </>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            id="btn-darshan-sound-toggle"
            onClick={toggleAudio}
            className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1.5 transition-all shadow-lg backdrop-blur-md active:scale-95 border ${
              isAudioEnabled
                ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] shadow-[0_0_15px_rgba(255,153,51,0.5)]'
                : 'bg-black/75 hover:bg-black text-[#ffd700] border-[#ffd700]/40'
            }`}
            title={lang === 'kn' ? 'ಧ್ವನಿ ಆನ್ / ಮ್ಯೂಟ್' : 'Sound On / Mute'}
          >
            {isAudioEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-[#1a0606] animate-pulse" />
                <span className="hidden sm:inline">{lang === 'kn' ? 'ಧ್ವನಿ ಆನ್' : 'Sound On'}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#ffd700]" />
                <span className="hidden sm:inline">{lang === 'kn' ? 'ಮ್ಯೂಟ್' : 'Muted'}</span>
              </>
            )}
          </button>

          {/* Auto-rotate status indicator & toggle */}
          <button
            id="btn-darshan-autorotate-toggle"
            onClick={toggleAutoRotate}
            className={`p-2 rounded-full text-xs transition-all shadow-lg backdrop-blur-md border ${
              isAutoRotate
                ? 'bg-[#140404]/80 text-emerald-400 border-emerald-500/40 hover:bg-[#140404]'
                : 'bg-black/75 text-[#fef3c7]/60 border-[#ffd700]/20 hover:text-[#ffd700]'
            }`}
            title={
              lang === 'kn'
                ? isAutoRotate
                  ? 'ಸ್ವಯಂ-ತಿರುಗುವಿಕೆ ಆನ್ (೧೫ ಸೆ.)'
                  : 'ಸ್ವಯಂ-ತಿರುಗುವಿಕೆ ನಿಲ್ಲಿಸಲಾಗಿದೆ'
                : isAutoRotate
                ? 'Auto-rotating (15s)'
                : 'Auto-rotate Paused'
            }
          >
            {isAutoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Floating Navigation Controls (Left & Right arrows) */}
        <button
          id="btn-darshan-prev-arrow"
          onClick={handlePrevVideo}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/40 flex items-center justify-center transition-all backdrop-blur-md active:scale-90 shadow-xl z-20"
          title={lang === 'kn' ? 'ಹಿಂದಿನ ವೀಡಿಯೋ' : 'Previous Video'}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          id="btn-darshan-next-arrow"
          onClick={handleNextVideo}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/40 flex items-center justify-center transition-all backdrop-blur-md active:scale-90 shadow-xl z-20"
          title={lang === 'kn' ? 'ಮುಂದಿನ ವೀಡಿಯೋ' : 'Next Video'}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom clean pagination dots (1 to 6) without commentary text */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-full border border-[#ffd700]/25 backdrop-blur-md">
          {DARSHAN_SHORTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all rounded-full ${
                currentIndex === idx
                  ? 'w-5 h-2 bg-[#ff9933] shadow-[0_0_8px_rgba(255,153,51,0.8)]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
              title={`Video ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
