import React from 'react';
import { useWindowManager } from '../../../context/WindowManagerContext';
import profileImg from '../../../assets/profile.jpeg';
import {
  FolderProjectsIcon,
  SkillsSetupIcon,
  DocumentIcon,
  ResumePdfIcon,
  ContactMailIcon,
  InfoIcon,
} from '../RetroIcons';

export const WelcomeApp = () => {
  const { openWindow, closeWindow } = useWindowManager();

  return (
    <div className="p-4 md:p-6 bg-[#ffffff] h-full flex flex-col justify-between select-text text-gray-900">
      {/* Top Welcome Header */}
      <div>
        <div className="flex items-start gap-4 pb-4 border-b border-gray-300">
          <img
            src={profileImg}
            alt="Mijanur Rahman"
            className="w-16 h-16 md:w-20 md:h-20 object-cover win-outset p-0.5 rounded-none shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-bold text-[#000080] font-sans">
                Mijanur Rahman
              </h1>
              <span className="bg-[#000080] text-white text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wide">
                v1.0
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700 mt-0.5">
              Full-Stack Developer &amp; CTO @ MAJHI
            </p>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Khulna University of Engineering &amp; Technology (KUET)
            </p>
          </div>
        </div>

        {/* Mission / Hero Statement */}
        <div className="mt-4 p-3 win-inset bg-[#f8f9fa] text-xs md:text-sm text-gray-800 leading-relaxed font-sans">
          <p className="font-semibold text-[#000080] mb-1">
            "I Build High-Impact, Fast, and Modern Web Solutions."
          </p>
          <p>
            From idea to launch, I craft scalable websites, full-stack web applications,
            and AI-driven workflows that deliver reliable results.
          </p>
        </div>

        {/* Navigation Instructions */}
        <div className="mt-4 flex items-center gap-2 bg-[#ffffdf] border border-[#d4c880] p-2.5 text-xs text-[#554400]">
          <InfoIcon className="w-5 h-5 shrink-0 text-[#000080]" />
          <span>
            <strong>Desktop Guide:</strong> Double-click any desktop icon to open an application.
            On mobile or touch devices, a single tap opens the window. Windows can be dragged, maximized, or minimized!
          </span>
        </div>
      </div>

      {/* Quick Launch Buttons */}
      <div className="mt-5 pt-3 border-t border-gray-200">
        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          Quick Launch Applications
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => openWindow('projects')}
            className="win-btn flex items-center justify-start gap-2 py-2 px-3 text-left w-full text-xs"
          >
            <FolderProjectsIcon className="w-5 h-5 shrink-0" />
            <span className="font-semibold truncate">Projects (Explorer)</span>
          </button>

          <button
            type="button"
            onClick={() => openWindow('skills')}
            className="win-btn flex items-center justify-start gap-2 py-2 px-3 text-left w-full text-xs"
          >
            <SkillsSetupIcon className="w-5 h-5 shrink-0" />
            <span className="font-semibold truncate">Skills &amp; Tech</span>
          </button>

          <button
            type="button"
            onClick={() => openWindow('experience')}
            className="win-btn flex items-center justify-start gap-2 py-2 px-3 text-left w-full text-xs"
          >
            <DocumentIcon className="w-5 h-5 shrink-0" />
            <span className="font-semibold truncate">Experience</span>
          </button>

          <button
            type="button"
            onClick={() => openWindow('resume')}
            className="win-btn flex items-center justify-start gap-2 py-2 px-3 text-left w-full text-xs"
          >
            <ResumePdfIcon className="w-5 h-5 shrink-0" />
            <span className="font-semibold truncate">Resume (.PDF)</span>
          </button>
        </div>

        <div className="mt-3 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => openWindow('about')}
            className="win-btn px-4 py-1 text-xs"
          >
            Read Full Bio →
          </button>
          <button
            type="button"
            onClick={() => closeWindow('welcome')}
            className="win-btn px-4 py-1 text-xs font-bold"
          >
            Explore Desktop
          </button>
        </div>
      </div>
    </div>
  );
};
