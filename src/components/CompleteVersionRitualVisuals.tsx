import React, { useState } from 'react';
import { Language } from '../types';
import {
  Sparkles,
  Flame,
  Droplets,
  AlertTriangle,
  Info,
  CheckCircle2,
  ShieldCheck,
  RotateCw
} from 'lucide-react';

interface CompleteVisualsProps {
  type: 'abhisheka' | 'naivedya' | 'mangalarati';
  lang: Language;
}

/**
 * 1. Abhisheka Waters Protocol (Image 4):
 * Shuddhodaka, Agrodaka (Poorna Kumbha), and Swadodaka (Gandhodaka)
 */
export const AbhishekaWatersProtocol: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedWater, setSelectedWater] = useState<'shuddhodaka' | 'agrodaka' | 'swadodaka'>('swadodaka');

  return (
    <div className="bg-[#1e0707] border-2 border-[#ffd700]/30 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4 text-[#fef3c7]">
      {/* Header Banner */}
      <div className="flex items-center justify-between gap-2 border-b border-[#ffd700]/15 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933]">
            <Droplets className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
              {lang === 'kn' ? 'ಅಭಿಷೇಕ ಜಲದ ೩ ಮುಖ್ಯ ವಿಧಿಗಳು (ಸಂಪೂರ್ಣ ಪದ್ಧತಿ)' : 'The 3 Abhisheka Waters (Tantrasara Protocol)'}
            </h4>
            <p className="text-[11px] text-[#ffd700]/70 font-sans">
              {lang === 'kn' ? 'ಶುದ್ಧೋದಕ, ಅಗ್ರೋದಕ ಹಾಗೂ ಸ್ವಾದೋದಕ ಸಮರ್ಪಣಾ ಕ್ರಮ' : 'Shuddhodaka, Agrodaka & Swadodaka Preparation'}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-sans font-bold bg-[#ff9933]/20 text-[#ffd700] px-2.5 py-0.5 rounded-full border border-[#ff9933]/40">
          ಸಂಪೂರ್ಣ ಆವೃತ್ತಿ
        </span>
      </div>

      {/* 3 Water Type Selector Tabs */}
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            id: 'shuddhodaka',
            nameKn: '೧. ಶುದ್ಧೋದಕ',
            nameEn: '1. Shuddhodaka',
            subKn: 'ಶಂಖಾಭಿಷೇಕ',
            subEn: 'Shankha Direct'
          },
          {
            id: 'agrodaka',
            nameKn: '೨. ಅಗ್ರೋದಕ',
            nameEn: '2. Agrodaka',
            subKn: 'ಪೂರ್ಣಕುಂಭ ಕಲಶ',
            subEn: 'Poorna Kumbha'
          },
          {
            id: 'swadodaka',
            nameKn: '೩. ಸ್ವಾದೋದಕ',
            nameEn: '3. Swadodaka',
            subKn: 'ಗಂಧೋದಕ (೮ ದ್ರವ್ಯ)',
            subEn: '8 Ingredients'
          },
        ].map((w) => (
          <button
            key={w.id}
            onClick={() => setSelectedWater(w.id as any)}
            className={`p-2.5 rounded-2xl border text-center transition-all ${
              selectedWater === w.id
                ? 'bg-gradient-to-b from-[#ff9933] to-[#d97706] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_12px_rgba(255,153,51,0.4)] scale-[1.02]'
                : 'bg-[#140404] hover:bg-[#250a0a] text-[#fef3c7]/80 border-[#ffd700]/15'
            }`}
          >
            <div className="font-serif text-xs sm:text-sm font-bold">
              {lang === 'kn' ? w.nameKn : w.nameEn}
            </div>
            <div className="text-[10px] opacity-90 font-sans mt-0.5">
              {lang === 'kn' ? w.subKn : w.subEn}
            </div>
          </button>
        ))}
      </div>

      {/* Detailed Card for Selected Water */}
      <div className="bg-[#140404] border border-[#ffd700]/20 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-inner">
        {selectedWater === 'shuddhodaka' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
                {lang === 'kn' ? 'ಶುದ್ಧೋದಕ (ಶುದ್ಧಾಭಿಷೇಕ)' : 'Shuddhodaka (Pure Water Abhisheka)'}
              </h5>
              <span className="text-xs bg-[#ff9933]/20 text-[#ffd700] px-2 py-0.5 rounded-full border border-[#ff9933]/30 font-sans">
                ಶಂಖದಿಂದ ನೇರ ಅಭಿಷೇಕ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="bg-[#250a0a] border border-[#ffd700]/15 rounded-xl p-3 space-y-1.5">
                <span className="text-[11px] font-bold text-[#ff9933] uppercase tracking-wider block">
                  {lang === 'kn' ? 'ದ್ರವ್ಯ / ಸಾಮಗ್ರಿಗಳು:' : 'Ingredients:'}
                </span>
                <ul className="space-y-1 text-[#fef3c7]/90 list-disc list-inside">
                  <li>{lang === 'kn' ? 'ಶುದ್ಧ ನದೀ ಜಲ / ಬಾವಿ ನೀರು (ಅಥವಾ ಮಂತ್ರ ಸಂಸ್ಕಾರವಾದ ಶುದ್ಧ ಜಲ)' : 'Pure sanctified river/well water'}</li>
                  <li>{lang === 'kn' ? 'ಹಸಿ ತುಳಸಿ ದಳಗಳು' : 'Fresh holy Tulasi leaves'}</li>
                </ul>
              </div>

              <div className="bg-[#250a0a] border border-[#ffd700]/15 rounded-xl p-3 space-y-1.5">
                <span className="text-[11px] font-bold text-[#ff9933] uppercase tracking-wider block">
                  {lang === 'kn' ? 'ಶಾಸ್ತ್ರೋಕ್ತ ವಿಧಾನ:' : 'Procedure:'}
                </span>
                <p className="text-[#fef3c7]/90 leading-relaxed">
                  {lang === 'kn'
                    ? 'ಶಂಖದಲ್ಲಿ ಶುದ್ಧ ಜಲ ಮತ್ತು ತುಳಸಿ ದಳಗಳನ್ನು ತುಂಬಿ, "ಇಮಂ ಮೇ ಗಂಗೇ..." ಎಂದು ಸಪ್ತನದಿಗಳನ್ನು ಆವಾಹಿಸಿ ಸಾಲಿಗ್ರಾಮ ಶಿಲೆಗೆ ನೇರವಾಗಿ ಅಭಿಷೇಕ ಮಾಡಬೇಕು.'
                    : 'Fill Shankha with water and Tulasi, invoke Sapta-Nadi and bathe Saligrama directly from conch.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedWater === 'agrodaka' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
                {lang === 'kn' ? 'ಅಗ್ರೋದಕ (ಪೂರ್ಣ ಕುಂಭ ಅಭಿಷೇಕ)' : 'Agrodaka (Poorna Kumbha Abhisheka)'}
              </h5>
              <span className="text-xs bg-[#ff9933]/20 text-[#ffd700] px-2 py-0.5 rounded-full border border-[#ff9933]/30 font-sans">
                ಕಲಶ ಸ್ಪರ್ಶ ಶಂಖ ಧಾರಾ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div className="bg-[#250a0a] border border-[#ffd700]/15 rounded-xl p-3 space-y-1.5">
                <span className="text-[11px] font-bold text-[#ff9933] uppercase tracking-wider block">
                  {lang === 'kn' ? 'ದ್ರವ್ಯ / ಸಾಮಗ್ರಿಗಳು:' : 'Ingredients:'}
                </span>
                <ul className="space-y-1 text-[#fef3c7]/90 list-disc list-inside">
                  <li>{lang === 'kn' ? 'ಕಲಶದಲ್ಲಿ ತುಂಬಿದ ಶುದ್ಧ ಜಲ' : 'Pure water filled in copper/silver Kalasha'}</li>
                  <li>{lang === 'kn' ? 'ತುಳಸಿ ದಳಗಳು' : 'Fresh Tulasi leaves'}</li>
                </ul>
              </div>

              <div className="bg-[#250a0a] border border-[#ffd700]/15 rounded-xl p-3 space-y-1.5">
                <span className="text-[11px] font-bold text-[#ff9933] uppercase tracking-wider block">
                  {lang === 'kn' ? 'ಶಾಸ್ತ್ರೋಕ್ತ ವಿಧಾನ:' : 'Procedure:'}
                </span>
                <p className="text-[#fef3c7]/90 leading-relaxed">
                  {lang === 'kn'
                    ? 'ಬಲಗೈಯಲ್ಲಿ ಕಲಶವನ್ನು ಹಿಡಿದು, ಎಡಗೈಯಲ್ಲಿರುವ ಶಂಖವನ್ನು ಕಲಶಕ್ಕೆ ಸ್ಪರ್ಶ ಮಾಡುತ್ತಾ, ಕಲಶದಿಂದ ಸಾಲಿಗ್ರಾಮಕ್ಕೆ ನಿರಂತರ ಅಖಂಡ ಧಾರೆಯಾಗಿ ಅಭಿಷೇಕ ಮಾಡಬೇಕು.'
                    : 'Hold Kalasha with right hand, touch Shankha to it, and pour continuous stream onto Saligrama.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedWater === 'swadodaka' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
                {lang === 'kn' ? 'ಸ್ವಾದೋದಕ (ಗಂಧೋದಕ - ೮ ದಿವ್ಯ ದ್ರವ್ಯಗಳು)' : 'Swadodaka (Gandhodaka - 8 Sacred Ingredients)'}
              </h5>
              <span className="text-xs bg-[#ff9933]/20 text-[#ffd700] px-2 py-0.5 rounded-full border border-[#ff9933]/30 font-sans">
                ತಂತ್ರಸಾರೋಕ್ತ ಗಂಧೋದಕ
              </span>
            </div>

            {/* 8 Sacred Ingredients Grid */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-[#ff9933] uppercase tracking-wider block font-sans">
                {lang === 'kn' ? '೮ ಪವಿತ್ರ ದ್ರವ್ಯಗಳು (Image 4 ರ ಪ್ರಕಾರ):' : '8 Authentic Ingredients:'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-sans">
                {[
                  { kn: '೧. ನೀರು (ಶುದ್ಧ ಜಲ)', en: '1. Pure Water' },
                  { kn: '೨. ಶುದ್ಧ ಶ್ರೀಗಂಧ', en: '2. Pure Sandalwood' },
                  { kn: '೩. ತುಳಸಿ ಕಾಷ್ಠ (ಕೊಂಬು)', en: '3. Tulasi Wood' },
                  { kn: '೪. ಲವಂಗ', en: '4. Cloves' },
                  { kn: '೫. ಏಲಕ್ಕಿ', en: '5. Cardamom' },
                  { kn: '೬. ಹಸಿ ತುಳಸಿ ದಳ', en: '6. Fresh Tulasi' },
                  { kn: '೭. ಪಚ್ಚಕರ್ಪೂರ', en: '7. Edible Camphor' },
                  { kn: '೮. ಕೇಸರ (ಕುಂಕುಮಕೇಸರಿ)', en: '8. Saffron' },
                ].map((ing, i) => (
                  <div key={i} className="bg-[#250a0a] border border-[#ffd700]/15 rounded-lg p-2 text-center text-[#ffeedd]">
                    <span className="text-[#ffd700] font-bold block">{lang === 'kn' ? ing.kn : ing.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#250a0a] border border-[#ff9933]/30 rounded-xl p-3 text-xs font-sans text-[#fef3c7]/90 leading-relaxed">
              <span className="font-bold text-[#ffd700] block mb-1">
                {lang === 'kn' ? 'ಅಭಿಷೇಕ ವಿಧಾನ:' : 'Abhisheka Method:'}
              </span>
              {lang === 'kn'
                ? 'ಈ ಎಂಟೂ ದ್ರವ್ಯಗಳನ್ನು ಕಲಶದ ನೀರಿನಲ್ಲಿ ಮಂತ್ರೋಕ್ತವಾಗಿ ಬೆರೆಸಿ, ಶಂಖವನ್ನು ಸ್ಪರ್ಶಿಸಿ ಕಲಶದಿಂದ ಸಾಲಿಗ್ರಾಮ ಮತ್ತು ಪ್ರತಿಮೆಗಳಿಗೆ ಸುಗಂಧೋದಕ ಅಭಿಷೇಕ ಮಾಡಬೇಕು.'
                : 'Blend these 8 sanctified ingredients into Kalasha water, touch conch to it, and pour the fragrant nectar stream onto deities.'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * 2. Serving Naivedya Shastric Protocol (Image 3):
 * Banana Leaf layout with Portions A, B, C, D, E, F, G
 */
export const NaivedyaServingProtocol: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedPortion, setSelectedPortion] = useState<string>('A');

  const portions = [
    {
      id: 'A',
      titleKn: 'ಭಾಗ A: ಮಹಾ ನೈವೇದ್ಯ (ಶ್ರೀಹರಿಗೆ)',
      titleEn: 'Portion A: Maha Naivedya (To Sri Hari)',
      itemsKn: 'ಅನ್ನ ಮತ್ತು ಪಾಯಸ',
      itemsEn: 'Rice & Payasa',
      gheeTulasiKn: 'ಕೇವಲ ತುಪ್ಪ ಮತ್ತು ತುಳಸಿ ಮಾತ್ರ',
      gheeTulasiEn: 'Only pure Cow Ghee & Tulasi',
      descKn: 'ಶ್ರೀಹರಿಗೆ ಮಾತ್ರ ಪ್ರಥಮ ಸಮರ್ಪಣೆ. ಸಮಸ್ತ ಜಗತ್ತಿನ ಒಡೆಯನಾದ ಲಕ್ಷ್ಮೀನಾರಾಯಣನಿಗೆ ಪ್ರೀತ್ಯರ್ಥವಾಗಿ ಸಮರ್ಪಿಸುವ ಮುಖ್ಯ ನೈವೇದ್ಯ.',
      descEn: 'Offered primarily to Sri Hari alone. The sanctified root of all subsequent offerings.'
    },
    {
      id: 'B',
      titleKn: 'ಭಾಗ B: ರಮಾ & ಮುಖ್ಯಪ್ರಾಣ ದೇವರಿಗೆ',
      titleEn: 'Portion B: To Rama & Mukhyaprana',
      itemsKn: 'ಅನ್ನ ಮತ್ತು ಪಾಯಸ',
      itemsEn: 'Rice & Payasa',
      gheeTulasiKn: 'ತುಪ್ಪ, ತುಳಸಿ ಮತ್ತು ತೀರ್ಥ ಪ್ರೋಕ್ಷಣೆ',
      gheeTulasiEn: 'Ghee, Tulasi & Holy Teertha',
      descKn: 'ಮಹಾನೈವೇದ್ಯದಿಂದ (A) ಸ್ವಲ್ಪ ಅನ್ನ-ಪಾಯಸವನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ, ತುಪ್ಪ-ತುಳಸಿ ಹಾಕಿ ದೇವರ ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥ ಪ್ರೋಕ್ಷಿಸಿ ರಮಾ ಹಾಗೂ ಮುಖ್ಯಪ್ರಾಣ ದೇವರಿಗೆ ನೈವೇದ್ಯ ಮಾಡಬೇಕು.',
      descEn: 'Separated from Maha Naivedya (A), sprinkled with ghee, tulasi, and Sri Hari’s Nirmalya Theertha, offered to Rama and Mukhyaprana.'
    },
    {
      id: 'C',
      titleKn: 'ಭಾಗ C: ಗರುಡ, ಶೇಷ, ರುದ್ರಾದಿ ದೇವತೆಗಳಿಗೆ',
      titleEn: 'Portion C: To Garuda, Shesha, Rudra & Parivara',
      itemsKn: 'ಅನ್ನ ಮತ್ತು ಪಾಯಸ',
      itemsEn: 'Rice & Payasa',
      gheeTulasiKn: 'ತುಪ್ಪ, ತುಳಸಿ ಮತ್ತು ತೀರ್ಥ ಪ್ರೋಕ್ಷಣೆ',
      gheeTulasiEn: 'Ghee, Tulasi & Holy Teertha',
      descKn: 'ಗರುಡ, ಶೇಷ, ರುದ್ರ, ಇಂದ್ರಾದಿ ಪರಿವಾರ ದೇವತೆಗಳಿಗೆ ಸಮರ್ಪಣೆ. ಪೂಜೆ ಸಂಪೂರ್ಣವಾದ ನಂತರ ಈ ಭಾಗವನ್ನು ಶುದ್ಧ ಜಲದಲ್ಲಿ ವಿಸರ್ಜಿಸಬೇಕು.',
      descEn: 'Offered to Garuda, Shesha, Rudra and family deities. Immersed in pure water after puja.'
    },
    {
      id: 'D',
      titleKn: 'ಭಾಗ D: ವೈಶ್ವದೇವಕ್ಕೆ ಮಾತ್ರ (ಅತ್ಯಂತ ಮುಖ್ಯ)',
      titleEn: 'Portion D: Vaishvadeva Only (CRITICAL RULE)',
      itemsKn: 'ಅನ್ನ ಮಾತ್ರ (ಪಾಯಸವಿಲ್ಲ)',
      itemsEn: 'Cooked Rice only',
      gheeTulasiKn: 'ತುಪ್ಪ ಮತ್ತು ತುಳಸಿ ಮಾತ್ರ (ತೀರ್ಥ ಹಾಕುವಂತಿಲ್ಲ!)',
      gheeTulasiEn: 'Ghee & Tulasi only (NO TEERTHA!)',
      descKn: 'ಎಚ್ಚರಿಕೆ: ಈ ಭಾಗವನ್ನು ಕೇವಲ ವೈಶ್ವದೇವ ಹೋಮಕ್ಕೆ ಇಟ್ಟುಕೊಳ್ಳಬೇಕು. ಇದಕ್ಕೆ ರಮಾ-ವಾಯು ದೇವರ ನೈವೇದ್ಯ ಮಾಡಬಾರದು! ದೇವರ ತೀರ್ಥವನ್ನು ಎಂದಿಗೂ ಪ್ರೋಕ್ಷಿಸಬಾರದು!',
      descEn: 'Strict warning: Set aside strictly for Vaishvadeva fire ritual. Never offer this to Rama-Vayu and NEVER sprinkle holy Teertha on it!',
      warning: true
    },
    {
      id: 'E',
      titleKn: 'ಭಾಗ E: ಗೋಗ್ರಾಸ ನೈವೇದ್ಯ (ಗೋಮಾತೆಗೆ)',
      titleEn: 'Portion E: Gograsa (To Sacred Cow)',
      itemsKn: 'ವೈಶ್ವದೇವ ಶೇಷಾನ್ನ + ಮಹಾನೈವೇದ್ಯ',
      itemsEn: 'Post-Vaishvadeva rice',
      gheeTulasiKn: 'ತುಳಸಿ, ತುಪ್ಪ ಮತ್ತು ತೀರ್ಥ',
      gheeTulasiEn: 'Tulasi, Ghee & Teertha',
      descKn: 'ವೈಶ್ವದೇವ ಮುಗಿದ ನಂತರ ಅದರ ಶೇಷಾನ್ನವನ್ನು ಮಹಾನೈವೇದ್ಯಕ್ಕೆ ಸೇರಿಸಿ, ಪ್ರತ್ಯೇಕಿಸಿ ಗೋಮಾತೆಗೆ ಭಕ್ತಿಯಿಂದ ಸಮರ್ಪಿಸುವ ಗೋಗ್ರಾಸ.',
      descEn: 'Prepared after Vaishvadeva, mixed with Maha Naivedya, offered reverently to Gomata.'
    },
    {
      id: 'F',
      titleKn: 'ಭಾಗ F: ತುಳಸಿ ನೈವೇದ್ಯ (ತುಳಸಿ ವೃಂದಾವನಕ್ಕೆ)',
      titleEn: 'Portion F: Tulasi Naivedya (To Vrindavana)',
      itemsKn: 'ವೈಶ್ವದೇವ ಶೇಷಾನ್ನ + ಮಹಾನೈವೇದ್ಯ',
      itemsEn: 'Post-Vaishvadeva rice',
      gheeTulasiKn: 'ತುಳಸಿ, ತುಪ್ಪ ಮತ್ತು ತೀರ್ಥ',
      gheeTulasiEn: 'Tulasi, Ghee & Teertha',
      descKn: 'ತುಳಸಿ ವೃಂದಾವನಕ್ಕೆ ಸಮರ್ಪಿಸುವ ನೈವೇದ್ಯ ಭಾಗ. ಸಕಲ ತೀರ್ಥ ಸ್ವರೂಪಿಣಿಯಾದ ತುಳಸಿಗೆ ಅರ್ಪಣೆ.',
      descEn: 'Offered to Tulasi Vrindavana plant, consecrated with Tulasi and holy Teertha.'
    },
    {
      id: 'G',
      titleKn: 'ಭಾಗ G: ಹಸ್ತೋದಕ (ಶ್ರೀ ರಾಘವೇಂದ್ರಸ್ವಾಮಿಗಳು / ಗುರುಗಳಿಗೆ)',
      titleEn: 'Portion G: Hastodaka (To Gurus & Sri Rayaru)',
      itemsKn: 'ವೈಶ್ವದೇವ ಶೇಷಾನ್ನ + ಮಹಾನೈವೇದ್ಯ',
      itemsEn: 'Post-Vaishvadeva rice',
      gheeTulasiKn: 'ತುಳಸಿ, ತುಪ್ಪ ಮತ್ತು ತೀರ್ಥ',
      gheeTulasiEn: 'Tulasi, Ghee & Teertha',
      descKn: 'ಪರಂಪರೆಯಂತೆ ಗುರುಗಳಿಗೆ (ಶ್ರೀಮದಾನಂದತೀರ್ಥ ಭಗವತ್ಪಾದರು, ಶ್ರೀ ಜಯತೀರ್ಥರು, ಶ್ರೀ ರಾಘವೇಂದ್ರತೀರ್ಥರು) ಸಮರ್ಪಿಸುವ ಪವಿತ್ರ ಹಸ್ತೋದಕ.',
      descEn: 'Sacred Hastodaka offered to Sri Madhvacharya, Sri Jayatheertha, Sri Raghavendra Swamiji and Gurus.'
    }
  ];

  const current = portions.find((p) => p.id === selectedPortion) || portions[0];

  return (
    <div className="bg-[#1e0707] border-2 border-[#ffd700]/30 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4 text-[#fef3c7]">
      {/* Header Banner */}
      <div className="flex items-center justify-between gap-2 border-b border-[#ffd700]/15 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933]">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
              {lang === 'kn' ? 'ನೈವೇದ್ಯ ಬಡಿಸುವ ಶಾಸ್ತ್ರೋಕ್ತ ಕ್ರಮ (ಬಾಳೆ ಎಲೆ ವಿಭಾಗ A - G)' : 'Shastric Naivedya Serving Protocol (A to G)'}
            </h4>
            <p className="text-[11px] text-[#ffd700]/70 font-sans">
              {lang === 'kn' ? 'ಮಹಾನೈವೇದ್ಯ, ರಮಾ-ವಾಯು, ವೈಶ್ವದೇವ, ಗೋಗ್ರಾಸ, ಹಸ್ತೋದಕ ವಿಂಗಡಣೆ' : 'Distribution to Sri Hari, Rama-Vayu, Vaishvadeva, Cow & Gurus'}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-sans font-bold bg-[#ff9933]/20 text-[#ffd700] px-2.5 py-0.5 rounded-full border border-[#ff9933]/40">
          Image 3 ಚಾರ್ಟ್
        </span>
      </div>

      {/* Visual Plantain Leaf Diagram (SVG) with Interactive Clickable Portions */}
      <div className="bg-[#140404] border border-[#ffd700]/25 rounded-2xl p-4 text-center space-y-2 shadow-inner">
        <span className="text-[11px] font-bold text-[#ffd700] font-sans block">
          {lang === 'kn' ? 'ಬಾಳೆ ಎಲೆಯ ವಿನ್ಯಾಸ (ಭಾಗಗಳನ್ನು ಸ್ಪರ್ಶಿಸಿ ವಿವರ ನೋಡಿ):' : 'Interactive Banana Leaf Layout (Tap letters to view rules):'}
        </span>

        {/* Banana Leaf Graphic */}
        <div className="relative max-w-md mx-auto py-2">
          <svg viewBox="0 0 360 140" className="w-full h-auto drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Green Banana Leaf Shape */}
            <path
              d="M 20 70 C 50 20, 310 20, 340 70 C 310 120, 50 120, 20 70 Z"
              fill="#1b4317"
              stroke="#22c55e"
              strokeWidth="2.5"
            />
            {/* Midrib (Central Leaf Vein) */}
            <line x1="20" y1="70" x2="340" y2="70" stroke="#4ade80" strokeWidth="2" strokeDasharray="3 2" />

            {/* Section A: Maha Naivedya (Top Center) */}
            <g onClick={() => setSelectedPortion('A')} className="cursor-pointer">
              <circle cx="180" cy="48" r="20" fill={selectedPortion === 'A' ? '#ff9933' : '#b45309'} stroke="#ffd700" strokeWidth="2" />
              <text x="180" y="52" textAnchor="middle" fill="#1a0606" fontSize="13" fontWeight="bold">A</text>
            </g>

            {/* Pre-Vaishvadeva Portions B, C, D */}
            <g onClick={() => setSelectedPortion('B')} className="cursor-pointer">
              <circle cx="75" cy="46" r="14" fill={selectedPortion === 'B' ? '#ff9933' : '#3d1111'} stroke="#ffd700" strokeWidth="1.5" />
              <text x="75" y="50" textAnchor="middle" fill={selectedPortion === 'B' ? '#1a0606' : '#ffd700'} fontSize="11" fontWeight="bold">B</text>
            </g>
            <g onClick={() => setSelectedPortion('C')} className="cursor-pointer">
              <circle cx="115" cy="46" r="14" fill={selectedPortion === 'C' ? '#ff9933' : '#3d1111'} stroke="#ffd700" strokeWidth="1.5" />
              <text x="115" y="50" textAnchor="middle" fill={selectedPortion === 'C' ? '#1a0606' : '#ffd700'} fontSize="11" fontWeight="bold">C</text>
            </g>
            <g onClick={() => setSelectedPortion('D')} className="cursor-pointer">
              <circle cx="280" cy="46" r="15" fill={selectedPortion === 'D' ? '#ef4444' : '#7f1d1d'} stroke="#ffd700" strokeWidth="2" />
              <text x="280" y="50" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">D</text>
            </g>

            {/* Post-Vaishvadeva Portions E, F, G (Bottom row) */}
            <g onClick={() => setSelectedPortion('E')} className="cursor-pointer">
              <circle cx="100" cy="94" r="15" fill={selectedPortion === 'E' ? '#ff9933' : '#3d1111'} stroke="#ffd700" strokeWidth="1.5" />
              <text x="100" y="98" textAnchor="middle" fill={selectedPortion === 'E' ? '#1a0606' : '#ffd700'} fontSize="11" fontWeight="bold">E</text>
            </g>
            <g onClick={() => setSelectedPortion('F')} className="cursor-pointer">
              <circle cx="180" cy="94" r="15" fill={selectedPortion === 'F' ? '#ff9933' : '#3d1111'} stroke="#ffd700" strokeWidth="1.5" />
              <text x="180" y="98" textAnchor="middle" fill={selectedPortion === 'F' ? '#1a0606' : '#ffd700'} fontSize="11" fontWeight="bold">F</text>
            </g>
            <g onClick={() => setSelectedPortion('G')} className="cursor-pointer">
              <circle cx="260" cy="94" r="15" fill={selectedPortion === 'G' ? '#ff9933' : '#3d1111'} stroke="#ffd700" strokeWidth="1.5" />
              <text x="260" y="98" textAnchor="middle" fill={selectedPortion === 'G' ? '#1a0606' : '#ffd700'} fontSize="11" fontWeight="bold">G</text>
            </g>
          </svg>
        </div>

        {/* 7 Interactive Letter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          {portions.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPortion(p.id)}
              className={`w-9 h-9 rounded-xl font-serif font-bold text-xs transition-all border ${
                selectedPortion === p.id
                  ? p.warning
                    ? 'bg-red-600 text-white border-red-300 shadow-[0_0_12px_rgba(239,68,68,0.6)] scale-110'
                    : 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] shadow-[0_0_12px_rgba(255,153,51,0.6)] scale-110'
                  : 'bg-[#250a0a] text-[#ffd700] border-[#ffd700]/20 hover:border-[#ff9933]/50'
              }`}
            >
              {p.id}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Portion Details Panel */}
      <div className={`border rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl ${
        current.warning
          ? 'bg-[#2a0808] border-red-500/60 ring-2 ring-red-500/20'
          : 'bg-[#140404] border-[#ffd700]/25'
      }`}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff9933] font-sans">
              ಶಾಸ್ತ್ರೋಕ್ತ ಬಾಳೆ ಎಲೆ ನೈವೇದ್ಯ ವಿಭಾಗ
            </span>
            <h5 className="font-serif font-bold text-base sm:text-lg text-[#ffd700]">
              {lang === 'kn' ? current.titleKn : current.titleEn}
            </h5>
          </div>
          {current.warning && (
            <span className="flex items-center gap-1 text-[10px] font-bold bg-red-600/30 text-red-300 border border-red-500/50 px-2.5 py-0.5 rounded-full font-sans">
              <AlertTriangle className="w-3.5 h-3.5" />
              ಕಡ್ಡಾಯ ಎಚ್ಚರಿಕೆ
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
          <div className="bg-[#250a0a] border border-[#ffd700]/15 rounded-xl p-3">
            <span className="text-[11px] font-bold text-[#ff9933] block mb-1">
              {lang === 'kn' ? 'ಪದಾರ್ಥ:' : 'Item:'}
            </span>
            <span className="text-[#ffeedd] font-semibold">{lang === 'kn' ? current.itemsKn : current.itemsEn}</span>
          </div>

          <div className="bg-[#250a0a] border border-[#ffd700]/15 rounded-xl p-3">
            <span className="text-[11px] font-bold text-[#ff9933] block mb-1">
              {lang === 'kn' ? 'ತುಳಸಿ & ತುಪ್ಪ & ತೀರ್ಥ ನಿಯಮ:' : 'Ghee, Tulasi & Teertha Rule:'}
            </span>
            <span className={`font-semibold ${current.warning ? 'text-red-300' : 'text-[#ffeedd]'}`}>
              {lang === 'kn' ? current.gheeTulasiKn : current.gheeTulasiEn}
            </span>
          </div>
        </div>

        <p className="text-xs text-[#fef3c7]/90 leading-relaxed font-sans bg-[#250a0a]/60 border border-[#ffd700]/10 p-3 rounded-xl">
          {lang === 'kn' ? current.descKn : current.descEn}
        </p>
      </div>
    </div>
  );
};

/**
 * 3. Shankhabhramana Mangalarati Visual Protocol (Image 5):
 * The 3 concentric orbits around Lord Vishnu with sacred verse
 */
export const ShankhabhramanaVisualProtocol: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeOrbit, setActiveOrbit] = useState<number>(1);

  const orbits = [
    {
      num: 1,
      nameKn: '೧ನೇ ಸುತ್ತು: ಪಾದ - ಕಿರೀಟ - ಪಾದ',
      nameEn: '1st Orbit: Feet to Crown to Feet',
      meaningKn: 'ಸ್ಥೂಲ ಶರೀರ ಶುದ್ಧಿ (ಭೌತಿಕ ದೇಹದ ಪಾಪ ನಿವಾರಣೆ)',
      meaningEn: 'Cleansing of Gross Physical Body (Sthoola Sharira)'
    },
    {
      num: 2,
      nameKn: '೨ನೇ ಸುತ್ತು: ನಾಭಿ - ಕಿರೀಟ - ನಾಭಿ',
      nameEn: '2nd Orbit: Navel to Crown to Navel',
      meaningKn: 'ಲಿಂಗ ಶರೀರ ಶುದ್ಧಿ (ಮನಸ್ಸು & ಪ್ರಾಣ ಸಂಸ್ಕಾರ)',
      meaningEn: 'Cleansing of Subtle Astral Body (Linga Sharira)'
    },
    {
      num: 3,
      nameKn: '೩ನೇ ಸುತ್ತು: ಎದೆ - ಕಿರೀಟ - ಎದೆ',
      nameEn: '3rd Orbit: Chest to Crown to Chest',
      meaningKn: 'ಕಾರಣ ಶರೀರ ಶುದ್ಧಿ (ಆತ್ಮ ಸಾಕ್ಷಾತ್ಕಾರ & ದಿವ್ಯ ತೇಜಸ್ಸು)',
      meaningEn: 'Cleansing of Causal Body (Karana Sharira)'
    },
  ];

  return (
    <div className="bg-[#1e0707] border-2 border-[#ffd700]/30 rounded-3xl p-4 sm:p-5 shadow-2xl space-y-4 text-[#fef3c7]">
      {/* Header Banner */}
      <div className="flex items-center justify-between gap-2 border-b border-[#ffd700]/15 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933]">
            <RotateCw className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm sm:text-base text-[#ffd700]">
              {lang === 'kn' ? 'ಮಂಗಳಾರತಿ & ಶಂಖಭ್ರಮಣ ಪ್ರದಕ್ಷಿಣೆ ವಿಧಿ (೩ ಸುತ್ತುಗಳು)' : 'Shankhabhramana 3 Circular Orbits (Lord Vishnu)'}
            </h4>
            <p className="text-[11px] text-[#ffd700]/70 font-sans">
              {lang === 'kn' ? 'ಶಂಖೋದಕ ಪ್ರೋಕ್ಷಣೆಯಿಂದ ಸಕಲ ಪಾಪ ದಹನ ರಹಸ್ಯ' : 'Sacred Shankha circling and Prokshana Teertha secret'}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-sans font-bold bg-[#ff9933]/20 text-[#ffd700] px-2.5 py-0.5 rounded-full border border-[#ff9933]/40">
          Image 5 ವಿನ್ಯಾಸ
        </span>
      </div>

      {/* Center Vishnu Graphic with 3 Orbits (SVG) */}
      <div className="bg-[#140404] border border-[#ffd700]/25 rounded-2xl p-4 flex flex-col items-center justify-center space-y-3 shadow-inner">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Halo */}
            <circle cx="120" cy="120" r="110" fill="#250a0a" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.2" />

            {/* Orbit 1: Feet to Crown to Feet (Full Outer Oval) */}
            <ellipse
              cx="120"
              cy="120"
              rx="95"
              ry="105"
              stroke={activeOrbit === 1 ? '#ff9933' : '#ffd700'}
              strokeWidth={activeOrbit === 1 ? '3' : '1.5'}
              strokeDasharray={activeOrbit === 1 ? 'none' : '4 3'}
              strokeOpacity={activeOrbit === 1 ? 1 : 0.4}
            />
            {/* Orbit 2: Navel to Crown (Mid Oval) */}
            <ellipse
              cx="120"
              cy="105"
              rx="75"
              ry="80"
              stroke={activeOrbit === 2 ? '#ff9933' : '#ffd700'}
              strokeWidth={activeOrbit === 2 ? '3' : '1.5'}
              strokeDasharray={activeOrbit === 2 ? 'none' : '4 3'}
              strokeOpacity={activeOrbit === 2 ? 1 : 0.4}
            />
            {/* Orbit 3: Chest to Crown (Inner Oval) */}
            <ellipse
              cx="120"
              cy="95"
              rx="55"
              ry="55"
              stroke={activeOrbit === 3 ? '#ff9933' : '#ffd700'}
              strokeWidth={activeOrbit === 3 ? '3' : '1.5'}
              strokeDasharray={activeOrbit === 3 ? 'none' : '4 3'}
              strokeOpacity={activeOrbit === 3 ? 1 : 0.4}
            />

            {/* Central Lord Vishnu Silhouette */}
            {/* Crown (Kireeta) */}
            <path d="M 112 40 L 128 40 L 124 20 L 120 15 L 116 20 Z" fill="#ffd700" stroke="#ff9933" strokeWidth="1.5" />
            <circle cx="120" cy="15" r="3" fill="#ff9933" />
            {/* Face */}
            <circle cx="120" cy="48" r="9" fill="#f59e0b" fillOpacity="0.8" stroke="#ffd700" strokeWidth="1" />
            {/* Chest & Torso */}
            <path d="M 110 57 L 130 57 L 128 95 L 112 95 Z" fill="#b45309" fillOpacity="0.6" stroke="#ffd700" strokeWidth="1.5" />
            {/* Navel (Nabhi) */}
            <circle cx="120" cy="100" r="3" fill="#ffd700" />
            {/* Lower Garment & Lotus Feet (Pada) */}
            <path d="M 112 105 L 128 105 L 132 175 L 108 175 Z" fill="#d97706" fillOpacity="0.7" stroke="#ffd700" strokeWidth="1.5" />
            <circle cx="114" cy="180" r="4" fill="#ffd700" />
            <circle cx="126" cy="180" r="4" fill="#ffd700" />
            {/* Lotus Throne */}
            <path d="M 95 185 C 105 195, 135 195, 145 185 Z" fill="#b45309" stroke="#ffd700" strokeWidth="2" />

            {/* 4 Hands */}
            <path d="M 110 65 L 85 55" stroke="#ffd700" strokeWidth="2" />
            <circle cx="85" cy="55" r="5" fill="#ff9933" /> {/* Shankha */}
            <path d="M 130 65 L 155 55" stroke="#ffd700" strokeWidth="2" />
            <circle cx="155" cy="55" r="5" fill="#ffd700" /> {/* Chakra */}
            <path d="M 110 75 L 88 115" stroke="#ffd700" strokeWidth="2" />
            <rect x="84" y="115" width="8" height="20" rx="3" fill="#ffd700" /> {/* Gada */}
            <path d="M 130 75 L 148 105" stroke="#ffd700" strokeWidth="2" />
            <circle cx="148" cy="105" r="6" fill="#f43f5e" /> {/* Padma */}

            {/* Orbit Labels */}
            <text x="120" y="232" textAnchor="middle" fill="#ff9933" fontSize="9" fontWeight="bold">
              ೧. ಪಾದ - ಕಿರೀಟ - ಪಾದ
            </text>
            <text x="120" y="218" textAnchor="middle" fill="#ffd700" fontSize="8">
              ೨. ನಾಭಿ - ಕಿರೀಟ | ೩. ಎದೆ - ಕಿರೀಟ
            </text>
          </svg>
        </div>

        {/* 3 Orbit Interactive Buttons */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {orbits.map((o) => (
            <button
              key={o.num}
              onClick={() => setActiveOrbit(o.num)}
              className={`p-2 rounded-xl text-center border transition-all text-xs font-sans ${
                activeOrbit === o.num
                  ? 'bg-gradient-to-b from-[#ff9933] to-[#d97706] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_10px_rgba(255,153,51,0.4)]'
                  : 'bg-[#250a0a] text-[#fef3c7]/70 border-[#ffd700]/15 hover:border-[#ff9933]/40'
              }`}
            >
              <div className="font-serif font-bold">{lang === 'kn' ? `${o.num}ನೇ ಸುತ್ತು` : `Orbit ${o.num}`}</div>
              <div className="text-[10px] truncate mt-0.5">{lang === 'kn' ? o.nameKn.split(':')[1] : o.nameEn.split(':')[1]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Sacred Shloka Card */}
      <div className="bg-[#140404] border border-[#ff9933]/30 rounded-2xl p-4 text-center space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff9933] font-sans">
          ಶಂಖಭ್ರಮಣ ಕಾಲದಲ್ಲಿ ಪಠಿಸಬೇಕಾದ ಪವಿತ್ರ ಶ್ಲೋಕ
        </span>
        <p className="font-serif text-base sm:text-lg text-[#ffd700] leading-relaxed font-semibold">
          ಇಮಾ ಆಪಃ ಶಿವತಮಾಃ ಶುಭಾಃ ಶೀತಲಾಃ ಸಂತು ಪೂತಾಃ ।<br />
          ಸೂರ್ಯಸ್ಯ ರಶ್ಮಿಭಿಃ ॥
        </p>
        <p className="text-xs text-[#fef3c7]/80 font-sans mt-1">
          {lang === 'kn'
            ? 'ವಿಧಿ: ಶಂಖದಲ್ಲಿ ನೀರು ತುಂಬಿ ದೇವರ ಎದುರು ೩ ಸುತ್ತು ಸುತ್ತಿ, ನಂತರ ಆ ಜಲವನ್ನು ಸ್ವಯಂ ಶಿರಸ್ಸಿಗೆ ಪ್ರೋಕ್ಷಣೆ ಮಾಡಿಕೊಳ್ಳುವುದು.'
            : 'Method: Circle water in conch 3 times before deity, then sprinkle onto head as purifying Prokshana Teertha.'}
        </p>
      </div>
    </div>
  );
};
