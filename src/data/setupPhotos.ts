export interface SetupPhoto {
  file: string;
  nameEn: string;
  nameKn: string;
}

export const setupPhotosByItem: Record<string, SetupPhoto[]> = {
  saligrama_idols: [
    { file: 'shaligrama.jpg', nameEn: 'Shaligrama', nameKn: 'ಶಾಲಿಗ್ರಾಮ' },
    { file: 'sudarshana.jpg', nameEn: 'Sudarshana Shaligrama', nameKn: 'ಸುದರ್ಶನ ಶಾಲಿಗ್ರಾಮ' },
    { file: 'garuda-devaru.jpg', nameEn: 'Garuda Devaru', nameKn: 'ಗರುಡ ದೇವರು' },
    { file: 'shesha-devaru.jpg', nameEn: 'Shesha Devaru', nameKn: 'ಶೇಷ ದೇವರು' },
    { file: 'shimshumaara-1.jpg', nameEn: 'Shimshumaara — view 1', nameKn: 'ಶಿಂಶುಮಾರ — ಚಿತ್ರ ೧' },
    { file: 'shimshumaara-2.jpg', nameEn: 'Shimshumaara — view 2', nameKn: 'ಶಿಂಶುಮಾರ — ಚಿತ್ರ ೨' },
  ],
  ghanta: [{ file: 'ghanta.jpg', nameEn: 'Ghanta (pooja bell)', nameKn: 'ಪೂಜಾ ಘಂಟೆ' }],
  shankha: [
    { file: 'abhisheka-shankha.jpg', nameEn: 'Abhisheka Shankha', nameKn: 'ಅಭಿಷೇಕ ಶಂಖ' },
    { file: 'shankhabramana-vidhi.jpg', nameEn: 'Shankhabhramana Pradakshine Vidhi (Shankhodaka)', nameKn: 'ಶಂಖಭ್ರಮಣ ಪ್ರದಕ್ಷಿಣೆ ವಿಧಿ (ಶಂಖೋದಕ)' },
  ],
  patras_uddharani: [{ file: 'somasutra-paatre.jpg', nameEn: 'Somasutra Paatre', nameKn: 'ಸೋಮಸೂತ್ರ ಪಾತ್ರೆ' }],
  naivedya_bhoga: [
    { file: 'rangoli-naivedya-1.jpg', nameEn: 'Rangoli for Naivedya — 1', nameKn: 'ನೈವೇದ್ಯ ರಂಗೋಲಿ — ೧' },
    { file: 'rangoli-naivedya-2.jpg', nameEn: 'Rangoli for Naivedya — 2', nameKn: 'ನೈವೇದ್ಯ ರಂಗೋಲಿ — ೨' },
    { file: 'rangoli-naivedya-3.jpg', nameEn: 'Rangoli for Naivedya — 3', nameKn: 'ನೈವೇದ್ಯ ರಂಗೋಲಿ — ೩' },
  ],
  gandha_akshata: [{ file: 'saani-kallu-gandha.jpg', nameEn: 'Saani Kallu — Gandha', nameKn: 'ಸಾಣೆ ಕಲ್ಲು — ಗಂಧ' }],
};

export const additionalSetupPhotos: SetupPhoto[] = [
  { file: 'gopichandan.jpg', nameEn: 'Gopichandan', nameKn: 'ಗೋಪಿಚಂದನ' },
  { file: 'dhooparati.jpg', nameEn: 'Dhooparati vessel', nameKn: 'ಧೂಪಾರತಿ ಪಾತ್ರೆ' },
  { file: 'pacha-karpura.jpg', nameEn: 'Pacha Karpura', nameKn: 'ಪಚ್ಚ ಕರ್ಪೂರ' },
  { file: 'doorva.jpg', nameEn: 'Doorva', nameKn: 'ದೂರ್ವೆ' },
  { file: 'varaha-kesha.jpg', nameEn: 'Varaha Kesha', nameKn: 'ವರಾಹ ಕೇಶ' },
  { file: 'vishnupaada.jpg', nameEn: 'Vishnupaada', nameKn: 'ವಿಷ್ಣುಪಾದ' },
  { file: 'chakrabja-mandala.jpg', nameEn: 'Chakrabja Mandala', nameKn: 'ಚಕ್ರಾಬ್ಜ ಮಂಡಲ' },
  { file: 'ashtadala-padma.jpg', nameEn: 'Rangoli — Ashtadala Padma', nameKn: 'ರಂಗೋಲಿ — ಅಷ್ಟದಳ ಪದ್ಮ' },
  { file: 'tulasi-kaashta.jpg', nameEn: 'Tulasi Kaashta', nameKn: 'ತುಳಸೀ ಕಾಷ್ಠ' },
  { file: 'dhenu-mudra-notes.jpg', nameEn: 'Dhenu Mudra — supplied finger-pairing notes', nameKn: 'ಧೇನು ಮುದ್ರೆ — ಬೆರಳು ಜೋಡಣೆಯ ಟಿಪ್ಪಣಿ' },
];
