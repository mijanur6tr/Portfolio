import React, { useRef, useState, useEffect } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import {
  ComputerIcon,
  UserIcon,
  FolderProjectsIcon,
  SkillsSetupIcon,
  DocumentIcon,
  ResumePdfIcon,
  ContactMailIcon,
  TerminalIcon,
  MinimizeGlyph,
  MaximizeGlyph,
  RestoreGlyph,
  CloseGlyph,
} from './RetroIcons';

const ICON_MAP = {
  computer: ComputerIcon,
  user: UserIcon,
  projects: FolderProjectsIcon,
  skills: SkillsSetupIcon,
  experience: DocumentIcon,
  resume: ResumePdfIcon,
  contact: ContactMailIcon,
  terminal: TerminalIcon,
};

export const Window = ({ id, children, statusBarText = 'Ready' }) => {
  const {
    windows,
    activeWindowId,
    focusWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    moveWindow,
  } = useWindowManager();

  const win = windows[id];
  const isDragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0, winX: 0, winY: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!win || !win.isOpen || win.isMinimized) {
    return null;
  }

  const isActive = activeWindowId === id;
  const isMaximized = win.isMaximized || isMobile;
  const IconComponent = ICON_MAP[win.iconType] || ComputerIcon;

  // Pointer dragging handler
  const handlePointerDown = (e) => {
    // Only drag with primary mouse button / touch on title bar
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (isMaximized) return;

    focusWindow(id);
    isDragging.current = true;
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      winX: win.x,
      winY: win.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || isMaximized) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    let nextX = dragStartPos.current.winX + dx;
    let nextY = dragStartPos.current.winY + dy;

    // Bounds checking
    const maxX = window.innerWidth - 60;
    const minX = -win.width + 60;
    const minY = 0;
    const maxY = window.innerHeight - 70;

    nextX = Math.max(minX, Math.min(maxX, nextX));
    nextY = Math.max(minY, Math.min(maxY, nextY));

    moveWindow(id, nextX, nextY);
  };

  const handlePointerUp = (e) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {
        // ignore
      }
    }
  };

  // Window frame styles based on maximized / standard state
  const frameStyle = isMaximized
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 34px)',
        zIndex: win.zIndex,
      }
    : {
        position: 'absolute',
        top: `${win.y}px`,
        left: `${win.x}px`,
        width: `${win.width}px`,
        height: `${win.height}px`,
        maxWidth: 'calc(100vw - 10px)',
        maxHeight: 'calc(100vh - 44px)',
        zIndex: win.zIndex,
      };

  return (
    <div
      className="win-window-frame flex flex-col select-none"
      style={frameStyle}
      onPointerDown={() => focusWindow(id)}
      role="dialog"
      aria-label={win.title}
    >
      {/* Title Bar */}
      <div
        className={`h-6 px-1 flex items-center justify-between cursor-move select-none ${
          isActive ? 'win-titlebar-active' : 'win-titlebar-inactive'
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onDoubleClick={() => maximizeWindow(id)}
      >
        <div className="flex items-center gap-1.5 overflow-hidden pr-2">
          <IconComponent className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[12px] font-bold tracking-wide truncate select-none">
            {win.title}
          </span>
        </div>

        {/* Window controls */}
        <div
          className="flex items-center shrink-0"
          onPointerDown={(e) => e.stopPropagation()} // Prevent drag start when clicking control buttons
        >
          <button
            type="button"
            className="win-control-btn"
            title="Minimize"
            aria-label="Minimize"
            onClick={() => minimizeWindow(id)}
          >
            <MinimizeGlyph />
          </button>

          <button
            type="button"
            className="win-control-btn"
            title={isMaximized ? 'Restore' : 'Maximize'}
            aria-label={isMaximized ? 'Restore' : 'Maximize'}
            onClick={() => maximizeWindow(id)}
          >
            {isMaximized ? <RestoreGlyph /> : <MaximizeGlyph />}
          </button>

          <button
            type="button"
            className="win-control-btn ml-1"
            title="Close"
            aria-label="Close"
            onClick={() => closeWindow(id)}
          >
            <CloseGlyph />
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-auto bg-[#c0c0c0] p-1 flex flex-col min-h-0 text-[#000000]">
        <div className="flex-1 win-inset bg-white overflow-y-auto flex flex-col relative text-[13px]">
          {children}
        </div>

        {/* Retro Status Bar */}
        {statusBarText && (
          <div className="h-5 mt-1 px-2 flex items-center justify-between bg-[#c0c0c0] text-[11px] text-[#222]">
            <div className="win-inset-shallow px-1 flex-1 mr-1 truncate">
              {statusBarText}
            </div>
            <div className="win-inset-shallow px-2 w-20 text-center shrink-0">
              Win 95
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
