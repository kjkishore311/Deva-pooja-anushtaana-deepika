import React from 'react';

interface MudraHandDiagramProps {
  id: string;
  className?: string;
  showLabels?: boolean;
}

/**
 * High-clarity, anatomical vector illustrations of Vedic Pooja Mudras
 * showing exactly how the hands and fingers are held in Tantrasara tradition.
 */
export const MudraHandDiagram: React.FC<MudraHandDiagramProps> = ({
  id,
  className = 'w-32 h-32',
  showLabels = false,
}) => {
  switch (id) {
    case 'avahani':
      // 1. Avahani Mudra: Joined upward palms (Anjali), slightly cupped, thumbs folded inward, inviting Lord Hari
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldSkinAvahani" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="glowG" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#ff9933" />
            </linearGradient>
          </defs>

          {/* Aura behind */}
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          <circle cx="80" cy="80" r="62" stroke="#ff9933" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

          {/* Left Hand / Palm cupped inward */}
          <path
            d="M 52 135 C 50 115, 48 95, 52 75 C 54 62, 58 45, 62 30 C 65 24, 71 27, 70 36 C 68 50, 66 65, 68 85"
            fill="url(#goldSkinAvahani)"
            stroke="url(#glowG)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Left Middle finger */}
          <path
            d="M 68 85 C 68 65, 72 45, 76 25 C 79 20, 84 22, 82 32 C 80 48, 77 68, 77 90"
            fill="url(#goldSkinAvahani)"
            stroke="url(#glowG)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Right Hand / Palm cupped inward meeting left hand */}
          <path
            d="M 108 135 C 110 115, 112 95, 108 75 C 106 62, 102 45, 98 30 C 95 24, 89 27, 90 36 C 92 50, 94 65, 92 85"
            fill="url(#goldSkinAvahani)"
            stroke="url(#glowG)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Right Middle finger */}
          <path
            d="M 92 85 C 92 65, 88 45, 84 25 C 81 20, 76 22, 78 32 C 80 48, 83 68, 83 90"
            fill="url(#goldSkinAvahani)"
            stroke="url(#glowG)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Both thumbs bent inward touching base of index */}
          <path
            d="M 60 100 C 66 90, 74 95, 76 102 C 77 106, 72 112, 65 110"
            fill="url(#goldSkinAvahani)"
            stroke="#ffd700"
            strokeWidth="2"
          />
          <path
            d="M 100 100 C 94 90, 86 95, 84 102 C 83 106, 88 112, 95 110"
            fill="url(#goldSkinAvahani)"
            stroke="#ffd700"
            strokeWidth="2"
          />

          {/* Wrists together */}
          <path d="M 52 135 C 65 142, 95 142, 108 135" stroke="#ff9933" strokeWidth="3" strokeLinecap="round" />
          <path d="M 58 145 C 70 149, 90 149, 102 145" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.5" />

          {/* Upward receptive energy arrows */}
          <path d="M 80 15 L 80 8" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 76 12 L 80 8 L 84 12" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />

          {showLabels && (
            <text x="80" y="155" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಅಂಜಲಿ ಬದ್ಧ ಅಂಗೈ (ಆಹ್ವಾನ)
            </text>
          )}
        </svg>
      );

    case 'sthapani':
      // 2. Sthapani Mudra: Both palms facing downward (Adhomukha), flat & parallel, thumbs touching
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldSkinSthapani" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          <circle cx="80" cy="80" r="62" stroke="#ff9933" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

          {/* Downward altar / Peetha base */}
          <rect x="35" y="115" width="90" height="12" rx="4" fill="#3d1111" stroke="#ffd700" strokeWidth="1.5" />
          <line x1="45" y1="127" x2="115" y2="127" stroke="#ff9933" strokeWidth="2" />

          {/* Left Palm Facing Downwards */}
          <path
            d="M 28 65 C 38 62, 50 63, 62 65 C 68 66, 75 70, 78 78 C 80 83, 76 90, 68 90 C 52 90, 36 86, 26 78 Z"
            fill="url(#goldSkinSthapani)"
            stroke="#ff9933"
            strokeWidth="2.5"
          />
          {/* Left fingers extending forward downward */}
          <path d="M 62 65 L 75 66 C 79 66, 81 70, 77 74 L 66 75" stroke="#ffd700" strokeWidth="2" />
          <path d="M 60 72 L 78 74 C 82 75, 83 80, 78 82 L 62 82" stroke="#ffd700" strokeWidth="2" />
          <path d="M 58 79 L 75 82 C 78 83, 78 88, 74 89 L 58 89" stroke="#ffd700" strokeWidth="2" />

          {/* Right Palm Facing Downwards */}
          <path
            d="M 132 65 C 122 62, 110 63, 98 65 C 92 66, 85 70, 82 78 C 80 83, 84 90, 92 90 C 108 90, 124 86, 134 78 Z"
            fill="url(#goldSkinSthapani)"
            stroke="#ff9933"
            strokeWidth="2.5"
          />
          {/* Right fingers extending forward downward */}
          <path d="M 98 65 L 85 66 C 81 66, 79 70, 83 74 L 94 75" stroke="#ffd700" strokeWidth="2" />
          <path d="M 100 72 L 82 74 C 78 75, 77 80, 82 82 L 98 82" stroke="#ffd700" strokeWidth="2" />
          <path d="M 102 79 L 85 82 C 82 83, 82 88, 86 89 L 102 89" stroke="#ffd700" strokeWidth="2" />

          {/* Thumbs meeting in the center horizontally */}
          <path d="M 72 65 C 77 60, 83 60, 88 65" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" />

          {/* Downward Seating Arrows */}
          <path d="M 80 92 L 80 108" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 75 103 L 80 108 L 85 103" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />

          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಅಧೋಮುಖ ಅಂಗೈ (ಪೀಠ ಸ್ಥಾಪನೆ)
            </text>
          )}
        </svg>
      );

    case 'sannidhayini':
      // 3. Sannidhayini Mudra: Both fists closed (Mushti) side by side with thumbs erect pointing straight up together
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldSkinSanni" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          <circle cx="80" cy="80" r="62" stroke="#ff9933" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

          {/* Left Fist (Mushti) */}
          <rect x="42" y="80" width="34" height="42" rx="10" fill="url(#goldSkinSanni)" stroke="#ff9933" strokeWidth="2.5" />
          {/* Left finger folds */}
          <path d="M 44 92 C 55 92, 65 92, 74 92" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 44 104 C 55 104, 65 104, 74 104" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 46 115 C 55 115, 65 115, 72 115" stroke="#ffd700" strokeWidth="1.5" />

          {/* Right Fist (Mushti) */}
          <rect x="84" y="80" width="34" height="42" rx="10" fill="url(#goldSkinSanni)" stroke="#ff9933" strokeWidth="2.5" />
          {/* Right finger folds */}
          <path d="M 86 92 C 95 92, 105 92, 116 92" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 86 104 C 95 104, 105 104, 116 104" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 88 115 C 95 115, 105 115, 114 115" stroke="#ffd700" strokeWidth="1.5" />

          {/* LEFT THUMB ERECT POINTING STRAIGHT UP */}
          <path
            d="M 68 85 C 68 65, 70 42, 73 30 C 75 24, 79 24, 79 32 C 79 48, 77 70, 76 85"
            fill="url(#goldSkinSanni)"
            stroke="#ffd700"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* RIGHT THUMB ERECT POINTING STRAIGHT UP (meeting left thumb) */}
          <path
            d="M 84 85 C 84 70, 82 48, 82 32 C 82 24, 86 24, 88 30 C 91 42, 93 65, 93 85"
            fill="url(#goldSkinSanni)"
            stroke="#ffd700"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Glow at thumbs apex */}
          <circle cx="80.5" cy="24" r="5" fill="#ffd700" fillOpacity="0.8" />
          <path d="M 80.5 15 L 80.5 10" stroke="#ffd700" strokeWidth="2" />
          <path d="M 72 17 L 68 13" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 89 17 L 93 13" stroke="#ffd700" strokeWidth="1.5" />

          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಮುಷ್ಟಿ ಬದ್ಧ, ನೇರ ಹೆಬ್ಬೆರಳು (ಸಾನ್ನಿಧ್ಯ)
            </text>
          )}
        </svg>
      );

    case 'sannirodhini':
      // 4. Sannirodhini Mudra: Thumbs folded inside the closed fists, knuckles joined firmly
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldSkinNirodha" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          <circle cx="80" cy="80" r="62" stroke="#ff9933" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

          {/* Central locked knuckles structure */}
          {/* Left Fist enclosing thumb */}
          <path
            d="M 36 68 C 45 58, 65 58, 76 66 C 79 72, 79 88, 76 96 C 66 104, 45 104, 36 94 Z"
            fill="url(#goldSkinNirodha)"
            stroke="#ff9933"
            strokeWidth="2.5"
          />
          {/* Right Fist enclosing thumb */}
          <path
            d="M 124 68 C 115 58, 95 58, 84 66 C 81 72, 81 88, 84 96 C 94 104, 115 104, 124 94 Z"
            fill="url(#goldSkinNirodha)"
            stroke="#ff9933"
            strokeWidth="2.5"
          />

          {/* Knuckles touching in middle */}
          <line x1="80" y1="62" x2="80" y2="100" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" />

          {/* Finger folds wrapping around hidden thumb inside */}
          <path d="M 45 74 C 55 74, 68 76, 76 77" stroke="#ffd700" strokeWidth="2" />
          <path d="M 44 84 C 54 84, 68 86, 76 87" stroke="#ffd700" strokeWidth="2" />
          <path d="M 46 94 C 55 94, 68 94, 75 95" stroke="#ffd700" strokeWidth="2" />

          <path d="M 115 74 C 105 74, 92 76, 84 77" stroke="#ffd700" strokeWidth="2" />
          <path d="M 116 84 C 106 84, 92 86, 84 87" stroke="#ffd700" strokeWidth="2" />
          <path d="M 114 94 C 105 94, 92 94, 85 95" stroke="#ffd700" strokeWidth="2" />

          {/* Lock / Retention Aura Ring */}
          <circle cx="80" cy="81" r="28" stroke="#ff9933" strokeWidth="1.5" strokeDasharray="4 2" strokeOpacity="0.6" />
          <path d="M 75 42 L 80 47 L 85 42" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
          <path d="M 80 47 L 80 35" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />

          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಒಳಮಡಚಿದ ಹೆಬ್ಬೆರಳು (ಸನ್ನಿರೋಧ)
            </text>
          )}
        </svg>
      );

    case 'sammukhi':
      // 5. Sammukhi Mudra: Both palms held open vertically facing deity directly at chest level
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldSkinSammukhi" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          <circle cx="80" cy="80" r="62" stroke="#ff9933" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

          {/* Left Vertical Palm Facing Forward */}
          <g transform="translate(-10, 0)">
            <rect x="42" y="70" width="30" height="38" rx="8" fill="url(#goldSkinSammukhi)" stroke="#ff9933" strokeWidth="2" />
            {/* 4 Fingers upright */}
            <rect x="42" y="32" width="6" height="42" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            <rect x="50" y="24" width="6" height="50" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            <rect x="58" y="28" width="6" height="46" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            <rect x="66" y="36" width="6" height="38" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            {/* Thumb to the side */}
            <path d="M 42 80 C 34 82, 34 92, 42 96" stroke="#ffd700" strokeWidth="2" fill="url(#goldSkinSammukhi)" />
          </g>

          {/* Right Vertical Palm Facing Forward */}
          <g transform="translate(10, 0)">
            <rect x="88" y="70" width="30" height="38" rx="8" fill="url(#goldSkinSammukhi)" stroke="#ff9933" strokeWidth="2" />
            {/* 4 Fingers upright */}
            <rect x="88" y="36" width="6" height="38" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            <rect x="96" y="28" width="6" height="46" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            <rect x="104" y="24" width="6" height="50" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            <rect x="112" y="32" width="6" height="42" rx="3" fill="url(#goldSkinSammukhi)" stroke="#ffd700" strokeWidth="1.5" />
            {/* Thumb to the side */}
            <path d="M 118 80 C 126 82, 126 92, 118 96" stroke="#ffd700" strokeWidth="2" fill="url(#goldSkinSammukhi)" />
          </g>

          {/* Forward Radiant Rays between hands */}
          <path d="M 80 40 L 80 65" stroke="#ffd700" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="80" cy="52" r="3" fill="#ffd700" />

          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ನೇರ ಮುಖಾಮುಖಿ ಅಂಗೈ (ಸಮ್ಮುಖ)
            </text>
          )}
        </svg>
      );

    case 'avagunthana':
      // 6. Avagunthana: Index finger pointed downward circling counter-clockwise creating veil
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Fist with downward curved index finger */}
          <rect x="58" y="45" width="44" height="40" rx="10" fill="#b45309" fillOpacity="0.4" stroke="#ff9933" strokeWidth="2" />
          {/* Extended index finger pointing down & curling */}
          <path
            d="M 68 85 C 68 105, 75 115, 84 115 C 90 115, 94 105, 94 95"
            stroke="#ffd700"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Circular Veil shield aura */}
          <circle cx="80" cy="98" r="32" stroke="#ff9933" strokeWidth="1.5" strokeDasharray="5 3" />
          {/* Counter clockwise motion arrow */}
          <path d="M 108 85 C 114 95, 110 110, 95 120" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
          <path d="M 94 122 L 92 116 L 98 116" stroke="#ffd700" strokeWidth="1.5" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ತರ್ಜನಿ ಮಂಡಲ ಭ್ರಮಣ (ಅವಗುಂಠನ)
            </text>
          )}
        </svg>
      );

    case 'prasada':
      // 7. Prasada / Suprasanna: Open relaxed serene palms held near heart
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Soft open palms curved gently */}
          <path
            d="M 45 105 C 40 85, 45 60, 60 48 C 65 44, 70 48, 68 56 C 64 70, 62 85, 70 98"
            stroke="#ff9933"
            strokeWidth="2.5"
            fill="#b45309"
            fillOpacity="0.3"
          />
          <path
            d="M 115 105 C 120 85, 115 60, 100 48 C 95 44, 90 48, 92 56 C 96 70, 98 85, 90 98"
            stroke="#ff9933"
            strokeWidth="2.5"
            fill="#b45309"
            fillOpacity="0.3"
          />
          {/* Golden Lotus flower blooming in palm center */}
          <path d="M 80 65 C 75 75, 75 88, 80 95 C 85 88, 85 75, 80 65 Z" fill="#ffd700" fillOpacity="0.7" />
          <path d="M 80 75 C 70 75, 68 85, 74 90 C 78 88, 80 82, 80 75 Z" fill="#ff9933" fillOpacity="0.6" />
          <path d="M 80 75 C 90 75, 92 85, 86 90 C 82 88, 80 82, 80 75 Z" fill="#ff9933" fillOpacity="0.6" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಪ್ರಸನ್ನ ಹಸ್ತ (ಸುಪ್ರಸನ್ನ)
            </text>
          )}
        </svg>
      );

    case 'dhenu':
      // 8. Dhenu Mudra: 4 intertwined fingers forming cow udder dripping nectar
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Main hands crossing */}
          <path d="M 38 52 C 55 35, 105 35, 122 52 C 110 65, 50 65, 38 52 Z" fill="#b45309" fillOpacity="0.4" stroke="#ff9933" strokeWidth="2" />
          {/* 4 Teats (Intertwined finger tips pointing downward) */}
          <g stroke="#ffd700" strokeWidth="2.5" fill="#f59e0b" fillOpacity="0.4">
            <path d="M 52 58 L 52 92 C 52 98, 59 98, 59 92 L 59 58" />
            <path d="M 68 60 L 68 102 C 68 108, 75 108, 75 102 L 75 60" />
            <path d="M 85 60 L 85 102 C 85 108, 92 108, 92 102 L 92 60" />
            <path d="M 101 58 L 101 92 C 101 98, 108 98, 108 92 L 108 58" />
          </g>
          {/* Nectar drops falling */}
          <circle cx="55.5" cy="112" r="2.5" fill="#ffd700" />
          <circle cx="71.5" cy="120" r="3" fill="#ffd700" />
          <circle cx="88.5" cy="120" r="3" fill="#ffd700" />
          <circle cx="104.5" cy="112" r="2.5" fill="#ffd700" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಕಾಮಧೇನು ಕ್ಷೀರ ಧಾರಾ (ಅಮೃತೀಕರಣ)
            </text>
          )}
        </svg>
      );

    case 'shankha':
      // 9. Shankha Mudra: Right fingers clasping left thumb, right thumb touching left index tip
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Clasping Hand shape */}
          <path
            d="M 50 115 C 45 95, 48 70, 62 55 C 72 45, 88 45, 98 55 C 112 70, 115 95, 110 115 C 95 125, 65 125, 50 115 Z"
            fill="#b45309"
            fillOpacity="0.35"
            stroke="#ff9933"
            strokeWidth="2.5"
          />
          {/* Left Thumb enclosed inside right hand */}
          <path d="M 72 65 C 72 50, 78 40, 84 32 C 87 28, 92 30, 92 38 L 88 65" stroke="#ffd700" strokeWidth="2.5" fill="#f59e0b" fillOpacity="0.4" />
          {/* Right Thumb touching tip of Left Index */}
          <path d="M 92 35 C 98 42, 105 50, 102 62" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" />
          {/* Shankha Spiral lines */}
          <path d="M 68 80 C 76 90, 88 90, 96 80" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M 64 95 C 74 105, 90 105, 100 95" stroke="#ffd700" strokeWidth="1.5" />
          {/* Shankha top spout */}
          <circle cx="85" cy="26" r="3" fill="#ffd700" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಪಾಂಚಜನ್ಯ ಶಂಖ ರಚನೆ (ಪವಿತ್ರೀಕರಣ)
            </text>
          )}
        </svg>
      );

    case 'chakra':
      // 10. Chakra Mudra: Sudarshana wheel formed with crossed wrists & fanned fingers
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Outer Blazing Rim */}
          <circle cx="80" cy="80" r="50" stroke="#ff9933" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="80" cy="80" r="16" fill="#f59e0b" fillOpacity="0.3" stroke="#ffd700" strokeWidth="2" />
          {/* 8 Radial Spokes */}
          <line x1="80" y1="30" x2="80" y2="130" stroke="#ffd700" strokeWidth="2" />
          <line x1="30" y1="80" x2="130" y2="80" stroke="#ffd700" strokeWidth="2" />
          <line x1="45" y1="45" x2="115" y2="115" stroke="#ffd700" strokeWidth="2" />
          <line x1="45" y1="115" x2="115" y2="45" stroke="#ffd700" strokeWidth="2" />
          {/* Crossed hands at wrists */}
          <path d="M 55 125 L 105 125" stroke="#ff9933" strokeWidth="4" strokeLinecap="round" />
          <circle cx="80" cy="80" r="5" fill="#ffd700" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಸುದರ್ಶನ ಚಕ್ರ (ಸಂರಕ್ಷಣೆ)
            </text>
          )}
        </svg>
      );

    case 'gada':
      // 11. Gada Mudra: Kaumodaki mace formed with interlocked fingers & vertical posture
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Heavy Mace Head */}
          <circle cx="80" cy="48" r="24" fill="#b45309" fillOpacity="0.4" stroke="#ffd700" strokeWidth="2.5" />
          <circle cx="80" cy="48" r="12" stroke="#ff9933" strokeWidth="1.5" />
          <circle cx="80" cy="48" r="4" fill="#ffd700" />
          {/* Mace Staff shaft held by fists */}
          <rect x="75" y="70" width="10" height="60" rx="3" fill="#f59e0b" fillOpacity="0.4" stroke="#ffd700" strokeWidth="2" />
          {/* Interlocked fists around the staff */}
          <rect x="58" y="78" width="44" height="24" rx="6" fill="#3d1111" stroke="#ff9933" strokeWidth="2" />
          <rect x="62" y="104" width="36" height="20" rx="5" fill="#3d1111" stroke="#ff9933" strokeWidth="2" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಕೌಮೋದಕೀ ಗದಾ (ದಿಗ್ಬಂಧನ)
            </text>
          )}
        </svg>
      );

    case 'tarkshya':
      // 12. Tarkshya / Garuda Mudra: Crossed wrists with hooked thumbs and fanned wings
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Left Wing (fanned fingers) */}
          <path
            d="M 75 85 C 55 65, 30 50, 22 62 C 16 72, 35 92, 65 105"
            fill="#b45309"
            fillOpacity="0.35"
            stroke="#ffd700"
            strokeWidth="2"
          />
          {/* Right Wing (fanned fingers) */}
          <path
            d="M 85 85 C 105 65, 130 50, 138 62 C 144 72, 125 92, 95 105"
            fill="#b45309"
            fillOpacity="0.35"
            stroke="#ffd700"
            strokeWidth="2"
          />
          {/* Hooked Thumbs (Garuda Beak / Head in center) */}
          <path d="M 72 80 C 78 72, 82 72, 88 80" stroke="#ff9933" strokeWidth="3" strokeLinecap="round" />
          <circle cx="80" cy="74" r="3" fill="#ffd700" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಗರುಡ ಪಕ್ಷ ಮುದ್ರಾ (ನಿರ್ವಿಷೀಕರಣ)
            </text>
          )}
        </svg>
      );

    case 'meru':
      // 13. Meru Mudra: Vertical peak thumbs
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          <path d="M 80 25 L 125 120 L 35 120 Z" stroke="#ff9933" strokeWidth="2" fill="#b45309" fillOpacity="0.25" />
          <path d="M 80 25 L 80 120" stroke="#ffd700" strokeWidth="1.5" />
          <rect x="62" y="85" width="36" height="32" rx="8" fill="#3d1111" stroke="#ffd700" strokeWidth="2" />
          <path d="M 78 85 L 78 35 C 78 30, 82 30, 82 35 L 82 85" stroke="#ffd700" strokeWidth="2.5" fill="#f59e0b" fillOpacity="0.4" />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಮೇರು ಶಿಖರ ಮುದ್ರಾ
            </text>
          )}
        </svg>
      );

    case 'chandra':
    default:
      // 14. Chandra Mudra: Crescent moon with thumb and index
      return (
        <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="#250a0a" stroke="#ffd700" strokeWidth="1.5" strokeOpacity="0.25" />
          <path
            d="M 80 32 C 60 52, 60 98, 80 118 C 65 105, 65 55, 80 32 Z"
            fill="#ffd700"
            fillOpacity="0.75"
            stroke="#ff9933"
            strokeWidth="2"
          />
          <path
            d="M 95 125 C 80 125, 65 110, 65 95 C 65 80, 80 75, 95 75"
            stroke="#ff9933"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {showLabels && (
            <text x="80" y="152" textAnchor="middle" fill="#ffd700" fontSize="9" fontWeight="bold">
              ಚಂದ್ರ ಕಲಾ ಮುದ್ರಾ (ಶೀತಲತೆ)
            </text>
          )}
        </svg>
      );
  }
};
