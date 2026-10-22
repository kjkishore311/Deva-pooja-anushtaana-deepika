import React from 'react';
import { Language } from '../types';

interface SacredDarshanBandProps {
  lang: Language;
}

type Size = 'side' | 'guru' | 'center';

// Left to right: Hanuman, Sri Satyatma Tirtha, Moola Rama and Narasimha at the centre, Sri Satyapramoda Tirtha, Garuda.
// The golden Hanuman and Garuda follow the Sri Uttaradi Math website header, both facing the centre.
const figures: { src: string; nameKn: string; nameEn: string; size: Size; position: string }[] = [
  { src: '/images/uttaradi-math/hanuman-golden.png', nameKn: 'ಶ್ರೀ ಹನುಮಂತ ದೇವರು', nameEn: 'Sri Hanumantha Devaru', size: 'side', position: 'center' },
  { src: '/images/gurus/sri-satyatma-tirtha.jpg', nameKn: 'ಶ್ರೀ ಸತ್ಯಾತ್ಮ ತೀರ್ಥರು', nameEn: 'Sri Satyatma Tirtharu', size: 'guru', position: 'center 15%' },
  { src: '/images/FB_IMG_1787384814245.jpg', nameKn: 'ಶ್ರೀ ಮೂಲರಾಮ ದೇವರು', nameEn: 'Sri Moola Rama Devaru', size: 'center', position: 'center 45%' },
  { src: '/images/FB_IMG_1786024569171.jpg', nameKn: 'ಶ್ರೀ ನರಸಿಂಹ ದೇವರು', nameEn: 'Sri Narasimha Devaru', size: 'center', position: 'center 20%' },
  { src: '/images/gurus/sri-satyapramoda-tirtha.jpg', nameKn: 'ಶ್ರೀ ಸತ್ಯಪ್ರಮೋದ ತೀರ್ಥರು', nameEn: 'Sri Satyapramoda Tirtharu', size: 'guru', position: 'center 40%' },
  { src: '/images/uttaradi-math/garuda-golden.png', nameKn: 'ಶ್ರೀ ಗರುಡದೇವರು', nameEn: 'Sri Garuda Devaru', size: 'side', position: 'center' },
];

const frameWidth: Record<Size, string> = {
  side: 'w-12 sm:w-28 md:w-36',
  guru: 'w-[52px] sm:w-24 md:w-28',
  center: 'w-16 sm:w-28 md:w-36',
};

// PNGs keep their transparent background; photos are converted to an efficient format by the Image CDN.
const optimized = (src: string) => `/.netlify/images?url=${encodeURIComponent(src)}&w=320&q=80`;

export const SacredDarshanBand: React.FC<SacredDarshanBandProps> = ({ lang }) => (
  <section aria-label={lang === 'kn' ? 'ದೇವರು ಮತ್ತು ಗುರುಗಳ ದರ್ಶನ' : 'Darshan of the Lord and the Gurus'} className="w-full bg-gradient-to-b from-[#140404] to-[#250a0a] border-b border-[#ffd700]/20 px-1 pt-3 pb-2 sm:pt-4">
    <ul className="mx-auto flex max-w-5xl items-end justify-center gap-1 sm:gap-4">
      {figures.map((figure) => {
        const name = lang === 'kn' ? figure.nameKn : figure.nameEn;
        return (
          <li key={figure.src} className={`${frameWidth[figure.size]} shrink-0`}>
            <figure className="flex flex-col items-center">
              {figure.size === 'side'
                ? <img src={optimized(figure.src)} alt={name} loading="eager" decoding="async" draggable={false} className="aspect-[369/320] w-full object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.25)]" />
                : <div className={`aspect-[3/4] w-full overflow-hidden rounded-t-full border-2 ${figure.size === 'center' ? 'border-[#ffd700] shadow-[0_0_18px_rgba(255,215,0,0.35)]' : 'border-[#ffd700]/50'} bg-[#140404]`}>
                    <img src={optimized(figure.src)} alt={name} loading="eager" decoding="async" draggable={false} className="h-full w-full object-cover" style={{ objectPosition: figure.position }} />
                  </div>}
              <figcaption className="mt-1 hidden text-center font-serif text-[10px] leading-tight text-[#ffd700]/85 sm:block md:text-xs">{name}</figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  </section>
);
