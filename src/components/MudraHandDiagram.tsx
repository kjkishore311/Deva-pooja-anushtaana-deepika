import React from 'react';

// The five Tarkshyadi mudras are crops of the supplied reference; the others are illustrations drawn from each mudra's description.
export const mudraReferenceImages: Record<string, { src: string; name: string; illustration?: boolean }> = {
  tarkshya: { src: '/images/mudras/tarkshya.jpg', name: 'Tarkshya / Garuda Mudra' },
  dhenu: { src: '/images/mudras/dhenu.jpg', name: 'Dhenu Mudra' },
  shankha: { src: '/images/mudras/shankha.jpg', name: 'Shankha Mudra' },
  gada: { src: '/images/mudras/gada.jpg', name: 'Gada Mudra' },
  chakra: { src: '/images/mudras/chakra.jpg', name: 'Chakra Mudra' },
  avahani: { src: '/images/mudras/avahani.jpg', name: 'Avahani Mudra', illustration: true },
  sthapani: { src: '/images/mudras/sthapani.jpg', name: 'Sthapani Mudra', illustration: true },
  sannidhayini: { src: '/images/mudras/sannidhayini.jpg', name: 'Sannidhayini Mudra', illustration: true },
  sannirodhini: { src: '/images/mudras/sannirodhini.jpg', name: 'Sannirodhini Mudra', illustration: true },
  sammukhi: { src: '/images/mudras/sammukhi.jpg', name: 'Sammukhi Mudra', illustration: true },
  avagunthana: { src: '/images/mudras/avagunthana.jpg', name: 'Avagunthana Mudra', illustration: true },
  prasada: { src: '/images/mudras/prasada.jpg', name: 'Prasada Mudra', illustration: true },
  meru: { src: '/images/mudras/meru.jpg', name: 'Meru Mudra', illustration: true },
  chandra: { src: '/images/mudras/chandra.jpg', name: 'Chandra Mudra', illustration: true },
};

interface MudraHandDiagramProps {
  id: string;
  className?: string;
  showLabels?: boolean;
  allowZoom?: boolean;
}

export const MudraHandDiagram: React.FC<MudraHandDiagramProps> = ({ id, className = 'w-32 h-32', allowZoom = false }) => {
  const reference = mudraReferenceImages[id];
  const image = reference ? <img src={reference.src} alt={reference.illustration ? `${reference.name} — illustration based on the written description` : `${reference.name} — cropped from the supplied Tarkshyadi mudras reference`} className="h-full w-full object-contain" loading="lazy" /> : <p className="px-2 text-center text-xs leading-5 text-[#4b2525]">ಚಿತ್ರ ಒದಗಿಸಲಾಗಿಲ್ಲ<br />No reference image supplied</p>;
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-white ${className}`}>
      {reference && allowZoom ? <a href={reference.src} target="_blank" rel="noopener noreferrer" className="flex h-full w-full items-center justify-center" aria-label={`Open supplied reference for ${reference.name}`}>{image}</a> : image}
    </div>
  );
};
