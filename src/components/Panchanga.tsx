import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { getTodayPanchanga, PanchangaDetails } from '../data/panchangaData';
import { Calendar, Sun, Moon, Star } from 'lucide-react';

interface PanchangaProps {
  lang: Language;
}

export const Panchanga: React.FC<PanchangaProps> = ({ lang }) => {
  const [panchanga, setPanchanga] = useState<PanchangaDetails | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const data = getTodayPanchanga();
    setPanchanga(data);
  }, []);

  if (!panchanga) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse text-[#ff9933]">Loading Panchanga...</div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString(lang === 'kn' ? 'kn-IN' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 text-[#fef3c7] pb-24">
      {/* Header section */}
      <div className="bg-[#250a0a]/80 border border-[#ffd700]/15 rounded-3xl p-6 shadow-2xl backdrop-blur-md text-center">
        <Calendar className="w-10 h-10 text-[#ff9933] mx-auto mb-3" />
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#ff9933] mb-2">
          {lang === 'kn' ? 'ಇಂದಿನ ಪಂಚಾಂಗ' : 'Today\'s Panchanga'}
        </h2>
        <p className="text-sm text-[#ffd700]/70 font-sans">{currentDate}</p>
        <p className="text-xs mt-2 text-[#ffd700]/50">
          {lang === 'kn' ? 'ಉತ್ತರಾದಿ ಮಠ ಪಂಚಾಂಗ - ೨೦೨೬' : 'Uttaradi Mutt Panchanga - 2026'}
        </p>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Samvatsara & Masa */}
        <div className="bg-[#1a0606] border border-[#ff9933]/20 rounded-2xl p-5 flex flex-col space-y-2 relative overflow-hidden group hover:border-[#ff9933]/50 transition-colors">
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sun className="w-24 h-24" />
          </div>
          <span className="text-xs text-[#ffd700]/60 uppercase tracking-widest font-sans font-bold">
            {lang === 'kn' ? 'ಸಂವತ್ಸರ ಮತ್ತು ಮಾಸ' : 'Samvatsara & Masa'}
          </span>
          <div className="font-serif text-lg font-semibold text-[#fef3c7]">
            {lang === 'kn' 
              ? `${panchanga.samvatsaraKn} ಸಂವತ್ಸರ, ${panchanga.masaKn} ಮಾಸ` 
              : `${panchanga.samvatsaraEn} Samvatsara, ${panchanga.masaEn} Masa`}
          </div>
          <div className="text-sm text-[#ff9933]/80">
            {lang === 'kn' ? `${panchanga.ayanaKn}` : `${panchanga.ayanaEn}`}
          </div>
        </div>

        {/* Tithi */}
        <div className="bg-[#1a0606] border border-[#ff9933]/20 rounded-2xl p-5 flex flex-col space-y-2 relative overflow-hidden group hover:border-[#ff9933]/50 transition-colors">
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Moon className="w-24 h-24" />
          </div>
          <span className="text-xs text-[#ffd700]/60 uppercase tracking-widest font-sans font-bold">
            {lang === 'kn' ? 'ತಿಥಿ' : 'Tithi'}
          </span>
          <div className="font-serif text-xl font-semibold text-[#fef3c7]">
            {lang === 'kn' ? panchanga.tithiKn : panchanga.tithiEn}
          </div>
        </div>

        {/* Nakshatra */}
        <div className="bg-[#1a0606] border border-[#ff9933]/20 rounded-2xl p-5 flex flex-col space-y-2 relative overflow-hidden group hover:border-[#ff9933]/50 transition-colors">
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Star className="w-24 h-24" />
          </div>
          <span className="text-xs text-[#ffd700]/60 uppercase tracking-widest font-sans font-bold">
            {lang === 'kn' ? 'ನಕ್ಷತ್ರ' : 'Nakshatra'}
          </span>
          <div className="font-serif text-xl font-semibold text-[#fef3c7]">
            {lang === 'kn' ? panchanga.nakshatraKn : panchanga.nakshatraEn}
          </div>
        </div>

        {/* Yoga */}
        <div className="bg-[#1a0606] border border-[#ff9933]/20 rounded-2xl p-5 flex flex-col space-y-2 relative overflow-hidden group hover:border-[#ff9933]/50 transition-colors">
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sun className="w-24 h-24" />
          </div>
          <span className="text-xs text-[#ffd700]/60 uppercase tracking-widest font-sans font-bold">
            {lang === 'kn' ? 'ಯೋಗ' : 'Yoga'}
          </span>
          <div className="font-serif text-xl font-semibold text-[#fef3c7]">
            {lang === 'kn' ? panchanga.yogaKn : panchanga.yogaEn}
          </div>
        </div>
      </div>
    </div>
  );
};
