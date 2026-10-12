import type { PanchangaEdition } from '../data/panchangaData';

export function parseOfficialPanchanga(html: string): { year: string; editions: PanchangaEdition[] } {
  const editions = new Map<string, PanchangaEdition>();
  const labels: Record<string, string> = { sanskrit: 'Sanskrit', kannada: 'Kannada', telugu: 'Telugu', tamil: 'Tamil', marathi: 'Marathi', chicago: 'Chicago', denver: 'Denver', dubai: 'Dubai', london: 'London', los_angeles: 'Los Angeles', new_york: 'New York', sydney: 'Sydney', singapore: 'Singapore' };
  for (const match of html.matchAll(/https:\/\/cdn\.umath\.in\/panchanga-(\d{4})-(\d{4})\/pdf\/([a-z_]+)_(\d{4})_(\d{4})\.pdf(?:\.pdf)?/g)) {
    const [, start, end, id, fileStart, fileEnd] = match;
    if (start !== fileStart || end !== fileEnd || Number(end) !== Number(start) + 1) continue;
    editions.set(match[0], { id, label: labels[id] || id.replaceAll('_', ' '), year: `${start}–${end}`, pdfUrl: match[0] });
  }
  const all = [...editions.values()];
  const latest = all.map((edition) => edition.year).sort().at(-1);
  if (!latest) throw new Error('No verified calendar links were found.');
  return { year: latest, editions: all.filter((edition) => edition.year === latest) };
}
