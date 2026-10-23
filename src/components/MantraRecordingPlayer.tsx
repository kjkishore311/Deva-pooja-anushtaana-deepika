import React, { useEffect, useRef, useState } from 'react';
import { Headphones, Youtube } from 'lucide-react';
import { Language } from '../types';
import { getMantraRecordings } from '../data/poojaRecordings';
import { humanAudioChanter } from '../services/humanAudioChanter';

interface MantraRecordingPlayerProps {
  mantraId: string;
  lang: Language;
  onPlay?: () => void;
  showVideoLink?: boolean;
}

const SPEEDS = [0.75, 0.85, 1];

export const MantraRecordingPlayer: React.FC<MantraRecordingPlayerProps> = ({ mantraId, lang, onPlay, showVideoLink = false }) => {
  const clips = getMantraRecordings(mantraId);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [clipIndex, setClipIndex] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed, clipIndex]);

  if (clips.length === 0) return null;
  const clip = clips[Math.min(clipIndex, clips.length - 1)];

  // Only one recording (or the AI voice) should sound at a time.
  const handlePlay = () => {
    humanAudioChanter.stop();
    onPlay?.();
    document.querySelectorAll<HTMLAudioElement>('audio[data-pooja-recording]').forEach((el) => {
      if (el !== audioRef.current) el.pause();
    });
  };

  return (
    <div className="rounded-xl border border-emerald-400/25 bg-emerald-950/20 p-3 space-y-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-bold font-sans text-emerald-300">
          <Headphones className="w-4 h-4" />
          {lang === 'kn' ? 'ಪಂಡಿತರ ಧ್ವನಿಮುದ್ರಣ ಕೇಳಿ' : 'Listen to the Pundit Recording'}
        </span>
        {showVideoLink && (
          <a
            href={clip.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-sans font-semibold text-[#fef3c7]/70 hover:text-[#ff9933] transition-colors"
          >
            <Youtube className="w-3.5 h-3.5 text-red-400" />
            {lang === 'kn' ? 'ಈ ಭಾಗವನ್ನು YouTube ನಲ್ಲಿ ನೋಡಿ' : 'Watch this part on YouTube'}
          </a>
        )}
      </div>

      {clips.length > 1 && (
        <div className="flex flex-wrap gap-1.5">
          {clips.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setClipIndex(idx)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold border transition-all ${
                idx === clipIndex
                  ? 'bg-emerald-400 text-[#1a0606] border-emerald-300'
                  : 'bg-[#140404] text-[#fef3c7]/70 border-emerald-400/20 hover:text-[#fef3c7]'
              }`}
            >
              {idx + 1}. {c.titleEn}
            </button>
          ))}
        </div>
      )}

      <div className="text-[11px] font-sans text-[#fef3c7]/70">
        <span className="font-semibold text-[#ffd700]">{clip.titleEn}</span>
        <span className="ml-1.5 italic">— {clip.subtitle}</span>
      </div>

      <audio
        key={clip.src}
        ref={audioRef}
        data-pooja-recording
        src={clip.src}
        controls
        preload="none"
        onPlay={handlePlay}
        className="w-full h-10"
      />

      <div className="flex items-center gap-1 text-xs">
        <span className="text-[11px] text-[#ffd700]/70 font-sans">{lang === 'kn' ? 'ಗತಿ:' : 'Speed:'}</span>
        {SPEEDS.map((s) => (
          <button
            key={s}
            onClick={() => setSpeed(s)}
            className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold transition-all ${
              speed === s ? 'bg-emerald-400 text-[#1a0606] font-bold' : 'text-[#fef3c7]/60 hover:text-[#fef3c7]'
            }`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
};
