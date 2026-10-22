import { useEffect, useState } from 'react';
import { BookOpen, Download, ListOrdered } from 'lucide-react';
import { Language } from '../types';
import { krishnaYajurvedaScripts, type KrishnaYajurvedaScript, type KrishnaYajurvedaText } from '../data/sandhyavandaneData';

const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffd700] px-4 py-2.5 text-sm font-bold text-[#250a0a] transition-colors hover:bg-[#ffe77a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700]';
const pdfPath = (script: KrishnaYajurvedaScript) => `/downloads/sandhyavandane/krishna-yajurveda-sandhyavandana-${script}.pdf`;

export function KrishnaYajurvedaSteps({ lang }: { lang: Language }) {
  const translate = (english: string, kannada: string) => lang === 'kn' ? kannada : english;
  const [script, setScript] = useState<KrishnaYajurvedaScript>(lang === 'kn' ? 'kannada' : 'english');
  const [text, setText] = useState<KrishnaYajurvedaText | null>(null);
  const [failed, setFailed] = useState(false);
  const [openSteps, setOpenSteps] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    let cancelled = false;
    setText(null);
    setFailed(false);
    fetch(`/data/krishna-yajurveda-sandhyavandana/${script}.json`)
      .then((response) => { if (!response.ok) throw new Error(); return response.json(); })
      .then((body: KrishnaYajurvedaText) => { if (!cancelled) setText(body); })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, [script]);

  const toggleStep = (index: number) => setOpenSteps((current) => {
    const next = new Set(current);
    if (next.has(index)) next.delete(index); else next.add(index);
    return next;
  });
  const allOpen = !!text && openSteps.size === text.steps.length;

  return (
    <>
      <section aria-labelledby="yajurveda-pdfs" className="border-t border-[#ffd700]/15 px-6 py-6 sm:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h3 id="yajurveda-pdfs" className="flex items-center gap-2 font-serif text-xl text-[#ffd700]"><BookOpen size={20} />{translate('Free PDF — choose your script', 'ಉಚಿತ PDF — ನಿಮ್ಮ ಲಿಪಿ ಆಯ್ಕೆ ಮಾಡಿ')}</h3><span className="rounded-full border border-emerald-400/30 px-3 py-1 text-xs text-emerald-300">{translate('No payment or account', 'ಪಾವತಿ ಅಥವಾ ಖಾತೆ ಅಗತ್ಯವಿಲ್ಲ')}</span></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {krishnaYajurvedaScripts.map((option) => (
            <a key={option.id} href={pdfPath(option.id)} download className="flex items-center justify-between gap-3 rounded-xl border border-[#ffd700]/20 bg-[#140404] px-4 py-3 text-sm hover:border-[#ffd700]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700]" aria-label={`${translate('Download PDF', 'PDF ಡೌನ್‌ಲೋಡ್')} · ${translate(option.nameEn, option.nameKn)}`}>
              <span><span className="block font-semibold text-[#ffd700]">{option.native}</span><span className="text-xs text-[#fef3c7]/55">{translate(option.nameEn, option.nameKn)} · PDF · {option.pdfSize}</span></span>
              <Download size={17} className="shrink-0 text-[#ffd700]" />
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="yajurveda-steps" className="border-t border-[#ffd700]/15 px-6 py-6 sm:px-8">
        <h3 id="yajurveda-steps" className="flex items-center gap-2 font-serif text-xl text-[#ffd700]"><ListOrdered size={20} />{translate('Step-by-step procedure', 'ಹಂತ ಹಂತದ ವಿಧಾನ')}</h3>
        <p className="mt-2 text-sm leading-7 text-[#fef3c7]/70">{translate('Read every step of the daily Sandhyavandana in the script you are most comfortable with. Instructions appear in brackets.', 'ದೈನಂದಿನ ಸಂಧ್ಯಾವಂದನೆಯ ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನು ನಿಮಗೆ ಅನುಕೂಲವಾದ ಲಿಪಿಯಲ್ಲಿ ಓದಿ. ಸೂಚನೆಗಳು ಆವರಣದಲ್ಲಿವೆ.')}</p>
        <div role="radiogroup" aria-label={translate('Script', 'ಲಿಪಿ')} className="mt-4 flex flex-wrap gap-2">
          {krishnaYajurvedaScripts.map((option) => (
            <button key={option.id} type="button" role="radio" aria-checked={script === option.id} onClick={() => setScript(option.id)} className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700] ${script === option.id ? 'border-[#ffd700] bg-[#ffd700] font-bold text-[#250a0a]' : 'border-[#ffd700]/30 text-[#fef3c7] hover:bg-[#ffd700]/10'}`}>
              {option.native}{option.id === 'english' ? '' : ` · ${translate(option.nameEn, option.nameKn)}`}
            </button>
          ))}
        </div>

        {failed && <p role="alert" className="mt-5 rounded-xl border border-red-400/40 bg-red-950/40 p-4 text-sm text-red-200">{translate('The steps could not be loaded. Check your connection, or download the PDF above.', 'ಹಂತಗಳನ್ನು ತೆರೆಯಲಾಗಲಿಲ್ಲ. ಸಂಪರ್ಕ ಪರಿಶೀಲಿಸಿ ಅಥವಾ ಮೇಲಿನ PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.')}</p>}
        {!text && !failed && <p role="status" className="mt-5 animate-pulse text-sm text-[#fef3c7]/60">{translate('Loading steps…', 'ಹಂತಗಳನ್ನು ತೆರೆಯಲಾಗುತ್ತಿದೆ…')}</p>}
        {text && <div className="mt-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <p className="font-serif text-lg text-[#ffbb66]">{text.title}</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="rounded-lg border border-[#ffd700]/30 px-3 py-1.5 text-xs text-[#fef3c7] hover:bg-[#ffd700]/10" onClick={() => setOpenSteps(allOpen ? new Set() : new Set(text.steps.map((_, index) => index)))}>{allOpen ? translate('Collapse all', 'ಎಲ್ಲಾ ಮುಚ್ಚಿ') : translate('Expand all', 'ಎಲ್ಲಾ ತೆರೆಯಿರಿ')}</button>
              <a href={pdfPath(script)} download className={buttonClass}><Download size={15} />{translate('PDF in this script', 'ಈ ಲಿಪಿಯ PDF')}</a>
            </div>
          </div>
          <ol className="divide-y divide-[#ffd700]/10 rounded-xl border border-[#ffd700]/20 bg-[#140404]">
            {text.steps.map((step, index) => {
              const open = openSteps.has(index);
              return (
                <li key={index}>
                  <button type="button" aria-expanded={open} aria-controls={`ky-step-${index}`} onClick={() => toggleStep(index)} className="flex w-full items-baseline gap-3 px-4 py-3 text-left hover:bg-[#ffd700]/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ffd700]">
                    <span className="w-7 shrink-0 font-serif text-[#ff9933]/70">{index + 1}.</span>
                    <span className="flex-1 font-semibold text-[#ffd700]">{step.title}{step.note && <span className="ml-2 text-sm font-normal text-[#fef3c7]/55">[{step.note}]</span>}</span>
                    {step.lines.length > 0 && <span aria-hidden="true" className="text-[#ffd700]/60">{open ? '−' : '+'}</span>}
                  </button>
                  {open && step.lines.length > 0 && <div id={`ky-step-${index}`} className="space-y-1 px-4 pb-4 pl-14 text-[15px] leading-8 text-[#fef3c7]/90">
                    {step.lines.map((line, lineIndex) => line
                      ? <p key={lineIndex} className={line.startsWith('(') && line.endsWith(')') ? 'text-sm italic text-[#fef3c7]/55' : undefined}>{line}</p>
                      : <div key={lineIndex} className="h-3" />)}
                  </div>}
                </li>
              );
            })}
          </ol>
          <p className="mt-3 text-xs leading-6 text-[#fef3c7]/55">{translate('Text courtesy of Vaidika Vignanam (vignanam.org).', 'ಪಠ್ಯ ಕೃಪೆ: ವೈದಿಕ ವಿಜ್ಞಾನಂ (vignanam.org).')}</p>
        </div>}
      </section>
    </>
  );
}
