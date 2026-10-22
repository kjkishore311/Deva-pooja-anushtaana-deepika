export const SANDHYAVANDANE_PRICE = 100;

export const sandhyavandaneAudio = [
  { id: 'part-1', title: 'Sandhyavandane – Aachamana · Part 1', filename: 'aachamana-part-1.m4a' },
  { id: 'part-2', title: 'Sandhyavandane – Aachamana · Part 2', filename: 'aachamana-part-2.m4a' },
] as const;

export interface SandhyavandanePayment {
  id: string;
  email: string;
  transactionRef: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  reviewNote: string | null;
  createdAt: string;
  reviewedAt: string | null;
}

export interface SandhyavandaneAccess {
  request: SandhyavandanePayment | null;
  isAdmin: boolean;
  queue?: SandhyavandanePayment[];
}

export const krishnaYajurvedaSandhyavandane = {
  title: 'Nitya Sandhya Vandanam – Krishna Yajurvediya',
  reciter: 'Brahmasri Shankaramanchi Ramakrishna Sastry',
  audioUrl: 'https://d3k8k22xkys7w.cloudfront.net/070-nitya.sandhya.vandanam-brahmasri.shankaramanchi.ramakrishna.sastry..mp3',
  sourceUrl: 'https://vignanam.org/media/devanagari/nitya-sandhya-vandanam-krishna-yajurvediya.html',
  size: '53.5 MB',
} as const;

export const krishnaYajurvedaScripts = [
  { id: 'kannada', nameEn: 'Kannada', nameKn: 'ಕನ್ನಡ', native: 'ಕನ್ನಡ', pdfSize: '202 KB' },
  { id: 'devanagari', nameEn: 'Sanskrit (Devanagari)', nameKn: 'ಸಂಸ್ಕೃತ (ದೇವನಾಗರಿ)', native: 'संस्कृतम्', pdfSize: '141 KB' },
  { id: 'english', nameEn: 'English transliteration', nameKn: 'ಇಂಗ್ಲಿಷ್ ಲಿಪ್ಯಂತರ', native: 'English', pdfSize: '89 KB' },
  { id: 'telugu', nameEn: 'Telugu', nameKn: 'ತೆಲುಗು', native: 'తెలుగు', pdfSize: '218 KB' },
  { id: 'tamil', nameEn: 'Tamil', nameKn: 'ತಮಿಳು', native: 'தமிழ்', pdfSize: '138 KB' },
] as const;

export type KrishnaYajurvedaScript = typeof krishnaYajurvedaScripts[number]['id'];

export interface KrishnaYajurvedaText {
  title: string;
  steps: { title: string; note: string; lines: string[] }[];
}
