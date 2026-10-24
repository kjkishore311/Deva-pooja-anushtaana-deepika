import React from 'react';
import { ArrowLeft, BookOpen, Clock, Download, FileText } from 'lucide-react';
import { Language } from '../types';

interface MantraStotraDocument {
  scriptEn: string;
  scriptKn: string;
  nameEn: string;
  nameKn: string;
  // Documents without a file are listed as coming soon until the PDF is supplied.
  file?: string;
  pages?: number;
  size?: string;
}

const MANTRA_STOTRA_DOCUMENTS: MantraStotraDocument[] = [
  {
    scriptEn: 'Kannada',
    scriptKn: 'ಕನ್ನಡ',
    nameEn: 'Mantrastotra Sangraha (Kannada, 2024)',
    nameKn: 'ಮಂತ್ರಸ್ತೋತ್ರ ಸಂಗ್ರಹ (ಕನ್ನಡ, ೨೦೨೪)',
    file: 'mantrastotra-sangraha-kannada-2024.pdf',
    pages: 288,
    size: '2.0 MB',
  },
  {
    scriptEn: 'Sanskrit',
    scriptKn: 'ಸಂಸ್ಕೃತ',
    nameEn: 'Mantrastotra Sangraha (Sanskrit)',
    nameKn: 'ಮಂತ್ರಸ್ತೋತ್ರ ಸಂಗ್ರಹ (ಸಂಸ್ಕೃತ)',
  },
];

export const MantraStotraSangrahaSection: React.FC<{ lang: Language; onBack: () => void }> = ({ lang, onBack }) => {
  const translate = (english: string, kannada: string) => (lang === 'kn' ? kannada : english);

  return (
    <section aria-labelledby="mantra-stotra-heading" className="mx-auto max-w-4xl space-y-6 px-4 py-6 sm:px-8 sm:py-10">
      <button onClick={onBack} className="flex items-center gap-2 rounded-xl border border-[#ffd700]/30 px-4 py-2.5 text-sm">
        <ArrowLeft size={16} />
        {translate('Back to home', 'ಮುಖಪುಟಕ್ಕೆ ಮರಳಿ')}
      </button>

      <div className="grid gap-6 rounded-2xl border border-[#ffd700]/30 bg-[#250a0a] p-5 sm:grid-cols-[180px_1fr] sm:p-8">
        <img
          src="/.netlify/images?url=/images/darshan/divine-alankara.jpg&w=360&q=80"
          alt={translate('Jewelled alankara darshan', 'ರತ್ನಾಭರಣ ಅಲಂಕಾರ ದರ್ಶನ')}
          className="mx-auto aspect-[3/4] w-40 rounded-t-full border-2 border-[#ffd700]/60 object-cover sm:w-full"
        />
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffbb66]">
            <BookOpen size={16} /> {translate('Free PDF downloads', 'ಉಚಿತ PDF ಡೌನ್‌ಲೋಡ್')}
          </p>
          <h1 id="mantra-stotra-heading" className="font-serif text-3xl text-[#ffd700] sm:text-4xl">
            {translate('Mantra Stotra Sangraha', 'ಮಂತ್ರ ಸ್ತೋತ್ರ ಸಂಗ್ರಹ')}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#fef3c7]/75">
            {translate(
              'A collection of mantras and stotras for daily recitation, free to download in Sanskrit and Kannada. No account or payment is needed.',
              'ನಿತ್ಯ ಪಠಣಕ್ಕಾಗಿ ಮಂತ್ರ ಹಾಗೂ ಸ್ತೋತ್ರಗಳ ಸಂಗ್ರಹ, ಸಂಸ್ಕೃತ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಉಚಿತವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ. ಖಾತೆ ಅಥವಾ ಪಾವತಿ ಅಗತ್ಯವಿಲ್ಲ.'
            )}
          </p>
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {MANTRA_STOTRA_DOCUMENTS.map((document) => {
          const name = lang === 'kn' ? document.nameKn : document.nameEn;
          return (
            <li key={document.scriptEn} className="flex items-center gap-3 rounded-xl border border-[#ffd700]/15 bg-[#140404]/70 p-4">
              <FileText className="h-8 w-8 shrink-0 text-[#ff9933]" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <h2 className="font-serif font-bold leading-snug text-[#ffeedd]">{name}</h2>
                <p className="text-xs text-[#fef3c7]/60">
                  {document.file
                    ? `PDF · ${document.pages} ${translate('pages', 'ಪುಟಗಳು')} · ${document.size}`
                    : translate('PDF coming soon', 'PDF ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯ')}
                </p>
              </div>
              {document.file ? (
                <a
                  href={`/downloads/mantra-stotra/${document.file}`}
                  download={document.file}
                  aria-label={`${translate('Download', 'ಡೌನ್‌ಲೋಡ್')} ${name}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#ffd700] px-3 py-2 text-xs font-bold text-[#250a0a] transition-colors hover:bg-[#ffe77a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700]"
                >
                  <Download size={15} />
                  {translate('Download', 'ಡೌನ್‌ಲೋಡ್')}
                </a>
              ) : (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#ffd700]/25 px-3 py-2 text-xs font-bold text-[#ffd700]/70">
                  <Clock size={15} />
                  {translate('Soon', 'ಶೀಘ್ರದಲ್ಲೇ')}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
