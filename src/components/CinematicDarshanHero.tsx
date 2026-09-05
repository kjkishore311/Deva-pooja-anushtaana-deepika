import React, { useState, useEffect, useRef } from 'react';
import {
  Maximize2,
  Minimize2,
  Flame,
  Info,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface CinematicDarshanProps {
  lang: Language;
  onClose?: () => void;
  isStandalonePage?: boolean;
}

interface DeityScene {
  id: string;
  nameKn: string;
  nameEn: string;
  subtitleKn: string;
  subtitleEn: string;
  imageSrc: string;
  details: {
    crown: string;
    emerald: string;
    coral: string;
  };
}

// All 19 divine photos uploaded in the folder in authentic sequential order
export const ALL_UPLOADED_IMAGES: DeityScene[] = [
  {
    id: 'img-1',
    nameKn: 'ಗರ್ಭಗೃಹ ದಿವ್ಯ ಸಾನ್ನಿಧ್ಯ',
    nameEn: 'Sanctum Sanctorum Divine Radiance',
    subtitleKn: 'ಕತ್ತಲೆಯಿಂದ ಹೊಮ್ಮುವ ದಿವ್ಯ ಸುವರ್ಣ ತೇಜಸ್ಸು ಹಾಗೂ ಧೂಪ ಸೇವೆ',
    subtitleEn: 'Sacred golden glow radiating from the sanctum with incense',
    imageSrc: '/images/FB_IMG_1787650730425.jpg',
    details: {
      crown: 'Svarna Kireeta with Diya Reflection',
      emerald: 'Vedic Abharana with Sacred Gemstones',
      coral: 'Layered Pavalam (Coral) & Pearl Strands',
    },
  },
  {
    id: 'img-2',
    nameKn: 'ಶ್ರೀ ಲಕ್ಷ್ಮೀ ನರಸಿಂಹ ದೇವರು',
    nameEn: 'Sri Lakshmi Narasimha Darshan',
    subtitleKn: 'ಸುವರ್ಣ ಕವಚ ಹಾಗೂ ನೈಜ ಪುಷ್ಪ ಮಾಲಾ ವೃತ ಸಾನ್ನಿಧ್ಯ',
    subtitleEn: 'Golden Kavacha with sacred floral garlands and silver prabhavali',
    imageSrc: '/images/FB_IMG_1786024569171.jpg',
    details: {
      crown: 'Golden Floral Mukuta',
      emerald: 'Navaratna Chest Armor (Kavacha)',
      coral: 'Auspicious Sevanti & Marigold Torana',
    },
  },
  {
    id: 'img-3',
    nameKn: 'ಶ್ರೀ ಪಟ್ಟಾಭಿರಾಮ ಚಂದ್ರ ದೇವರು',
    nameEn: 'Sri Pattabhirama Swamy Darshan',
    subtitleKn: 'ಕೋಟಿ ಸೂರ್ಯ ಪ್ರಭಾ ಭಾಸುರ ಸುವರ್ಣ ಅಲಂಕಾರ',
    subtitleEn: 'Resplendent golden alankara of Sri Rama, Sita, and Lakshmana',
    imageSrc: '/images/FB_IMG_1787650734553.jpg',
    details: {
      crown: 'Sri Rama Ratna Kireeta',
      emerald: 'Sri Padaka with Emerald Center',
      coral: 'Sacred Tulasi & Red Rose Mala',
    },
  },
  {
    id: 'img-4',
    nameKn: 'ದಿವ್ಯ ಮಹಾ ಮಂಗಳಾರತಿ ಸಾನ್ನಿಧ್ಯ',
    nameEn: 'Sacred Maha Mangalarathi Presence',
    subtitleKn: 'ಕರ್ಪೂರ ಜ್ಯೋತಿ ಪ್ರಕಾಶಿತ ದಿವ್ಯ ವಿಗ್ರಹ ದರ್ಶನ',
    subtitleEn: 'Illuminated by sacred camphor flames and continuous deeparadhana',
    imageSrc: '/images/FB_IMG_1787650732649.jpg',
    details: {
      crown: 'Aarthi Light Reflection on Mukuta',
      emerald: 'Navaratna Saligrama Malike',
      coral: 'Sacred Karpura Flame Glow',
    },
  },
  {
    id: 'img-5',
    nameKn: 'ಶ್ರೀಮದ್ ಉತ್ತರಾದಿ ಮಠದ ಸಂಸ್ಥಾನ',
    nameEn: 'Sri Uttaradi Mutt Sacred Samsthana',
    subtitleKn: 'ಆಚಾರ್ಯ ಮಧ್ವರ ಪರಂಪರೆಯ ದಿವ್ಯ ಆರಾಧನಾ ವೈಭವ',
    subtitleEn: 'Sacred lineage worship of Sriman Madhvacharya',
    imageSrc: '/images/FB_IMG_1787650736518.jpg',
    details: {
      crown: 'Acharya Parampara Holy Altar',
      emerald: 'Peetha Alankara with Sacred Silver',
      coral: 'Panchamrutha Kalasha Adornments',
    },
  },
  {
    id: 'img-6',
    nameKn: 'ಸುವರ್ಣ ಕಿರೀಟಾಲಂಕೃತ ದರ್ಶನ',
    nameEn: 'Golden Crown & Divine Alankara',
    subtitleKn: 'ವಜ್ರ-ವೈಢೂರ್ಯ ಖಚಿತ ದಿವ್ಯ ಕವಚ ಪ್ರಭಾವಳಿ',
    subtitleEn: 'Adorned with precious gems and silver prabhavali arch',
    imageSrc: '/images/FB_IMG_1787650738822.jpg',
    details: {
      crown: 'Ornate Diamond & Ruby Studded Mukuta',
      emerald: 'Shanka-Chakra Emblems in Gold',
      coral: 'Multi-tiered Gold Necklace',
    },
  },
  {
    id: 'img-7',
    nameKn: 'ಶ್ರೀ ಮೂಲರಾಮ ದೇವರ ಆರಾಧನೆ',
    nameEn: 'Sri Moola Rama Devara Aradhana',
    subtitleKn: 'ಮಧ್ವಮುನಿ ಪ್ರಿಯ ಸೀತಾ-ಲಕ್ಷ್ಮಣ ಸಮೇತ ಶ್ರೀರಾಮ',
    subtitleEn: 'Revered deity of Madhva parampara worshipped with daily rituals',
    imageSrc: '/images/FB_IMG_1787384814245.jpg',
    details: {
      crown: 'Ancient Vedic Svarna Mukuta',
      emerald: 'Pacha (Emerald) Haras',
      coral: 'Pavitra Tulasi Manjari',
    },
  },
  {
    id: 'img-8',
    nameKn: 'ದಿವ್ಯ ಸಾಲಿಗ್ರಾಮ ಪೂಜಾ ಸಾನ್ನಿಧ್ಯ',
    nameEn: 'Sacred Saligrama Divine Presence',
    subtitleKn: 'ವೈದಿಕ ಮಂತ್ರೋಕ್ತ ದೇವತಾರ್ಚನಾ ಪೀಠ',
    subtitleEn: 'Consecrated Saligrama deities resting on silver simhasana',
    imageSrc: '/images/FB_IMG_1786622186506.jpg',
    details: {
      crown: 'Gold Chatra (Umbrella) on Deities',
      emerald: 'Gopichandana Mudra Adornments',
      coral: 'White Pearl and Coral Mala',
    },
  },
  {
    id: 'img-9',
    nameKn: 'ಗುರು ಸಾರ್ವಭೌಮ ಶ್ರೀ ರಾಘವೇಂದ್ರ ತೀರ್ಥರು',
    nameEn: 'Sri Raghavendra Swamy Darshan',
    subtitleKn: 'ತುಂಗಾತೀರ ಮಂತ್ರಾಲಯ ಗುರುಗಳ ದಿವ್ಯ ಕೃಪೆ',
    subtitleEn: 'Mantralaya Rayara divine blessing and peaceful darshan',
    imageSrc: '/images/FB_IMG_1784194753168.jpg',
    details: {
      crown: 'Sacred Kashaya & Tulasi Kanti Mala',
      emerald: 'Brindavana Mrittika Sannidhi',
      coral: 'Yellow Sevanti & Champaka Floral Garland',
    },
  },
  {
    id: 'img-10',
    nameKn: 'ಶಂಖ ತೀರ್ಥ ಅಭಿಷೇಕ ಪದ್ಧತಿ',
    nameEn: 'Shankha Theertha Sacred Abhisheka',
    subtitleKn: 'ಗಂಗಾದಿ ಸಕಲ ತೀರ್ಥ ಸನ್ನಿಹಿತ ಪವಿತ್ರ ತೀರ್ಥ',
    subtitleEn: 'Consecrated water poured through sacred conch over deities',
    imageSrc: '/images/FB_IMG_1783169320947.jpg',
    details: {
      crown: 'Silver Clad Dakshinavarti Shankha',
      emerald: 'Theertha Patra with Sacred Herbs',
      coral: 'Tulasi Dalas floating in Theertha',
    },
  },
  {
    id: 'img-11',
    nameKn: 'ತುಳಸೀ ದಳ ಸಮರ್ಪಣಾ ವೈಭವ',
    nameEn: 'Sacred Tulasi Archana Vaibhava',
    subtitleKn: 'ಶ್ರೀಹರಿಯ ಪ್ರೀತ್ಯರ್ಥ ಸಹಸ್ರ ತುಳಸೀ ಅರ್ಚನೆ',
    subtitleEn: 'Auspicious fresh Tulasi leaves offered to Lord Sri Hari',
    imageSrc: '/images/FB_IMG_1783074595859.jpg',
    details: {
      crown: 'Tulasi Kireeta Alankara',
      emerald: 'Fresh Green Fragrant Basil Leaves',
      coral: 'Manjari Flowers with Saffron Paste',
    },
  },
  {
    id: 'img-12',
    nameKn: 'ಪವಿತ್ರ ಪಂಚಾಮೃತ ಅಭಿಷೇಕ',
    nameEn: 'Sacred Panchamrutha Abhisheka',
    subtitleKn: 'ಕ್ಷೀರ, ದಧಿ, ಘೃತ, ಮಧು, ಶರ್ಕರಾ ಅಭಿಷೇಕ ಪದ್ಧತಿ',
    subtitleEn: 'Holy milk, yogurt, ghee, honey, and raw sugar offerings',
    imageSrc: '/images/FB_IMG_1781179894275.jpg',
    details: {
      crown: 'Pure Silver Abhisheka Kalasha',
      emerald: 'Gokula Gomaya Sacred Base',
      coral: 'Saffron Strand Infusions',
    },
  },
  {
    id: 'img-13',
    nameKn: 'ವಿಶೇಷ ಮಹಾಪೂಜಾ ಸಾನ್ನಿಧ್ಯ',
    nameEn: 'Vishesha Maha Pooja Sannidhana',
    subtitleKn: 'ಸರ್ವ ದೇವತಾರ್ಚನಾ ಮಹೋತ್ಸವ ದರ್ಶನ',
    subtitleEn: 'Grand worship rituals with complete sixteen upacharas',
    imageSrc: '/images/FB_IMG_1763399213254.jpg',
    details: {
      crown: 'Multi-tiered Gold Prabhavali',
      emerald: 'Golden Kavacha Plates',
      coral: 'Jasmine & Lotus Garlands',
    },
  },
  {
    id: 'img-14',
    nameKn: 'ದಿವ್ಯ ಕರ್ಪೂರ ಹಾರತಿ ಸಮರ್ಪಣೆ',
    nameEn: 'Sacred Karpura Deeparadhana',
    subtitleKn: 'ನಾದೋಪಚಾರ ಸಮನ್ವಿತ ಧೂಪ-ದೀಪ ಸೇವೆ',
    subtitleEn: 'Incense, bell chime, and fragrant camphor lamp seva',
    imageSrc: '/images/FB_IMG_1755864668659.jpg',
    details: {
      crown: 'Aarthi Lamp Brass Tray',
      emerald: 'Sacred Ghee Wicks Burning Bright',
      coral: 'Fragrant Sandalwood Powder',
    },
  },
  {
    id: 'img-15',
    nameKn: 'ಶ್ರೀ ಭಗವಾನ್ ವೇದವ್ಯಾಸ ದೇವರು',
    nameEn: 'Lord Sri Vedavyasa Divine Presence',
    subtitleKn: 'ಸರ್ವ ವೇದಗಳ ಮೂಲ ಬ್ರಹ್ಮಸೂತ್ರಕಾರರ ಆರಾಧನೆ',
    subtitleEn: 'Reverence to the compiler of the four Vedas and Brahma Sutras',
    imageSrc: '/images/FB_IMG_1754458727266.jpg',
    details: {
      crown: 'Jnana Mudra & Palm Leaf Manuscripts',
      emerald: 'Krishna Dwaipayana Sannidhana',
      coral: 'Rudraksha & Tulasi Rosary',
    },
  },
  {
    id: 'img-16',
    nameKn: 'ಶ್ರೀ ಪೂರ್ಣಪ್ರಜ್ಞ ತಂತ್ರಸಾರ ಸಾನ್ನಿಧ್ಯ',
    nameEn: 'Acharya Purnaprajna Tantrasara Sannidhi',
    subtitleKn: 'ತಂತ್ರಸಾರ ಸಂಗ್ರಹೋಕ್ತ ಶಾಸ್ತ್ರೀಯ ಮಂತ್ರ ವಿಧಾನ',
    subtitleEn: 'Vedic procedures faithfully guided by Tantrasara Sangraha',
    imageSrc: '/images/FB_IMG_1735473154698.jpg',
    details: {
      crown: 'Madhva Acharya Peetha Vigraha',
      emerald: 'Sacred Danda & Kamandalu',
      coral: 'Gopichandana Tilaka Markings',
    },
  },
  {
    id: 'img-17',
    nameKn: 'ಸರ್ವಾಲಂಕಾರ ದಿವ್ಯ ದರ್ಶನ',
    nameEn: 'Sarvalankara Divine Darshan',
    subtitleKn: 'ಭಕ್ತ ವತ್ಸಲ ಶ್ರೀಹರಿಯ ಮಂದಸ್ಮಿತ ಮುಖಾರವಿಂದ',
    subtitleEn: 'Divine smiling lotus countenance of the Lord showering grace',
    imageSrc: '/images/FB_IMG_1731581483391.jpg',
    details: {
      crown: 'Golden Kireeta with Peacock Feather Motif',
      emerald: 'Kaustubha Gem on Chest',
      coral: 'Vanamala Garland down to feet',
    },
  },
  {
    id: 'img-18',
    nameKn: 'ಶ್ರೀ ಮಠದ ಪ್ರಾತಃಕಾಲ ದೇವಪೂಜಾ ಮುಹೂರ್ತ',
    nameEn: 'Auspicious Morning Pooja Muhurtha',
    subtitleKn: 'ಶಾಸ್ತ್ರೋಕ್ತ ನಿತ್ಯ ತಪೋ-ದೇವತಾರ್ಚನಾ ವಿಧಾನ',
    subtitleEn: 'Sacred early morning Brahmamuhurtha ritual worship',
    imageSrc: '/images/IMG-20260810-WA0006.jpg',
    details: {
      crown: 'Brahma Muhurtha Golden Light',
      emerald: 'Ganga Salila Theertha',
      coral: 'Pure Cow Milk Offerings',
    },
  },
  {
    id: 'img-19',
    nameKn: 'ಸಂಸ್ಥಾನದ ಪವಿತ್ರ ಗರ್ಭಗುಡಿ ಪ್ರತಿಷ್ಠೆ',
    nameEn: 'Samsthana Holy Sanctum Altar',
    subtitleKn: 'ಯುಗಯುಗಾಂತರಗಳ ಅನಂತ ದೈವಿಕ ತೇಜಸ್ಸು',
    subtitleEn: 'Timeless divine sanctuary of eternal peace and spiritual vibration',
    imageSrc: '/images/IMG-20200510-WA0003.jpg',
    details: {
      crown: 'Ancient Silver Doorway & Arch',
      emerald: 'Nanda Deepa Eternal Flame',
      coral: 'Red Kumkuma & Chandana Markings',
    },
  },
];

const CYCLE_DURATION_SEC = 5.0; // Exact 5-second interval requested

export const CinematicDarshanHero: React.FC<CinematicDarshanProps> = ({
  lang,
  onClose,
  isStandalonePage = false,
}) => {
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const currentScene = ALL_UPLOADED_IMAGES[selectedSceneIndex];

  // Exact 5-second sequence timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 0.1;
        if (next >= CYCLE_DURATION_SEC) {
          // Loop seamlessly to next image in folder
          setSelectedSceneIndex((prevIndex) => (prevIndex + 1) % ALL_UPLOADED_IMAGES.length);
          return 0;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setSelectedSceneIndex((prev) => (prev + 1) % ALL_UPLOADED_IMAGES.length);
    setSeconds(0);
  };

  const handlePrev = () => {
    setSelectedSceneIndex((prev) => (prev - 1 + ALL_UPLOADED_IMAGES.length) % ALL_UPLOADED_IMAGES.length);
    setSeconds(0);
  };

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Canvas particle physics: Marigold petals & incense smoke curls
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Marigold Petals
    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotSpeed: number;
      opacity: number;
      color: string;
      flip: number;
      flipSpeed: number;
    }

    const petals: Petal[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: 7 + Math.random() * 11,
      speedY: 0.5 + Math.random() * 0.9,
      speedX: -0.3 + Math.random() * 0.6,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: -0.02 + Math.random() * 0.04,
      opacity: 0.4 + Math.random() * 0.5,
      color: Math.random() > 0.4 ? '#ff9933' : '#ffd700',
      flip: Math.random() * Math.PI,
      flipSpeed: 0.02 + Math.random() * 0.03,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Fluttering Petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.4;
        p.rotation += p.rotSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(Math.cos(p.flip), 1);

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;

        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.5, p.size * 0.8, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.7, -p.size * 0.5, 0, -p.size);
        ctx.fill();

        ctx.strokeStyle = '#e67300';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 5-second progress: 0 to 100%
  const loopProgress = Math.min(100, (seconds / CYCLE_DURATION_SEC) * 100);

  // Subtle camera drift over 5 seconds
  const cameraScale = 1.02 + (seconds / CYCLE_DURATION_SEC) * 0.08;

  return (
    <div
      ref={containerRef}
      className={`group relative w-full overflow-hidden bg-[#0a0202] text-[#fef3c7] select-none ${
        isFullscreen ? 'h-screen fixed inset-0 z-50' : 'h-[520px] sm:h-[640px] rounded-3xl border-2 border-[#ffd700]/30 shadow-2xl my-3'
      }`}
    >
      {/* 1. Deep Cosmic Sacred Background Gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(ellipse at 50% 45%, #2a1105 0%, #150608 45%, #050a18 85%, #02040c 100%)`,
        }}
      />

      {/* 2. Sequence Image with Subtle 5-Second Camera Drift & Smooth Dissolve */}
      <div
        key={currentScene.id}
        className="absolute inset-0 flex items-center justify-center overflow-hidden animate-fadeIn"
        style={{
          transform: `scale(${cameraScale})`,
          transition: 'transform 0.1s linear',
        }}
      >
        <img
          src={currentScene.imageSrc}
          alt={currentScene.nameEn}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter contrast-110 brightness-105 transition-opacity duration-700 ease-in-out"
          onError={(e) => {
            if (e.currentTarget.src !== '/images/FB_IMG_1787650730425.jpg') {
              e.currentTarget.src = '/images/FB_IMG_1787650730425.jpg';
            }
          }}
        />
      </div>

      {/* 3. Volumetric Warm Golden Divine Glow from Sanctum Center */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-700"
        style={{
          opacity: 0.75 + Math.sin(seconds * 1.8) * 0.15,
          background: `radial-gradient(circle at 50% 40%, rgba(255, 170, 50, 0.5) 0%, rgba(255, 130, 20, 0.25) 30%, rgba(255, 90, 0, 0.08) 60%, rgba(0,0,0,0) 80%)`,
        }}
      />

      {/* 4. Canvas Particle Layer: Floating Marigold Petals */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* 5. Vignette & Temple Sanctum Depth Shadow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-transparent to-black/65 z-10" />

      {/* 6. Dynamic 5-Second Cadence Progress Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/40 z-30">
        <div
          className="h-full bg-gradient-to-r from-[#ff9933] via-[#ffd700] to-[#ffaa33] transition-all duration-100 ease-linear shadow-[0_0_10px_#ffd700]"
          style={{ width: `${loopProgress}%` }}
        />
      </div>

      {/* 7. Top Bar: Sacred Photo Title, Sequence Counter & Controls */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3 sm:p-5 pointer-events-none">
        {/* Title & Sanctum Info */}
        <div className="flex items-center gap-2.5 bg-[#1a0606]/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#ffd700]/30 shadow-xl pointer-events-auto max-w-[75%] sm:max-w-none">
          <div className="w-7 h-7 rounded-full bg-[#ff9933]/20 border border-[#ff9933]/40 flex items-center justify-center text-[#ff9933] shrink-0 animate-pulse">
            <Flame className="w-3.5 h-3.5" />
          </div>
          <div className="truncate">
            <h2 className="font-serif font-bold text-xs sm:text-sm text-[#ffd700] leading-tight truncate">
              {lang === 'kn' ? currentScene.nameKn : currentScene.nameEn}
            </h2>
            <p className="text-[10px] text-[#fef3c7]/75 font-sans hidden sm:block truncate">
              {lang === 'kn' ? currentScene.subtitleKn : currentScene.subtitleEn}
            </p>
          </div>
        </div>

        {/* Controls: Counter, Pause, Info, Fullscreen */}
        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
          {/* Automatic 5-Second Sequence Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#1a0606]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#ffd700]/25 text-[11px] font-mono text-[#ffd700]">
            <Sparkles className="w-3 h-3 text-[#ff9933]" />
            <span>
              {lang === 'kn'
                ? `ಚಿತ್ರ ${selectedSceneIndex + 1} / ${ALL_UPLOADED_IMAGES.length} (೫ಸೆ)`
                : `Photo ${selectedSceneIndex + 1} of ${ALL_UPLOADED_IMAGES.length} (5s)`}
            </span>
          </div>

          {/* Pause / Resume 5-Sec Auto-Transition */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-full bg-[#1a0606]/85 hover:bg-[#250a0a] border border-[#ffd700]/25 text-[#ffd700] transition-all shadow-lg active:scale-95"
            title={isPaused ? 'Resume 5-sec slideshow' : 'Pause slideshow'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          {/* Info Details Modal */}
          <button
            onClick={() => setShowInfoModal(true)}
            className="p-2 rounded-full bg-[#1a0606]/85 hover:bg-[#250a0a] border border-[#ffd700]/25 text-[#fef3c7] transition-all shadow-lg active:scale-95"
            title="Deity Adornments & Details"
          >
            <Info className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={handleToggleFullscreen}
            className="p-2 rounded-full bg-[#1a0606]/85 hover:bg-[#250a0a] border border-[#ffd700]/25 text-[#fef3c7] transition-all shadow-lg active:scale-95"
            title="Fullscreen Darshan"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-2.5 py-1 rounded-full bg-red-950/85 hover:bg-red-900 border border-red-500/40 text-red-200 text-xs font-bold transition-all"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 8. Prev / Next Navigation Arrows (Smooth Hover Feedback) */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#140404]/70 hover:bg-[#250a0a] border border-[#ffd700]/30 text-[#ffd700] flex items-center justify-center opacity-70 hover:opacity-100 transition-all shadow-xl active:scale-90"
        title="Previous Divine Photo"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#140404]/70 hover:bg-[#250a0a] border border-[#ffd700]/30 text-[#ffd700] flex items-center justify-center opacity-70 hover:opacity-100 transition-all shadow-xl active:scale-90"
        title="Next Divine Photo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 9. Bottom Bar: Clean Reverent Status Badge (NO option pills) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#140404]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#ffd700]/20 text-[11px] font-sans text-[#fef3c7]/80 shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-medium">
          {lang === 'kn'
            ? `ದೇವಪೂಜಾ ದರ್ಶನ ಮಾಲೆ • ಪ್ರತಿ ೫ ಸೆಕೆಂಡಿಗೆ ಪರಿವರ್ತನೆ (${selectedSceneIndex + 1}/${ALL_UPLOADED_IMAGES.length})`
            : `Sacred Darshan Sequence • 5-Second Auto Transition (${selectedSceneIndex + 1}/${ALL_UPLOADED_IMAGES.length})`}
        </span>
      </div>

      {/* Info Details Modal */}
      {showInfoModal && (
        <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#250a0a] border border-[#ffd700]/35 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl text-[#fef3c7]">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-[#ffd700]">
                {lang === 'kn' ? currentScene.nameKn : currentScene.nameEn}
              </h3>
              <button
                onClick={() => setShowInfoModal(false)}
                className="w-8 h-8 rounded-full bg-[#140404] text-[#ffd700] flex items-center justify-center border border-[#ffd700]/20 font-bold hover:bg-[#3d1111]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#fef3c7]/80 font-sans leading-relaxed">
              {lang === 'kn' ? currentScene.subtitleKn : currentScene.subtitleEn}
            </p>

            <div className="space-y-2 font-sans text-xs bg-[#140404] p-4 rounded-2xl border border-[#ffd700]/15">
              <div className="flex items-center justify-between border-b border-[#ffd700]/10 pb-2">
                <span className="text-[#ffd700] font-semibold">{lang === 'kn' ? 'ಮುಕುಟ / ಕಿರೀಟ:' : 'Crown / Mukuta:'}</span>
                <span className="text-[#fef3c7]/90">{currentScene.details.crown}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#ffd700]/10 py-2">
                <span className="text-[#ffd700] font-semibold">{lang === 'kn' ? 'ಆಭರಣ / ಕವಚ:' : 'Ornaments / Armor:'}</span>
                <span className="text-[#fef3c7]/90">{currentScene.details.emerald}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[#ffd700] font-semibold">{lang === 'kn' ? 'ಮಾಲಾ / ಹಾರ:' : 'Garland / Mala:'}</span>
                <span className="text-[#fef3c7]/90">{currentScene.details.coral}</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowInfoModal(false)}
                className="px-5 py-2 rounded-full bg-[#ff9933] text-[#1a0606] font-bold text-xs font-sans shadow-lg hover:bg-[#ffaa44]"
              >
                {lang === 'kn' ? 'ದರ್ಶನ ಮುಂದುವರಿಸಿ' : 'Back to Darshan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
