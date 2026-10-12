import { Language } from '../types';
import { SetupPhoto } from '../data/setupPhotos';

export function SetupPhotoLink({ photo, lang }: { photo: SetupPhoto; lang: Language }) {
  const name = lang === 'kn' ? photo.nameKn : photo.nameEn;
  return (
    <a
      href={`/images/setup/${photo.file}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
      aria-label={lang === 'kn' ? `${name} — ಪೂರ್ಣ ಚಿತ್ರವನ್ನು ತೆರೆಯಿರಿ` : `${name} — open full image in a new tab`}
      className="flex flex-col overflow-hidden rounded-xl border border-[#ffd700]/20 bg-[#140404] transition hover:border-[#ffd700]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffd700]"
    >
      <img src={`/images/setup/${photo.file}`} alt={name} loading="lazy" className="aspect-square w-full bg-white object-contain" />
      <span className="px-2 py-2 text-center text-[11px] leading-snug text-[#fef3c7]">{name}</span>
    </a>
  );
}
