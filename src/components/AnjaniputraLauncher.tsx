import { GripVertical, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { useDraggablePanel } from '../hooks/useDraggablePanel';

export function AnjaniputraLauncher({ lang, visible, onOpen }: { lang: Language; visible: boolean; onOpen: () => void }) {
  const drag = useDraggablePanel(visible);
  if (!visible) return null;
  return (
    <div ref={drag.panelRef} style={drag.style} className="fixed z-40 w-max max-w-[calc(100vw-24px)]">
      <button id="btn-floating-anjaniputra-bot" data-drag-handle {...drag.handlers}
        onClick={(event) => { if (drag.dragged.current) { event.preventDefault(); drag.dragged.current = false; return; } onOpen(); }}
        className="flex touch-none select-none items-center gap-2 rounded-full border-2 border-[#ffd700] bg-[#ffd700] px-4 py-3 text-xs font-bold text-[#250a0a] shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd700]"
        aria-label={lang === 'kn' ? 'ಅಂಜನೀಪುತ್ರ ತೆರೆಯಿರಿ. ಎಳೆದು ಸರಿಸಿ ಅಥವಾ ಬಾಣದ ಕೀಲಿಗಳನ್ನು ಬಳಸಿ.' : 'Open Anjaniputra. Drag to move, or use arrow keys; Home resets the position.'}>
        <GripVertical size={15} /><MessageSquare size={18} /><span>{lang === 'kn' ? 'ಅಂಜನೀಪುತ್ರ' : 'Anjaniputra'}</span>
      </button>
    </div>
  );
}
