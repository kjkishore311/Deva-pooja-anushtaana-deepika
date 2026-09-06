import React, { useState, useEffect } from 'react';
import { PoojaStep, Language, PoojaMode, MantraItem } from '../types';
import { POOJA_STEPS } from '../data/poojaData';
import { MUDRAS_DATA } from '../data/mudrasData';
import { audioSynth } from '../services/audioSynth';
import { humanAudioChanter } from '../services/humanAudioChanter';
import confetti from 'canvas-confetti';
import { SudhaPanditaMasterVideosPlayer } from './SudhaPanditaMasterVideosPlayer';
import {
  AbhishekaWatersProtocol,
  NaivedyaServingProtocol,
  ShankhabhramanaVisualProtocol,
} from './CompleteVersionRitualVisuals';
import { TarkshyadiPanchaMudraWidget } from './TarkshyadiPanchaMudraWidget';
import { SuktaAbhishekaPlayer } from './SuktaAbhishekaPlayer';
import { PaidRecordingAccess } from './PaidRecordingAccess';
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Hand,
  Bell,
  Sparkles,
  Layers,
  AlertTriangle,
  Flame,
  Volume2,
  BookOpen,
  Share2,
  Lock,
  Music2,
  Radio,
  Timer,
  Clock,
  Check,
} from 'lucide-react';

interface GuidedPoojaViewProps {
  lang: Language;
  mode: PoojaMode;
  onOpenMudra: (mudraId: string) => void;
  onOpenEkadashi: () => void;
  onOpenSamagri: () => void;
  onOpenPrint: () => void;
  isUnlocked?: boolean;
  onRequestUnlock?: () => void;
  onOpenSupport?: () => void;
}

export const GuidedPoojaView: React.FC<GuidedPoojaViewProps> = ({
  lang,
  mode,
  onOpenMudra,
  onOpenEkadashi,
  onOpenSamagri,
  onOpenPrint,
  isUnlocked = true,
  onRequestUnlock,
  onOpenSupport,
}) => {
  // Filter steps based on selected duration mode
  const activeSteps = POOJA_STEPS.filter((step) => step.modes.includes(mode));

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [completedStepIds, setCompletedStepIds] = useState<Record<string, boolean>>({});
  const [scriptType, setScriptType] = useState<'kn' | 'sa' | 'en'>('kn');
  const [isPlayingMantra, setIsPlayingMantra] = useState<boolean>(false);
  const [isBufferingAudio, setIsBufferingAudio] = useState<boolean>(false);
  const [activeMantraId, setActiveMantraId] = useState<string | null>(null);
  const [repeatTarget, setRepeatTarget] = useState<number>(1);
  const [currentChantLoop, setCurrentChantLoop] = useState<number>(0);
  const [chantSpeed, setChantSpeed] = useState<number>(0.85); // 0.85 is dignified, slow, meditative
  const [showCompletionCard, setShowCompletionCard] = useState<boolean>(false);
  const [isNarratingStep, setIsNarratingStep] = useState<boolean>(false);
  const [isTanpuraActive, setIsTanpuraActive] = useState<boolean>(false);
  const [showTarkshyaInStep, setShowTarkshyaInStep] = useState<boolean>(false);
  const [activeCompleteDiagram, setActiveCompleteDiagram] = useState<'abhisheka' | 'naivedya' | 'arati' | null>(null);

  // 10-Minute Daily Free Pooja timer
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStep = activeSteps[currentIndex] || activeSteps[0];

  // Reset current index if mode changes and index exceeds length
  useEffect(() => {
    if (currentIndex >= activeSteps.length) {
      setCurrentIndex(0);
    }
  }, [mode, activeSteps.length, currentIndex]);

  // Stop mantra and narration when changing steps or mode
  useEffect(() => {
    humanAudioChanter.stop();
    setIsPlayingMantra(false);
    setIsBufferingAudio(false);
    setActiveMantraId(null);
    setIsNarratingStep(false);
  }, [currentIndex, mode]);

  const toggleStepCompleted = (stepId: string) => {
    setCompletedStepIds((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  const handleToggleTanpura = () => {
    const newState = humanAudioChanter.toggleTanpura();
    setIsTanpuraActive(newState);
  };

  const handleTogglePriestNarration = async () => {
    if (isNarratingStep) {
      humanAudioChanter.stop();
      setIsNarratingStep(false);
      return;
    }

    if (isPlayingMantra) {
      humanAudioChanter.stop();
      setIsPlayingMantra(false);
      setIsBufferingAudio(false);
      setActiveMantraId(null);
    }

    const instructions = lang === 'kn' ? currentStep.instructionsKn : currentStep.instructionsEn;
    const title = lang === 'kn' ? currentStep.titleKn : currentStep.titleEn;
    const fullText = `${title}. ${instructions.join('. ')}`;

    setIsNarratingStep(true);
    await humanAudioChanter.chant(fullText, {
      mantraId: `guidance_${currentStep.id}`,
      speed: 'slow',
      playbackRate: 0.85,
      onStart: () => setIsNarratingStep(true),
      onEnd: () => setIsNarratingStep(false),
      onError: () => setIsNarratingStep(false),
    });
  };

  const handleNext = () => {
    if (currentIndex < activeSteps.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Completed all steps
      triggerCelebration();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const triggerCelebration = () => {
    setShowCompletionCard(true);
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#d97706', '#b45309', '#fbbf24', '#fef3c7'],
      });
    } catch {
      // noop
    }
  };

  const handlePlayMantra = async (mantra: MantraItem) => {
    if ((isPlayingMantra || isBufferingAudio) && activeMantraId === mantra.id) {
      humanAudioChanter.stop();
      setIsPlayingMantra(false);
      setIsBufferingAudio(false);
      setActiveMantraId(null);
      return;
    }

    const textToChant =
      scriptType === 'kn'
        ? mantra.mantraKannada
        : scriptType === 'sa'
        ? mantra.mantraSanskrit
        : mantra.mantraEnglish;

    setActiveMantraId(mantra.id);
    setIsBufferingAudio(true);
    setIsPlayingMantra(false);
    setCurrentChantLoop(1);

    const loopCount = repeatTarget || mantra.repetitionCount || 1;

    await humanAudioChanter.chant(textToChant, {
      mantraId: mantra.id,
      lang: scriptType === 'kn' ? 'kn' : 'sa',
      speed: chantSpeed <= 0.75 ? 'very-slow' : 'slow',
      playbackRate: chantSpeed,
      repeatCount: loopCount,
      onStart: () => {
        setIsBufferingAudio(false);
        setIsPlayingMantra(true);
      },
      onEnd: () => {
        setIsPlayingMantra(false);
        setIsBufferingAudio(false);
        setActiveMantraId(null);
        setCurrentChantLoop(0);
      },
      onError: () => {
        setIsPlayingMantra(false);
        setIsBufferingAudio(false);
        setActiveMantraId(null);
      },
    });
  };

  const progressPercent = Math.round(
    (Object.values(completedStepIds).filter(Boolean).length / activeSteps.length) * 100
  );

  if (!isUnlocked) {
    const minPrice = mode === '30min' ? 150 : 350;
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-[#fef3c7] text-center space-y-6">
        <div className="bg-[#250a0a] border border-[#ffd700]/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
          <div className="w-16 h-16 rounded-3xl bg-[#ff9933]/20 border border-[#ff9933]/50 flex items-center justify-center text-[#ff9933] mx-auto shadow-[0_0_20px_rgba(255,153,51,0.3)]">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h2 className="font-serif font-bold text-2xl text-[#ffd700]">
              {lang === 'kn'
                ? mode === '30min'
                  ? '೩೦ ನಿಮಿಷ ದೈನಂದಿನ ಪೂಜಾ ಆವೃತ್ತಿ'
                  : 'ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರ ಸಂಗ್ರಹ ಪದ್ಧತಿ'
                : mode === '30min'
                ? '30-Min Daily Pooja Tier'
                : 'Complete Tantrasara Paddhati'}
            </h2>
            <p className="text-sm text-[#fef3c7]/80 font-sans mt-2 max-w-md mx-auto">
              {lang === 'kn'
                ? mode === '30min'
                  ? 'ಈ ೩೦ ನಿಮಿಷದ ಆವೃತ್ತಿಯನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಕನಿಷ್ಠ ₹150 ಅಥವಾ ₹200 ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಇಷ್ಟಾನುಸಾರ ಮೊತ್ತವನ್ನು ಸೇವಾ ದಕ್ಷಿಣೆಯಾಗಿ ಪಾವತಿಸಿ ಸುಧಾ ಪಂಡಿತ ಪೂಜ್ಯ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿಯವರ ೨ ಲೈವ್ ವೀಡಿಯೋಗಳು & ಪ್ರತಿಯೊಂದು ಹಂತದ ಗುರುವಾಣಿ ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.'
                  : `ಈ ಆವೃತ್ತಿಯನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಕನಿಷ್ಠ ₹${minPrice} ಸೇವಾ ದಕ್ಷಿಣೆಯನ್ನು ಯಾವುದೇ ಆನ್‌ಲೈನ್ ಪಾವತಿ (Google Pay, UPI, ಕಾರ್ಡ್ ಅಥವಾ ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್) ಮೂಲಕ ಪಾವತಿಸಿ.`
                : mode === '30min'
                ? 'To unlock this 30-min tier, please submit a dakshina of ₹150 or any amount > ₹200 to access the 2 Master Live Videos & step-by-step priest voice guidance by Sudha Pandita Sri Venugopalacharya Joshi.'
                : `To unlock this tier, please submit a dakshina of at least ₹${minPrice} via any online payment method (Google Pay, UPI, Card, or Net Banking).`}
            </p>
          </div>

          <div className="bg-[#140404] border border-[#ffd700]/20 rounded-2xl p-4 text-xs font-sans text-[#ffd700]/80 space-y-1 text-left max-w-md mx-auto">
            <div className="flex justify-between">
              <span className="text-[#fef3c7]/70">{lang === 'kn' ? 'ಸ್ವೀಕೃತಿ UPI ID:' : 'Beneficiary UPI ID:'}</span>
              <span className="font-mono font-bold text-[#ff9933]">kjkishore311@okhdfcbank</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#fef3c7]/70">{lang === 'kn' ? 'ಕನಿಷ್ಠ ಮೊತ್ತ:' : 'Minimum Dakshina:'}</span>
              <span className="font-bold text-emerald-400">₹{minPrice}</span>
            </div>
            <p className="text-[11px] text-[#fef3c7]/60 pt-1 border-t border-[#ffd700]/10">
              {lang === 'kn'
                ? 'ಪುರೋಹಿತ ಮಂತ್ರ ಧ್ವನಿ, ಶೋಡಶೋಪಚಾರ ಹಾಗೂ ತಂತ್ರಸಾರ ಪದ್ಧತಿ ಪೂರ್ಣ ಲಭ್ಯವಾಗುತ್ತದೆ.'
                : 'Includes authentic Male Hindu Priest recitation and all Shastric steps.'}
            </p>
          </div>

          <button
            onClick={onRequestUnlock}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] hover:to-[#ffe033] text-[#1a0606] font-bold font-sans text-sm flex items-center justify-center gap-2 mx-auto shadow-[0_0_25px_rgba(255,153,51,0.4)] active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'kn' ? `₹${minPrice} ಪಾವತಿಸಿ ಅನ್‌ಲಾಕ್ ಮಾಡಿ` : `Pay ₹${minPrice} to Unlock Now`}</span>
          </button>
        </div>
      </div>
    );
  }

  const isSuktaAbhishekaStep =
    (mode === '30min' && currentIndex === 7) ||
    (mode === '10min' && currentIndex === 4) ||
    (mode === 'full' && currentIndex === 7) ||
    currentStep.id === 'step_shuddhabhisheka';

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-5 text-[#fef3c7]">
      {/* Top Interactive Progress & Step Indicator */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/15 rounded-2xl p-4 shadow-xl backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#ff9933] text-[#1a0606] font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(255,153,51,0.35)] font-serif">
              {currentIndex + 1}
            </span>
            <div>
              <div className="text-[10px] text-[#ff9933] font-bold uppercase tracking-widest font-sans">
                {lang === 'kn' ? 'ಪ್ರಸ್ತುತ ಹಂತ' : 'Current Step'} ({currentIndex + 1}/{activeSteps.length})
              </div>
              <div className="text-base font-bold text-[#fef3c7] font-serif truncate max-w-[280px] sm:max-w-md">
                {lang === 'kn' ? currentStep.titleKn : currentStep.titleEn}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-bold text-[#ff9933] bg-[#3d1111] border border-[#ffd700]/20 px-3 py-1 rounded-full font-sans">
              {progressPercent}% {lang === 'kn' ? 'ಸಂಪನ್ನ' : 'Done'}
            </span>
            <button
              onClick={onOpenPrint}
              className="text-xs font-semibold text-[#fef3c7] hover:text-[#ff9933] bg-[#3d1111] hover:bg-[#4d1717] border border-[#ffd700]/20 px-3 py-1 rounded-full flex items-center gap-1.5 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#ff9933]" />
              <span className="font-sans">{lang === 'kn' ? 'ಮುದ್ರಣ ಕಾರ್ಡ್' : '1-Page Card'}</span>
            </button>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-[#140404] rounded-full h-2 overflow-hidden border border-[#ffd700]/10 shadow-inner">
          <div
            className="bg-[#ff9933] h-full rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,153,51,0.8)]"
            style={{ width: `${Math.max(progressPercent, 4)}%` }}
          />
        </div>
      </div>

      {/* 10-Minute Daily Free Pooja Master Dashboard & Step Quick-Jump */}
      {mode === '10min' && (
        <div className="bg-gradient-to-r from-[#2d0e0e] via-[#200808] to-[#140404] border-2 border-[#ffd700]/30 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4 backdrop-blur-md animate-fade-in">
          {/* Header row with badges & live timer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ffd700]/15 pb-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-sans tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>{lang === 'kn' ? '೧೦೦% ಉಚಿತ ಆವೃತ್ತಿ' : '100% Free Version'}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-sans tracking-wide bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/30 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#ffd700]" />
                  <span>~೧೦-೧೨ {lang === 'kn' ? 'ನಿಮಿಷಗಳು' : 'mins'}</span>
                </span>
                <span className="text-[11px] text-[#ffd700]/70 font-serif">
                  {lang === 'kn' ? 'ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ ಸಂಕ್ಷಿಪ್ತ ಪದ್ಧತಿ' : 'Tantrasarokta Essential Vidhi'}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#ffd700]">
                {lang === 'kn' ? '೧೦ ನಿಮಿಷ ನಿತ್ಯ ದೇವಪೂಜಾ ಮಾರ್ಗದರ್ಶಿ' : '10-Minute Daily Deva Pooja Guide'}
              </h3>
              <p className="text-xs text-[#fef3c7]/80 font-sans">
                {lang === 'kn'
                  ? 'ನಿತ್ಯ ಕಚೇರಿ ಅಥವಾ ದಿನನಿತ್ಯದ ಕಾರ್ಯಗಳ ಮುನ್ನ ಭಕ್ತಿಯಿಂದ ನೆರವೇರಿಸಬಹುದಾದ ಸರಳ ಹಾಗೂ ಸಂಪೂರ್ಣ ವಿಧಾನ.'
                  : 'Authentic brief puja method designed for busy daily schedules, students & working professionals.'}
              </p>
            </div>

            {/* Built-in Daily Pooja Timer */}
            <div className="flex items-center gap-2 bg-[#140404] px-3.5 py-2 rounded-2xl border border-[#ffd700]/25 shadow-inner self-start sm:self-auto shrink-0">
              <Timer className={`w-4 h-4 ${isTimerRunning ? 'text-[#ff9933] animate-spin' : 'text-[#ffd700]/70'}`} />
              <div className="font-mono font-bold text-base text-[#ffd700] tracking-wider min-w-[50px]">
                {formatTimer(timerSeconds)}
              </div>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="px-2.5 py-1 rounded-xl bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] font-sans font-bold text-[11px] transition-all active:scale-95 shadow-sm"
              >
                {isTimerRunning ? (lang === 'kn' ? 'ವಿರಾಮ' : 'Pause') : (lang === 'kn' ? 'ಪ್ರಾರಂಭ' : 'Start')}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(0);
                }}
                className="p-1 rounded-lg text-[#fef3c7]/60 hover:text-[#fef3c7] transition-all"
                title={lang === 'kn' ? 'ಟೈಮರ್ ಮರುಹೊಂದಿಸಿ' : 'Reset Timer'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Step-by-Step Quick Jump Horizontal Strip */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-sans text-[#ffd700]/80">
              <span className="font-semibold flex items-center gap-1">
                <span>{lang === 'kn' ? 'ಹಂತಗಳ ನೇರ ಆಯ್ಕೆ (ಯಾವುದೇ ಹಂತಕ್ಕೆ ನೇರವಾಗಿ ಜಂಪ್ ಮಾಡಿ):' : 'Direct Step Navigation (Tap any step to jump):'}</span>
              </span>
              <span>
                {currentIndex + 1} / {activeSteps.length} {lang === 'kn' ? 'ಹಂತಗಳು' : 'steps'}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar">
              {activeSteps.map((step, idx) => {
                const isCurrent = idx === currentIndex;
                const isCompleted = !!completedStepIds[step.id];

                // Short friendly labels for the 10-minute chips
                const shortLabel = lang === 'kn'
                  ? step.titleKn.split('(')[0].replace(/^\d+\.\s*/, '').trim()
                  : step.titleEn.split('&')[0].split('(')[0].replace(/^\d+\.\s*/, '').trim();

                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans font-bold transition-all shrink-0 active:scale-95 border ${
                      isCurrent
                        ? 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] border-[#ffd700] shadow-[0_0_12px_rgba(255,153,51,0.5)] scale-105'
                        : isCompleted
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 hover:bg-emerald-900/60'
                        : 'bg-[#180505] text-[#fef3c7]/80 hover:text-[#ffd700] border-[#ffd700]/15 hover:border-[#ffd700]/40'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-serif ${
                      isCurrent ? 'bg-[#1a0606] text-[#ffd700]' : isCompleted ? 'bg-emerald-400 text-[#1a0606]' : 'bg-[#2a0c0c] text-[#fef3c7]'
                    }`}>
                      {isCompleted ? '✓' : idx + 1}
                    </span>
                    <span className="whitespace-nowrap max-w-[130px] truncate">{shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 30-Minute Tier Exclusive: 2 Master Recorded Videos by Sudha Pandita Sri Venugopalacharya Joshi */}
      {mode === '30min' && (
        <SudhaPanditaMasterVideosPlayer lang={lang} currentStepIndex={currentIndex} />
      )}

      {/* Complete Version Exclusive: 3 Shastric Protocol Diagrams (Image 4, 3, 5) */}
      {mode === 'full' && (
        <div className="bg-[#250a0a]/90 border border-[#ffd700]/25 rounded-2xl p-3.5 space-y-2.5 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#ff9933] font-sans flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'kn' ? 'ಸಂಪೂರ್ಣ ಆವೃತ್ತಿಯ ೩ ಶಾಸ್ತ್ರೋಕ್ತ ರೇಖಾಚಿತ್ರಗಳು (Images 3, 4, 5):' : 'Complete Version 3 Shastric Protocols (Images 3, 4, 5):'}
            </span>
            <span className="text-[10px] text-[#ffd700]/70 font-sans">
              {lang === 'kn' ? 'ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ ನಕ್ಷೆಗಳು' : 'Tantrasara Visuals'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => setActiveCompleteDiagram(activeCompleteDiagram === 'abhisheka' ? null : 'abhisheka')}
              className={`px-3 py-2 rounded-xl text-xs font-sans font-bold flex items-center justify-between border transition-all ${
                activeCompleteDiagram === 'abhisheka' || currentStep.id === 'step_shuddhabhisheka'
                  ? 'bg-[#3d1111] text-[#ffd700] border-[#ff9933] shadow-md'
                  : 'bg-[#140404] text-[#fef3c7]/80 hover:text-[#fef3c7] border-[#ffd700]/15'
              }`}
            >
              <span>{lang === 'kn' ? '೧. ಜಲ ವಿನ್ಯಾಸ (Image 4)' : '1. Abhisheka Waters (Img 4)'}</span>
              <span className="text-[10px] text-[#ff9933]">{activeCompleteDiagram === 'abhisheka' ? '▲' : '▼'}</span>
            </button>

            <button
              onClick={() => setActiveCompleteDiagram(activeCompleteDiagram === 'naivedya' ? null : 'naivedya')}
              className={`px-3 py-2 rounded-xl text-xs font-sans font-bold flex items-center justify-between border transition-all ${
                activeCompleteDiagram === 'naivedya' || currentStep.id === 'step_maha_naivedya'
                  ? 'bg-[#3d1111] text-[#ffd700] border-[#ff9933] shadow-md'
                  : 'bg-[#140404] text-[#fef3c7]/80 hover:text-[#fef3c7] border-[#ffd700]/15'
              }`}
            >
              <span>{lang === 'kn' ? '೨. ನೈವೇದ್ಯ ವಿಭಾಗ A-G (Image 3)' : '2. Naivedya Layout A-G (Img 3)'}</span>
              <span className="text-[10px] text-[#ff9933]">{activeCompleteDiagram === 'naivedya' ? '▲' : '▼'}</span>
            </button>

            <button
              onClick={() => setActiveCompleteDiagram(activeCompleteDiagram === 'arati' ? null : 'arati')}
              className={`px-3 py-2 rounded-xl text-xs font-sans font-bold flex items-center justify-between border transition-all ${
                activeCompleteDiagram === 'arati' || currentStep.id === 'step_mahamangalarati'
                  ? 'bg-[#3d1111] text-[#ffd700] border-[#ff9933] shadow-md'
                  : 'bg-[#140404] text-[#fef3c7]/80 hover:text-[#fef3c7] border-[#ffd700]/15'
              }`}
            >
              <span>{lang === 'kn' ? '೩. ಮಂಗಳಾರತಿ ೩ ಪಥ (Image 5)' : '3. Mangalarati Orbits (Img 5)'}</span>
              <span className="text-[10px] text-[#ff9933]">{activeCompleteDiagram === 'arati' ? '▲' : '▼'}</span>
            </button>
          </div>

          {activeCompleteDiagram === 'abhisheka' && (
            <div className="pt-2 animate-fade-in">
              <AbhishekaWatersProtocol lang={lang} />
            </div>
          )}
          {activeCompleteDiagram === 'naivedya' && (
            <div className="pt-2 animate-fade-in">
              <NaivedyaServingProtocol lang={lang} />
            </div>
          )}
          {activeCompleteDiagram === 'arati' && (
            <div className="pt-2 animate-fade-in">
              <ShankhabhramanaVisualProtocol lang={lang} />
            </div>
          )}
        </div>
      )}

      <PaidRecordingAccess lang={lang} mode={mode} isUnlocked={isUnlocked} />

      {/* Vedic Sukta Abhisheka Player: Automatically plays for Step 8 (30min & full) & Step 5 (10min) */}
      {isSuktaAbhishekaStep && (
        <SuktaAbhishekaPlayer
          lang={lang}
          stepNumber={currentIndex + 1}
          modeName={mode}
        />
      )}

      {/* Main Step Execution Card */}
      <div className="bg-[#250a0a]/60 border border-[#ffd700]/15 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md">
        {/* Subtle decorative background watermark */}
        <div className="absolute -top-12 -right-12 text-[#ff9933]/5 font-serif text-9xl select-none pointer-events-none">
          ॐ
        </div>

        {/* Step Header */}
        <div className="border-b border-[#ffd700]/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-[#ff9933]/20 border border-[#ff9933]/30 text-[#ff9933] font-sans">
                {currentStep.category.toUpperCase()}
              </span>
              <span className="text-xs text-[#ffd700]/80 font-sans flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#ff9933]" /> ~{currentStep.durationEstimateMinutes} {lang === 'kn' ? 'ನಿಮಿಷ' : 'min'}
              </span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#fef3c7] tracking-wide">
              {lang === 'kn' ? currentStep.titleKn : currentStep.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-[#ffd700]/70 font-sans mt-0.5 italic">
              {lang === 'kn' ? currentStep.subtitleKn : currentStep.subtitleEn}
            </p>
          </div>

          {/* Mark Completed Checkbox Button */}
          <button
            onClick={() => toggleStepCompleted(currentStep.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold font-sans flex items-center gap-2 border transition-all active:scale-95 shadow-sm shrink-0 ${
              completedStepIds[currentStep.id]
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'bg-[#3d1111] hover:bg-[#4d1717] text-[#fef3c7] border-[#ffd700]/20'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${completedStepIds[currentStep.id] ? 'text-emerald-400' : 'text-[#ffd700]/60'}`} />
            <span>
              {completedStepIds[currentStep.id]
                ? (lang === 'kn' ? 'ಹಂತ ಪೂರ್ಣಗೊಂಡಿದೆ' : 'Completed')
                : (lang === 'kn' ? 'ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ' : 'Mark as Done')}
            </span>
          </button>
        </div>

        {/* Ekadashi Special Warning Callout if applicable */}
        {currentStep.ekadashiDifferenceKn && (
          <div className="bg-[#2d0e0e] border border-[#ff9933]/40 rounded-2xl p-3.5 flex items-start gap-3 text-[#fef3c7] text-xs shadow-lg">
            <AlertTriangle className="w-5 h-5 text-[#ff9933] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-[#ff9933] flex items-center gap-2">
                <span>{lang === 'kn' ? '⚠️ ಏಕಾದಶಿ ದಿನದ ವಿಶೇಷ ನಿಯಮ' : '⚠️ Ekadashi Special Difference'}</span>
                <button
                  onClick={onOpenEkadashi}
                  className="underline text-[11px] text-[#ffd700] hover:text-[#ff9933] font-semibold font-sans"
                >
                  {lang === 'kn' ? 'ವಿವರ ನೋಡಿ' : 'View Rules'}
                </button>
              </div>
              <p className="font-sans leading-relaxed text-[#fef3c7]/90">
                {lang === 'kn' ? currentStep.ekadashiDifferenceKn : currentStep.ekadashiDifferenceEn}
              </p>
            </div>
          </div>
        )}

        {/* Required Samagri for this step */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-[#ff9933] flex items-center gap-1 font-sans">
            <Layers className="w-3.5 h-3.5" />
            {lang === 'kn' ? 'ಅಗತ್ಯ ಸಾಮಗ್ರಿಗಳು:' : 'Materials needed:'}
          </span>
          {(lang === 'kn' ? currentStep.requiredMaterialsKn : currentStep.requiredMaterialsEn).map((mat, idx) => (
            <span
              key={idx}
              onClick={onOpenSamagri}
              className="px-3 py-1 rounded-full bg-[#3d1111] hover:bg-[#4d1717] border border-[#ffd700]/20 text-[#fef3c7] cursor-pointer font-sans text-[11px] transition-colors"
            >
              {mat}
            </span>
          ))}
        </div>

        {/* Mudra Triggers if associated with this step */}
        {currentStep.mudras.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-[#ff9933] flex items-center gap-1 font-sans">
              <Hand className="w-3.5 h-3.5" />
              {lang === 'kn' ? 'ತೋರಿಸಬೇಕಾದ ಮುದ್ರೆಗಳು:' : 'Display Mudras:'}
            </span>
            {currentStep.mudras.map((mId) => {
              const mudraDef = MUDRAS_DATA.find((m) => m.id === mId);
              const displayName = mudraDef
                ? lang === 'kn'
                  ? mudraDef.nameKn
                  : mudraDef.nameEn
                : `${mId} Mudra`;

              return (
                <button
                  key={mId}
                  onClick={() => onOpenMudra(mId)}
                  className="px-3 py-1 rounded-full bg-[#3d1111] hover:bg-[#4d1717] border border-[#ff9933]/40 text-[#fef3c7] font-semibold font-sans flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <Sparkles className="w-3 h-3 text-[#ff9933]" />
                  <span>{displayName}</span>
                  <span className="text-[9px] bg-[#1a0606] px-1.5 py-0.5 rounded text-[#ff9933] font-bold">
                    {lang === 'kn' ? 'ಹಸ್ತ ವಿನ್ಯಾಸ' : 'Finger Guide'}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Step-by-Step Practical Instructions */}
        <div className="space-y-3 bg-[#140404]/80 border border-[#ffd700]/10 rounded-2xl p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ffd700]/10 pb-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#ff9933] font-sans flex items-center gap-1.5">
              <span>{lang === 'kn' ? 'ಆಚರಣಾ ಕ್ರಮ (ವಿಧಾನ)' : 'Step-by-Step Ritual Instructions'}</span>
            </h3>

            {/* Priest Voice Narration Button */}
            <button
              onClick={handleTogglePriestNarration}
              className={`px-3 py-1.5 rounded-full text-xs font-sans font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm border max-w-full shrink-0 ${
                isNarratingStep
                  ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] animate-pulse shadow-[0_0_12px_rgba(255,153,51,0.4)]'
                  : 'bg-[#250a0a] hover:bg-[#3d1111] text-[#ffd700] border-[#ffd700]/30'
              }`}
              title={lang === 'kn' ? 'ಪೂಜ್ಯ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿಯವರ ಧ್ವನಿಯಲ್ಲಿ ವಾಚನ ಆಲಿಸಿ' : 'Listen to Priest Voice Narration'}
            >
              {isNarratingStep ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span className="truncate">{lang === 'kn' ? 'ವಿರಾಮ (Pause)' : 'Pause Guidance'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#ff9933] shrink-0" />
                  <span className="truncate max-w-[180px] sm:max-w-none">
                    {lang === 'kn'
                      ? mode === '30min'
                        ? 'ಪೂಜ್ಯ ಜೋಶಿಯವರ ಗುರುವಾಣಿ'
                        : 'ಪುರೋಹಿತ ಮಾರ್ಗದರ್ಶನ'
                      : 'Priest Voice'}
                  </span>
                </>
              )}
            </button>
          </div>

          <ul className="space-y-2.5">
            {(lang === 'kn' ? currentStep.instructionsKn : currentStep.instructionsEn).map((inst, i) => (
              <li key={i} className="text-sm text-[#fef3c7]/90 font-sans flex items-start gap-2.5 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/30 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{inst}</span>
              </li>
            ))}
          </ul>

          {/* Tarkshyadi 5 Mudras In-Step Toggle for Naivedya/Sanctification Steps */}
          {(currentStep.mudras.includes('tarkshya') || currentStep.mudras.includes('dhenu')) && (
            <div className="pt-2 border-t border-[#ffd700]/10">
              <button
                onClick={() => setShowTarkshyaInStep(!showTarkshyaInStep)}
                className="w-full py-2 px-3 rounded-xl bg-[#2a0c0c] hover:bg-[#3d1111] border border-[#ffd700]/25 text-xs font-sans font-bold text-[#ff9933] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-1.5">
                  <Hand className="w-4 h-4" />
                  <span>{lang === 'kn' ? '೫ ತಾಕ್ಷ್ರ್ಯಾದಿ ಮುದ್ರೆಗಳ ರೇಖಾಚಿತ್ರ ನೋಡಿ (Image 1)' : 'View 5 Tarkshyadi Mudras SVG (Image 1)'}</span>
                </div>
                <span className="text-[11px] text-[#ffd700]">{showTarkshyaInStep ? '▲ ಮುಚ್ಚಿ' : '▼ ತೆರೆಯಿರಿ'}</span>
              </button>

              {showTarkshyaInStep && (
                <div className="mt-3 p-3 bg-[#160404] rounded-2xl border border-[#ffd700]/30 shadow-2xl animate-fade-in">
                  <TarkshyadiPanchaMudraWidget lang={lang} onOpenDetail={(id) => onOpenMudra(id)} />
                </div>
              )}
            </div>
          )}

          {/* Complete Version: In-Step Sacred Ritual Visual Protocols (Images 3, 4, 5) */}
          {mode === 'full' && currentStep.id === 'step_shuddhabhisheka' && (
            <div className="pt-3 border-t border-[#ffd700]/15">
              <AbhishekaWatersProtocol lang={lang} />
            </div>
          )}

          {mode === 'full' && currentStep.id === 'step_maha_naivedya' && (
            <div className="pt-3 border-t border-[#ffd700]/15">
              <NaivedyaServingProtocol lang={lang} />
            </div>
          )}

          {mode === 'full' && currentStep.id === 'step_mahamangalarati' && (
            <div className="pt-3 border-t border-[#ffd700]/15">
              <ShankhabhramanaVisualProtocol lang={lang} />
            </div>
          )}
        </div>

        {/* Authentic Mantras Section */}
        {currentStep.mantras.length > 0 && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-base text-[#ff9933] flex items-center gap-2">
                  <span>{lang === 'kn' ? 'ಪಠಿಸಬೇಕಾದ ಮಂತ್ರಗಳು' : 'Mantras to Recite'}</span>
                </h3>
                <span className="text-[10px] font-sans font-bold bg-[#ff9933]/20 text-[#ff9933] px-2.5 py-0.5 rounded-full border border-[#ff9933]/40 flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#ffd700]" />
                  <span>{lang === 'kn' ? 'ಪುರೋಹಿತ ಧ್ವನಿ' : 'Male Priest Voice'}</span>
                </span>
              </div>

              {/* Script Type Selector (Kannada / Devanagari / English) */}
              <div className="flex items-center gap-1 bg-[#140404] p-1 rounded-full border border-[#ffd700]/15">
                <button
                  onClick={() => setScriptType('kn')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold font-sans transition-all ${
                    scriptType === 'kn'
                      ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow-[0_0_10px_rgba(255,153,51,0.3)]'
                      : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
                  }`}
                >
                  ಕನ್ನಡ
                </button>
                <button
                  onClick={() => setScriptType('sa')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold font-sans transition-all ${
                    scriptType === 'sa'
                      ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow-[0_0_10px_rgba(255,153,51,0.3)]'
                      : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
                  }`}
                >
                  संस्कृत
                </button>
                <button
                  onClick={() => setScriptType('en')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold font-sans transition-all ${
                    scriptType === 'en'
                      ? 'bg-[#ff9933] text-[#1a0606] font-bold shadow-[0_0_10px_rgba(255,153,51,0.3)]'
                      : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Individual Mantra Cards */}
            {currentStep.mantras.map((mantra) => {
              const isCurrentlyPlaying = isPlayingMantra && activeMantraId === mantra.id;
              const isCurrentlyBuffering = isBufferingAudio && activeMantraId === mantra.id;

              return (
                <div
                  key={mantra.id}
                  className={`rounded-2xl border transition-all p-4 sm:p-5 space-y-3.5 shadow-xl ${
                    isCurrentlyPlaying || isCurrentlyBuffering
                      ? 'bg-[#250a0a] border-[#ff9933] ring-2 ring-[#ff9933]/40 shadow-[0_0_25px_rgba(255,153,51,0.25)]'
                      : 'bg-[#1a0606]/90 border-[#ffd700]/15 hover:border-[#ff9933]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🪔</span>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-[#ff9933]">
                        {lang === 'kn' ? mantra.titleKn : mantra.titleEn}
                      </h4>
                    </div>
                    {mantra.repetitionCount > 1 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#3d1111] text-[#ffd700] border border-[#ff9933]/30 px-2.5 py-0.5 rounded-full font-sans">
                        {mantra.repetitionCount} {lang === 'kn' ? 'ಬಾರಿ ಜಪಿಸಿ' : 'times'}
                      </span>
                    )}
                  </div>

                  {/* Mantra Display in Chosen Script */}
                  <div className="bg-[#140404] border border-[#ffd700]/10 rounded-xl p-4 sm:p-5 shadow-inner">
                    <p className="font-serif text-lg sm:text-xl text-[#ffeedd] leading-relaxed whitespace-pre-line tracking-wide text-center drop-shadow-sm font-semibold">
                      {scriptType === 'kn'
                        ? mantra.mantraKannada
                        : scriptType === 'sa'
                        ? mantra.mantraSanskrit
                        : mantra.mantraEnglish}
                    </p>
                  </div>

                  {/* Meaning Box */}
                  <div className="text-xs text-[#fef3c7]/80 bg-[#140404]/60 border border-[#ffd700]/10 rounded-xl p-3 leading-relaxed">
                    <span className="font-bold text-[#ffd700] block mb-0.5 font-sans">
                      {lang === 'kn' ? 'ಭಾವಾರ್ಥ (ಅರ್ಥ):' : 'Spiritual Meaning:'}
                    </span>
                    <p className="font-sans">
                      {lang === 'kn' ? mantra.meaningKn : mantra.meaningEn}
                    </p>
                  </div>

                  {/* Human Voice Mantra Audio Chanting Toolbar */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-[#ffd700]/10">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Human Priest Voice Button */}
                      <button
                        disabled={isCurrentlyBuffering}
                        onClick={() => handlePlayMantra(mantra)}
                        className={`px-4 py-2 rounded-full text-xs font-bold font-sans flex items-center gap-2 transition-all active:scale-95 shadow-md ${
                          isCurrentlyPlaying
                            ? 'bg-[#ff9933] text-[#1a0606] shadow-[0_0_20px_rgba(255,153,51,0.6)]'
                            : isCurrentlyBuffering
                            ? 'bg-[#3d1111] text-[#ffd700] border border-[#ff9933]/50 cursor-wait'
                            : 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] text-[#1a0606] shadow-[0_0_15px_rgba(255,153,51,0.35)]'
                        }`}
                      >
                        {isCurrentlyBuffering ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-[#ffd700] border-t-transparent rounded-full animate-spin" />
                            <span>{lang === 'kn' ? 'ಧ್ವನಿ ಸಿದ್ಧವಾಗುತ್ತಿದೆ...' : 'Preparing Priest Voice...'}</span>
                          </>
                        ) : isCurrentlyPlaying ? (
                          <>
                            <Pause className="w-4 h-4 fill-current" />
                            <span>{lang === 'kn' ? 'ಪಠಣ ನಿಲ್ಲಿಸಿ' : 'Stop Chanting'}</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-current" />
                            <span>
                              {lang === 'kn'
                                ? 'ಪುರೋಹಿತರ ಮಾನವ ಧ್ವನಿ (ನಿಧಾನ ಪಠಣ)'
                                : 'Human Priest Voice (Slow Recitation)'}
                            </span>
                          </>
                        )}
                      </button>

                      {/* Repetition Loop Selector */}
                      <div className="flex items-center gap-1 bg-[#140404] border border-[#ffd700]/15 px-2.5 py-1 rounded-full text-xs">
                        <span className="text-[11px] text-[#ffd700]/70 font-sans">
                          {lang === 'kn' ? 'ಆವರ್ತನೆ:' : 'Loop:'}
                        </span>
                        {[1, 3, 8, 12, 108].map((count) => (
                          <button
                            key={count}
                            onClick={() => setRepeatTarget(count)}
                            className={`px-2 py-0.5 rounded-full text-[11px] font-sans font-semibold transition-all ${
                              repeatTarget === count
                                ? 'bg-[#ff9933] text-[#1a0606] font-bold'
                                : 'text-[#fef3c7]/70 hover:text-[#fef3c7]'
                            }`}
                          >
                            {count}x
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {/* Slow Priest Speed Selector */}
                      <div className="flex items-center gap-1 text-xs">
                        <span className="text-[11px] text-[#ffd700]/70 font-sans">
                          {lang === 'kn' ? 'ಗತಿ:' : 'Speed:'}
                        </span>
                        {[
                          { val: 0.75, labelKn: '0.75x ನಿಧಾನ', labelEn: '0.75x Slow' },
                          { val: 0.85, labelKn: '0.85x ಶಾಂತ', labelEn: '0.85x Calm' },
                          { val: 1.0, labelKn: '1.0x ಸಾಮಾನ್ಯ', labelEn: '1.0x Normal' },
                        ].map((s) => (
                          <button
                            key={s.val}
                            onClick={() => setChantSpeed(s.val)}
                            className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold transition-all ${
                              chantSpeed === s.val
                                ? 'bg-[#ff9933] text-[#1a0606] font-bold'
                                : 'text-[#fef3c7]/60 hover:text-[#fef3c7]'
                            }`}
                          >
                            {lang === 'kn' ? s.labelKn : s.labelEn}
                          </button>
                        ))}
                      </div>

                      {/* Ambient Temple Tanpura Drone Button */}
                      <button
                        onClick={handleToggleTanpura}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold flex items-center gap-1 transition-all border ${
                          isTanpuraActive
                            ? 'bg-[#3d1111] text-[#ffd700] border-[#ffd700] shadow-[0_0_10px_rgba(255,215,0,0.3)]'
                            : 'bg-[#140404] text-[#fef3c7]/60 border-[#ffd700]/15 hover:text-[#ffd700]'
                        }`}
                        title={lang === 'kn' ? 'ತಾನ್ಪುರ ನಾದ ಆನ್/ಆಫ್' : 'Toggle Sanctum Tanpura Drone'}
                      >
                        <Music2 className="w-3 h-3 text-[#ff9933]" />
                        <span>{lang === 'kn' ? 'ತಾನ್ಪುರ ನಾದ' : 'Tanpura'}</span>
                        {isTanpuraActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                      </button>
                    </div>
                  </div>

                  {/* Active Human Chanting Progress Feedback */}
                  {isCurrentlyPlaying && (
                    <div className="flex items-center justify-between text-xs bg-[#250a0a] border border-[#ff9933]/60 rounded-xl px-4 py-2.5 text-[#fef3c7] shadow-inner">
                      <div className="flex items-center gap-2 font-serif">
                        <Volume2 className="w-4 h-4 text-[#ff9933] animate-pulse" />
                        <div>
                          <span className="font-bold text-[#ffd700]">
                            {lang === 'kn'
                              ? 'ಪುರೋಹಿತರ ನಿಧಾನ ವೇದ ಮಂತ್ರೋಚ್ಛಾರಣೆ ನಡೆಯುತ್ತಿದೆ'
                              : 'Human Vedic Priest Chanting in Progress'}
                          </span>
                          <span className="text-[11px] text-[#fef3c7]/70 ml-2 font-sans">
                            ({lang === 'kn' ? `ಆವರ್ತನೆ: ${currentChantLoop}/${repeatTarget}` : `Cycle ${currentChantLoop} of ${repeatTarget}`})
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span className="w-1.5 h-3.5 bg-[#ff9933] animate-pulse rounded" />
                        <span className="w-1.5 h-5 bg-[#ffd700] animate-pulse rounded delay-75" />
                        <span className="w-1.5 h-2.5 bg-[#ff9933] animate-pulse rounded delay-150" />
                        <span className="w-1.5 h-4 bg-[#ffe066] animate-pulse rounded delay-100" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Step Navigation Bar */}
        <div className="border-t border-[#ffd700]/10 pt-5 flex items-center justify-between gap-2 sm:gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold font-sans flex items-center gap-1 sm:gap-1.5 border transition-all active:scale-95 shadow-sm shrink-0 ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-[#140404] text-[#fef3c7]/40 border-[#ffd700]/10'
                : 'bg-[#3d1111] hover:bg-[#4d1717] text-[#fef3c7] border-[#ffd700]/20'
            }`}
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span className="truncate max-w-[90px] sm:max-w-none">{lang === 'kn' ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous Step'}</span>
          </button>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-[#ffd700]/80 font-sans font-medium">
              {currentIndex + 1} / {activeSteps.length}
            </span>

            {onOpenSupport && (
              <button
                id="btn-pooja-help-support"
                onClick={onOpenSupport}
                className="px-2.5 py-1 rounded-full bg-[#140404] hover:bg-[#250a0a] text-[#ffd700] border border-[#ffd700]/30 text-[11px] font-sans font-semibold flex items-center gap-1 transition-all active:scale-95 shadow-sm"
                title={lang === 'kn' ? 'ಸಹಾಯ & ಮಾರ್ಗದರ್ಶನ' : 'Help & Support'}
              >
                <span className="text-[#ff9933]">📞</span>
                <span className="hidden xs:inline">{lang === 'kn' ? 'ಸಹಾಯ' : 'Help'}</span>
              </button>
            )}
          </div>

          <button
            onClick={handleNext}
            className="px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-bold font-sans flex items-center gap-1 sm:gap-1.5 bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] transition-all active:scale-95 shadow-[0_0_20px_rgba(255,153,51,0.35)] shrink-0"
          >
            <span className="truncate max-w-[120px] sm:max-w-none">
              {currentIndex === activeSteps.length - 1
                ? (lang === 'kn' ? 'ಪೂಜೆ ಸಂಪನ್ನ' : 'Finish Pooja')
                : (lang === 'kn' ? 'ಮುಂದಿನ ಹಂತ' : 'Next Step')}
            </span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>

      {/* 10-Minute Free Mode Mobile Floating Quick Controller */}
      {mode === '10min' && (
        <div className="fixed bottom-3 left-3 right-3 sm:hidden z-30 bg-[#1e0707]/95 border-2 border-[#ffd700]/40 backdrop-blur-lg rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-2 animate-fade-in">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-3 py-2 rounded-xl text-xs font-bold font-sans flex items-center gap-1 border transition-all shrink-0 ${
              currentIndex === 0
                ? 'opacity-40 bg-[#140404] text-[#fef3c7]/30 border-[#ffd700]/10 cursor-not-allowed'
                : 'bg-[#3d1111] text-[#fef3c7] border-[#ffd700]/30 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{lang === 'kn' ? 'ಹಿಂದಿನದು' : 'Prev'}</span>
          </button>

          <button
            onClick={() => toggleStepCompleted(currentStep.id)}
            className={`px-3 py-2 rounded-xl text-xs font-bold font-sans flex items-center gap-1.5 border transition-all active:scale-95 shrink-0 ${
              completedStepIds[currentStep.id]
                ? 'bg-emerald-900/90 text-emerald-200 border-emerald-500/60'
                : 'bg-[#180505] text-[#ffd700] border-[#ffd700]/30'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${completedStepIds[currentStep.id] ? 'text-emerald-400' : 'text-[#ffd700]'}`} />
            <span>{completedStepIds[currentStep.id] ? (lang === 'kn' ? 'ಪೂರ್ಣ' : 'Done') : (lang === 'kn' ? 'ಮುಗಿಯಿತು' : 'Mark Done')}</span>
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl text-xs font-bold font-sans flex items-center gap-1 bg-[#ff9933] text-[#1a0606] font-bold border border-[#ffd700] active:scale-95 shadow-[0_0_12px_rgba(255,153,51,0.5)] shrink-0"
          >
            <span>
              {currentIndex === activeSteps.length - 1
                ? (lang === 'kn' ? 'ಸಂಪನ್ನ' : 'Finish')
                : (lang === 'kn' ? 'ಮುಂದಿನದು' : 'Next')}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Completion Modal / Card */}
      {showCompletionCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-gradient-to-b from-[#250a0a] via-[#1a0606] to-[#140404] border-2 border-[#ffd700]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center space-y-5 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#ff9933]/20 border border-[#ff9933] flex items-center justify-center mx-auto text-3xl shadow-[0_0_20px_rgba(255,153,51,0.3)]">
              🙏
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-2xl text-[#ff9933]">
                {lang === 'kn' ? '॥ ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು ॥' : 'Sri Krishnarpanamastu'}
              </h3>
              <p className="text-sm text-[#fef3c7] font-serif">
                {lang === 'kn'
                  ? 'ದೇವಪೂಜಾ ಅನುಷ್ಠಾನವು ಯಶಸ್ವಿಯಾಗಿ ಸಂಪನ್ನಗೊಂಡಿದೆ!'
                  : 'Your Tantrasarokta Deva Pooja has been completed auspiciously!'}
              </p>
            </div>

            <div className="bg-[#140404] rounded-2xl p-4 border border-[#ffd700]/15 text-left space-y-2 text-xs text-[#fef3c7]/90">
              <p className="font-serif text-sm text-[#ff9933] text-center leading-relaxed">
                {lang === 'kn'
                  ? 'ನಾಹಂ ಕರ್ತಾ ಹರಿಃ ಕರ್ತಾ ತತ್ಪೂಜಾ ಕರ್ಮ ಚಾಖಿಲಮ್ । ತಥಾಪಿ ಮತ್ಕೃತಾ ಪೂಜಾ ತತ್ಪ್ರಸಾದೇನ ನಾನ್ಯಥಾ ॥'
                  : 'Naaham kartaa Harih kartaa tatpoojaa karma chaakhilam | Tathaapi matkrutaa poojaa tatprasaadena naanyathaa ||'}
              </p>
              <div className="border-t border-[#ffd700]/10 pt-2 flex items-center justify-between text-[#ffd700]/80 font-sans">
                <span>{lang === 'kn' ? 'ಮೋಡ್: ' + mode : 'Mode: ' + mode}</span>
                <span>{lang === 'kn' ? 'ಒಟ್ಟು ಹಂತಗಳು: ' + activeSteps.length : 'Total Steps: ' + activeSteps.length}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 justify-center pt-2">
              <button
                onClick={() => {
                  setShowCompletionCard(false);
                  setCurrentIndex(0);
                  setCompletedStepIds({});
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#3d1111] hover:bg-[#4d1717] text-[#fef3c7] border border-[#ffd700]/20 text-xs font-bold font-sans flex items-center justify-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{lang === 'kn' ? 'ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ' : 'Restart Pooja'}</span>
              </button>

              <button
                onClick={() => setShowCompletionCard(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] text-xs font-bold font-sans transition-all shadow-[0_0_15px_rgba(255,153,51,0.3)]"
              >
                {lang === 'kn' ? 'ಮುಕ್ತಾಯ' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
