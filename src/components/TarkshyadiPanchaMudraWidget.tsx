import React, { useState } from 'react';
import { Language } from '../types';
import { MudraHandDiagram } from './MudraHandDiagram';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Flame,
  Maximize2
} from 'lucide-react';

interface TarkshyadiPanchaMudraWidgetProps {
  lang: Language;
  onOpenDetail?: (id: string) => void;
}

interface TarkshyaMudraItem {
  id: string;
  numberKn: string;
  nameKn: string;
  nameEn: string;
  purposeKn: string;
  purposeEn: string;
  shloka: string;
  fingerGuideKn: string[];
  fingerGuideEn: string[];
  matrix?: {
    rightFinger: string;
    leftFinger: string;
    labelKn: string;
  }[];
}

const TARKSHYADI_MUDRAS: TarkshyaMudraItem[] = [
  {
    id: 'tarkshya',
    numberKn: '೧',
    nameKn: 'ತಾಕ್ಷ್ರ್ಯ ಮುದ್ರಾ (ಗರುಡ ಮುದ್ರಾ)',
    nameEn: 'Tarkshya Mudra (Garuda Mudra)',
    purposeKn: 'ನಿರ್ವಿಷೀಕರಣ (ವಿಷ, ದೋಷ, ಅಶುದ್ಧಿ ನಿವಾರಣೆ)',
    purposeEn: 'Neutralization of negative toxins, impurities & planetary afflictions',
    shloka: 'ತಾಕ್ಷ್ರ್ಯಾಖ್ಯಾ ಮುದ್ರಯಾ ಸಾರ್ಧಂ ನಿರ್ವಿಷೀಕರಣಂ ಭವೇತ್ ।',
    fingerGuideKn: [
      'ಎರಡೂ ಕೈಗಳ ಅಂಗೈಗಳನ್ನು ಎದೆಯೆದುರು ತಂದು ಮಣಿಕಟ್ಟುಗಳನ್ನು ಒಂದರ ಮೇಲೊಂದು ದಾಟಿಸಿ (Cross).',
      'ಎರಡೂ ಹೆಬ್ಬೆರಳುಗಳನ್ನು ಪರಸ್ಪರ ಲಾಕ್ ಮಾಡಿ (ಕೊಕ್ಕೆ ಹಾಕಿ).',
      'ಉಳಿದ ನಾಲ್ಕೂ ಬೆರಳುಗಳನ್ನು ಗರುಡನ ರೆಕ್ಕೆಗಳಂತೆ ಅಗಲವಾಗಿ ಹರಡಿ, ರೆಕ್ಕೆ ಬಡಿದಂತೆ ಮೇಲೆ-ಕೆಳಗೆ ಚಲಿಸಿ.',
      'ಪ್ರಯೋಜನ: ನೈವೇದ್ಯ ಮತ್ತು ಪೂಜಾ ದ್ರವ್ಯಗಳಲ್ಲಿರುವ ಸಕಲ ವಿಷ-ದೋಷಗಳನ್ನು ತಕ್ಷಣ ನಿರ್ಮೂಲನಗೊಳಿಸುತ್ತದೆ.'
    ],
    fingerGuideEn: [
      'Bring both palms to chest level and cross wrists over one another.',
      'Interlock both thumbs firmly together like a hook.',
      'Fan out the remaining four fingers of each hand wide like eagle wings.',
      'Significance: Instantly purges and neutralizes any physical or subtle toxic vibrations.'
    ]
  },
  {
    id: 'dhenu',
    numberKn: '೨',
    nameKn: 'ಧೇನು ಮುದ್ರಾ (ಅಮೃತೀಕರಣ)',
    nameEn: 'Dhenu Mudra (Surabhi / Amrita Mudra)',
    purposeKn: 'ಅಮೃತೀಕರಣ (ಜಲ ಹಾಗೂ ನೈವೇದ್ಯವನ್ನು ದಿವ್ಯ ಅಮೃತವನ್ನಾಗಿಸುವುದು)',
    purposeEn: 'Divine transformation into nectar (Amritikarana)',
    shloka: 'ಧೇನು ಮುದ್ರಾ ಪ್ರದರ್ಶ್ಯೈವ ಅಮೃತೀಕರಣಂ ಭವೇತ್ ।',
    fingerGuideKn: [
      'ಎರಡೂ ಕೈಗಳ ಬೆರಳುಗಳನ್ನು ಕೆಳಮುಖವಾಗಿ ಪರಸ್ಪರ ಜೋಡಿಸಿ ಕಾಮಧೇನುವಿನ ೪ ಕೆಚ್ಚಲುಗಳಂತೆ ರಚಿಸಬೇಕು:',
      '೧. ಬಲಗೈ ತರ್ಜನಿ (A) ↔ ಎಡಗೈ ಮಧ್ಯಮಾ (೨)',
      '೨. ಬಲಗೈ ಮಧ್ಯಮಾ (B) ↔ ಎಡಗೈ ತರ್ಜನಿ (೧)',
      '೩. ಬಲಗೈ ಅನಾಮಿಕಾ (C) ↔ ಎಡಗೈ ಕನಿಷ್ಠಿಕಾ (೪)',
      '೪. ಬಲಗೈ ಕನಿಷ್ಠಿಕಾ (D) ↔ ಎಡಗೈ ಅನಾಮಿಕಾ (೩)',
      'ಎರಡೂ ಹೆಬ್ಬೆರಳುಗಳನ್ನು ಬೆನ್ನಿನ ಕಡೆಗೆ ನೇರವಾಗಿ ಜೋಡಿಸಿಡಿ.'
    ],
    fingerGuideEn: [
      'Interlace fingers facing downwards resembling the 4 udders of sacred Kamadhenu:',
      '1. Right Index (A) touches Left Middle (2)',
      '2. Right Middle (B) touches Left Index (1)',
      '3. Right Ring (C) touches Left Little (4)',
      '4. Right Little (D) touches Left Ring (3)',
      'Both thumbs point upward/backwards touching at the base.'
    ],
    matrix: [
      { rightFinger: 'A. ತರ್ಜನಿ (Index)', leftFinger: '೨. ಮಧ್ಯಮಾ (Middle)', labelKn: 'A ↔ ೨' },
      { rightFinger: 'B. ಮಧ್ಯಮಾ (Middle)', leftFinger: '೧. ತರ್ಜನಿ (Index)', labelKn: 'B ↔ ೧' },
      { rightFinger: 'C. ಅನಾಮಿಕಾ (Ring)', leftFinger: '೪. ಕನಿಷ್ಠಿಕಾ (Little)', labelKn: 'C ↔ ೪' },
      { rightFinger: 'D. ಕನಿಷ್ಠಿಕಾ (Little)', leftFinger: '೩. ಅನಾಮಿಕಾ (Ring)', labelKn: 'D ↔ ೩' },
    ]
  },
  {
    id: 'shankha',
    numberKn: '೩',
    nameKn: 'ಶಂಖ ಮುದ್ರಾ (ಪವಿತ್ರೀಕರಣ)',
    nameEn: 'Shankha Mudra (Conch Sanctification)',
    purposeKn: 'ಪವಿತ್ರೀಕರಣ (ಪಾಂಚಜನ್ಯ ಶಂಖ ಧ್ವನಿ ಮತ್ತು ಶುದ್ಧಿ ಆವಾಹನೆ)',
    purposeEn: 'Sanctification through the divine vibration of Panchajanya Conch',
    shloka: 'ಶಂಖಾಖ್ಯಾ ಮುದ್ರಯಾ ಸಾರ್ಧಂ ಪವಿತ್ರೀಕರಣಂ ಸ್ಮೃತಮ್ ।',
    fingerGuideKn: [
      'ಎಡಗೈ ಹೆಬ್ಬೆರಳನ್ನು ಬಲಗೈಯ ನಾಲ್ಕು ಬೆರಳುಗಳ ಮಧ್ಯೆ ಹಿಡಿದು ಮುಷ್ಟಿ ಕಟ್ಟಿ.',
      'ಬಲಗೈ ಹೆಬ್ಬೆರಳ ತುದಿಯನ್ನು ಎಡಗೈ ತರ್ಜನಿ (ತೋರುಬೆರಳು) ತುದಿಗೆ ಸ್ಪರ್ಶಿಸಿ.',
      'ಎಡಗೈಯ ಉಳಿದ ಮೂರು ಬೆರಳುಗಳನ್ನು ನೇರವಾಗಿ ಶಂಖದ ಬಾಯಿಯಂತೆ ಜೋಡಿಸಿಡಿ.',
      'ಪ್ರಯೋಜನ: ತೀರ್ಥ ಮತ್ತು ನೈವೇದ್ಯಕ್ಕೆ ಓಂಕಾರ ಹಾಗೂ ಪಾಂಚಜನ್ಯ ಶಂಖದ ಸಾನ್ನಿಧ್ಯ ತರುತ್ತದೆ.'
    ],
    fingerGuideEn: [
      'Enclose the left thumb firmly inside the four fingers of the right hand.',
      'Touch the tip of the right thumb to the extended tip of the left index finger.',
      'Keep the remaining left fingers straight forming the crest of the conch.',
      'Significance: Infuses the Omkara resonance of Panchajanya conch into offerings.'
    ]
  },
  {
    id: 'gada',
    numberKn: '೪',
    nameKn: 'ಗದಾ ಮುದ್ರಾ (ದಿಗ್ಬಂಧನ)',
    nameEn: 'Gada Mudra (Kaumodaki Mace Boundary)',
    purposeKn: 'ದಿಗ್ಬಂಧನ (ಅಷ್ಟದಿಕ್ಕುಗಳ ದುಷ್ಟ ಶಕ್ತಿಗಳ ನಿರೋಧ & ರಕ್ಷಣೆ)',
    purposeEn: 'Boundary protection against negative disturbances with Kaumodaki mace',
    shloka: 'ಗದಾ ಮುದ್ರಾ ಪ್ರದರ್ಶ್ಯೈವ ದಿಗ್ಬಂಧನ ಮಥಾಚರೇತ್ ।',
    fingerGuideKn: [
      'ಎರಡೂ ಕೈಗಳ ಬೆರಳುಗಳನ್ನು ಪರಸ್ಪರ ಹೆಣೆದುಕೊಂಡು (Cross) ಗಟ್ಟಿಯಾಗಿ ಮುಷ್ಟಿ ಕಟ್ಟಿ.',
      'ಕೇವಲ ಎರಡೂ ಮಧ್ಯಮಾ ಬೆರಳುಗಳನ್ನು (ನಡುಬೆರಳು) ಮಾತ್ರ ನೇರವಾಗಿ ನೆಟ್ಟಗೆ ಒಟ್ಟಿಗೆ ಮೇಲಕ್ಕೆತ್ತಿ ಹಿಡಿಯಿರಿ.',
      'ಇದು ಕೌಮೋದಕೀ ಗದೆಯ ದಂಡದಂತೆ ಭಾಸವಾಗುತ್ತದೆ.',
      'ಪ್ರಯೋಜನ: ಪೂಜಾ ಮಂಡಲದ ಸುತ್ತಲೂ ಯಾರೂ ಭಂಗ ತರದಂತೆ ರಕ್ಷಾ ಗದೆಯನ್ನು ನೆಡುತ್ತದೆ.'
    ],
    fingerGuideEn: [
      'Interlock all fingers of both hands firmly inside a combined fist.',
      'Extend both middle fingers upright together, pointing straight to the sky.',
      'The upright middle fingers represent the towering column of Kaumodaki mace.',
      'Significance: Erects an impenetrable boundary guarding the sacred worship altar.'
    ]
  },
  {
    id: 'chakra',
    numberKn: '೫',
    nameKn: 'ಚಕ್ರ ಮುದ್ರಾ (ಸಂರಕ್ಷಣೆ)',
    nameEn: 'Chakra Mudra (Sudarshana Shield)',
    purposeKn: 'ಸಂರಕ್ಷಣೆ (ಸುದರ್ಶನ ಚಕ್ರದ ಪ್ರಖರ ರಕ್ಷಾ ಜ್ವಾಲೆ)',
    purposeEn: 'Invoking the blazing cosmic protective shield of Sudarshana Chakra',
    shloka: 'ಚಕ್ರ ಮುದ್ರಾ ಪ್ರದರ್ಶ್ಯೈವ ರಕ್ಷಾರ್ಥಂ ತು ಸಮುದ್ಯತಃ ।',
    fingerGuideKn: [
      'ಎರಡೂ ಕೈಗಳ ಅಂಗೈಗಳನ್ನು ವಿರುದ್ಧ ದಿಕ್ಕಿಗೆ ತಿರುಗಿಸಿ (ಒಂದು ಒಳಮುಖ, ಒಂದು ಹೊರಮುಖ).',
      'ಮಣಿಕಟ್ಟುಗಳನ್ನು ಒಂದರ ಮೇಲೊಂದು ದಾಟಿಸಿ, ಎರಡೂ ಹೆಬ್ಬೆರಳುಗಳನ್ನು ಕೊಕ್ಕೆಯಂತೆ ಸಿಕ್ಕಿಸಿ.',
      'ಉಳಿದ ಎಂಟೂ ಬೆರಳುಗಳನ್ನು ಸುದರ್ಶನ ಚಕ್ರದ ೮ ಅರೆಗಳಂತೆ (Spokes) ಬಿಡಿಸಿ ವೃತ್ತಾಕಾರವಾಗಿ ತಿರುಗಿಸಿ.',
      'ಪ್ರಯೋಜನ: ಸಕಲ ಅನಿಷ್ಟ-ವಿಘ್ನಗಳನ್ನು ದಹಿಸುವ ಸುದರ್ಶನ ಜ್ವಾಲಾರಕ್ಷೆ.'
    ],
    fingerGuideEn: [
      'Position palms facing opposite directions (one facing chest, one facing forward).',
      'Cross wrists and hook thumbs tightly at the center.',
      'Spread the eight remaining fingers radially like the eight spokes of Sudarshana wheel.',
      'Significance: Emanates blazing Sudarshana flames repelling obstacles.'
    ]
  }
];

export const TarkshyadiPanchaMudraWidget: React.FC<TarkshyadiPanchaMudraWidgetProps> = ({
  lang,
  onOpenDetail,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const current = TARKSHYADI_MUDRAS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TARKSHYADI_MUDRAS.length) % TARKSHYADI_MUDRAS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TARKSHYADI_MUDRAS.length);
  };

  return (
    <div className="w-full bg-[#1e0707] border-2 border-[#ffd700]/30 rounded-3xl p-3.5 sm:p-5 shadow-2xl space-y-4">
      {/* Header Banner */}
      <div className="flex items-center justify-between gap-2 border-b border-[#ffd700]/20 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff9933] to-[#b45309] text-[#1a0606] flex items-center justify-center font-serif font-bold shadow-[0_0_15px_rgba(255,153,51,0.4)]">
            <ShieldCheck className="w-5 h-5 text-[#1a0606]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#ffd700] leading-tight">
                {lang === 'kn' ? 'ತಾಕ್ಷ್ರ್ಯಾದಿ ಪಂಚಮುದ್ರಾಃ' : 'Tarkshyadi Pancha Mudras'}
              </h3>
              <span className="text-[10px] bg-[#ff9933]/20 text-[#ff9933] border border-[#ff9933]/40 px-2 py-0.5 rounded-full font-bold font-sans">
                {lang === 'kn' ? 'ನೈವೇದ್ಯ & ರಕ್ಷಣೆ' : 'Naivedya & Protection'}
              </span>
            </div>
            <p className="text-[11px] text-[#ffd700]/70 font-sans">
              {lang === 'kn'
                ? 'ಶಾಸ್ತ್ರೋಕ್ತ ಕೈಬೆರಳುಗಳ ಜೋಡಣೆ & ಅಮೃತೀಕರಣ ರಹಸ್ಯ'
                : 'Classical finger interlocking & sanctification technique'}
            </p>
          </div>
        </div>

        <span className="text-xs font-serif font-bold bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 px-2.5 py-1 rounded-full">
          {current.numberKn} / ೫
        </span>
      </div>

      {/* 5 Compact Mobile-Friendly Selection Tabs */}
      <div className="grid grid-cols-5 gap-1 sm:gap-2">
        {TARKSHYADI_MUDRAS.map((m, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={m.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all border text-center ${
                isSelected
                  ? 'bg-gradient-to-b from-[#ff9933] to-[#d97706] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.5)] scale-[1.02]'
                  : 'bg-[#140404] hover:bg-[#250a0a] text-[#fef3c7]/70 border-[#ffd700]/15'
              }`}
            >
              <span className="text-xs sm:text-sm font-serif font-bold leading-none">
                {m.numberKn}
              </span>
              <span className="text-[9px] sm:text-[10px] truncate max-w-full font-sans mt-0.5">
                {lang === 'kn' ? m.nameKn.split(' ')[0] : m.nameEn.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Mudra Card */}
      <div className="bg-[#140404] border border-[#ffd700]/25 rounded-2xl p-4 sm:p-5 space-y-4 shadow-inner">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Anatomical Line Diagram */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-b from-[#250a0a] to-[#0f0303] border-2 border-[#ffd700]/30 flex items-center justify-center p-2 shadow-2xl relative shrink-0">
            <MudraHandDiagram id={current.id} className="w-full h-full" showLabels={true} />
            <div className="absolute top-2 right-2">
              <span className="text-[10px] font-bold bg-[#ff9933]/30 text-[#ffd700] px-2 py-0.5 rounded-full border border-[#ff9933]/50">
                {current.numberKn}
              </span>
            </div>
          </div>

          {/* Details & Shastra Purpose */}
          <div className="space-y-2.5 flex-1 w-full">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff9933] font-sans">
                {lang === 'kn' ? 'ತಾಕ್ಷ್ರ್ಯಾದಿ ಮುದ್ರಾ ಸಂಖ್ಯೆ ' + current.numberKn : 'Pancha Mudra #' + (currentIndex + 1)}
              </span>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-[#ffd700]">
                {lang === 'kn' ? current.nameKn : current.nameEn}
              </h4>
              <p className="text-xs text-[#ffeedd] font-sans font-semibold mt-0.5">
                {lang === 'kn' ? current.purposeKn : current.purposeEn}
              </p>
            </div>

            {/* Shloka Quote */}
            <div className="bg-[#250a0a]/80 border border-[#ff9933]/30 rounded-xl px-3 py-2 text-center">
              <p className="font-serif text-xs sm:text-sm text-[#ffd700] italic">
                {current.shloka}
              </p>
            </div>

            {/* Full Screen / Modal Trigger */}
            {onOpenDetail && (
              <button
                onClick={() => onOpenDetail(current.id)}
                className="inline-flex items-center gap-1.5 text-xs text-[#ff9933] hover:text-[#ffd700] font-sans font-bold"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{lang === 'kn' ? 'ಪೂರ್ಣ ವಿವರ & ಮಂತ್ರ ನೋಡಿ →' : 'View Full Guide & Mantra →'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Special Finger Matrix Table for Dhenu Mudra */}
        {current.matrix && (
          <div className="bg-[#250a0a] border border-[#ff9933]/40 rounded-xl p-3.5 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#ffd700] font-sans">
              <Sparkles className="w-4 h-4 text-[#ff9933]" />
              <span>{lang === 'kn' ? 'ಧೇನು ಮುದ್ರಾ ಬೆರಳುಗಳ ಜೋಡಣೆ ಚಾರ್ಟ್ (Image 1 ರಂತೆ)' : 'Dhenu Mudra Finger Cross Matrix'}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-sans">
              {current.matrix.map((row, i) => (
                <div key={i} className="bg-[#140404] border border-[#ffd700]/20 rounded-lg p-2 text-center">
                  <span className="text-[11px] font-bold text-[#ff9933] block">
                    {row.labelKn}
                  </span>
                  <div className="text-[10px] text-[#fef3c7]/80 mt-1">
                    <div>{row.rightFinger}</div>
                    <div className="text-[#ffd700] font-bold">↓ ಸ್ಪರ್ಶ ↓</div>
                    <div>{row.leftFinger}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#ffd700]/70 font-sans italic text-center">
              {lang === 'kn'
                ? 'ಗಮನಿಸಿ: ಎರಡೂ ಹೆಬ್ಬೆರಳುಗಳನ್ನು ಬೆನ್ನಿನ ಭಾಗಕ್ಕೆ ಒಟ್ಟಿಗೆ ಜೋಡಿಸಿಡಿ.'
                : 'Note: Keep both thumbs aligned together touching at the back.'}
            </p>
          </div>
        )}

        {/* Step by Step Finger Position Rules */}
        <div className="space-y-1.5 pt-1">
          <h5 className="text-xs font-bold text-[#ffd700] font-sans flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff9933]" />
            <span>{lang === 'kn' ? 'ಬೆರಳುಗಳನ್ನು ಹಿಡಿಯುವ ಹಂತಗಳು:' : 'Step-by-Step Finger Formation:'}</span>
          </h5>
          <ul className="space-y-1 text-xs text-[#fef3c7]/85 font-sans leading-relaxed">
            {(lang === 'kn' ? current.fingerGuideKn : current.fingerGuideEn).map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#ff9933]/20 text-[#ffd700] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#250a0a] hover:bg-[#3d1111] text-[#ffd700] text-xs font-sans font-semibold border border-[#ffd700]/20 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{lang === 'kn' ? 'ಹಿಂದಿನ ಮುದ್ರೆ' : 'Previous'}</span>
        </button>

        <div className="flex items-center gap-1">
          {TARKSHYADI_MUDRAS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? 'w-5 bg-[#ff9933]' : 'w-1.5 bg-[#ffd700]/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] text-xs font-sans font-bold border border-[#ffd700] shadow-[0_0_12px_rgba(255,153,51,0.4)] active:scale-95 transition-all"
        >
          <span>{lang === 'kn' ? 'ಮುಂದಿನ ಮುದ್ರೆ' : 'Next'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
