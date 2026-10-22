export interface Utensil {
  nameKn: string;
  nameEn: string;
  image: string;
}

// Real photographs from the setup library are used where available; the rest are small illustrations in /images/utensils.
export const UTENSILS: Record<string, Utensil> = {
  panchapatra: { nameKn: 'ಪಂಚಪಾತ್ರೆ ಮತ್ತು ಉದ್ಧರಣೆ', nameEn: 'Panchapatra & spoon', image: '/images/utensils/panchapatra.jpg' },
  waterVessel: { nameKn: 'ಶುದ್ಧ ಜಲದ ಚೊಂಬು', nameEn: 'Pure water vessel', image: '/images/utensils/water-vessel.jpg' },
  asana: { nameKn: 'ಮಣೆ / ದರ್ಭೆ ಆಸನ', nameEn: 'Wooden seat / mat', image: '/images/utensils/asana.jpg' },
  gopichandana: { nameKn: 'ಗೋಪಿಚಂದನ', nameEn: 'Gopichandana', image: '/images/setup/gopichandan.jpg' },
  akshata: { nameKn: 'ಅಕ್ಷತೆ', nameEn: 'Akshata', image: '/images/utensils/akshata.jpg' },
  tulasi: { nameKn: 'ತುಳಸಿ ದಳ', nameEn: 'Tulasi leaves', image: '/images/utensils/tulasi.jpg' },
  deepa: { nameKn: 'ತುಪ್ಪದ ದೀಪ', nameEn: 'Ghee lamp', image: '/images/utensils/deepa.jpg' },
  ghanta: { nameKn: 'ಪೂಜಾ ಘಂಟೆ', nameEn: 'Pooja bell', image: '/images/setup/ghanta.jpg' },
  nirmalya: { nameKn: 'ನಿರ್ಮಾಲ್ಯ ಪಾತ್ರೆ (ಎಡಭಾಗ)', nameEn: 'Nirmalya vessel (left side)', image: '/images/utensils/nirmalya.jpg' },
  shankha: { nameKn: 'ಶಂಖ', nameEn: 'Shankha (conch)', image: '/images/setup/abhisheka-shankha.jpg' },
  kalasha: { nameKn: 'ಕಲಶ', nameEn: 'Kalasha', image: '/images/utensils/kalasha.jpg' },
  gandha: { nameKn: 'ಗಂಧ (ಸಾಣೆ ಕಲ್ಲು)', nameEn: 'Gandha (grinding stone)', image: '/images/setup/saani-kallu-gandha.jpg' },
  panchamruta: { nameKn: 'ಪಂಚಾಮೃತ', nameEn: 'Panchamruta', image: '/images/utensils/panchamruta.jpg' },
  somasutra: { nameKn: 'ಸೋಮಸೂತ್ರ ಪಾತ್ರೆ', nameEn: 'Somasutra vessel', image: '/images/setup/somasutra-paatre.jpg' },
  cloth: { nameKn: 'ಒರೆಸುವ ವಸ್ತ್ರ', nameEn: 'Drying cloth', image: '/images/utensils/cloth.jpg' },
  vastra: { nameKn: 'ದೇವರ ವಸ್ತ್ರ', nameEn: 'Deity cloth', image: '/images/utensils/vastra.jpg' },
  yajnopavita: { nameKn: 'ಯಜ್ಞೋಪವೀತ', nameEn: 'Yajnopavita', image: '/images/utensils/yajnopavita.jpg' },
  flowers: { nameKn: 'ಸುಗಂಧ ಪುಷ್ಪ', nameEn: 'Fragrant flowers', image: '/images/utensils/flowers.jpg' },
  dhooparati: { nameKn: 'ಧೂಪಾರತಿ', nameEn: 'Dhoopa vessel', image: '/images/setup/dhooparati.jpg' },
  arati: { nameKn: 'ದೀಪದ ಆರತಿ', nameEn: 'Arati lamp', image: '/images/utensils/arati.jpg' },
  fan: { nameKn: 'ಬೀಸಣಿಗೆ / ಚಾಮರ', nameEn: 'Fan & chamara', image: '/images/utensils/fan.jpg' },
  naivedya: { nameKn: 'ನೈವೇದ್ಯ ತಟ್ಟೆ', nameEn: 'Naivedya plate', image: '/images/utensils/naivedya.jpg' },
  mangalarati: { nameKn: 'ಮಂಗಳಾರತಿ (ಕರ್ಪೂರ)', nameEn: 'Mangalarati (camphor)', image: '/images/utensils/mangalarati.jpg' },
  vrindavana: { nameKn: 'ಗುರು ವೃಂದಾವನ', nameEn: 'Guru Vrindavana', image: '/images/utensils/vrindavana.jpg' },
};

export const STEP_UTENSILS: Record<string, (keyof typeof UTENSILS)[]> = {
  step_sankalpa: ['panchapatra', 'waterVessel', 'asana', 'gopichandana'],
  step_dvara_devata: ['akshata', 'tulasi'],
  step_deepa_ghanta: ['deepa', 'ghanta'],
  step_nirmalya_visarjana: ['nirmalya', 'waterVessel'],
  step_shankhabhisheka_prana: ['shankha', 'panchapatra', 'tulasi', 'waterVessel'],
  step_kalasha_pooja: ['kalasha', 'waterVessel', 'tulasi', 'gandha', 'akshata'],
  step_panchamruta_abhisheka: ['panchamruta', 'somasutra', 'shankha'],
  step_shuddhabhisheka: ['shankha', 'kalasha', 'ghanta', 'cloth'],
  step_vastra_yajnopavita: ['vastra', 'yajnopavita', 'tulasi'],
  step_gandha_tulasi_archana: ['gandha', 'tulasi', 'flowers'],
  step_dhoopa_deepa: ['dhooparati', 'arati', 'ghanta', 'fan'],
  step_maha_naivedya: ['naivedya', 'tulasi', 'panchapatra'],
  step_mahamangalarati: ['mangalarati', 'ghanta', 'shankha'],
  step_hastodaka_ramadi: ['vrindavana', 'panchapatra', 'tulasi', 'gandha'],
  step_pradakshina_namaskara: [],
  step_samarpana_krishnarpanam: ['panchapatra', 'waterVessel'],
};
