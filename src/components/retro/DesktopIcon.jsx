import React, { useRef } from 'react';
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
  RecycleBinIcon,
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
  recycle: RecycleBinIcon,
};

export const DesktopIcon = ({
  id,
  title,
  iconType = 'computer',
  onOpen,
  isRecycleBin = false,
}) => {
  const { selectedIconId, setSelectedIconId, openWindow } = useWindowManager();
  const isSelected = selectedIconId === id;
  const lastTapRef = useRef(0);

  const IconComponent = ICON_MAP[iconType] || ComputerIcon;

  const handleClick = (e) => {
    e.stopPropagation();
    setSelectedIconId(id);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    if (onOpen) {
      onOpen();
    } else {
      openWindow(id);
    }
  };

  // Touch handler: single tap or double tap on touchscreens
  const handleTouchEnd = (e) => {
    const now = Date.now();
    const timeSince = now - lastTapRef.current;
    lastTapRef.current = now;

    // Single tap opens on touch devices for frictionless mobile accessibility
    if (timeSince < 400 || ('ontouchstart' in window)) {
      e.stopPropagation();
      if (onOpen) {
        onOpen();
      } else {
        openWindow(id);
      }
    } else {
      setSelectedIconId(id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (onOpen) {
        onOpen();
      } else {
        openWindow(id);
      }
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`Open ${title}`}
      className={`win-icon ${isSelected ? 'is-selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
    >
      <div className="relative pointer-events-none mb-1">
        <IconComponent className="w-9 h-9 drop-shadow" />
      </div>
      <div className="win-icon-label font-sans font-medium text-[11px] leading-tight select-none">
        {title}
      </div>
    </div>
  );
};
