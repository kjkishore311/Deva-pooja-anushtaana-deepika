import { Language } from '../types';

export interface PanchangaDetails {
  date: string;
  tithiKn: string;
  tithiEn: string;
  nakshatraKn: string;
  nakshatraEn: string;
  yogaKn: string;
  yogaEn: string;
  masaKn: string;
  masaEn: string;
  samvatsaraKn: string;
  samvatsaraEn: string;
  ayanaKn: string;
  ayanaEn: string;
}

// Mocking some 2026 Uttaradi Mutt Panchanga data.
export const panchanga2026: Record<string, PanchangaDetails> = {
  '2026-08-27': {
    date: '2026-08-27',
    tithiKn: 'ಶುಕ್ಲ ಪಕ್ಷ ಚತುರ್ದಶಿ / ಹುಣ್ಣಿಮೆ',
    tithiEn: 'Shukla Paksha Chaturdashi / Purnima',
    nakshatraKn: 'ಶ್ರವಣ / ಧನಿಷ್ಠಾ',
    nakshatraEn: 'Shravana / Dhanishta',
    yogaKn: 'ಶೋಭನ',
    yogaEn: 'Shobhana',
    masaKn: 'ಶ್ರಾವಣ',
    masaEn: 'Shravana',
    samvatsaraKn: 'ಪರಾಭವ',
    samvatsaraEn: 'Parabhava',
    ayanaKn: 'ದಕ್ಷಿಣಾಯನ',
    ayanaEn: 'Dakshinayana',
  },
  'default': {
    date: 'Today',
    tithiKn: 'ಏಕಾದಶಿ',
    tithiEn: 'Ekadashi',
    nakshatraKn: 'ರೋಹಿಣಿ',
    nakshatraEn: 'Rohini',
    yogaKn: 'ಆಯುಷ್ಮಾನ್',
    yogaEn: 'Ayushman',
    masaKn: 'ಭಾದ್ರಪದ',
    masaEn: 'Bhadrapada',
    samvatsaraKn: 'ಪರಾಭವ',
    samvatsaraEn: 'Parabhava',
    ayanaKn: 'ದಕ್ಷಿಣಾಯನ',
    ayanaEn: 'Dakshinayana',
  }
};

export function getTodayPanchanga(): PanchangaDetails {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  
  return panchanga2026[dateStr] || panchanga2026['default'];
}
