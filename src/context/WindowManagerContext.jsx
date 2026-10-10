import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { playOpenSound, playCloseSound, playClickSound, toggleSoundMuted, getSoundMuted } from '../utils/sound';

const WindowManagerContext = createContext(null);

const DEFAULT_WINDOWS = {
  welcome: {
    id: 'welcome',
    title: 'Welcome to Mijanur OS',
    iconType: 'computer',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    x: 80,
    y: 40,
    width: 600,
    height: 440,
    zIndex: 10,
  },
  about: {
    id: 'about',
    title: 'About Me — Mijanur Rahman',
    iconType: 'user',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 100,
    y: 50,
    width: 640,
    height: 500,
    zIndex: 1,
  },
  projects: {
    id: 'projects',
    title: 'Projects — C:\\Mijanur\\Projects',
    iconType: 'projects',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 120,
    y: 60,
    width: 820,
    height: 540,
    zIndex: 2,
    data: { selectedProjectId: null, category: 'All' },
  },
  skills: {
    id: 'skills',
    title: 'Skills & Technologies — Control Panel',
    iconType: 'skills',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 140,
    y: 70,
    width: 650,
    height: 480,
    zIndex: 3,
  },
  experience: {
    id: 'experience',
    title: 'Experience & Education — WordPad',
    iconType: 'experience',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 160,
    y: 80,
    width: 680,
    height: 520,
    zIndex: 4,
  },
  resume: {
    id: 'resume',
    title: 'Resume Viewer — Mijanur_Rahman_Resume.pdf',
    iconType: 'resume',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 180,
    y: 90,
    width: 700,
    height: 540,
    zIndex: 5,
  },
  contact: {
    id: 'contact',
    title: 'Contact Me — Outlook Express',
    iconType: 'contact',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 200,
    y: 90,
    width: 580,
    height: 490,
    zIndex: 6,
  },
  terminal: {
    id: 'terminal',
    title: 'MS-DOS Prompt [C:\\MIJANUR]',
    iconType: 'terminal',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 150,
    y: 100,
    width: 620,
    height: 400,
    zIndex: 7,
  },
};

export const WindowManagerProvider = ({ children }) => {
  const [windows, setWindows] = useState(() => {
    // Center the welcome window on initial load according to window dimensions
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      const initial = { ...DEFAULT_WINDOWS };
      if (isMobile) {
        initial.welcome = {
          ...initial.welcome,
          x: 10,
          y: 10,
          width: window.innerWidth - 20,
          height: window.innerHeight - 60,
          isMaximized: true,
        };
      } else {
        initial.welcome = {
          ...initial.welcome,
          x: Math.max(20, Math.floor((window.innerWidth - 600) / 2)),
          y: Math.max(20, Math.floor((window.innerHeight - 440) / 2) - 30),
        };
      }
      return initial;
    }
    return DEFAULT_WINDOWS;
  });

  const [activeWindowId, setActiveWindowId] = useState('welcome');
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [isMuted, setIsMuted] = useState(getSoundMuted());
  const [shutdownMode, setShutdownMode] = useState('none'); // 'none' | 'dialog' | 'off'
  const highestZIndex = useRef(20);

  // Focus a window
  const focusWindow = useCallback((id) => {
    highestZIndex.current += 1;
    const newZ = highestZIndex.current;
    setActiveWindowId(id);
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          zIndex: newZ,
          isMinimized: false,
        },
      };
    });
  }, []);

  // Open window
  const openWindow = useCallback((id, extraData = null) => {
    setIsStartOpen(false);
    playOpenSound();
    highestZIndex.current += 1;
    const newZ = highestZIndex.current;
    setActiveWindowId(id);

    setWindows((prev) => {
      const existing = prev[id] || DEFAULT_WINDOWS[id];
      if (!existing) return prev;

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

      return {
        ...prev,
        [id]: {
          ...existing,
          isOpen: true,
          isMinimized: false,
          isMaximized: isMobile ? true : existing.isMaximized,
          zIndex: newZ,
          data: extraData ? { ...existing.data, ...extraData } : existing.data,
        },
      };
    });
  }, []);

  // Close window
  const closeWindow = useCallback((id) => {
    playCloseSound();
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          isOpen: false,
          isMinimized: false,
        },
      };
    });

    // Determine new active window
    setWindows((latest) => {
      const openRemaining = Object.values(latest).filter(
        (w) => w.id !== id && w.isOpen && !w.isMinimized
      );
      if (openRemaining.length > 0) {
        const top = openRemaining.reduce((prevW, currW) =>
          currW.zIndex > prevW.zIndex ? currW : prevW
        );
        setActiveWindowId(top.id);
      } else {
        setActiveWindowId(null);
      }
      return latest;
    });
  }, []);

  // Minimize window
  const minimizeWindow = useCallback((id) => {
    playClickSound();
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          isMinimized: true,
        },
      };
    });

    // Set new active window among remaining non-minimized
    setWindows((latest) => {
      const openVisible = Object.values(latest).filter(
        (w) => w.id !== id && w.isOpen && !w.isMinimized
      );
      if (openVisible.length > 0) {
        const top = openVisible.reduce((p, c) => (c.zIndex > p.zIndex ? c : p));
        setActiveWindowId(top.id);
      } else {
        setActiveWindowId(null);
      }
      return latest;
    });
  }, []);

  // Maximize or restore window
  const maximizeWindow = useCallback((id) => {
    playClickSound();
    focusWindow(id);
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          isMaximized: !target.isMaximized,
        },
      };
    });
  }, [focusWindow]);

  // Update window position
  const moveWindow = useCallback((id, x, y) => {
    setWindows((prev) => {
      const target = prev[id];
      if (!target) return prev;
      return {
        ...prev,
        [id]: {
          ...target,
          x,
          y,
        },
      };
    });
  }, []);

  // Toggle audio mute
  const toggleMute = useCallback(() => {
    const next = toggleSoundMuted();
    setIsMuted(next);
  }, []);

  // Start menu toggle
  const toggleStartMenu = useCallback(() => {
    playClickSound();
    setIsStartOpen((prev) => !prev);
  }, []);

  // Desktop click deselects icons and closes start menu
  const onDesktopClick = useCallback((e) => {
    if (e.target.closest('.win-icon') === null) {
      setSelectedIconId(null);
    }
    if (e.target.closest('.win-start-menu') === null && e.target.closest('.win-start-btn') === null) {
      setIsStartOpen(false);
    }
  }, []);

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        activeWindowId,
        isStartOpen,
        selectedIconId,
        isMuted,
        shutdownMode,
        setSelectedIconId,
        setIsStartOpen,
        setShutdownMode,
        toggleStartMenu,
        toggleMute,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        moveWindow,
        onDesktopClick,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within WindowManagerProvider');
  }
  return context;
};
