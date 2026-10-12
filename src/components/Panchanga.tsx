import { useCallback, useEffect, useState } from 'react';
import { Calendar, ExternalLink, RefreshCw } from 'lucide-react';
import { Language } from '../types';
import type { PanchangaCalendar } from '../data/panchangaData';

export function Panchanga({ lang }: { lang: Language }) {
  const [calendar, setCalendar] = useState<PanchangaCalendar | null>(null);
  const [editionId, setEditionId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [revision, setRevision] = useState(0);
  const translate = (english: string, kannada: string) => lang === 'kn' ? kannada : english;

  const refresh = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/um-panchanga', { cache: 'no-store', signal });
      const body = await response.json();
      if (!response.ok || !body.editions?.length) throw new Error('The official calendar could not be refreshed.');
      if (signal?.aborted) return;
      const next = body as PanchangaCalendar;
      setCalendar(next);
      setEditionId((current) => next.editions.some((edition) => edition.id === current) ? current : next.editions.find((edition) => edition.id === 'kannada')?.id || next.editions[0].id);
      setRevision((current) => current + 1);
    } catch {
      if (!signal?.aborted) setError('The official calendar could not be refreshed.');
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void refresh(controller.signal);
    return () => controller.abort();
  }, [refresh]);

  const selected = calendar?.editions.find((edition) => edition.id === editionId);
  const today = new Date().toLocaleDateString(lang === 'kn' ? 'kn-IN' : 'en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-8 sm:py-10">
      <header className="rounded-2xl border border-[#ffd700]/25 bg-[#250a0a] p-6 sm:p-8">
        <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#ffbb66]"><Calendar size={17} />{translate('Official published calendar', 'ಅಧಿಕೃತ ಪ್ರಕಟಿತ ಪಂಚಾಂಗ')}</p>
        <div className="flex flex-wrap items-center justify-between gap-4"><h1 className="font-serif text-3xl text-[#ffd700]">{translate('Uttaradi Math Panchanga', 'ಉತ್ತರಾದಿ ಮಠ ಪಂಚಾಂಗ')}</h1><button disabled={loading} onClick={() => void refresh()} className="flex items-center gap-2 rounded-xl border border-[#ffd700]/35 px-4 py-3 text-sm font-bold hover:bg-[#ffd700]/10 disabled:opacity-50"><RefreshCw size={17} className={loading ? 'animate-spin' : ''} />{translate('Refresh calendar', 'ಪಂಚಾಂಗ ನವೀಕರಿಸಿ')}</button></div>
        <p className="mt-4 text-sm text-[#fef3c7]/70">{today} · {translate('India time (IST)', 'ಭಾರತೀಯ ಸಮಯ')}</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#fef3c7]/70">{translate('Read the calendar published by Uttaradi Math. Choose the language or regional edition appropriate for your location. This viewer does not substitute calculated or mock daily Tithi and Nakshatra values.', 'ಉತ್ತರಾದಿ ಮಠ ಪ್ರಕಟಿಸಿದ ಪಂಚಾಂಗವನ್ನು ಓದಿ. ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಸೂಕ್ತವಾದ ಭಾಷೆ ಅಥವಾ ಪ್ರಾದೇಶಿಕ ಆವೃತ್ತಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಇಲ್ಲಿ ಕಲ್ಪಿತ ಅಥವಾ ಸ್ವಯಂಚಾಲಿತ ದಿನನಿತ್ಯದ ತಿಥಿ-ನಕ್ಷತ್ರ ವಿವರಗಳನ್ನು ತೋರಿಸಲಾಗುವುದಿಲ್ಲ.')}</p>
      </header>
      {error && <div role="alert" className="rounded-xl border border-red-400/30 bg-red-950/30 p-4 text-sm text-red-200">{translate('Unable to refresh the official calendar. Retry, or open the official website below.', 'ಅಧಿಕೃತ ಪಂಚಾಂಗ ನವೀಕರಿಸಲಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ಕೆಳಗಿನ ಅಧಿಕೃತ ಜಾಲತಾಣ ತೆರೆಯಿರಿ.')}{calendar && <p className="mt-2">{translate('The previously retrieved edition remains visible.', 'ಹಿಂದೆ ಪಡೆದ ಆವೃತ್ತಿಯನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ.')}</p>}</div>}
      {loading && !calendar && <div role="status" className="animate-pulse space-y-4 rounded-2xl border border-[#ffd700]/20 p-6"><p className="text-[#fef3c7]/70">{translate('Retrieving the latest published UM Panchanga…', 'ಅಧಿಕೃತ UM ಪಂಚಾಂಗ ಪಡೆಯಲಾಗುತ್ತಿದೆ…')}</p><div className="h-80 rounded-xl bg-[#ffd700]/5" /></div>}
      {calendar && selected && <>
        <div className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-[#ffd700]/20 bg-[#250a0a] p-5">
          <label className="block min-w-52 space-y-2 text-sm"><span className="text-[#ffbb66]">{translate('Published edition', 'ಪ್ರಕಟಿತ ಆವೃತ್ತಿ')} · {calendar.year}</span><select className="w-full rounded-xl border border-[#ffd700]/30 bg-[#140404] px-4 py-3 text-[#fef3c7]" value={editionId} onChange={(event) => setEditionId(event.target.value)}>{calendar.editions.map((edition) => <option key={edition.id} value={edition.id}>{edition.label}</option>)}</select></label>
          <a href={selected.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-[#ffd700] px-5 py-3 text-sm font-bold text-[#250a0a]"><ExternalLink size={16} />{translate('Open official PDF', 'ಅಧಿಕೃತ PDF ತೆರೆಯಿರಿ')}</a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#ffd700]/20 bg-white"><iframe key={`${selected.id}-${revision}`} src={`${selected.pdfUrl}#toolbar=1&view=FitH`} title={`Uttaradi Math ${calendar.year} Panchanga — ${selected.label}`} className="h-[72dvh] min-h-96 w-full" /><p className="px-5 py-3 text-xs leading-6 text-[#4b2525]">{translate('If the PDF does not display on your device, use “Open official PDF” above.', 'ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ PDF ಕಾಣದಿದ್ದರೆ ಮೇಲಿನ “ಅಧಿಕೃತ PDF ತೆರೆಯಿರಿ” ಆಯ್ಕೆ ಬಳಸಿ.')}</p></div>
        <p className="text-xs leading-6 text-[#fef3c7]/55">{translate('Source checked', 'ಮೂಲ ಪರಿಶೀಲಿಸಿದ ಸಮಯ')}: {new Date(calendar.retrievedAt).toLocaleString(lang === 'kn' ? 'kn-IN' : 'en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </>}
      <a href="https://uttaradimath.org/panchanga" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#ffd700] underline underline-offset-4">{translate('Uttaradi Math official Panchanga source', 'ಉತ್ತರಾದಿ ಮಠದ ಅಧಿಕೃತ ಪಂಚಾಂಗ ಜಾಲತಾಣ')}<ExternalLink size={14} /></a>
    </section>
  );
}
