import { SamagriItem } from '../types';

export type PreparationMode = '10min' | '30min' | 'full';

export interface PoojaPreparationGroup {
  mode: PreparationMode;
  titleKn: string;
  titleEn: string;
  descriptionKn: string;
  descriptionEn: string;
  itemIds: string[];
}

export const POOJA_PREPARATION_GROUPS: PoojaPreparationGroup[] = [
  {
    mode: '10min',
    titleKn: '೧೦ ನಿಮಿಷ ಪೂಜೆಗೆ ಬೇಕಾದ ಉಪಕರಣಗಳು',
    titleEn: 'Utensils for 10mins',
    descriptionKn: 'ಸಂಕ್ಷಿಪ್ತ ಪೂಜೆಗೆ ಬೇಕಾದ ಕನಿಷ್ಠ ಉಪಕರಣಗಳು ಮತ್ತು ಸಾಮಗ್ರಿಗಳು.',
    descriptionEn: 'Bare-minimum utensils and offerings for the short daily pooja.',
    itemIds: ['saligrama_idols', 'ghanta', 'achamana_patra', 'deepa_samagri', 'tulasi_dala', 'gandha_akshata', 'naivedya_bhoga', 'madi_vastra'],
  },
  {
    mode: '30min',
    titleKn: '೩೦ ನಿಮಿಷ ಪೂಜೆಗೆ ಬೇಕಾದ ಉಪಕರಣಗಳು',
    titleEn: 'Utensils for 30min',
    descriptionKn: 'ದೈನಂದಿನ ೩೦ ನಿಮಿಷ ಪೂಜೆಗೆ ಕನಿಷ್ಠ ಸಾಮಗ್ರಿಗಳ ಜೊತೆಗೆ ಶಂಖ, ಪಾತ್ರೆಗಳು ಮತ್ತು ಪುಷ್ಪಗಳು.',
    descriptionEn: 'Daily essentials plus the recommended conch, ritual cups and flowers.',
    itemIds: ['saligrama_idols', 'ghanta', 'achamana_patra', 'shankha', 'patras_uddharani', 'deepa_samagri', 'tulasi_dala', 'gandha_akshata', 'fresh_flowers', 'naivedya_bhoga', 'madi_vastra'],
  },
  {
    mode: 'full',
    titleKn: 'ಸಂಪೂರ್ಣ ಪೂಜೆಗೆ ಬೇಕಾದ ಉಪಕರಣಗಳು',
    titleEn: 'Utensils for Complete version',
    descriptionKn: 'ಸಂಪೂರ್ಣ ತಂತ್ರಸಾರ ಪೂಜೆಗೆ ಬೇಕಾದ ಎಲ್ಲ ಉಪಕರಣಗಳು, ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಪಂಚಾಮೃತ.',
    descriptionEn: 'The complete preparation set, including every recommended item and Panchamruta.',
    itemIds: ['saligrama_idols', 'ghanta', 'achamana_patra', 'shankha', 'patras_uddharani', 'somasutra_paatre', 'kalasha_set', 'serving_vessels', 'gandha_stone', 'deity_vastra', 'pooja_seats', 'arati_set', 'deepa_samagri', 'tulasi_dala', 'gandha_akshata', 'fresh_flowers', 'panchamruta', 'naivedya_bhoga', 'madi_vastra'],
  },
];

export const SAMAGRI_DATA: SamagriItem[] = [
  {
    id: 'saligrama_idols',
    nameKn: 'ಸಾಲಿಗ್ರಾಮ & ದೇವತಾ ಪ್ರತಿಮೆಗಳು',
    nameEn: 'Saligrama & Sacred Deities',
    category: 'pratima_peetha',
    tier: 'daily_minimum',
    descriptionKn: 'ಸಾಲಿಗ್ರಾಮ, ಚಕ್ರಾಂಕಿತ, ಸುದರ್ಶನ ಶಿಲೆ ಅಥವಾ ಮುಖ್ಯಾಪ್ರಾಣ / ಶ್ರೀಕೃಷ್ಣನ ಪ್ರತಿಮೆ.',
    descriptionEn: 'Saligrama stone, Chakrankita, Sudarshana shila, or Sri Krishna / Mukhyaprana vigraha.',
    substituteKn: 'ಯಾವುದೇ ಒಂದು ಸಾಲಿಗ್ರಾಮ ಅಥವಾ ಶ್ರೀಹರಿಯ ಶುದ್ಧ ಪ್ರತಿಮೆ / ಚಿತ್ರಪಟ ಸಾಕು.',
    substituteEn: 'Even a single Saligrama or consecrated photo / idol of Sri Hari is sufficient.',
    zeroAnxietyRuleKn: 'ಸಾಲಿಗ್ರಾಮ ಇಲ್ಲದಿದ್ದರೂ ಭಕ್ತಿಪೂರ್ವಕವಾಗಿ ಶ್ರೀಹರಿಯ ಪ್ರತಿಮೆಗೆ ಪೂಜೆ ಮಾಡಬಹುದು.',
    zeroAnxietyRuleEn: 'If Saligrama is not possessed, worship with pure metal idol or picture with full devotion.'
  },
  {
    id: 'ghanta',
    nameKn: 'ಪೂಜಾ ಘಂಟೆ (ಕಂಚು/ಹಿತ್ತಾಳೆ/ಬೆಳ್ಳಿ)',
    nameEn: 'Pooja Bell (Ghanta)',
    category: 'vessels',
    tier: 'daily_minimum',
    descriptionKn: 'ಬ್ರಹ್ಮ, ಗರುಡ, ನಾಗ, ಸರಸ್ವತಿ ಮತ್ತು ಪ್ರಜಾಪತಿ ದೇವತೆಗಳು ನೆಲೆಸಿರುವ ಪೂಜಾ ಘಂಟೆ.',
    descriptionEn: 'Sacred pooja bell invoking Brahma, Garuda, Sesha, and Saraswati.',
    substituteKn: 'ಘಂಟೆ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ ಕೈಗಳಿಂದ 3 ಬಾರಿ ತಾಳ/ಚಪ್ಪಾಳೆ ಹೊಡೆದು ವಿಘ್ನ ನಿವಾರಣೆ ಮಾಡಬಹುದು.',
    substituteEn: 'If bell is missing, clap palms 3 times rhythmically chanting "Om Namo Narayanaya".',
    zeroAnxietyRuleKn: 'ಮನಸ್ಸಿನಲ್ಲೇ ಘಂಟಾನಾದವನ್ನು ಸ್ಮರಿಸಿ ಪೂಜೆ ಮುಂದುವರಿಸಿ.',
    zeroAnxietyRuleEn: 'Mentally invoke the bell sound and proceed with ritual.'
  },
  {
    id: 'achamana_patra',
    nameKn: 'ಆಚಮನ ಪಂಚಪಾತ್ರೆ & ಉದ್ಧರಣೆ',
    nameEn: 'Achamana Cup & Spoon',
    category: 'vessels',
    tier: 'daily_minimum',
    descriptionKn: 'ಆಚಮನ ಮತ್ತು ಶುದ್ಧೀಕರಣಕ್ಕಾಗಿ ಒಂದು ಶುದ್ಧ ಪಂಚಪಾತ್ರೆ ಹಾಗೂ ಉದ್ಧರಣೆ.',
    descriptionEn: 'One clean Panchapatra cup and spoon for Achamana and purification water.',
    substituteKn: 'ಶುದ್ಧವಾದ ಸಣ್ಣ ಲೋಟ ಮತ್ತು ಚಮಚವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಇಟ್ಟು ಬಳಸಬಹುದು.',
    substituteEn: 'A clean small cup and spoon reserved only for pooja may be used.'
  },
  {
    id: 'shankha',
    nameKn: 'ಪೂಜಾ ಶಂಖ & ಪೀಠ',
    nameEn: 'Pooja Shankha (Conch & Stand)',
    category: 'vessels',
    tier: 'recommended',
    descriptionKn: 'ಅಭಿಷೇಕಕ್ಕೆ ಮತ್ತು ಪಾವನ ತೀರ್ಥ ಪ್ರೋಕ್ಷಣೆಗೆ ಬಳಸುವ ಪಾಂಚಜನ್ಯ ಶಂಖ.',
    descriptionEn: 'Right-turn or left-turn sacred conch for Snana abhisheka and Teertha.',
    substituteKn: 'ಶಂಖ ಇಲ್ಲದಿದ್ದಲ್ಲಿ ಉದ್ಧರಣೆ (ಚಮಚ) ಅಥವಾ ಸಣ್ಣ ಬೆಳ್ಳಿ/ತಾಮ್ರದ ಪಾತ್ರೆಯಿಂದ ಅಭಿಷೇಕ ಮಾಡಬಹುದು.',
    substituteEn: 'Use Uddharani spoon or small silver/copper vessel for pouring abhisheka water.',
    zeroAnxietyRuleKn: 'ಶಂಖದ ಅಭಾವದಲ್ಲಿ ಕಲಶೋದಕದಿಂದಲೇ ಭಕ್ತಿಯಿಂದ ಅಭಿಷೇಕ ಸಮರ್ಪಿಸಿ.',
    zeroAnxietyRuleEn: 'Use Kalasha water directly using spoon with Purusha Sukta mantras.'
  },
  {
    id: 'patras_uddharani',
    nameKn: 'ಷಟ್ ಪಾತ್ರೆಗಳು & ಉದ್ಧರಣೆ',
    nameEn: 'Six Ritual Cups (Shat-Patra) & Spoon',
    category: 'vessels',
    tier: 'recommended',
    descriptionKn: 'ಅರ್ಘ್ಯ, ಪಾದ್ಯ, ಆಚಮನೀಯ, ಸ್ನಾನೀಯ, ಮಧುಪರ್ಕ, ಪುನರಾಚಮನೀಯ ಪಾತ್ರೆಗಳು.',
    descriptionEn: 'Cups for Arghya, Padya, Achamaneeya, Snaneeya, Madhuparka, Punarachamaneeya.',
    substituteKn: 'ಕನಿಷ್ಠ 1 ಪಂಚಪಾತ್ರೆ ಮತ್ತು 1 ಉದ್ಧರಣೆ ಇದ್ದರೆ ಸಾಕು; ಪ್ರತಿ ಉಪಚಾರದ ನಂತರ ಕೈ ತೊಳೆದು ನೀರು ಹಾಕಬಹುದು.',
    substituteEn: 'A single Panchapatra with spoon is fully valid by simply refreshing water.',
    zeroAnxietyRuleKn: 'ಆರು ಪಾತ್ರೆಗಳಿರಲೇಬೇಕೆಂಬ ಒತ್ತಡ ಬೇಡ, 1 ಪಾತ್ರೆಯಲ್ಲಿ ಶ್ರದ್ಧೆಯಿಂದ ಮಾಡಬಹುದು.',
    zeroAnxietyRuleEn: 'Do not worry about having all 6 cups; 1 clean vessel with spoon suffices.'
  },
  {
    id: 'somasutra_paatre',
    nameKn: 'ಸೋಮಸೂತ್ರ ಪಾತ್ರೆ',
    nameEn: 'Somasutra Abhisheka Vessel',
    category: 'vessels',
    tier: 'full_paddhati',
    descriptionKn: 'ಅಭಿಷೇಕದ ನೀರನ್ನು ಶುದ್ಧವಾಗಿ ಸಂಗ್ರಹಿಸಿ ಹೊರಹರಿಸಲು ಬಳಸುವ ಸೋಮಸೂತ್ರ ಪಾತ್ರೆ.',
    descriptionEn: 'A dedicated vessel used to collect and direct the sacred Abhisheka water.',
    substituteKn: 'ಅಭಿಷೇಕಕ್ಕೆ ಮಾತ್ರ ಮೀಸಲಾದ ಆಳವಾದ ಶುದ್ಧ ತಟ್ಟೆ ಅಥವಾ ಪಾತ್ರೆ ಬಳಸಬಹುದು.',
    substituteEn: 'Use a clean deep plate or bowl reserved only for Abhisheka.'
  },
  {
    id: 'kalasha_set',
    nameKn: 'ಕಲಶಗಳ ಸಮೂಹ (೩ ಸಣ್ಣ, ೧ ದೊಡ್ಡ)',
    nameEn: 'Kalasha Set (3 Small, 1 Large)',
    category: 'vessels',
    tier: 'full_paddhati',
    descriptionKn: 'ಪೂಜೆ, ಅಭಿಷೇಕ ಮತ್ತು ತೀರ್ಥಕ್ಕಾಗಿ ಮೂರು ಸಣ್ಣ ಹಾಗೂ ಒಂದು ದೊಡ್ಡ ಕಲಶ.',
    descriptionEn: 'Three small Kalashas and one large Kalasha for pooja, Abhisheka and Teertha.',
    substituteKn: 'ಲಭ್ಯವಿರುವ ಶುದ್ಧ ತಾಮ್ರ ಅಥವಾ ಹಿತ್ತಾಳೆಯ ಪಾತ್ರೆಗಳನ್ನು ಪ್ರತ್ಯೇಕ ಉದ್ದೇಶಗಳಿಗೆ ಬಳಸಿ.',
    substituteEn: 'Clean copper or brass vessels may be assigned separately to each purpose.'
  },
  {
    id: 'serving_vessels',
    nameKn: 'ತೀರ್ಥ ಲೋಟ, ತಟ್ಟೆ & ಬುಟ್ಟಿ',
    nameEn: 'Teertha Cups, Plates & Basket',
    category: 'vessels',
    tier: 'full_paddhati',
    descriptionKn: 'ನಿರ್ಮಾಲ್ಯ, ದೇವರ ತೀರ್ಥ, ವಾಯುದೇವರ ತೀರ್ಥ ಮತ್ತು ಶಂಖೋದಕಕ್ಕೆ ಪ್ರತ್ಯೇಕ ಲೋಟಗಳು; ತಟ್ಟೆಗಳು ಮತ್ತು ಒಂದು ಬುಟ್ಟಿ.',
    descriptionEn: 'Separate cups for Nirmalya, Devara Teertha, Vayudevara Teertha and Shankhodaka, with plates and a basket.',
    substituteKn: 'ಪ್ರತಿ ಉಪಯೋಗಕ್ಕೆ ಗುರುತು ಮಾಡಿದ ಶುದ್ಧ ಸಣ್ಣ ಪಾತ್ರೆಗಳನ್ನು ಬಳಸಬಹುದು.',
    substituteEn: 'Clearly assigned clean household bowls may be used for each sacred purpose.'
  },
  {
    id: 'gandha_stone',
    nameKn: 'ಸಾಣಿಕಲ್ಲು / ಗಂಧ ಕೊರಡು',
    nameEn: 'Sandalwood Grinding Stone',
    category: 'vessels',
    tier: 'full_paddhati',
    descriptionKn: 'ಪೂಜೆಗೆ ಶುದ್ಧ ಶ್ರೀಗಂಧ ತೇಯಲು ಮೀಸಲಾದ ಸಾಣಿಕಲ್ಲು ಅಥವಾ ಗಂಧ ಕೊರಡು.',
    descriptionEn: 'A dedicated stone or block for preparing fresh sandalwood paste.',
    substituteKn: 'ತಯಾರಾದ ಶುದ್ಧ ಶ್ರೀಗಂಧದ ಲೇಪವನ್ನು ಬಳಸಬಹುದು.',
    substituteEn: 'Ready-made pure sandalwood paste may be used.'
  },
  {
    id: 'deity_vastra',
    nameKn: 'ದೇವರ ಶುಭ್ರ ವಸ್ತ್ರಗಳು (೩–೫)',
    nameEn: 'Clean Deity Cloths (3–5)',
    category: 'madi_cloth',
    tier: 'full_paddhati',
    descriptionKn: 'ಅಭಿಷೇಕದ ನಂತರ ದೇವತಾ ಪ್ರತಿಮೆಗಳನ್ನು ಒರೆಸಿ ಅಲಂಕರಿಸಲು ಪ್ರತ್ಯೇಕ ಶುಭ್ರ ವಸ್ತ್ರಗಳು.',
    descriptionEn: 'Separate clean cloths for drying and adorning the deities after Abhisheka.',
    substituteKn: 'ಮೃದುವಾದ, ಹೊಸದಾಗಿ ಒಗೆದ ಹತ್ತಿ ಬಟ್ಟೆಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಇಡಿ.',
    substituteEn: 'Keep freshly washed soft cotton cloths reserved for the deities.'
  },
  {
    id: 'pooja_seats',
    nameKn: 'ಚಿಕ್ಕ ಮಣೆ & ಪೂಜಾ ಆಸನ',
    nameEn: 'Small Peetha & Pooja Asana',
    category: 'pratima_peetha',
    tier: 'full_paddhati',
    descriptionKn: 'ದೇವತಾ ಸ್ಥಾಪನೆಗೆ ಚಿಕ್ಕ ಮಣೆ ಮತ್ತು ಪೂಜಕನಿಗೆ ಶುದ್ಧ ಆಸನ.',
    descriptionEn: 'A small raised Peetha for the deities and a clean Asana for the worshipper.',
    substituteKn: 'ಶುದ್ಧ ಮರದ ಫಲಕ ಮತ್ತು ಮಡಿಸಿದ ಶುಭ್ರ ವಸ್ತ್ರ ಬಳಸಬಹುದು.',
    substituteEn: 'A clean wooden board and folded cloth may be used.'
  },
  {
    id: 'arati_set',
    nameKn: 'ಮಂಗಳಾರತಿ, ಹಲಗಾರತಿ & ಧೂಪಾರತಿ',
    nameEn: 'Mangalarati, Halagarati & Dhooparati Set',
    category: 'vessels',
    tier: 'full_paddhati',
    descriptionKn: 'ಮಂಗಳಾರತಿ ಬತ್ತಿ, ಹಲಗಾರತಿ ಮತ್ತು ಧೂಪಾರತಿ ನಡೆಸಲು ಪ್ರತ್ಯೇಕ ಆರತಿ ಉಪಕರಣಗಳು.',
    descriptionEn: 'Dedicated holders for Mangalarati wick, Halagarati and Dhooparati offerings.',
    substituteKn: 'ಶುದ್ಧವಾದ ಒಂದು ಆರತಿ ತಟ್ಟೆಯನ್ನು ಕ್ರಮವಾಗಿ ಬಳಸಬಹುದು.',
    substituteEn: 'One clean Arati plate may be used sequentially when separate holders are unavailable.'
  },
  {
    id: 'deepa_samagri',
    nameKn: 'ದೀಪ & ತುಪ್ಪ / ಎಣ್ಣೆ ಬತ್ತಿಗಳು',
    nameEn: 'Pooja Lamps & Ghee/Oil Wicks',
    category: 'consumables',
    tier: 'daily_minimum',
    descriptionKn: 'ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ ಅಥವಾ ಎಳ್ಳೆಣ್ಣೆಯ 2 ದೀಪಗಳು ಮತ್ತು 3 ಬತ್ತಿಗಳ ಆರತಿ ದೀಪ.',
    descriptionEn: 'Ghee or sesame oil lamps, cotton wicks for pooja deepa and arati.',
    substituteKn: 'ಹಸುವಿನ ತುಪ್ಪ ಇಲ್ಲದಿದ್ದರೆ ಶುದ್ಧ ಎಳ್ಳೆಣ್ಣೆ ಅಥವಾ ಶೇಂಗಾ ಎಣ್ಣೆ ಹೊರತುಪಡಿಸಿದ ಶುದ್ಧ ಸಸ್ಯ ಎಣ್ಣೆ.',
    substituteEn: 'If cow ghee unavailable, pure sesame (til) oil is highly auspicious.',
    zeroAnxietyRuleKn: 'ದೀಪದ ಶಾಂತತೆಗೆ ಅಂಜಬೇಡಿ, ಶುದ್ಧ ಭಕ್ತಿಯೇ ಪರಮ ಜ್ಯೋತಿ.',
    zeroAnxietyRuleEn: 'Lighting even one steady pure wick dispels all darkness.'
  },
  {
    id: 'tulasi_dala',
    nameKn: 'ಪವಿತ್ರ ತುಳಸೀ ದಳಗಳು & ಮಂಜರಿ',
    nameEn: 'Sacred Tulasi Leaves & Manjari',
    category: 'sacred_leaves',
    tier: 'daily_minimum',
    descriptionKn: 'ಶ್ರೀಹರಿಗೆ ಪರಮ ಪ್ರಿಯವಾದ ಸ್ನಾನಾನಂತರ ತಂದ ಶುದ್ಧ ತುಳಸೀ ದಳಗಳು.',
    descriptionEn: 'Fresh holy basil leaves and manjaris gathered after morning bath.',
    substituteKn: 'ತಾಜಾ ತುಳಸಿ ಸಿಗದಿದ್ದರೆ ಒಣಗಿದ ತುಳಸಿ, ತುಳಸಿ ಕಾಷ್ಠ (ಕಡ್ಡಿ) ಅಥವಾ "ತುಲಸಿ ತುಲಸಿ" ಎಂದು ಉಚ್ಚರಿಸಿ ಜಲ ಸಮರ್ಪಿಸಿ.',
    substituteEn: 'If fresh is unavailable, use dried Tulasi, Tulasi wood piece, or chant "Tulasi Tulasi".',
    zeroAnxietyRuleKn: 'ತುಳಸಿ ನಿರ್ಮಾಲ್ಯವಾಗಿದ್ದರೂ ಶುದ್ಧೋದಕದಿಂದ ಪ್ರಕ್ಷಾಲನೆ ಮಾಡಿ ದೇವರಿಗೆ ಅರ್ಪಿಸಬಹುದು!',
    zeroAnxietyRuleEn: 'Tantrasara specifically permits reusing washed Tulasi if fresh is not available!'
  },
  {
    id: 'gandha_akshata',
    nameKn: 'ಶ್ರೀಗಂಧ & ಅಕ್ಷತೆ',
    nameEn: 'Sandalwood Paste (Gandha) & Akshata',
    category: 'consumables',
    tier: 'daily_minimum',
    descriptionKn: 'ತೇದ ಶುದ್ಧ ಶ್ರೀಗಂಧದ ತೇವವುಳ್ಳ ಉಂಡೆ ಮತ್ತು ತುಳಸಿ-ಮಿಶ್ರಿತ ಅಕ್ಷತೆ.',
    descriptionEn: 'Pure moist sandalwood paste balls and unbroken rice grains.',
    substituteKn: 'ಗಂಧ ಸಿಗದಿದ್ದಲ್ಲಿ ತುಳಸಿ ದಳವನ್ನೇ ಗಂಧಸ್ಥಾನದಲ್ಲಿ ಸಮರ್ಪಿಸಿ; ಗೋಪೀಚಂದನವನ್ನು ಬಳಸಬಹುದು.',
    substituteEn: 'If sandalwood is unavailable, Gopi Chandana or Tulasi leaf representation is accepted.',
    zeroAnxietyRuleKn: 'ಒಣ ಗಂಧವನ್ನು ನೇರವಾಗಿ ಹಾಕಬೇಡಿ; ತುಳಸಿ ಸ್ಪರ್ಶಿಸಿ ಅರ್ಪಿಸಿ.',
    zeroAnxietyRuleEn: 'Touch gandha with tulasi leaf or offer tulasi directly.'
  },
  {
    id: 'fresh_flowers',
    nameKn: 'ಶುದ್ಧ ಪೂಜಾ ಪುಷ್ಪಗಳು',
    nameEn: 'Fresh Sacred Flowers',
    category: 'sacred_leaves',
    tier: 'recommended',
    descriptionKn: 'ವಾಸನೆ ನೋಡದ, ನೆಲಕ್ಕೆ ಬೀಳದ ಶುದ್ಧ ಮಲ್ಲಿಗೆ, ಸಂಪಿಗೆ, ಕಮಲ, ಪಾರಿಜಾತ ಮುಂತಾದ ಪುಷ್ಪಗಳು.',
    descriptionEn: 'Unsmelled, clean fresh flowers like Jasmine, Lotus, Hibiscus, Parijata.',
    substituteKn: 'ಹೂವುಗಳು ಸಿಗದಿದ್ದಾಗ ಕೇವಲ ತುಳಸಿ ದಳಗಳಿಂದಲೇ ಪೂರ್ಣ ಅಷ್ಟೋತ್ತರ ಅರ್ಚನೆ ಮಾಡಬಹುದು.',
    substituteEn: 'Tulasi leaves alone serve as the greatest substitute for all flowers combined.',
    zeroAnxietyRuleKn: 'ಶ್ರೀಹರಿಗೆ ತುಳಸಿಯ ಸಮರ್ಪಣೆಯೇ ಕೋಟಿ ಹೂವುಗಳಿಗಿಂತ ಹೆಚ್ಚು ಶ್ರೇಷ್ಠ.',
    zeroAnxietyRuleEn: 'A single Tulasi leaf pleases Vishnu more than thousands of exotic flowers.'
  },
  {
    id: 'panchamruta',
    nameKn: 'ಪಂಚಾಮೃತ ದ್ರವ್ಯಗಳು (ಹಾಲು, ಮೊಸರು, ತುಪ್ಪ, ಜೇನು, ಸಕ್ಕರೆ)',
    nameEn: 'Panchamruta (Milk, Curd, Ghee, Honey, Sugar)',
    category: 'consumables',
    tier: 'full_paddhati',
    descriptionKn: 'ಹಸುವಿನ ಹಾಲು (ಗೋವಿಂದ), ಮೊಸರು (ವಾಮನ), ತುಪ್ಪ (ವಿಷ್ಣು), ಜೇನುತುಪ್ಪ (ಮಧುಸೂದನ), ಸಕ್ಕರೆ (ಅಚ್ಯುತ).',
    descriptionEn: 'Cow milk (Govinda), Curd (Vamana), Ghee (Vishnu), Honey (Madhusudana), Sugar (Achyuta).',
    substituteKn: 'ದೈನಂದಿನ ಪೂಜೆಯಲ್ಲಿ ಪಂಚಾಮೃತ ಅನಿವಾರ್ಯವಲ್ಲ; ಕೇವಲ ಶುದ್ಧೋದಕ (ಸ್ವಾದೂದಕ) ಅಭಿಷೇಕವೇ ಸಾಕು.',
    substituteEn: 'For daily routine, simple pure water (Shuddhodaka) is completely standard and valid.',
    zeroAnxietyRuleKn: 'ವಾರಾಂತ್ಯ ಅಥವಾ ವಿಶೇಷ ಪರ್ವದಿನಗಳಲ್ಲಿ ಮಾತ್ರ ಪಂಚಾಮೃತ ಮಾಡಿದರೆ ಸಾಕು.',
    zeroAnxietyRuleEn: 'Panchamruta can be reserved for Ekadashi/festivals; daily simple water is great.'
  },
  {
    id: 'naivedya_bhoga',
    nameKn: 'ನೈವೇದ್ಯ (ಅನ್ನ / ಪಾಯಸ / ಫಲ / ಕಲ್ಲುಸಕ್ಕರೆ)',
    nameEn: 'Naivedya (Cooked Food / Fruits / Rock Sugar)',
    category: 'consumables',
    tier: 'daily_minimum',
    descriptionKn: 'ಮಡಿಯಲ್ಲಿ ತಯಾರಿಸಿದ ಅನ್ನ, ತುಪ್ಪ, ಹಾಲು, ಅಥವಾ ಹಣ್ಣು-ಕಲ್ಲುಸಕ್ಕರೆ.',
    descriptionEn: 'Madi cooked rice, payasa, kheer, fruits, or dry fruits with rock sugar.',
    substituteKn: 'ಅಡುಗೆ ಸಿದ್ಧವಿಲ್ಲದಿದ್ದರೆ ಹಾಲು, ಬಾಳೆಹಣ್ಣು, ಒಣದ್ರಾಕ್ಷಿ, ಅಥವಾ ಕಲ್ಲುಸಕ್ಕರೆ ನೈವೇದ್ಯ ಸಾಕು.',
    substituteEn: 'If cooked food is not ready, offer milk, banana, raisins, or rock sugar.',
    zeroAnxietyRuleKn: 'ಏಕಾದಶಿಯಂದು ಅನ್ನ ನೈವೇದ್ಯ ಮಾಡಬಾರದು; ಕೇವಲ ಫಲ-ಕಲ್ಲುಸಕ್ಕರೆ ಮಾತ್ರ ಅರ್ಪಿಸಬೇಕು.',
    zeroAnxietyRuleEn: 'On Ekadashi, do NOT offer cooked grains; offer only fruits and sugar candy.'
  },
  {
    id: 'madi_vastra',
    nameKn: 'ಮಡಿ ವಸ್ತ್ರ (ಧೋತಿ & ಶಾಲು)',
    nameEn: 'Madi Vastra (Dhoti & Shalyam)',
    category: 'madi_cloth',
    tier: 'daily_minimum',
    descriptionKn: 'ಶುದ್ಧವಾಗಿ ಒಗೆದು ಮಡಿಯಲ್ಲಿ ಒಣಗಿಸಿದ ಹತ್ತಿ ಅಥವಾ ರೇಷ್ಮೆ ವಸ್ತ್ರ.',
    descriptionEn: 'Clean, washed and carefully dried cotton or silk traditional dhoti and cloth.',
    substituteKn: 'ಹೊಸ ಹತ್ತಿ ವಸ್ತ್ರ ಅಥವಾ ಒಣ ರೇಷ್ಮೆ ವಸ್ತ್ರ (ರೇಷ್ಮೆ ಮಡಿಯಾಗಿ ಸ್ವೀಕಾರಾರ್ಹ).',
    substituteEn: 'Pure silk cloth maintains natural purity (Madi) and is readily usable.',
    zeroAnxietyRuleKn: 'ಮನಸ್ಸಿನ ಶುದ್ಧತೆ ಮತ್ತು ಸಂಕಲ್ಪವೇ ನಿಜವಾದ ಆಂತರಿಕ ಮಡಿ.',
    zeroAnxietyRuleEn: 'Inner purity of heart and mind is the highest foundation of worship.'
  }
];
