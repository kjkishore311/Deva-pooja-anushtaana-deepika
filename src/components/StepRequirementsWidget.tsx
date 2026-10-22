import React from 'react';
import { Hand, Layers } from 'lucide-react';
import { Language, PoojaStep } from '../types';
import { MUDRAS_DATA } from '../data/mudrasData';
import { STEP_UTENSILS, UTENSILS } from '../data/stepUtensils';
import { MudraHandDiagram, mudraReferenceImages } from './MudraHandDiagram';

interface StepRequirementsWidgetProps {
  step: PoojaStep;
  lang: Language;
  onOpenMudra: (mudraId: string) => void;
  onOpenSamagri: () => void;
}

const thumb = (src: string) => `/.netlify/images?url=${encodeURIComponent(src)}&w=160&h=160&fit=cover&q=75`;

export const StepRequirementsWidget: React.FC<StepRequirementsWidgetProps> = ({ step, lang, onOpenMudra, onOpenSamagri }) => {
  const utensils = (STEP_UTENSILS[step.id] || []).map((id) => UTENSILS[id]);
  if (!utensils.length && !step.mudras.length) return null;

  return (
    <aside aria-label={lang === 'kn' ? 'ಈ ಹಂತಕ್ಕೆ ಬೇಕಾದವು' : 'Needed for this step'} className="rounded-2xl border border-[#ffd700]/20 bg-[#250a0a]/80 p-3 shadow-xl backdrop-blur-md">
      {utensils.length > 0 && (
        <section>
          <h3 className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#ff9933]">
            <Layers className="h-3.5 w-3.5" />
            {lang === 'kn' ? 'ಸಿದ್ಧವಾಗಿಡಿ' : 'Keep ready'}
          </h3>
          <ul className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-2">
            {utensils.map((item) => {
              const name = lang === 'kn' ? item.nameKn : item.nameEn;
              return (
                <li key={item.image}>
                  <button type="button" onClick={onOpenSamagri} title={name} className="group flex w-full flex-col items-center gap-1 rounded-xl p-1 text-center hover:bg-[#ffd700]/5 focus-visible:outline-2 focus-visible:outline-[#ffd700]">
                    <img src={thumb(item.image)} alt="" loading="lazy" className="aspect-square w-full rounded-lg border border-[#ffd700]/20 bg-white object-cover group-hover:border-[#ffd700]/60" />
                    <span className="text-[10px] leading-tight text-[#fef3c7]/85">{name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {step.mudras.length > 0 && (
        <section className={utensils.length ? 'mt-3 border-t border-[#ffd700]/10 pt-3' : undefined}>
          <h3 className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#ff9933]">
            <Hand className="h-3.5 w-3.5" />
            {lang === 'kn' ? 'ಮುದ್ರೆಗಳು' : 'Mudras'}
          </h3>
          <ul className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-2">
            {step.mudras.map((id) => {
              const mudra = MUDRAS_DATA.find((m) => m.id === id);
              const name = mudra ? (lang === 'kn' ? mudra.nameKn : mudra.nameEn.replace(/\s*\(.*\)$/, '')) : id;
              return (
                <li key={id}>
                  <button type="button" onClick={() => onOpenMudra(id)} title={name} className="group flex w-full flex-col items-center gap-1 rounded-xl p-1 text-center hover:bg-[#ffd700]/5 focus-visible:outline-2 focus-visible:outline-[#ffd700]">
                    {mudraReferenceImages[id]
                      ? <MudraHandDiagram id={id} className="aspect-square w-full border border-[#ffd700]/20 group-hover:border-[#ffd700]/60" />
                      : <span className="flex aspect-square w-full items-center justify-center rounded-lg border border-dashed border-[#ffd700]/30 bg-[#140404] text-[#ffd700]/60"><Hand className="h-6 w-6" /></span>}
                    <span className="text-[10px] leading-tight text-[#fef3c7]/85">{name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </aside>
  );
};
