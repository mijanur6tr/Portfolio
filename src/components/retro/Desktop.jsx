import React, { useEffect, useRef } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { DesktopIcon } from './DesktopIcon';
import { Window } from './Window';
import { Taskbar } from './Taskbar';
import { StartMenu } from './StartMenu';
import { ShutdownScreen } from './ShutdownScreen';
import { playStartupChime } from '../../utils/sound';

import { WelcomeApp } from './apps/WelcomeApp';
import { AboutApp } from './apps/AboutApp';
import { ProjectsApp } from './apps/ProjectsApp';
import { SkillsApp } from './apps/SkillsApp';
import { ExperienceApp } from './apps/ExperienceApp';
import { ResumeApp } from './apps/ResumeApp';
import { ContactApp } from './apps/ContactApp';
import { TerminalApp } from './apps/TerminalApp';

export const Desktop = () => {
  const { onDesktopClick, openWindow } = useWindowManager();
  const hasPlayedStartup = useRef(false);

  // Play startup chime on first user click anywhere if not played yet
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasPlayedStartup.current) {
        hasPlayedStartup.current = true;
        playStartupChime();
      }
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };

    window.addEventListener('pointerdown', handleFirstInteraction);
    return () => window.removeEventListener('pointerdown', handleFirstInteraction);
  }, []);

  return (
    <div
      className="win-desktop select-none"
      onClick={onDesktopClick}
      role="application"
      aria-label="Windows 95 Interactive Desktop"
    >
      {/* Desktop Icons Grid Column */}
      <div className="absolute top-2 left-2 flex flex-col flex-wrap gap-1 max-h-[calc(100vh-50px)] z-10 pointer-events-auto">
        <DesktopIcon
          id="welcome"
          title="Welcome"
          iconType="computer"
          onOpen={() => openWindow('welcome')}
        />
        <DesktopIcon
          id="about"
          title="About Me"
          iconType="user"
          onOpen={() => openWindow('about')}
        />
        <DesktopIcon
          id="projects"
          title="Projects"
          iconType="projects"
          onOpen={() => openWindow('projects')}
        />
        <DesktopIcon
          id="skills"
          title="Skills"
          iconType="skills"
          onOpen={() => openWindow('skills')}
        />
        <DesktopIcon
          id="experience"
          title="Experience"
          iconType="experience"
          onOpen={() => openWindow('experience')}
        />
        <DesktopIcon
          id="resume"
          title="Resume.pdf"
          iconType="resume"
          onOpen={() => openWindow('resume')}
        />
        <DesktopIcon
          id="contact"
          title="Contact Me"
          iconType="contact"
          onOpen={() => openWindow('contact')}
        />
        <DesktopIcon
          id="terminal"
          title="MS-DOS Prompt"
          iconType="terminal"
          onOpen={() => openWindow('terminal')}
        />
        <DesktopIcon
          id="recycle"
          title="Recycle Bin"
          iconType="recycle"
          onOpen={() => alert('Recycle Bin is empty! All projects and skills are in pristine condition.')}
        />
      </div>

      {/* Windows Layer */}
      <Window id="welcome" statusBarText="Welcome to Mijanur OS v1.0">
        <WelcomeApp />
      </Window>

      <Window id="about" statusBarText="Mijanur Rahman - Full-Stack Developer">
        <AboutApp />
      </Window>

      <Window id="projects" statusBarText="7 Projects in C:\Mijanur\Projects">
        <ProjectsApp />
      </Window>

      <Window id="skills" statusBarText="Verified Stack - Device Manager OK">
        <SkillsApp />
      </Window>

      <Window id="experience" statusBarText="WordPad - Experience &amp; Education.doc">
        <ExperienceApp />
      </Window>

      <Window id="resume" statusBarText="Adobe Acrobat - Mijanur_Rahman_Resume.pdf">
        <ResumeApp />
      </Window>

      <Window id="contact" statusBarText="Outlook Express - Connected">
        <ContactApp />
      </Window>

      <Window id="terminal" statusBarText="MS-DOS 7.00">
        <TerminalApp />
      </Window>

      {/* Start Menu Popup */}
      <StartMenu />

      {/* Shutdown Screen / Dialog */}
      <ShutdownScreen />

      {/* Bottom Taskbar */}
      <Taskbar />
    </div>
  );
};
