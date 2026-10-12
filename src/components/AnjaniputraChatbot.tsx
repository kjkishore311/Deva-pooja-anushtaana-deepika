import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ChevronRight,
  Flame,
  BookOpen,
  Volume2,
  HelpCircle,
  PhoneCall,
  Smile,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { Language, PoojaMode } from '../types';
import { useDraggablePanel } from '../hooks/useDraggablePanel';

interface AnjaniputraChatbotProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab?: (tab: string) => void;
  onSelectMode?: (mode: PoojaMode) => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  textKn: string;
  textEn: string;
  action?: {
    labelKn: string;
    labelEn: string;
    tab?: string;
    mode?: PoojaMode;
  };
  timestamp: string;
}

// Built-in Knowledge Base curated from Tantrasara Sangraha and Pt. Venugopalachar Gudi's teachings
const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ['10 min', '10min', 'ಹತ್ತು ನಿಮಿಷ', 'ಸಂಕ್ಷಿಪ್ತ', 'quick', 'free', 'ಉಚಿತ'],
    answerKn:
      '೧೦ ನಿಮಿಷದ ಪೂಜೆಯು ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿದೆ! ಇದರಲ್ಲಿ ಆಚಮನ, ಸಂಕಲ್ಪ, ದೀಪ-ಘಂಟಾನಾದ, ನಿರ್ಮಾಲ್ಯ ವಿಸರ್ಜನೆ, ಶಂಖೋದಕದಿಂದ ತ್ವರಿತ ಅಭಿಷೇಕ, ಗಂಧ-ತುಳಸಿ ಸಮರ್ಪಣೆ, ನೈವೇದ್ಯ ಮತ್ತು ಮಂಗಳಾರತಿಗಳು ಶಾಸ್ತ್ರೋಕ್ತವಾಗಿ ಅಡಕವಾಗಿವೆ. ಅವಸರದ ದಿನಗಳಲ್ಲಿ ಭಕ್ತಿಯಿಂದ ಇದನ್ನು ಮಾಡಬಹುದು.',
    answerEn:
      'The 10-Minute Pooja is 100% Free! It includes essential Achamana, Sankalpa, Deepa-Ghanta, Nirmalya Visarjana, quick Shankhodaka Abhisheka, Gandha & Tulasi archana, Naivedya, and Mangalarati. Perfect for busy mornings.',
    action: { labelKn: '೧೦ ನಿಮಿಷ ಪೂಜೆ ಆರಂಭಿಸಿ', labelEn: 'Start 10-Min Pooja', mode: '10min' as PoojaMode }
  },
  {
    keywords: ['sandhyavandana', 'ಸಂಧ್ಯಾವಂದನ', 'ನಿರ್ಮಾಲ್ಯ', 'nirmalya', 'ತೀರ್ಥ', 'water'],
    answerKn:
      'ಸುಧಾ ಪಂಡಿತ ಪೂಜ್ಯ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಗುಡಿಯವರ ಸ್ಪಷ್ಟ ನಿರ್ದೇಶನ: ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥವನ್ನು ಸಂಧ್ಯಾವಂದನೆಯ ಆಚಮನಕ್ಕಾಗಲೀ ಅಥವಾ ಪ್ರೋಕ್ಷಣಕ್ಕಾಗಲೀ ಎಂದಿಗೂ ಬಳಸಬಾರದು! ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥವನ್ನು ಕೇವಲ ಗೋಪೀಚಂದನ ತೇಯಲು ಮತ್ತು ತಿಲಕಧಾರಣೆಗೆ ಮಾತ್ರ ಬಳಸಬೇಕು.',
    answerEn:
      'Direct guidance from Pt. Venugopalachar Gudi: NEVER use Nirmalya Teertha for Sandhyavandana Achamana or Prokshana! Nirmalya water is strictly reserved only for rubbing Gopi Chandana and applying tilaka.',
  },
  {
    keywords: ['dhenu', 'ಧೇನು', 'mudra', 'ಮುದ್ರೆ', 'finger', 'ಬೆರಳು'],
    answerKn:
      'ಧೇನು ಮುದ್ರೆಯು ನೈವೇದ್ಯವನ್ನು ಅಮೃತೀಕರಿಸುವ ಪರಮ ಪವಿತ್ರ ಮುದ್ರೆ. ಬಲ ಮತ್ತು ಎಡ ಕೈಗಳ ತೋರ್ಬೆರಳು, ಮಧ್ಯದ ಬೆರಳು, ಉಂಗುರದ ಬೆರಳು ಮತ್ತು ಕಿರುಬೆರಳುಗಳನ್ನು ಪರಸ್ಪರ ಕ್ರಾಸ್ ಮಾಡಿ ಹಸುವಿನ ಕೆಚ್ಚಲಿನಂತೆ ತೋರಿಸಲಾಗುತ್ತದೆ. ನಮ್ಮ "ಮುದ್ರೆಗಳು" ವಿಭಾಗದಲ್ಲಿ ಇದರ ಪೂರ್ಣ ಚಿತ್ರ ಹಾಗೂ ವಿವರಣೆ ಇದೆ!',
    answerEn:
      'Dhenu Mudra sanctifies Naivedya into Divine Amrita. The index, middle, ring, and small fingers of both hands are interlocked crosswise resembling a cow’s udder. View full visual chart in our Mudras section!',
    action: { labelKn: 'ಮುದ್ರೆಗಳ ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ', labelEn: 'View Mudras Guide', tab: 'mudras' }
  },
  {
    keywords: ['shankha', 'ಶಂಖ', 'abhisheka', 'ಅಭಿಷೇಕ', 'valamuri', 'ಬಲಮುರಿ'],
    answerKn:
      'ಪೂಜಾ ಶಂಖಕ್ಕೆ ಯಾವಾಗಲೂ ಶುದ್ಧ ಗಂಗಾಜಲ/ಕಲಶೋದಕ ತುಂಬಿ ಗಾಯತ್ರೀ ಮಂತ್ರದಿಂದ ಅಭಿಮಂತ್ರಿಸಿ, ಪುರುಷ-ಸೂಕ್ತ ಹೇಳುತ್ತಾ ನಿರಂತರ ಧಾರೆಯಾಗಿ ಸಾಲಿಗ್ರಾಮಗಳಿಗೆ ಸ್ನಾನ ಮಾಡಿಸಬೇಕು. ನೆನಪಿಡಿ: ಬಲಮುರಿ (ದಕ್ಷಿಣಾವರ್ತ) ಶಂಖವನ್ನು ಪೂಜಿಸಬೇಕೇ ಹೊರತು ಅದರಿಂದ ಅಭಿಷೇಕ ಮಾಡಬಾರದು. ಎಡಮುರಿ ಶಂಖದಿಂದಲೇ ಅಭಿಷೇಕ!',
    answerEn:
      'Fill the Pooja Shankha with consecrated water, sanctify it, and pour in a continuous stream over Saligramas chanting Purusha Sukta. Note: Dakshinavarta (Valamuri) conch is only for worship, never for pouring abhisheka!',
    action: { labelKn: 'ಅಭಿಷೇಕ ಮಂತ್ರಗಳನ್ನು ಓದಿ', labelEn: 'Read Abhisheka Mantras', tab: 'suktas' }
  },
  {
    keywords: ['naivedya', 'ನೈವೇದ್ಯ', 'mandala', 'ಮಂಡಲ', 'rangoli', 'ರಂಗೋಲಿ'],
    answerKn:
      'ನೈವೇದ್ಯ ಪಾತ್ರೆಯನ್ನು ನೇರವಾಗಿ ನೆಲದ ಮೇಲೆ ಇಡಬಾರದು. ನೀರಿನಿಂದ ಚೌಕ ಮಂಡಲ ಬರೆದು, ಮಧ್ಯದಲ್ಲಿ "ಶ್ರೀ" ಅಥವಾ ಪದ್ಮ ರಂಗೋಲಿ ರಚಿಸಿ, ಅದರ ಮೇಲೆ ನೈವೇದ್ಯ ತಟ್ಟೆಯನ್ನಿಟ್ಟು, ತುಳಸೀ ದಳವನ್ನಿಟ್ಟು, ಪ್ರೋಕ್ಷಣೆ ಮತ್ತು ಪರಿಷೇಚನ ಮಾಡಬೇಕು.',
    answerEn:
      'Never place the Naivedya plate directly on bare floor. Always draw a sanctified square water Mandala, inscribe "Sri" or a Lotus, place the plate, add Tulasi leaves, and perform Parishechana oblations.',
    action: { labelKn: 'ನೈವೇದ್ಯ ಕ್ರಮ ತಿಳಿಯಿರಿ', labelEn: 'Learn Naivedya Steps', tab: 'pooja' }
  },
  {
    keywords: ['pandit', 'acharya', 'venugopalachar', 'kishore', 'contact', 'ಫೋನ್', 'ಸಂಪರ್ಕ'],
    answerKn:
      'ಪೂಜ್ಯ ಸುಧಾ ಪಂಡಿತ ಶ್ರೀ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿ (ಗುಡಿ) ಮತ್ತು ಸಂಯೋಜಕ ಶ್ರೀ ಕಿಶೋರ್ ಅವರ ಸಂಪರ್ಕ: ದೂರವಾಣಿ / WhatsApp: +91 97415 69403. ಇಮೇಲ್: kjkishore311@gmail.com. ಪೂಜಾ ಮಾರ್ಗದರ್ಶನ ಹಾಗೂ ಧರ್ಮ ಸಂದೇಹಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ!',
    answerEn:
      'To consult Pt. Venugopalachar Gudi & coordinator Kishore: Phone / WhatsApp: +91 97415 69403. Email: kjkishore311@gmail.com. Reach out for authentic guidance on Madhwa rituals and Tantrasara pooja.',
    action: { labelKn: 'ಪ್ರಶ್ನೋತ್ತರ ವಿಭಾಗ', labelEn: 'Q&A Section', tab: 'qa' }
  },
  {
    keywords: ['ekadashi', 'ಏಕಾದಶಿ', 'fasting', 'ಉಪವಾಸ'],
    answerKn:
      'ಏಕಾದಶಿಯಂದು ಶ್ರೀಹರಿಗೆ ಸಮಗ್ರ ಪೂಜೆ, ಅಭಿಷೇಕ, ತುಳಸಿ ಅರ್ಚನೆ ಮಾಡಲಾಗುತ್ತದೆ. ನೈವೇದ್ಯಕ್ಕೆ ಅಕ್ಕಿ-ಗೋಧಿ ಅನ್ನದ ಬದಲಾಗಿ ಹಣ್ಣು, ಹಾಲು, ಒಣಹಣ್ಣು ಅಥವಾ ಕಲ್ಲುಸಕ್ಕರೆ ಸಮರ್ಪಿಸಿ, ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥವನ್ನು ಮಾತ್ರ ಸ್ವೀಕರಿಸಿ ಪೂರ್ಣ ಉಪವಾಸ ಮಾಡುವುದು ಮಧ್ವ ಪರಂಪರೆ.',
    answerEn:
      'On Ekadashi, perform complete Pooja and Abhisheka. Offer fruits, milk, dried nuts, or candy for Naivedya instead of cooked grains. Partake only the sacred Nirmalya Teertha.',
    action: { labelKn: 'ಏಕಾದಶಿ ಪಂಚಾಂಗ ನೋಡಿ', labelEn: 'View Ekadashi Calendar', tab: 'ekadashi' }
  }
];

export const AnjaniputraChatbot: React.FC<AnjaniputraChatbotProps> = ({
  lang,
  isOpen,
  onClose,
  onNavigateToTab,
  onSelectMode,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      textKn:
        'ಜೈ ಶ್ರೀರಾಮ್! 🙏 ನಾನು ವಾಯುಪುತ್ರ - ನಿಮ್ಮ ದೇವಪೂಜಾ ದೈವಿಕ ಸಹಾಯಕ! ತಂತ್ರಸಾರ ಸಂಗ್ರಹ, ಸಾಲಿಗ್ರಾಮ ಪೂಜೆ, ಮುದ್ರೆಗಳು, ಸೂಕ್ತಗಳು ಅಥವಾ ೧೦ ನಿಮಿಷದ ಉಚಿತ ಪೂಜೆ ಬಗ್ಗೆ ಏನು ಬೇಕಾದರೂ ನನ್ನನ್ನು ಕೇಳಿ!',
      textEn:
        'Jai Sri Ram! 🙏 I am Vayu putra - your divine Deva Pooja guide! Ask me anything about Tantrasara rituals, Saligrama rules, Mudras, Suktas, or the Free 10-Minute Pooja!',
      timestamp: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isJumping, setIsJumping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const drag = useDraggablePanel(isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Trigger playful jump
  const triggerJump = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 900);
  };

  const handleSend = (userText?: string) => {
    const textToSend = (userText || inputVal).trim();
    if (!textToSend) return;

    triggerJump();

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      textKn: textToSend,
      textEn: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInputVal('');

    // Process Bot Answer
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let matched = FAQ_KNOWLEDGE_BASE.find((item) =>
        item.keywords.some((kw) => lower.includes(kw.toLowerCase()))
      );

      let botReply: ChatMessage;

      if (matched) {
        botReply = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textKn: matched.answerKn,
          textEn: matched.answerEn,
          action: matched.action,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      } else {
        botReply = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          textKn:
            'ಸುಂದರ ಪ್ರಶ್ನೆ! ಮಧ್ವ ಸಿದ್ಧಾಂತ ಹಾಗೂ ತಂತ್ರಸಾರ ಪದ್ಧತಿಯಲ್ಲಿ ಶ್ರೀಹರಿಯ ಪೂಜೆಯು ಅತ್ಯುನ್ನತ ಸಾಧನ. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ ನಮ್ಮ ೧೦ ನಿಮಿಷ ಅಥವಾ ೩೦ ನಿಮಿಷದ ಪೂಜಾ ಮಾರ್ಗದರ್ಶನ ನೋಡಿ, ಅಥವಾ ಪೂಜ್ಯ ವೇಣುಗೋಪಾಲಾಚಾರ್ಯ ಜೋಶಿಯವರನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ!',
          textEn:
            'Wonderful question! In Sri Madhvacharya’s tradition, Deva Pooja is the supreme spiritual path. Check our step-by-step 10-min or 30-min guides, or contact Pt. Venugopalachar Gudi directly!',
          action: { labelKn: '೧೦ ನಿಮಿಷ ಉಚಿತ ಪೂಜೆ', labelEn: '10-Min Free Pooja', mode: '10min' as PoojaMode },
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }

      setMessages((prev) => [...prev, botReply]);
      triggerJump();
    }, 500);
  };

  const handleQuickQuestion = (qKn: string, qEn: string) => {
    const q = lang === 'kn' ? qKn : qEn;
    handleSend(q);
  };

  if (!isOpen) return null;

  return (
    <div ref={drag.panelRef} style={drag.style} role="dialog" aria-modal="false" aria-label={lang === 'kn' ? 'ವಾಯುಪುತ್ರ ಸಹಾಯಕ' : 'Vayu putra guide'} className="fixed z-50 w-[calc(100vw-24px)] max-w-lg">
      <div className="relative w-full h-[640px] max-h-[calc(100dvh-24px)] bg-gradient-to-b from-[#2a0c0c] via-[#1a0505] to-[#120303] border-2 border-[#ffd700]/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.95)] text-[#fef3c7] flex flex-col overflow-hidden">
        
        {/* Top Header: Vayu putra Mascot Branding */}
        <div {...drag.handlers} tabIndex={0} role="group" aria-label={lang === 'kn' ? 'ಶೀರ್ಷಿಕೆ ಎಳೆದು ಚಾಟ್ ಸರಿಸಿ ಅಥವಾ ಬಾಣದ ಕೀಲಿಗಳನ್ನು ಬಳಸಿ' : 'Drag this header to move the chat. Arrow keys move it; Home resets its position.'} className={`touch-none select-none bg-gradient-to-r from-[#3d1111] via-[#2d0909] to-[#3d1111] border-b border-[#ffd700]/30 px-4 py-3 flex items-center justify-between shadow-md focus-visible:outline-2 focus-visible:outline-[#ffd700] ${drag.isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
          <div className="flex items-center gap-3">
            {/* Playful Interactive Jumping Hanuman Icon */}
            <div 
              onClick={triggerJump}
              className={`w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#ff9933] to-[#ffd700] p-0.5 cursor-pointer shadow-[0_0_16px_rgba(255,153,51,0.6)] ${
                isJumping ? 'animate-bounce scale-110' : 'hover:scale-105 transition-transform'
              }`}
              title={lang === 'kn' ? 'ಹಾರಲು ನನ್ನನ್ನು ಮುಟ್ಟಿ!' : 'Tap me to jump!'}
            >
              <img src="/images/vayuputra/hanuman-avatar.jpg" alt="" draggable={false} className="w-full h-full rounded-[14px] object-cover select-none" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-serif font-bold text-base text-[#ffd700] tracking-wide">
                  {lang === 'kn' ? 'ವಾಯುಪುತ್ರ' : 'Vayu putra'}
                </h3>
                <span className="text-[10px] bg-[#ff9933] text-[#1a0606] font-bold px-2 py-0.5 rounded-full uppercase">
                  {lang === 'kn' ? 'ದೈವಿಕ ಮಾರ್ಗದರ್ಶಿ' : 'Divine Guide'}
                </span>
              </div>
              <p className="text-[11px] text-[#fef3c7]/75 font-sans">
                {lang === 'kn' ? 'ಸರಿಸಲು ಶೀರ್ಷಿಕೆ ಎಳೆಯಿರಿ' : 'Drag this header to move'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1f0707] hover:bg-[#3d1111] text-[#fef3c7]/70 hover:text-[#ffd700] border border-[#ffd700]/20 transition-all active:scale-95"
            title={lang === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Question Chips Carousel */}
        <div className="bg-[#180404] px-3 py-2 border-b border-[#ffd700]/15 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold text-[#ff9933] uppercase shrink-0 flex items-center gap-1 font-sans">
            <Sparkles className="w-3 h-3" /> {lang === 'kn' ? 'ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು:' : 'Quick Questions:'}
          </span>
          <button
            onClick={() => handleQuickQuestion('೧೦ ನಿಮಿಷ ಪೂಜೆಯ ಕ್ರಮ ಹೇಳು', 'How to do 10-minute pooja?')}
            className="px-2.5 py-1 rounded-full text-xs bg-[#2d0909] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 shrink-0 font-sans active:scale-95 transition-all"
          >
            {lang === 'kn' ? '೧೦ ನಿಮಿಷ ಪೂಜೆ ಕ್ರಮ' : '10-Min Pooja Steps'}
          </button>
          <button
            onClick={() => handleQuickQuestion('ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥ ಸಂಧ್ಯಾವಂದನೆಗೆ ಬಳಸಬಹುದೇ?', 'Can Nirmalya water be used for sandhyavandana?')}
            className="px-2.5 py-1 rounded-full text-xs bg-[#2d0909] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 shrink-0 font-sans active:scale-95 transition-all"
          >
            {lang === 'kn' ? 'ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥ ನಿಯಮ' : 'Nirmalya Teertha Rule'}
          </button>
          <button
            onClick={() => handleQuickQuestion('ಧೇನು ಮುದ್ರೆ ಹೇಗೆ ಮಾಡಬೇಕು?', 'How to form Dhenu mudra?')}
            className="px-2.5 py-1 rounded-full text-xs bg-[#2d0909] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 shrink-0 font-sans active:scale-95 transition-all"
          >
            {lang === 'kn' ? 'ಧೇನು ಮುದ್ರೆ' : 'Dhenu Mudra'}
          </button>
          <button
            onClick={() => handleQuickQuestion('ಶಂಖದಿಂದ ಅಭಿಷೇಕ ಮಾಡುವುದು ಹೇಗೆ?', 'How to do Shankhabhisheka?')}
            className="px-2.5 py-1 rounded-full text-xs bg-[#2d0909] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 shrink-0 font-sans active:scale-95 transition-all"
          >
            {lang === 'kn' ? 'ಶಂಖಾಭಿಷೇಕ' : 'Shankhabhisheka'}
          </button>
          <button
            onClick={() => handleQuickQuestion('ನೈವೇದ್ಯ ಮಂಡಲ ರಂಗೋಲಿ ಹೇಗೆ ಹಾಕಬೇಕು?', 'How to draw Naivedya Mandala?')}
            className="px-2.5 py-1 rounded-full text-xs bg-[#2d0909] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 shrink-0 font-sans active:scale-95 transition-all"
          >
            {lang === 'kn' ? 'ನೈವೇದ್ಯ ಮಂಡಲ' : 'Naivedya Mandala'}
          </button>
          <button
            onClick={() => handleQuickQuestion('ಆಚಾರ್ಯರ ಫೋನ್ ನಂಬರ್ ಕೊಡಿ', 'Contact number for Panditji')}
            className="px-2.5 py-1 rounded-full text-xs bg-[#2d0909] hover:bg-[#3d1111] text-[#ffd700] border border-[#ffd700]/30 shrink-0 font-sans active:scale-95 transition-all"
          >
            {lang === 'kn' ? 'ಆಚಾರ್ಯರ ಸಂಪರ್ಕ' : 'Contact Panditji'}
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 no-scrollbar">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 items-end ${isBot ? 'justify-start' : 'justify-end'}`}
              >
                {isBot && (
                  <img src="/images/vayuputra/hanuman-avatar.jpg" alt="" draggable={false} className="w-8 h-8 rounded-full object-cover ring-1 ring-[#ff9933] shadow-sm shrink-0" />
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm font-sans space-y-2 shadow-md ${
                    isBot
                      ? 'bg-[#280909] border border-[#ffd700]/30 text-[#fef3c7] rounded-bl-none'
                      : 'bg-gradient-to-r from-[#ff9933] to-[#ffd700] text-[#1a0606] font-medium rounded-br-none'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">
                    {lang === 'kn' ? msg.textKn : msg.textEn}
                  </p>

                  {/* Interactive Action Button (e.g. start pooja, open mudras) */}
                  {msg.action && (
                    <div className="pt-1.5">
                      <button
                        onClick={() => {
                          if (msg.action?.mode && onSelectMode) {
                            onSelectMode(msg.action.mode);
                            onClose();
                          } else if (msg.action?.tab && onNavigateToTab) {
                            onNavigateToTab(msg.action.tab);
                            onClose();
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ffaa33] hover:from-[#ffe066] hover:to-[#ffbb55] text-[#1a0606] font-bold text-xs flex items-center gap-1.5 shadow active:scale-95 transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{lang === 'kn' ? msg.action.labelKn : msg.action.labelEn}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  <div
                    className={`text-[9px] font-mono text-right ${
                      isBot ? 'text-[#ffd700]/50' : 'text-[#1a0606]/60'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="bg-[#190404] p-3 border-t border-[#ffd700]/20 flex items-center gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder={
              lang === 'kn'
                ? 'ವಾಯುಪುತ್ರನಲ್ಲಿ ಪೂಜಾ ಸಂದೇಹ ಕೇಳಿ...'
                : 'Ask Vayu putra anything about Deva Pooja...'
            }
            className="flex-1 bg-[#250808] border border-[#ffd700]/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#fef3c7] placeholder-[#fef3c7]/40 focus:outline-none focus:border-[#ffd700]"
          />
          <button
            onClick={() => handleSend()}
            className="px-4 py-2 rounded-xl bg-[#ff9933] hover:bg-[#ffaa44] text-[#1a0606] font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md active:scale-95 transition-all shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'kn' ? 'ಕೇಳಿ' : 'Send'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
