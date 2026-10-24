import React from 'react';
import { Language } from '../types';

const PURPOSE = {
  kn: 'ಈ ಜಾಲತಾಣವು ಆರಂಭಿಕರಿಗಾಗಿ ಹಾಗೂ ದೈನಂದಿನ ದೇವಪೂಜೆ ಅಥವಾ ಸಂಧ್ಯಾವಂದನೆಯನ್ನು ಸರಿಯಾಗಿ ಮಾಡುವ ವಿಧಾನ ತಿಳಿಯದವರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ — ಹಂತ ಹಂತವಾಗಿ ಕಲಿಯಿರಿ, ಶ್ರದ್ಧೆಯಿಂದ ಆಚರಿಸಿ',
  en: 'This website is built for beginners and for everyone who does not yet know how to perform Deva Puja or Sandhyavandana properly every day — learn step by step and practise with devotion',
};

// Scrolls continuously from right to left; pauses while hovered so it can be read.
export const PurposeTicker: React.FC<{ lang: Language }> = ({ lang }) => {
  const text = PURPOSE[lang];
  const item = (
    <span className="flex shrink-0 items-center gap-6 pr-6">
      <span>🪔 {text}</span>
      <span className="text-[#ffd700]/50">॥</span>
    </span>
  );

  return (
    <div className="purpose-ticker overflow-hidden border-t border-[#ffd700]/10 bg-[#140404]/70 py-1 text-[11px] font-semibold text-[#ffbb66] sm:text-xs">
      <p className="sr-only">{text}</p>
      <div aria-hidden="true" className="purpose-ticker-track flex w-max whitespace-nowrap">
        {item}
        {item}
      </div>
    </div>
  );
};
