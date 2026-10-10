import React, { useState, useEffect } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import {
  WinLogo,
  SpeakerIcon,
  ComputerIcon,
  UserIcon,
  FolderProjectsIcon,
  SkillsSetupIcon,
  DocumentIcon,
  ResumePdfIcon,
  ContactMailIcon,
  TerminalIcon,
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

export const Taskbar = () => {
  const {
    windows,
    activeWindowId,
    isStartOpen,
    toggleStartMenu,
    focusWindow,
    minimizeWindow,
    isMuted,
    toggleMute,
  } = useWindowManager();

  const [timeStr, setTimeStr] = useState('');

  // Clock updates every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const openWindowsList = Object.values(windows).filter((w) => w.isOpen);

  const handleTabClick = (w) => {
    if (w.isMinimized) {
      focusWindow(w.id);
    } else if (activeWindowId === w.id) {
      minimizeWindow(w.id);
    } else {
      focusWindow(w.id);
    }
  };

  return (
    <footer className="win-taskbar select-none" role="region" aria-label="Windows Taskbar">
      {/* Left: Start Button */}
      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        <button
          type="button"
          onClick={toggleStartMenu}
          className={`win-btn win-start-btn flex items-center gap-1.5 ${
            isStartOpen ? 'is-active' : ''
          }`}
          aria-expanded={isStartOpen}
          aria-label="Start Menu"
        >
          <WinLogo className="w-4 h-4 shrink-0" />
          <span className="font-bold text-[12px] tracking-wide">Start</span>
        </button>

        {/* Taskbar Windows list */}
        <div className="flex items-center gap-1 overflow-x-auto min-w-0 pr-2">
          {openWindowsList.map((w) => {
            const Icon = ICON_MAP[w.iconType] || ComputerIcon;
            const isTabActive = !w.isMinimized && activeWindowId === w.id;

            return (
              <button
                key={w.id}
                type="button"
                onClick={() => handleTabClick(w)}
                className={`win-btn win-taskbar-tab ${
                  isTabActive ? 'is-active' : ''
                }`}
                title={w.title}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate text-[11px]">{w.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: System Tray */}
      <div className="win-inset-shallow win-systray flex items-center gap-2 px-2 shrink-0">
        <button
          type="button"
          onClick={toggleMute}
          className="cursor-pointer hover:opacity-80 p-0.5 focus:outline-none"
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        >
          <SpeakerIcon className="w-3.5 h-3.5" muted={isMuted} />
        </button>
        <span className="text-[11px] font-sans font-medium">{timeStr}</span>
      </div>
    </footer>
  );
};
