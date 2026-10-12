import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';

export function clampPanelPosition(position: { x: number; y: number }, width: number, height: number, viewportWidth: number, viewportHeight: number) {
  return {
    x: Math.max(12, Math.min(position.x, viewportWidth - width - 12)),
    y: Math.max(12, Math.min(position.y, viewportHeight - height - 12)),
  };
}

export function useDraggablePanel(active: boolean) {
  const panelRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ pointerId: number; offsetX: number; offsetY: number; startX: number; startY: number } | null>(null);
  const dragged = useRef(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const bounded = (next: { x: number; y: number }) => {
    const bounds = panelRef.current?.getBoundingClientRect();
    return clampPanelPosition(next, bounds?.width || 0, bounds?.height || 0, window.innerWidth, window.innerHeight);
  };

  useEffect(() => {
    if (!active) return;
    const adjust = () => {
      const bounds = panelRef.current?.getBoundingClientRect();
      if (!bounds) return;
      setPosition((previous) => clampPanelPosition(previous || { x: window.innerWidth - bounds.width - 16, y: window.innerHeight - bounds.height - 96 }, bounds.width, bounds.height, window.innerWidth, window.innerHeight));
    };
    adjust();
    window.addEventListener('resize', adjust);
    return () => window.removeEventListener('resize', adjust);
  }, [active]);

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    const target = event.target as HTMLElement;
    if (target.closest('[data-no-drag]')) return;
    if (target.closest('button, a, input, textarea, select') && !target.closest('[data-drag-handle]')) return;
    const bounds = panelRef.current?.getBoundingClientRect();
    if (!bounds) return;
    dragged.current = false;
    dragStart.current = { pointerId: event.pointerId, offsetX: event.clientX - bounds.left, offsetY: event.clientY - bounds.top, startX: event.clientX, startY: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const start = dragStart.current;
    if (!start || start.pointerId !== event.pointerId) return;
    if (Math.hypot(event.clientX - start.startX, event.clientY - start.startY) < 6 && !dragged.current) return;
    dragged.current = true;
    setPosition(bounded({ x: event.clientX - start.offsetX, y: event.clientY - start.offsetY }));
  };

  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (dragStart.current?.pointerId !== event.pointerId) return;
    dragStart.current = null;
    setIsDragging(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;
    const bounds = panelRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = { x: bounds.left, y: bounds.top };
    const distance = event.shiftKey ? 60 : 20;
    if (event.key === 'ArrowLeft') next.x -= distance;
    else if (event.key === 'ArrowRight') next.x += distance;
    else if (event.key === 'ArrowUp') next.y -= distance;
    else if (event.key === 'ArrowDown') next.y += distance;
    else if (event.key === 'Home') {
      next.x = window.innerWidth - bounds.width - 16;
      next.y = window.innerHeight - bounds.height - 96;
    } else return;
    event.preventDefault();
    setPosition(bounded(next));
  };

  const style: CSSProperties = position ? { left: position.x, top: position.y } : { right: 16, bottom: 96 };
  return { panelRef, style, dragged, isDragging, handlers: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp, onLostPointerCapture: onPointerUp, onKeyDown } };
}
