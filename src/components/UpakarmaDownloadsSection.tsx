import React from 'react';
import { BookOpen, Download, FileText } from 'lucide-react';
import { Language } from '../types';

const UPAKARMA_DOCUMENTS = [
  {
    file: 'yajnopaveeta-dharana-complete.pdf',
    nameEn: 'Yajnopaveeta Dharana – Complete Procedure',
    nameKn: 'ಯಜ್ಞೋಪವೀತ ಧಾರಣೆ – ಸಂಪೂರ್ಣ ವಿಧಾನ',
    pages: 12,
    size: '207 KB',
  },
  {
    file: 'yajnopaveeta-dharana-vidhi.pdf',
    nameEn: 'Yajnopaveeta Dharana Vidhi',
    nameKn: 'ಯಜ್ಞೋಪವೀತ ಧಾರಣ ವಿಧಿ',
    pages: 5,
    size: '335 KB',
  },
  {
    file: 'yajnopaveeta-dharana-sanskrit.pdf',
    nameEn: 'Yajnopaveeta Dharana – Sanskrit',
    nameKn: 'ಯಜ್ಞೋಪವೀತ ಧಾರಣೆ – ಸಂಸ್ಕೃತ',
    pages: 6,
    size: '243 KB',
  },
  {
    file: 'mantrastotra-sangraha-kannada-2024.pdf',
    nameEn: 'Mantrastotra Sangraha (Kannada, 2024)',
    nameKn: 'ಮಂತ್ರಸ್ತೋತ್ರ ಸಂಗ್ರಹ (ಕನ್ನಡ, ೨೦೨೪)',
    pages: 288,
    size: '2.0 MB',
  },
];

export const UpakarmaDownloadsSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const translate = (english: string, kannada: string) => (lang === 'kn' ? kannada : english);

  return (
    <section id="upakarma" aria-labelledby="upakarma-heading" className="rounded-2xl border border-[#ffd700]/30 bg-[#250a0a] p-5 sm:p-8">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffbb66]">
        <BookOpen size={16} /> {translate('Free PDF downloads', 'ಉಚಿತ PDF ಡೌನ್‌ಲೋಡ್')}
      </p>
      <h2 id="upakarma-heading" className="font-serif text-2xl text-[#ffd700] sm:text-3xl">
        {translate('Rigveda – Upakarma – Yagnopaveeta Dharana', 'ಋಗ್ವೇದ – ಉಪಾಕರ್ಮ – ಯಜ್ಞೋಪವೀತ ಧಾರಣೆ')}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#fef3c7]/75">
        {translate(
          'Guides for the annual Upakarma and wearing the new sacred thread. No account or payment is needed.',
          'ವಾರ್ಷಿಕ ಉಪಾಕರ್ಮ ಮತ್ತು ನೂತನ ಯಜ್ಞೋಪವೀತ ಧಾರಣೆಯ ಮಾರ್ಗದರ್ಶಿಗಳು. ಖಾತೆ ಅಥವಾ ಪಾವತಿ ಅಗತ್ಯವಿಲ್ಲ.'
        )}
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {UPAKARMA_DOCUMENTS.map((document) => {
          const name = lang === 'kn' ? document.nameKn : document.nameEn;
          return (
            <li key={document.file} className="flex items-center gap-3 rounded-xl border border-[#ffd700]/15 bg-[#140404]/70 p-4">
              <FileText className="h-8 w-8 shrink-0 text-[#ff9933]" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <h3 className="font-serif font-bold leading-snug text-[#ffeedd]">{name}</h3>
                <p className="text-xs text-[#fef3c7]/60">
                  PDF · {document.pages} {translate('pages', 'ಪುಟಗಳು')} · {document.size}
                </p>
              </div>
              <a
                href={`/downloads/upakarma/${document.file}`}
                download={document.file}
                aria-label={`${translate('Download', 'ಡೌನ್‌ಲೋಡ್')} ${name}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#ffd700] px-3 py-2 text-xs font-bold text-[#250a0a] transition-colors hover:bg-[#ffe77a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700]"
              >
                <Download size={15} />
                {translate('Download', 'ಡೌನ್‌ಲೋಡ್')}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
