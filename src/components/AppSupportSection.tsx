import React from 'react';
import { Language } from '../types';
import { Phone, MessageCircle, HelpCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface AppSupportSectionProps {
  lang: Language;
}

export const AppSupportSection: React.FC<AppSupportSectionProps> = ({ lang }) => {
  return (
    <div className="bg-gradient-to-b from-[#250a0a] via-[#1c0606] to-[#140404] rounded-3xl border border-[#ffd700]/30 p-4 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.7)] backdrop-blur-md space-y-5 text-[#fef3c7]">
      {/* Header Title */}
      <div className="flex items-center justify-between border-b border-[#ffd700]/20 pb-3.5 gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff9933]/25 to-[#ffd700]/15 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933] shadow-[0_0_15px_rgba(255,153,51,0.25)] shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#ffd700] truncate">
              {lang === 'kn' ? 'ಸಹಾಯ, ಸಂಪರ್ಕ & ಮಾರ್ಗದರ್ಶನ' : 'Help, Support & Contact Guidance'}
            </h2>
            <p className="text-xs text-[#fef3c7]/70 font-sans mt-0.5">
              {lang === 'kn'
                ? 'ಆ್ಯಪ್ ಬಳಕೆ ಹಾಗೂ ಸ್ಪಷ್ಟೀಕರಣಗಳಿಗಾಗಿ ಅಧಿಕೃತ ಸಂಪರ್ಕ ವಿವರ'
                : 'Direct contact for app clarification and usage guidance'}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#ff9933] bg-[#140404] px-3 py-1 rounded-full border border-[#ffd700]/20 shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          <span>{lang === 'kn' ? 'ನೇರ ನೆರವು' : 'Direct Support'}</span>
        </div>
      </div>

      {/* Contact Card */}
      <div className="grid grid-cols-1 gap-4">
        {/* App Support Contact - Kishore */}
        <div className="bg-[#140404]/80 rounded-2xl border border-[#ffd700]/20 p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-[#ffd700]/40 transition-colors shadow-inner">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#ff9933] bg-[#ff9933]/15 px-2.5 py-0.5 rounded-full border border-[#ff9933]/30">
                {lang === 'kn' ? 'ಆ್ಯಪ್ ನೆರವು & ಸ್ಪಷ್ಟೀಕರಣ' : 'App Support & Queries'}
              </span>
              <span className="text-[11px] text-[#fef3c7]/60 font-sans">
                {lang === 'kn' ? 'ತಾಂತ್ರಿಕ ಸಹಾಯ' : 'Technical & Usage'}
              </span>
            </div>

            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#fef3c7]">
                Kishore
              </h3>
              <p className="text-xs font-mono text-[#ffd700] mt-0.5 tracking-wide">
                +91 7259458890
              </p>
            </div>

            <p className="text-xs text-[#fef3c7]/75 font-sans leading-relaxed pt-1">
              {lang === 'kn'
                ? 'ಆ್ಯಪ್ ವೈಶಿಷ್ಟ್ಯಗಳು, ಆವೃತ್ತಿಗಳ ವಿವರ, ಬಳಕೆ ವಿಧಾನ ಹಾಗೂ ಯಾವುದೇ ಸ್ಪಷ್ಟೀಕರಣಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ.'
                : 'Contact for queries, app clarification, feature assistance, and general technical guidance.'}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#ffd700]/10">
            <a
              href="tel:+917259458890"
              className="flex-1 py-2 px-3 rounded-xl bg-[#ff9933]/15 hover:bg-[#ff9933]/25 text-[#ffd700] border border-[#ff9933]/30 text-xs font-sans font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff9933] shrink-0" />
              <span>{lang === 'kn' ? 'ಕರೆ ಮಾಡಿ' : 'Call Now'}</span>
            </a>
            <a
              href="https://wa.me/917259458890?text=Namaskara%20Kishore%20Sir%2C%20I%20need%20assistance%20regarding%20the%20Deva%20Pooja%20App."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-xs font-sans font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Assurance note */}
      <div className="flex items-center gap-2 text-xs text-[#ffd700]/75 bg-[#140404] px-4 py-2.5 rounded-2xl border border-[#ffd700]/15">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          {lang === 'kn'
            ? 'ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾ ಆ್ಯಪ್ ಬಳಕೆಯಲ್ಲಿ ನಿಮ್ಮ ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯಲ್ಲೂ ಶಾಸ್ತ್ರೀಯ ನೆರವು ಹಾಗೂ ತಾಂತ್ರಿಕ ಸಹಕಾರ ಸದಾ ಲಭ್ಯ.'
            : 'Dedicated support is always available to guide your sacred daily Deva Pooja anushtana seamlessly.'}
        </span>
      </div>
    </div>
  );
};
