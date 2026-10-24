import { Language } from '../types';
import { TabType } from './BottomNav';

interface DevotionalHomeWidgetsProps {
  lang: Language;
  onSelect: (tab: TabType) => void;
}

export function DevotionalHomeWidgets({ lang, onSelect }: DevotionalHomeWidgetsProps) {
  const widgets: { tab: TabType; nameEn: string; nameKn: string; image: string; alt: string }[] = [
    {
      tab: 'sandhyavandane',
      nameEn: 'Trikala Sandhyavandana',
      nameKn: 'ತ್ರಿಕಾಲ ಸಂಧ್ಯಾವಂದನೆ',
      image: '/images/widgets/sandhyavandane-cover.png',
      alt: 'Cover of the supplied Rigveda Trikala Sandhyavandane book',
    },
    {
      tab: 'guru-stuti',
      nameEn: 'Madhwa Guru Stuti',
      nameKn: 'ಮಧ್ವ ಗುರು ಸ್ತುತಿ',
      image: '/images/gurus/sri-madhwacharya.jpg',
      alt: 'Sri Madhwacharya — official Uttaradi Math reference image',
    },
    {
      tab: 'pooja',
      nameEn: 'Deva Pooja',
      nameKn: 'ದೇವಪೂಜೆ',
      image: '/images/FB_IMG_1787650730425.jpg',
      alt: 'Supplied photograph of the pooja sanctum',
    },
    {
      tab: 'mantra-stotra',
      nameEn: 'Mantra Stotra Sangraha',
      nameKn: 'ಮಂತ್ರ ಸ್ತೋತ್ರ ಸಂಗ್ರಹ',
      image: '/images/darshan/divine-alankara.jpg',
      alt: 'Supplied photograph of a jewelled alankara',
    },
  ];

  return (
    <nav aria-label={lang === 'kn' ? 'ಪೂಜಾ ವಿಭಾಗಗಳು' : 'Devotional sections'} className="mx-auto grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
      {widgets.map((widget) => (
        <button
          key={widget.tab}
          type="button"
          onClick={() => onSelect(widget.tab)}
          className="group relative aspect-square w-full overflow-hidden rounded-xl border border-[#ffd700]/40 bg-[#250a0a] shadow-lg transition hover:-translate-y-1 hover:border-[#ffd700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700] motion-reduce:transform-none"
        >
          <img src={widget.image} alt={widget.alt} className="h-full w-full object-cover transition duration-300 group-hover:scale-105 motion-reduce:transform-none" />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#140404] via-[#140404]/95 to-[#140404]/70 px-2 py-3 text-center font-serif text-xs font-bold leading-snug text-[#ffd700] sm:text-sm">
            {lang === 'kn' ? widget.nameKn : widget.nameEn}
          </span>
        </button>
      ))}
    </nav>
  );
}
