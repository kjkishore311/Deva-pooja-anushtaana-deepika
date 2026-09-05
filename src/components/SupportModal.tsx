import React from 'react';
import { Language } from '../types';
import { Phone, MessageCircle, HelpCircle, X, ShieldCheck, UserCheck, Sparkles } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-gradient-to-b from-[#250a0a] via-[#1c0606] to-[#140404] border-2 border-[#ffd700]/40 rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.9)] space-y-4 max-h-[90vh] overflow-y-auto no-scrollbar relative text-[#fef3c7]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-full bg-[#140404] text-[#ffd700] hover:text-white border border-[#ffd700]/30 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-[#ffd700]/20 pb-3 pr-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff9933]/25 to-[#ffd700]/15 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933] shadow-[0_0_15px_rgba(255,153,51,0.25)] shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#ffd700]">
              {lang === 'kn' ? 'ಸಹಾಯ & ಅಧಿಕೃತ ಮಾರ್ಗದರ್ಶನ' : 'Help & Official Guidance'}
            </h2>
            <p className="text-[11px] sm:text-xs text-[#fef3c7]/70 font-sans">
              {lang === 'kn'
                ? 'ಆ್ಯಪ್ ನೆರವು ಹಾಗೂ ದೇವಪೂಜಾ ಶಾಸ್ತ್ರೀಯ ಸಂಶಯಗಳಿಗೆ ನೇರ ಸಂಪರ್ಕ'
                : 'Direct support for app clarification and scholarly Deva Pooja guidance'}
            </p>
          </div>
        </div>

        {/* Support Cards */}
        <div className="space-y-3.5 pt-1">
          {/* Contact 1: App Support - Kishore */}
          <div className="bg-[#140404]/90 rounded-2xl border border-[#ffd700]/20 p-3.5 sm:p-4 space-y-3 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#ff9933] bg-[#ff9933]/15 px-2.5 py-0.5 rounded-full border border-[#ff9933]/30">
                {lang === 'kn' ? 'ಆ್ಯಪ್ ನೆರವು & ಸ್ಪಷ್ಟೀಕರಣ' : 'App Support & Queries'}
              </span>
              <span className="text-[11px] text-[#fef3c7]/60 font-sans">
                {lang === 'kn' ? 'ತಾಂತ್ರಿಕ ಸಹಾಯ' : 'Technical & Usage'}
              </span>
            </div>

            <div>
              <h3 className="font-serif font-bold text-base text-[#fef3c7]">
                Kishore
              </h3>
              <p className="text-xs font-mono text-[#ffd700] mt-0.5 font-bold tracking-wider">
                +91 7259458890
              </p>
            </div>

            <p className="text-xs text-[#fef3c7]/75 font-sans leading-relaxed">
              {lang === 'kn'
                ? 'ಆ್ಯಪ್ ವೈಶಿಷ್ಟ್ಯಗಳು, ಆವೃತ್ತಿಗಳ ವಿವರ, ಬಳಕೆ ವಿಧಾನ ಹಾಗೂ ಯಾವುದೇ ಸ್ಪಷ್ಟೀಕರಣಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ.'
                : 'Contact for queries, app clarification, feature assistance, and general technical guidance.'}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-[#ffd700]/10">
              <a
                href="tel:+917259458890"
                className="flex-1 py-2 px-3 rounded-xl bg-[#ff9933]/15 hover:bg-[#ff9933]/25 text-[#ffd700] border border-[#ff9933]/30 text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff9933]" />
                <span>{lang === 'kn' ? 'ಕರೆ ಮಾಡಿ (Call)' : 'Call Now'}</span>
              </a>
              <a
                href="https://wa.me/917259458890?text=Namaskara%20Kishore%20Sir%2C%20I%20need%20assistance%20regarding%20the%20Deva%20Pooja%20App."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/70 text-emerald-300 border border-emerald-500/30 text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact 2: Deva Pooja Shastric Guidance - Pt. Venugopalachar Gudi */}
          <div className="bg-gradient-to-b from-[#2d0d0d]/90 to-[#1c0606] rounded-2xl border-2 border-[#ffd700]/40 p-3.5 sm:p-4 space-y-3 shadow-[0_0_20px_rgba(255,153,51,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1a0606] bg-gradient-to-r from-[#ffd700] to-[#ff9933] px-2.5 py-0.5 rounded-full border border-[#ffd700] shadow-sm">
                {lang === 'kn' ? 'ಸಂಪೂರ್ಣ ಆವೃತ್ತಿ ₹350+ ಪಾವತಿಗೆ' : 'For Complete Tier (₹350+)'}
              </span>
              <span className="text-[11px] text-[#ffd700] font-sans flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-[#ff9933]" />
                <span>{lang === 'kn' ? 'ಶಾಸ್ತ್ರ ಸಮಾಧಾನ' : 'Pooja Scholar'}</span>
              </span>
            </div>

            <div>
              <div className="text-[11px] text-[#ff9933] font-sans font-semibold">
                {lang === 'kn' ? 'ದೇವಪೂಜಾ ಸಂಬಂಧಿತ ಶಾಸ್ತ್ರೀಯ ಮಾರ್ಗದರ್ಶನ:' : 'Related to Deva Pooja:'}
              </div>
              <h3 className="font-serif font-bold text-base text-[#ffd700] mt-0.5">
                Pt. Venugopalachar Gudi
              </h3>
              <p className="text-xs font-mono text-[#ffd700] font-bold tracking-wider">
                +91 7811804262
              </p>
            </div>

            <p className="text-xs text-[#fef3c7]/80 font-sans leading-relaxed">
              {lang === 'kn'
                ? 'ಸಂಪೂರ್ಣ ಆವೃತ್ತಿ (₹350 ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಪಾವತಿ) ಪಡೆದ ಭಕ್ತರಿಗೆ ತಂತ್ರಸಾರೋಕ್ತ ದೇವಪೂಜಾ ಕ್ರಮ, ಸಾಲಿಗ್ರಾಮ ಪೂಜೆ, ನೈವೇದ್ಯ ಮಂಡಲ ಹಾಗೂ ಮುದ್ರಾ ವಿಧಿಗಳ ಸಂಶಯಗಳಿಗೆ ಪೂಜ್ಯ ಪಂಡಿತರಿಂದ ಶಾಸ್ತ್ರ ಸಮಾಧಾನ.'
                : 'Scholarly Deva Pooja guidance for complete tier patrons (payment above ₹350) for Saligrama ritual rules, Naivedya division, mudras, and Madi Achara.'}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-[#ffd700]/15">
              <a
                href="tel:+917811804262"
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#ff9933] to-[#ffd700] hover:from-[#ffaa4d] hover:to-[#ffe066] text-[#1a0606] font-sans font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#1a0606]" />
                <span>{lang === 'kn' ? 'ಕರೆ ಮಾಡಿ (Call)' : 'Call Scholar'}</span>
              </a>
              <a
                href="https://wa.me/917811804262?text=Namaskara%20Pandit%20Venugopalachar%20Gudi%20Sir%2C%20I%20have%20queries%20related%20to%20Deva%20Pooja%20Tantrasara%20Paddhati."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/40 text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center pt-1 text-[11px] text-[#ffd700]/60 font-serif">
          ॥ ಶ್ರೀ ಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು ॥
        </div>
      </div>
    </div>
  );
};
