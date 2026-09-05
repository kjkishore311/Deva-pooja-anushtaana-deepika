import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import {
  Music,
  Play,
  Pause,
  ExternalLink,
  Volume2,
  VolumeX,
  Sparkles,
  Bell,
  Radio,
  HelpCircle,
} from 'lucide-react';
import { audioSynth } from '../services/audioSynth';

interface DevotionalMusicCardProps {
  lang: Language;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPlayStateChange?: (playing: boolean) => void;
}

export const DevotionalMusicCard: React.FC<DevotionalMusicCardProps> = ({
  lang,
  isPlaying,
  onTogglePlay,
  onPlayStateChange,
}) => {
  const [audioSource, setAudioSource] = useState<'youtube' | 'ambient'>('youtube');
  const [volume, setVolume] = useState<number>(0.9);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStartedInteracting, setHasStartedInteracting] = useState(false);
  const [bellTested, setBellTested] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const bellIntervalRef = useRef<number | null>(null);

  const youtubeVideoId = 'QZqvHozeCVk';
  const youtubeUrl = `https://youtu.be/${youtubeVideoId}`;

  // Handle ambient Web Audio drone when active
  useEffect(() => {
    if (isPlaying && audioSource === 'ambient') {
      audioSynth.toggleTanpura(true, isMuted ? 0.001 : volume * 0.25);

      // Periodically chime sacred bell every 20 seconds for meditative temple atmosphere
      if (!bellIntervalRef.current) {
        bellIntervalRef.current = window.setInterval(() => {
          if (!isMuted) {
            audioSynth.playBell(volume * 0.6);
          }
        }, 22000);
      }
    } else {
      audioSynth.toggleTanpura(false);
      if (bellIntervalRef.current) {
        clearInterval(bellIntervalRef.current);
        bellIntervalRef.current = null;
      }
    }

    return () => {
      if (bellIntervalRef.current) {
        clearInterval(bellIntervalRef.current);
      }
    };
  }, [isPlaying, audioSource, volume, isMuted]);

  // Test sound to confirm device audio is functioning
  const handleTestSound = () => {
    audioSynth.playBell(volume);
    setBellTested(true);
    setTimeout(() => setBellTested(false), 2000);
  };

  const handlePlayToggle = () => {
    setHasStartedInteracting(true);
    onTogglePlay();
  };

  // Construct iframe embed src with strict parameters ensuring audio output
  // When isPlaying is true, autoplay=1 and mute=0 are engaged
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=${
    isPlaying && audioSource === 'youtube' ? '1' : '0'
  }&mute=${isMuted ? '1' : '0'}&loop=1&playlist=${youtubeVideoId}&origin=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.origin : ''
  )}&playsinline=1&rel=0`;

  return (
    <div className="bg-gradient-to-b from-[#250a0a] to-[#180505] rounded-3xl border-2 border-[#ffd700]/30 p-4 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md space-y-4 text-[#fef3c7]">
      {/* Header Info & Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#ffd700]/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#ff9933]/25 to-[#ffd700]/15 border border-[#ff9933]/50 flex items-center justify-center text-[#ff9933] shadow-[0_0_15px_rgba(255,153,51,0.25)] shrink-0">
            <Music className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif font-bold text-base sm:text-lg text-[#ffd700]">
                {lang === 'kn'
                  ? 'ಶ್ರೀ ಮಧ್ವರಾಯರ ದೇವತಾರ್ಚನೆ / ಭಕ್ತಿ ಸಂಗೀತ'
                  : 'Sri Madhwarayara Devataarchane - Devotional Chants'}
              </h2>
              {isPlaying && (
                <span className="flex items-center gap-1 text-[10px] font-sans font-bold bg-[#ff9933] text-[#1a0606] px-2.5 py-0.5 rounded-full animate-pulse shadow-sm">
                  <Sparkles className="w-2.5 h-2.5" />
                  {lang === 'kn' ? 'ನಾದ ಪ್ರಸಾರ' : 'Audible'}
                </span>
              )}
            </div>
            <p className="text-xs text-[#fef3c7]/75 font-sans mt-0.5">
              {lang === 'kn'
                ? 'ಪೂಜಾ ಸಮಯದಲ್ಲಿ ಮನಸ್ಸಿಗೆ ದಿವ್ಯ ಶಾಂತಿ ಮೂಡಿಸುವ ಪರಮ ಪಾವನ ಸಂಗೀತ (URL: youtu.be/QZqvHozeCVk)'
                : 'Sacred background music and Vedic ambiance to accompany your daily Deva Pooja'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-auto justify-end">
          {/* Quick Sound Test (Ghanta Nada) */}
          <button
            onClick={handleTestSound}
            className="px-3 py-2 rounded-xl text-xs font-sans font-semibold flex items-center gap-1.5 bg-[#140404] hover:bg-[#200606] text-[#ffd700] border border-[#ffd700]/30 transition-all active:scale-95 shadow-sm"
            title={lang === 'kn' ? 'ಸ್ಪೀಕರ್ ಧ್ವನಿ ಪರೀಕ್ಷೆ' : 'Test Speaker Audio'}
          >
            <Bell className={`w-3.5 h-3.5 text-[#ff9933] ${bellTested ? 'animate-spin' : ''}`} />
            <span>{bellTested ? (lang === 'kn' ? 'ಧ್ವನಿ ಕೇಳುತ್ತಿದೆ ✓' : 'Bell Resonating ✓') : (lang === 'kn' ? 'ಧ್ವನಿ ಪರೀಕ್ಷೆ' : 'Test Sound')}</span>
          </button>

          {/* Primary Play / Pause Button */}
          <button
            onClick={handlePlayToggle}
            className={`px-5 py-2 rounded-xl text-xs font-sans font-bold flex items-center gap-2 transition-all active:scale-95 shadow-md ${
              isPlaying
                ? 'bg-[#ff9933] text-[#1a0606] border border-[#ffd700] shadow-[0_0_20px_rgba(255,153,51,0.5)]'
                : 'bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-[#1a0606] border border-[#ffd700]/40'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>{lang === 'kn' ? 'ಸಂಗೀತ ವಿರಾಮ' : 'Pause Music'}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{lang === 'kn' ? 'ಸಂಗೀತ ಆಲಿಸಿ (Play)' : 'Play Devotional Music'}</span>
              </>
            )}
          </button>

          {/* YouTube Link */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={lang === 'kn' ? 'YouTube ನಲ್ಲಿ ತೆರೆಯಿರಿ' : 'Open in YouTube'}
            className="p-2.5 rounded-xl bg-[#140404] hover:bg-[#200606] text-[#ffd700]/80 hover:text-[#ffd700] border border-[#ffd700]/25 transition-all text-xs"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Audio Mode Tabs & Volume Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#140404]/90 p-3 rounded-2xl border border-[#ffd700]/20 text-xs font-sans">
        <div className="flex items-center gap-1.5">
          <span className="text-[#ffd700]/70 text-[11px] mr-1">{lang === 'kn' ? 'ಆಡಿಯೋ ಮೂಲ:' : 'Audio Mode:'}</span>
          <button
            onClick={() => setAudioSource('youtube')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              audioSource === 'youtube'
                ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow-sm'
                : 'text-[#fef3c7]/70 hover:text-[#ffd700]'
            }`}
          >
            {lang === 'kn' ? 'ಯೂಟ್ಯೂಬ್ ಕೀರ್ತನೆ (YouTube)' : 'YouTube Chants'}
          </button>
          <button
            onClick={() => setAudioSource('ambient')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
              audioSource === 'ambient'
                ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow-sm'
                : 'text-[#fef3c7]/70 hover:text-[#ffd700]'
            }`}
          >
            <Radio className="w-3 h-3" />
            <span>{lang === 'kn' ? 'ದೇವಸ್ಥಾನ ತಾನ್ಪುರ & ಘಂಟಾನಾದ' : 'Temple Tanpura & Bells'}</span>
          </button>
        </div>

        {/* Volume Slider & Mute Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1 rounded-md text-[#ffd700] hover:text-[#ff9933]"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setVolume(val);
              if (val > 0) setIsMuted(false);
            }}
            className="w-20 sm:w-28 accent-[#ff9933] cursor-pointer"
            title="Volume Control"
          />
          <span className="font-mono text-[11px] text-[#ffd700] w-8">
            {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
          </span>
        </div>
      </div>

      {/* Embedded High-Fidelity Video / Audio Player Container */}
      <div className="relative w-full aspect-video sm:h-72 rounded-2xl overflow-hidden border-2 border-[#ffd700]/30 shadow-2xl bg-black">
        {audioSource === 'youtube' ? (
          <>
            <iframe
              ref={iframeRef}
              src={iframeSrc}
              title="Sri Madhwarayara Devataarchane Devotional Music"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Click to Play / Unmute Audio Overlay (Helps bypass strict browser autoplay audio restrictions) */}
            {!isPlaying && (
              <div
                onClick={handlePlayToggle}
                className="absolute inset-0 z-10 bg-black/65 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer p-4 text-center group transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-[#ff9933] text-[#1a0606] flex items-center justify-center shadow-[0_0_30px_rgba(255,153,51,0.6)] group-hover:scale-110 transition-transform mb-3">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#ffd700]">
                  {lang === 'kn' ? 'ಭಕ್ತಿ ಸಂಗೀತ ಆರಂಭಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Tap to Play Devotional Music'}
                </h3>
                <p className="text-xs text-[#fef3c7]/80 font-sans max-w-sm mt-1">
                  {lang === 'kn'
                    ? 'ಬ್ರೌಸರ್ ನಿಯಮಾನುಸಾರ ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ ಧ್ವನಿ ಸ್ಪಷ್ಟವಾಗಿ ಕೇಳಿಸುತ್ತದೆ.'
                    : 'Click to start playback with crystal-clear devotional audio.'}
                </p>
              </div>
            )}
          </>
        ) : (
          /* Ambient Live Synth Mode */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1a0606] to-[#0c0202] p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ff9933]/20 border border-[#ffd700]/40 flex items-center justify-center text-[#ff9933] shadow-[0_0_25px_rgba(255,153,51,0.3)]">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#ffd700]">
                {lang === 'kn' ? 'ಗರ್ಭಗುಡಿ ತಾನ್ಪುರ ನಾದ & ಘಂಟಾನಾದ' : 'Temple Sanctum Tanpura & Sacred Bell Nada'}
              </h3>
              <p className="text-xs text-[#fef3c7]/80 font-sans max-w-md mt-1">
                {lang === 'kn'
                  ? 'ಬ್ರೌಸರ್ ನೇರ ಆಡಿಯೋ ಮೂಲಕ ಧ್ಯಾನಸ್ಥ ತಾನ್ಪುರ ಲಯ ಹಾಗೂ ಪ್ರತಿ ಕ್ಷಣದ ಪಾವನ ಘಂಟಾನಾದ ಮೊಳಗುತ್ತದೆ.'
                  : 'Direct browser Web Audio generating rich meditative harmonic drone and periodic brass temple bell chimes.'}
              </p>
            </div>
            <button
              onClick={handlePlayToggle}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] font-bold text-xs font-sans shadow-lg active:scale-95"
            >
              {isPlaying ? (lang === 'kn' ? 'ನಾದ ನಿಲ್ಲಿಸಿ' : 'Stop Ambient Sound') : (lang === 'kn' ? 'ನಾದ ಆರಂಭಿಸಿ' : 'Start Ambient Sound')}
            </button>
          </div>
        )}
      </div>

      {/* Helpful Audio Tip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-sans text-[#ffd700]/80 bg-[#140404]/80 px-4 py-2.5 rounded-xl border border-[#ffd700]/15 gap-2">
        <div className="flex items-center gap-1.5 text-[#fef3c7]/85">
          <HelpCircle className="w-3.5 h-3.5 text-[#ff9933] shrink-0" />
          <span>
            {lang === 'kn'
              ? 'ಧ್ವನಿ ಕೇಳಿಸದಿದ್ದರೆ: ಮೇಲಿನ "ಧ್ವನಿ ಪರೀಕ್ಷೆ" ಬಟನ್ ಒತ್ತಿ, ಅಥವಾ ವೀಡಿಯೋ ಪ್ಲೇಯರ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಅನ್‌ಮ್ಯೂಟ್ (Unmute) ಮಾಡಿ.'
              : 'If audio is not audible: click "Test Sound" or click directly inside the video player to unmute your browser.'}
          </span>
        </div>
        <div className="font-mono text-[#ff9933] text-[10px]">
          YouTube ID: {youtubeVideoId}
        </div>
      </div>
    </div>
  );
};
