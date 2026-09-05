import React, { useState } from 'react';
import { Language } from '../types';
import {
  Calendar,
  AlertTriangle,
  Clock,
  Sparkles,
  Share2,
  CheckCircle2,
  Copy,
  Info
} from 'lucide-react';

interface EkadashiWorkflowProps {
  lang: Language;
  onSwitchToPooja: () => void;
}

export const EkadashiWorkflow: React.FC<EkadashiWorkflowProps> = ({
  lang,
  onSwitchToPooja,
}) => {
  const [selectedCity, setSelectedCity] = useState<'bengaluru' | 'mumbai' | 'hyderabad' | 'chennai' | 'delhi'>('bengaluru');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const cityTimes = {
    bengaluru: { sunrise: '06:12 AM', paraneStart: '06:15 AM', paraneEnd: '08:45 AM' },
    mumbai: { sunrise: '06:28 AM', paraneStart: '06:30 AM', paraneEnd: '09:10 AM' },
    hyderabad: { sunrise: '06:08 AM', paraneStart: '06:10 AM', paraneEnd: '08:40 AM' },
    chennai: { sunrise: '06:02 AM', paraneStart: '06:05 AM', paraneEnd: '08:30 AM' },
    delhi: { sunrise: '06:00 AM', paraneStart: '06:02 AM', paraneEnd: '08:25 AM' },
  };

  const handleCopyWhatsApp = () => {
    const text = lang === 'kn'
      ? `🚩 *ಏಕಾದಶಿ ಪೂಜಾ ಮತ್ತು ವ್ರತ ನಿಯಮಗಳು (ತಂತ್ರಸಾರ ಪದ್ಧತಿ)*\n\n೧. *ನೈವೇದ್ಯ:* ಅನ್ನ, ಪಾಯಸ, ರವೆ ನಿಷೇಧ. ಕೇವಲ ಹಾಲು, ಹಣ್ಣು, ಒಣದ್ರಾಕ್ಷಿ, ಜೇನುತುಪ್ಪ & ಕಲ್ಲುಸಕ್ಕರೆ ಮಾತ್ರ ನೈವೇದ್ಯ.\n೨. *ತೀರ್ಥ:* ಶಂಖ, ಪ್ರಾಣದೇವರು, ಗರುಡ-ಶೇಷ & ಯತಿಗಳಿಗೆ ಕೇವಲ ೧ ಬಾರಿ ಮಾತ್ರ ತೀರ್ಥ ನೀಡಬೇಕು.\n೩. *ಯತಿ ಪೂಜೆ:* ಯತಿಗಳಿಗೆ ಗಂಧ-ನೈವೇದ್ಯ ಸಮರ್ಪಣೆ ಇರುವುದಿಲ್ಲ.\n೪. *ದ್ವಾದಶಿ ಪಾರಣೆ:* ಸೂರ್ಯೋದಯದ ನಂತರ ಪ್ರಶಸ್ತ ಕಾಲದಲ್ಲಿ ತೀರ್ಥ-ಪ್ರಸಾದ ಸ್ವೀಕಾರ.\n\n_ಶ್ರೀ ಉತ್ತರಾದಿ ಮಠ ಪಂಚಾಂಗದೊಂದಿಗೆ ದೃಢೀಕರಿಸಿಕೊಳ್ಳಿ._`
      : `🚩 *Ekadashi Pooja & Vrata Essentials (Tantrasarokta Guide)*\n\n1. *Naivedya:* Cooked grains strictly avoided. Offer only fresh fruits, milk, honey, raisins & rock sugar.\n2. *Teertha:* Offer Teertha to Shankha, Mukhyaprana, Garuda-Shesha & Yatis once only.\n3. *Yatis:* No Gandha/Naivedya offered to Gurus/Yatis on Ekadashi.\n4. *Dvadashi Parane:* Complete Parane after sunrise during the auspicious Harivasara-free window.\n\n_Verify exact regional timings with official Uttaradi Math Panchanga._`;

    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      lang === 'kn'
        ? `🚩 *ಏಕಾದಶಿ ಪೂಜಾ ನಿಯಮಗಳು (ಶ್ರೀ ಉತ್ತರಾದಿ ಮಠ / ತಂತ್ರಸಾರ ಪದ್ಧತಿ)*\n- ಅನ್ನ ನೈವೇದ್ಯವಿಲ್ಲ, ಕೇವಲ ಫಲ-ಕಲ್ಲುಸಕ್ಕರೆ ನೈವೇದ್ಯ\n- ಶಂಖ-ಪ್ರಾಣದೇವರಿಗೆ ೧ ಬಾರಿ ಮಾತ್ರ ತೀರ್ಥ\n- ಯತಿಗಳಿಗೆ ಗಂಧ-ನೈವೇದ್ಯವಿಲ್ಲ\n\nದೇವಪೂಜಾ ಆ್ಯಪ್ ಮೂಲಕ ಸರಿಯಾಗಿ ಅನುಷ್ಠಾನ ಮಾಡಿ!`
        : `🚩 *Ekadashi Pooja Rules (Uttaradi Tantrasara Paddhati)*\n- No grain naivedya; only fruits & rock sugar\n- 1-time teertha for Shankha & Mukhyaprana\n- Fasting with complete devotion to Sri Hari!`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-6 text-[#fef3c7]">
      {/* Ekadashi Banner Card */}
      <div className="bg-[#250a0a]/90 border border-[#ff9933]/40 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ff9933]/20 border border-[#ff9933]/50 flex items-center justify-center text-[#ff9933] text-2xl shadow-[0_0_15px_rgba(255,153,51,0.3)] font-serif">
              🚩
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-[#ff9933]/20 border border-[#ff9933]/40 text-[#ff9933] font-sans">
                {lang === 'kn' ? 'ಏಕಾದಶಿ & ದ್ವಾದಶಿ ವಿಶೇಷ' : 'Ekadashi & Dvadashi Special'}
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#fef3c7] mt-1">
                {lang === 'kn' ? 'ಏಕಾದಶಿ ಪೂಜಾ ನಿಯಮಾವಳಿ & ಪಾರಣೆ ಮಾರ್ಗದರ್ಶಿ' : 'Ekadashi Pooja Protocol & Parane Guide'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs font-sans flex items-center gap-1.5 transition-all shadow active:scale-95"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'WhatsApp ಶೇರ್' : 'Share WhatsApp'}</span>
            </button>
            <button
              onClick={handleCopyWhatsApp}
              className="px-4 py-2 rounded-full bg-[#3d1111] hover:bg-[#4d1717] text-[#fef3c7] border border-[#ffd700]/20 text-xs font-bold font-sans flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedNotification ? (lang === 'kn' ? 'ಕಾಪಿ ಆಗಿದೆ!' : 'Copied!') : (lang === 'kn' ? 'ಕಾಪಿ ಮಾಡಿ' : 'Copy')}</span>
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#fef3c7]/90 leading-relaxed font-sans">
          {lang === 'kn'
            ? 'ಏಕಾದಶಿಯಂದು ಶ್ರೀಹರಿಯ ಪೂಜೆಯಲ್ಲಿ ಮುಖ್ಯವಾಗಿ ನೈವೇದ್ಯ ಮತ್ತು ತೀರ್ಥ ಸಮರ್ಪಣೆಯಲ್ಲಿ ಮಹತ್ವದ ವ್ಯತ್ಯಾಸಗಳಿರುತ್ತವೆ. ತಂತ್ರಸಾರೋಕ್ತ ಗ್ರಂಥದ ಅಧಿಕೃತ ನಿಯಮಗಳನ್ನು ಇಲ್ಲಿ ಸುಲಭವಾಗಿ ನೀಡಲಾಗಿದೆ.'
            : 'On Ekadashi, key shastric adjustments apply to Naivedya offerings and Teertha distribution according to Tantrasarokta Paddhati. Review the verified differences below.'}
        </p>
      </div>

      {/* 4 Major Differences Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Rule 1: Naivedya */}
        <div className="bg-[#250a0a]/70 border border-[#ffd700]/15 rounded-2xl p-5 space-y-2.5 shadow-xl">
          <div className="flex items-center gap-2 text-[#ff9933] font-bold text-sm font-sans">
            <span className="w-6 h-6 rounded-full bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-xs text-[#ff9933] font-bold font-serif">
              ೧
            </span>
            <span>{lang === 'kn' ? 'ನೈವೇದ್ಯದಲ್ಲಿ ಬದಲಾವಣೆ' : 'Naivedya Offering Changes'}</span>
          </div>
          <div className="bg-red-950/40 border border-red-800/40 rounded-xl p-3 text-xs text-red-200 font-medium font-sans">
            ❌ {lang === 'kn' ? 'ಅನ್ನ, ಪಾಯಸ, ಸಾರು, ರವೆ, ಪಕ್ವಾನ್ನ ನಿಷೇಧ' : 'Cooked rice, kheer, grains strictly prohibited'}
          </div>
          <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3 text-xs text-emerald-200 font-medium font-sans">
            ✅ {lang === 'kn' ? 'ಕೇವಲ ಹಣ್ಣು, ಹಾಲು, ಜೇನುತುಪ್ಪ, ಒಣದ್ರಾಕ್ಷಿ & ಕಲ್ಲುಸಕ್ಕರೆ ಮಾತ್ರ' : 'Only fresh fruits, milk, raisins, honey & rock sugar'}
          </div>
        </div>

        {/* Rule 2: Teertha counts */}
        <div className="bg-[#250a0a]/70 border border-[#ffd700]/15 rounded-2xl p-5 space-y-2.5 shadow-xl">
          <div className="flex items-center gap-2 text-[#ff9933] font-bold text-sm font-sans">
            <span className="w-6 h-6 rounded-full bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-xs text-[#ff9933] font-bold font-serif">
              ೨
            </span>
            <span>{lang === 'kn' ? 'ತೀರ್ಥ ಸಮರ್ಪಣೆ ಸಂಖ್ಯೆ' : 'Teertha Offering Count'}</span>
          </div>
          <p className="text-xs text-[#fef3c7]/80 leading-relaxed font-sans">
            {lang === 'kn'
              ? 'ಸಾಮಾನ್ಯ ದಿನಗಳಲ್ಲಿ ಶಂಖ, ಮುಖ್ಯಪ್ರಾಣ, ಗರುಡ-ಶೇಷ ಮತ್ತು ಯತಿಗಳಿಗೆ ೩ ಬಾರಿ ತೀರ್ಥ ನೀಡಲಾಗುತ್ತದೆ. ಆದರೆ ಏಕಾದಶಿಯಂದು ಕೇವಲ ೧ ಬಾರಿ ಮಾತ್ರ ತೀರ್ಥ ನೀಡಬೇಕು.'
              : 'On normal days, Teertha is offered 3 times to Shankha, Mukhyaprana, Garuda-Shesha & Yatis. On Ekadashi, it is offered ONCE only.'}
          </p>
          <div className="text-[11px] bg-[#3d1111] text-[#ff9933] px-3 py-1.5 rounded-xl border border-[#ff9933]/30 font-sans font-medium">
            {lang === 'kn' ? 'ಏಕಾದಶಿ: ೧ ಬಾರಿ ಮಾತ್ರ ತೀರ್ಥ' : 'Ekadashi rule: 1 time only'}
          </div>
        </div>

        {/* Rule 3: Yati pooja */}
        <div className="bg-[#250a0a]/70 border border-[#ffd700]/15 rounded-2xl p-5 space-y-2.5 shadow-xl">
          <div className="flex items-center gap-2 text-[#ff9933] font-bold text-sm font-sans">
            <span className="w-6 h-6 rounded-full bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-xs text-[#ff9933] font-bold font-serif">
              ೩
            </span>
            <span>{lang === 'kn' ? 'ಯತಿಗಳ ಪೂಜಾ ವಿಧಿ' : 'Yati Pooja Guidelines'}</span>
          </div>
          <p className="text-xs text-[#fef3c7]/80 leading-relaxed font-sans">
            {lang === 'kn'
              ? 'ಮನೆಯಲ್ಲಿರುವ ಯತಿಗಳ ವೃಂದಾವನಕ್ಕೆ ಏಕಾದಶಿಯ ದಿನ ಗಂಧ ಮತ್ತು ನೈವೇದ್ಯ ಸಮರ್ಪಣೆ ಇರುವುದಿಲ್ಲ. ಕೇವಲ ೧ ಬಾರಿ ತೀರ್ಥ-ಹಸ್ತೋದಕ ಮಾತ್ರ.'
              : 'For Guru Vrindavanas, Gandha and food Naivedya are not offered on Ekadashi. Only 1-time Teertha is offered.'}
          </p>
        </div>

        {/* Rule 4: Svadodaka Abhisheka */}
        <div className="bg-[#250a0a]/70 border border-[#ffd700]/15 rounded-2xl p-5 space-y-2.5 shadow-xl">
          <div className="flex items-center gap-2 text-[#ff9933] font-bold text-sm font-sans">
            <span className="w-6 h-6 rounded-full bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-xs text-[#ff9933] font-bold font-serif">
              ೪
            </span>
            <span>{lang === 'kn' ? 'ಸ್ವಾದೂದಕ ಅಭಿಷೇಕ ನಿಷೇಧ' : 'Abhisheka Adjustment'}</span>
          </div>
          <p className="text-xs text-[#fef3c7]/80 leading-relaxed font-sans">
            {lang === 'kn'
              ? 'ದೇವರಿಗೆ ಪಂಚಾಮೃತ ಅಥವಾ ಧಾನ್ಯಮಿಶ್ರಿತ ಸ್ವಾದೂದಕದಿಂದ ಅಭಿಷೇಕ ಮಾಡಬಾರದು. ಕೇವಲ ಶುದ್ಧೋದಕದಿಂದ ಶಂಖಾಭಿಷೇಕ ಮಾಡಬೇಕು.'
              : 'Avoid Panchamruta or grain-mixed water; perform simple pure water (Shuddhodaka) conch abhisheka.'}
          </p>
        </div>
      </div>

      {/* Ekadashi Naivedya Mantra Box */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/15 rounded-3xl p-5 sm:p-6 space-y-3.5 shadow-2xl">
        <h3 className="font-serif font-bold text-sm text-[#ff9933] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#ff9933]" />
          <span>{lang === 'kn' ? 'ಏಕಾದಶಿ ಫಲ ಸಮರ್ಪಣಾ ವಿಶೇಷ ಮಂತ್ರಃ' : 'Ekadashi Fruit Offering Mantra'}</span>
        </h3>

        <div className="bg-[#140404] border border-[#ffd700]/10 rounded-2xl p-4 sm:p-5 shadow-inner">
          <p className="font-serif text-sm sm:text-base text-[#ff9933] leading-relaxed whitespace-pre-line text-center">
            {lang === 'kn'
              ? 'ಪೂರ್ಣಾನಂದಮಹೋದಧೇ ಪ್ರಿಯತಮಾ ಭಲ್ಲಾತಕೀ ದಾಡಿಮಾ\nಚೂತೋದಾರಿಕನಾರಿಕೇಲಬದರೀ ಮುಖ್ಯೇ ತ್ವದೀಯೇ ದಿನೇ ।\nಖರ್ಜೂರಂ ಕದಲೀ ರಸಾಲಪನಸಂ ದ್ರಾಕ್ಷಾಕಪಿತ್ಥಾದಿಕಂ\nಸರ್ವಂ ಸ್ವಾದ್ವಮೃತೋಪಮಂ ನವನವಂ ಸಂಗೃಹ್ಯತಾಮಚ್ಯುತ ॥'
              : 'Poornaananda-mahodadhe priyatamaa bhallaatakee daadimaa\nChootodaarika-naarikela-badaree mukhye tvadeeye dine |\nKharjooram kadalee rasaala-panasam draaksha-kapitthaadikam\nSarvam svaadvamrutopamam navanavam sangruhyataam-Achyuta ||'}
          </p>
        </div>

        <div className="text-xs text-[#fef3c7]/80 bg-[#140404]/60 p-3.5 rounded-2xl border border-[#ffd700]/10 leading-relaxed font-sans">
          <span className="font-bold text-[#ffd700] block mb-0.5 font-sans">
            {lang === 'kn' ? 'ಅರ್ಥ:' : 'Meaning:'}
          </span>
          {lang === 'kn'
            ? 'ಹೇ ಅಚ್ಯುತನೇ, ಆನಂದಸಾಗರನೇ! ನಿನ್ನ ಪರಮ ಪ್ರಿಯವಾದ ಈ ಏಕಾದಶಿ ದಿನದಂದು ಬಾಳೆಹಣ್ಣು, ದಾಳಿಂಬೆ, ಮಾವು, ತೆಂಗಿನಕಾಯಿ, ಬೋರೆಹಣ್ಣು, ಖರ್ಜೂರ, ಹಲಸು, ದ್ರಾಕ್ಷಿ ಮುಂತಾದ ಅಮೃತಸದೃಶ ನವನವೀನ ಹಣ್ಣುಗಳನ್ನು ಪ್ರೀತಿಯಿಂದ ಸ್ವೀಕರಿಸು.'
            : 'O Achyuta, ocean of infinite bliss! On this your most cherished Ekadashi day, please accept these fresh, delicious nectar-like fruits: bananas, pomegranates, mangoes, coconut, dates, jackfruit, and grapes.'}
        </div>
      </div>

      {/* Dvadashi Parane City Guide */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/15 rounded-3xl p-5 space-y-4 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#ff9933] font-bold text-sm font-sans">
            <Clock className="w-4 h-4 text-[#ff9933]" />
            <span>{lang === 'kn' ? 'ದ್ವಾದಶಿ ಪಾರಣೆ ಕಾಲಾವಧಿ (ನಗರವಾರು)' : 'Dvadashi Parane Auspicious Timings'}</span>
          </div>

          {/* City Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {(['bengaluru', 'mumbai', 'hyderabad', 'chennai', 'delhi'] as const).map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1 rounded-full text-xs font-sans font-semibold capitalize transition-all border ${
                  selectedCity === city
                    ? 'bg-[#ff9933] text-[#1a0606] border-[#ffd700] font-bold shadow-[0_0_10px_rgba(255,153,51,0.3)]'
                    : 'bg-[#3d1111]/70 text-[#fef3c7]/70 hover:text-[#fef3c7] border-[#ffd700]/10'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center font-sans">
          <div className="bg-[#140404] p-3 rounded-2xl border border-[#ffd700]/10">
            <div className="text-[10px] text-[#ffd700]/60 uppercase font-bold tracking-wider">
              {lang === 'kn' ? 'ಸೂರ್ಯೋದಯ' : 'Sunrise'}
            </div>
            <div className="text-sm font-bold text-[#fef3c7] mt-1 font-mono">
              {cityTimes[selectedCity].sunrise}
            </div>
          </div>

          <div className="bg-[#140404] p-3 rounded-2xl border border-emerald-800/40">
            <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
              {lang === 'kn' ? 'ಪಾರಣೆ ಆರಂಭ' : 'Parane Starts'}
            </div>
            <div className="text-sm font-bold text-emerald-300 mt-1 font-mono">
              {cityTimes[selectedCity].paraneStart}
            </div>
          </div>

          <div className="bg-[#140404] p-3 rounded-2xl border border-[#ffd700]/20">
            <div className="text-[10px] text-[#ff9933] uppercase font-bold tracking-wider">
              {lang === 'kn' ? 'ಪಾರಣೆ ಮುಕ್ತಾಯ' : 'Parane Limit'}
            </div>
            <div className="text-sm font-bold text-[#ff9933] mt-1 font-mono">
              {cityTimes[selectedCity].paraneEnd}
            </div>
          </div>
        </div>

        <div className="text-[11px] text-[#ffd700]/70 flex items-center gap-1.5 justify-center font-sans">
          <Info className="w-3.5 h-3.5 text-[#ff9933]" />
          <span>
            {lang === 'kn'
              ? 'ಪ್ರಾದೇಶಿಕ ಪಾರಣೆ ನಿಖರ ಸಮಯಕ್ಕಾಗಿ ಶ್ರೀ ಉತ್ತರಾದಿ ಮಠದ ಅಧಿಕೃತ ಪಂಚಾಂಗವನ್ನು ಗಮನಿಸಿ.'
              : 'Always confirm exact thithi and Harivasara end times with official Uttaradi Math Panchanga.'}
          </span>
        </div>
      </div>

      {/* Start Pooja with Ekadashi settings CTA */}
      <div className="text-center pt-2">
        <button
          onClick={onSwitchToPooja}
          className="px-8 py-3.5 rounded-full bg-[#ff9933] hover:bg-[#ffaa4d] text-[#1a0606] font-serif font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,153,51,0.35)] active:scale-95 inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>{lang === 'kn' ? 'ಏಕಾದಶಿ ಪೂಜೆಯನ್ನು ಆರಂಭಿಸಿ' : 'Start Ekadashi Guided Pooja'}</span>
        </button>
      </div>
    </div>
  );
};
