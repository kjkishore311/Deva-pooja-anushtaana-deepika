import React from 'react';

export const mudraReferenceImages: Record<string, { src: string; name: string }> = {
  tarkshya: { src: '/images/mudras/tarkshya.jpg', name: 'Tarkshya / Garuda Mudra' },
  dhenu: { src: '/images/mudras/dhenu.jpg', name: 'Dhenu Mudra' },
  shankha: { src: '/images/mudras/shankha.jpg', name: 'Shankha Mudra' },
  gada: { src: '/images/mudras/gada.jpg', name: 'Gada Mudra' },
  chakra: { src: '/images/mudras/chakra.jpg', name: 'Chakra Mudra' },
};

interface MudraHandDiagramProps {
  id: string;
  className?: string;
  showLabels?: boolean;
  allowZoom?: boolean;
}

export const MudraHandDiagram: React.FC<MudraHandDiagramProps> = ({ id, className = 'w-32 h-32', allowZoom = false }) => {
  const reference = mudraReferenceImages[id];
  const image = reference ? <img src={reference.src} alt={`${reference.name} — cropped from the supplied Tarkshyadi mudras reference`} className="h-full w-full object-contain" loading="lazy" /> : <p className="px-2 text-center text-xs leading-5 text-[#4b2525]">ಚಿತ್ರ ಒದಗಿಸಲಾಗಿಲ್ಲ<br />No reference image supplied</p>;
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-white ${className}`}>
      {reference && allowZoom ? <a href={reference.src} target="_blank" rel="noopener noreferrer" className="flex h-full w-full items-center justify-center" aria-label={`Open supplied reference for ${reference.name}`}>{image}</a> : image}
    </div>
  );
};
