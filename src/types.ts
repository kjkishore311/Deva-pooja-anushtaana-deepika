export type Language = 'kn' | 'en';

export type PoojaMode = '10min' | '30min' | 'full';

export interface MantraItem {
  id: string;
  titleKn: string;
  titleEn: string;
  mantraKannada: string;
  mantraSanskrit: string;
  mantraEnglish: string;
  repetitionCount: number;
  meaningKn: string;
  meaningEn: string;
  audioPhonetic?: string;
  contextKn?: string;
  contextEn?: string;
}

export interface PoojaStep {
  id: string;
  order: number;
  stageNumber: number;
  category: 'purvanga' | 'abhisheka' | 'archana' | 'naivedya' | 'uttaranga';
  titleKn: string;
  titleEn: string;
  subtitleKn: string;
  subtitleEn: string;
  modes: PoojaMode[];
  durationEstimateMinutes: number;
  requiredMaterialsKn: string[];
  requiredMaterialsEn: string[];
  mantras: MantraItem[];
  mudras: string[];
  instructionsKn: string[];
  instructionsEn: string[];
  tipsKn?: string;
  tipsEn?: string;
  ekadashiDifferenceKn?: string;
  ekadashiDifferenceEn?: string;
  shastricReference?: string;
}

export interface MudraInfo {
  id: string;
  nameKn: string;
  nameEn: string;
  meaningKn: string;
  meaningEn: string;
  howToFormKn: string;
  howToFormEn: string;
  purposeKn: string;
  purposeEn: string;
  category: 'avahana' | 'upachara' | 'ayudha';
  badge: string;
}

export interface SamagriItem {
  id: string;
  nameKn: string;
  nameEn: string;
  category: 'vessels' | 'consumables' | 'sacred_leaves' | 'madi_cloth' | 'pratima_peetha';
  tier: 'daily_minimum' | 'recommended' | 'full_paddhati';
  descriptionKn: string;
  descriptionEn: string;
  substituteKn?: string;
  substituteEn?: string;
  zeroAnxietyRuleKn?: string;
  zeroAnxietyRuleEn?: string;
}

export interface QnAItem {
  id: string;
  category: 'flowers' | 'gandha_dhoopa' | 'abhisheka' | 'substitutions' | 'madi_achara' | 'ekadashi' | 'general' | 'saligrama' | 'gandhakshata' | 'naivedya' | 'mangalarati';
  categoryLabelKn: string;
  categoryLabelEn: string;
  questionKn: string;
  questionEn: string;
  answerKn: string;
  answerEn: string;
  keyRuleKn: string;
  keyRuleEn: string;
  tags: string[];
}

export interface SuktaVerse {
  vsNo: number;
  kannada: string;
  sanskrit: string;
  english: string;
  meaningKn: string;
  meaningEn: string;
}

export interface SuktaItem {
  id: string;
  titleKn: string;
  titleEn: string;
  youtubeId?: string;
  youtubeUrl?: string;
  viniyogaKn: string;
  viniyogaEn: string;
  rishi: string;
  devata: string;
  chandas: string;
  overviewKn: string;
  overviewEn: string;
  verses: SuktaVerse[];
}

export type PaymentMethod = 'upi_qr' | 'gpay' | 'phonepe' | 'paytm' | 'card' | 'netbanking';

export interface PaymentRecord {
  tier: PoojaMode;
  amount: number;
  paymentMethod: PaymentMethod;
  transactionRef: string;
  date: string;
  upiId: string;
}
