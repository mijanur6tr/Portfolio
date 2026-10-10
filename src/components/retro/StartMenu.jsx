import React from 'react';
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
  SpeakerIcon,
  WinLogo,
} from './RetroIcons';

export const StartMenu = () => {
  const {
    isStartOpen,
    setIsStartOpen,
    openWindow,
    isMuted,
    toggleMute,
    setShutdownMode,
  } = useWindowManager();

  if (!isStartOpen) return null;

  const handleMenuClick = (action) => {
    setIsStartOpen(false);
    action();
  };

  return (
    <div
      className="win-start-menu win-outset flex flex-row shadow-2xl select-none"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Vertical Classic Banner */}
      <div className="win-start-menu-banner flex flex-col justify-end items-center py-3 select-none">
        <span className="win-start-menu-banner-text font-bold text-white text-[14px] tracking-[3px] select-none">
          MIJANUR 95
        </span>
      </div>

      {/* Menu Items */}
      <div className="flex-1 py-1 flex flex-col bg-[#c0c0c0] text-[12px]">
        {/* User Card */}
        <div className="px-3 py-1.5 border-b border-gray-400 mb-1 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-xs">
            MR
          </div>
          <div>
            <div className="font-bold text-[11px] leading-tight text-gray-900">Mijanur Rahman</div>
            <div className="text-[10px] text-gray-600 leading-tight">Full-Stack Developer</div>
          </div>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('welcome'))}
        >
          <ComputerIcon className="w-5 h-5 shrink-0" />
          <span>Welcome &amp; Guide</span>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('about'))}
        >
          <UserIcon className="w-5 h-5 shrink-0" />
          <span>About Me</span>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('projects'))}
        >
          <FolderProjectsIcon className="w-5 h-5 shrink-0" />
          <span className="font-semibold">Projects (Explorer)</span>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('skills'))}
        >
          <SkillsSetupIcon className="w-5 h-5 shrink-0" />
          <span>Skills &amp; Technologies</span>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('experience'))}
        >
          <DocumentIcon className="w-5 h-5 shrink-0" />
          <span>Experience &amp; Education</span>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('resume'))}
        >
          <ResumePdfIcon className="w-5 h-5 shrink-0" />
          <span>View / Download Resume</span>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('contact'))}
        >
          <ContactMailIcon className="w-5 h-5 shrink-0" />
          <span>Contact Me</span>
        </div>

        <div className="win-start-menu-divider" />

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => openWindow('terminal'))}
        >
          <TerminalIcon className="w-5 h-5 shrink-0" />
          <span>MS-DOS Prompt (Terminal)</span>
        </div>

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(toggleMute)}
        >
          <SpeakerIcon className="w-4 h-4 shrink-0" muted={isMuted} />
          <span>Sound: {isMuted ? 'Muted (Off)' : 'Sound (On)'}</span>
        </div>

        <div className="win-start-menu-divider" />

        <div
          className="win-start-menu-item"
          onClick={() => handleMenuClick(() => setShutdownMode('dialog'))}
        >
          <WinLogo className="w-4 h-4 shrink-0 grayscale" />
          <span>Shut Down...</span>
        </div>
      </div>
    </div>
  );
};
