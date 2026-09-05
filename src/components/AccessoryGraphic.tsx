import React from 'react';

interface AccessoryGraphicProps {
  id: string;
  className?: string;
}

/**
 * Authentic visual illustrations for sacred Deva Pooja accessories / Samagri.
 */
export const AccessoryGraphic: React.FC<AccessoryGraphicProps> = ({
  id,
  className = 'w-16 h-16',
}) => {
  switch (id) {
    case 'saligrama_idols':
      // Divine black Saligrama stone with natural golden Sudarshana Chakra spiral markings on golden altar
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="saligramaShila" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="50%" stopColor="#111827" />
              <stop offset="100%" stopColor="#030712" />
            </radialGradient>
          </defs>
          {/* Peetha base */}
          <ellipse cx="50" cy="78" rx="36" ry="12" fill="#78350f" stroke="#ffd700" strokeWidth="1.5" />
          <ellipse cx="50" cy="75" rx="30" ry="9" fill="#92400e" stroke="#f59e0b" strokeWidth="1" />
          <path d="M 20 78 L 22 88 L 78 88 L 80 78" fill="#581c87" stroke="#ffd700" strokeWidth="1" />
          {/* Sacred Saligrama Stone */}
          <ellipse cx="50" cy="52" rx="24" ry="20" fill="url(#saligramaShila)" stroke="#ffd700" strokeWidth="1.5" />
          {/* Golden Sudarshana Spiral / Vadanadwara on the Shila */}
          <path
            d="M 50 46 C 53 43, 58 45, 57 49 C 55 53, 47 52, 46 48 C 45 42, 54 40, 58 44 C 61 48, 57 56, 50 58 C 43 60, 39 53, 42 46"
            stroke="#ffd700"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Tulasi leaf on Saligrama */}
          <path d="M 50 32 C 44 26, 42 34, 50 38 C 58 34, 56 26, 50 32 Z" fill="#15803d" stroke="#86efac" strokeWidth="0.8" />
          <circle cx="50" cy="38" r="1.5" fill="#ffd700" />
        </svg>
      );

    case 'ghanta':
      // Sacred brass Pooja Bell with Garuda crown and handle
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bellBrass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="30%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          {/* Garuda / Crown at top */}
          <circle cx="50" cy="18" r="6" fill="url(#bellBrass)" stroke="#ffd700" strokeWidth="1" />
          <path d="M 46 22 L 54 22 L 52 35 L 48 35 Z" fill="url(#bellBrass)" stroke="#ffd700" strokeWidth="1" />
          {/* Handle rings */}
          <ellipse cx="50" cy="28" rx="4" ry="2" fill="#ffd700" />
          <ellipse cx="50" cy="35" rx="5" ry="2.5" fill="#ffd700" />
          {/* Bell Dome */}
          <path
            d="M 48 36 C 44 48, 25 58, 24 75 C 24 82, 35 84, 50 84 C 65 84, 76 82, 76 75 C 75 58, 56 48, 52 36 Z"
            fill="url(#bellBrass)"
            stroke="#ffd700"
            strokeWidth="1.5"
          />
          {/* Bell Rim band */}
          <ellipse cx="50" cy="76" rx="26" ry="5" fill="#b45309" stroke="#fef08a" strokeWidth="1.2" />
          {/* Sound waves emitting */}
          <path d="M 18 68 C 14 73, 14 79, 18 84" stroke="#ff9933" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 82 68 C 86 73, 86 79, 82 84" stroke="#ff9933" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'shankha':
      // Sacred white Shankha on brass tripod stand
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shankhaWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
          </defs>
          {/* Tripod Stand */}
          <ellipse cx="50" cy="80" rx="26" ry="7" fill="#78350f" stroke="#ffd700" strokeWidth="1.2" />
          <path d="M 32 80 L 26 90 M 68 80 L 74 90 M 50 82 L 50 92" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          {/* Conch body */}
          <path
            d="M 30 65 C 22 55, 25 35, 42 24 C 58 14, 76 22, 80 40 C 82 52, 75 62, 60 70 C 48 76, 36 72, 30 65 Z"
            fill="url(#shankhaWhite)"
            stroke="#d97706"
            strokeWidth="1.5"
          />
          {/* Conch Spout */}
          <path d="M 76 36 L 88 32 C 90 31, 91 35, 87 38 L 78 44" fill="url(#shankhaWhite)" stroke="#d97706" strokeWidth="1.2" />
          {/* Spiral ridges */}
          <path d="M 42 24 C 48 35, 60 45, 68 58" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 50 20 C 58 30, 68 40, 75 50" stroke="#d97706" strokeWidth="1" strokeLinecap="round" />
          {/* Holy water droplets */}
          <circle cx="92" cy="38" r="1.5" fill="#38bdf8" />
          <circle cx="95" cy="44" r="1" fill="#38bdf8" />
        </svg>
      );

    case 'patras_uddharani':
      // Panchapatra vessel and Uddharani spoon
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="copper" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9a3412" />
              <stop offset="40%" stopColor="#ea580c" />
              <stop offset="70%" stopColor="#fdba74" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
          </defs>
          {/* Panchapatra Body */}
          <path d="M 28 42 L 32 82 C 32 86, 38 88, 50 88 C 62 88, 68 86, 68 82 L 72 42 Z" fill="url(#copper)" stroke="#ffd700" strokeWidth="1.2" />
          {/* Rim */}
          <ellipse cx="50" cy="42" rx="23" ry="6" fill="#c2410c" stroke="#fed7aa" strokeWidth="1.2" />
          {/* Water inside */}
          <ellipse cx="50" cy="44" rx="20" ry="4.5" fill="#0284c7" fillOpacity="0.7" />
          {/* Uddharani Spoon resting in water */}
          <path d="M 44 48 L 74 18 C 76 16, 80 18, 78 22 L 52 52" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="75" cy="18" r="3" fill="#f59e0b" stroke="#ffd700" strokeWidth="1" />
          <ellipse cx="46" cy="52" rx="6" ry="4" fill="#ea580c" stroke="#ffd700" strokeWidth="1" />
        </svg>
      );

    case 'deepa_samagri':
      // Brass Diya / Deepa with golden flame
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lampBrass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <radialGradient id="flame" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fde047" />
              <stop offset="70%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </radialGradient>
          </defs>
          {/* Lamp Base */}
          <ellipse cx="50" cy="85" rx="22" ry="6" fill="url(#lampBrass)" stroke="#ffd700" strokeWidth="1" />
          <rect x="47" y="65" width="6" height="20" fill="url(#lampBrass)" stroke="#ffd700" strokeWidth="0.8" />
          {/* Oil Reservoir / Bowl */}
          <path d="M 28 65 C 28 72, 38 75, 50 75 C 62 75, 72 72, 72 65 C 72 58, 28 58, 28 65 Z" fill="url(#lampBrass)" stroke="#ffd700" strokeWidth="1.2" />
          <ellipse cx="50" cy="62" rx="22" ry="4" fill="#92400e" />
          {/* Wick */}
          <line x1="50" y1="62" x2="50" y2="48" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
          {/* Golden Flame */}
          <path
            d="M 50 20 C 44 32, 42 42, 50 50 C 58 42, 56 32, 50 20 Z"
            fill="url(#flame)"
          />
          {/* Flame Glow */}
          <circle cx="50" cy="36" r="22" fill="#f59e0b" fillOpacity="0.15" />
        </svg>
      );

    case 'tulasi_dala':
      // Holy Tulasi leaves and Manjari
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Stem */}
          <path d="M 50 88 C 50 65, 50 40, 50 25" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
          {/* Lower Left Leaf */}
          <path d="M 50 72 C 34 70, 24 62, 28 50 C 38 48, 48 60, 50 72 Z" fill="#16a34a" stroke="#86efac" strokeWidth="1" />
          {/* Lower Right Leaf */}
          <path d="M 50 72 C 66 70, 76 62, 72 50 C 62 48, 52 60, 50 72 Z" fill="#16a34a" stroke="#86efac" strokeWidth="1" />
          {/* Upper Left Leaf */}
          <path d="M 50 52 C 36 50, 30 40, 36 30 C 44 30, 48 42, 50 52 Z" fill="#15803d" stroke="#86efac" strokeWidth="1" />
          {/* Upper Right Leaf */}
          <path d="M 50 52 C 64 50, 70 40, 64 30 C 56 30, 52 42, 50 52 Z" fill="#15803d" stroke="#86efac" strokeWidth="1" />
          {/* Sacred Manjari buds at top */}
          <g fill="#a855f7" stroke="#e9d5ff" strokeWidth="0.5">
            <circle cx="50" cy="22" r="2.5" />
            <circle cx="47" cy="18" r="2" />
            <circle cx="53" cy="18" r="2" />
            <circle cx="50" cy="14" r="1.8" />
            <circle cx="50" cy="10" r="1.5" />
          </g>
        </svg>
      );

    case 'gandha_akshata':
      // Sandalwood paste bowl & golden Akshata grains
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Brass Plate */}
          <ellipse cx="50" cy="72" rx="38" ry="14" fill="#78350f" stroke="#ffd700" strokeWidth="1.5" />
          <ellipse cx="50" cy="70" rx="34" ry="11" fill="#b45309" />
          {/* Sandalwood paste mound (Gandha) */}
          <path d="M 32 68 C 32 55, 42 48, 48 48 C 54 48, 58 55, 58 68 Z" fill="#d97706" stroke="#fef08a" strokeWidth="1" />
          <circle cx="45" cy="56" r="3" fill="#fde047" />
          {/* Sacred Akshata bowl on the right */}
          <ellipse cx="66" cy="65" rx="14" ry="7" fill="#991b1b" stroke="#ffd700" strokeWidth="1" />
          {/* Akshata Rice grains */}
          <g fill="#fef08a">
            <ellipse cx="64" cy="62" rx="2" ry="1" transform="rotate(20 64 62)" />
            <ellipse cx="68" cy="63" rx="2" ry="1" transform="rotate(-30 68 63)" />
            <ellipse cx="66" cy="60" rx="2" ry="1" transform="rotate(45 66 60)" />
            <ellipse cx="62" cy="64" rx="2" ry="1" />
          </g>
        </svg>
      );

    case 'fresh_flowers':
      // Sacred Flowers (Parijata / Marigold / Jasmine)
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Flower Basket / Altar */}
          <circle cx="50" cy="50" r="14" fill="#ea580c" />
          {/* 8 Flower Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="50"
              cy="28"
              rx="8"
              ry="14"
              fill="#fde047"
              stroke="#f59e0b"
              strokeWidth="0.8"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="8" fill="#c2410c" stroke="#fde047" strokeWidth="1" />
        </svg>
      );

    case 'madi_vastra':
      // Folded Madi cloth with red/gold borders
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Folded Silk Dhoti / Angavastra */}
          <path d="M 22 40 L 78 40 L 74 78 L 18 78 Z" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
          {/* Red and Gold Zari Border */}
          <rect x="22" y="40" width="56" height="8" fill="#991b1b" />
          <line x1="22" y1="44" x2="78" y2="44" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 18 70 L 74 70 L 74 78 L 18 78 Z" fill="#991b1b" />
          <line x1="18" y1="74" x2="74" y2="74" stroke="#ffd700" strokeWidth="1.5" />
          {/* Folds */}
          <line x1="20" y1="55" x2="76" y2="55" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" />
        </svg>
      );

    default:
      // Sacred Kalasha vessel as standard pooja vessel
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="62" r="22" fill="#b45309" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 38 42 L 62 42 L 58 50 L 42 50 Z" fill="#f59e0b" stroke="#ffd700" strokeWidth="1" />
          <circle cx="50" cy="32" r="10" fill="#15803d" stroke="#86efac" strokeWidth="1" />
          <path d="M 50 16 L 50 24" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
};
