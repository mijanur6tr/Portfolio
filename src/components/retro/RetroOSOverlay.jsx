'use client';

import React, { useEffect } from 'react';
import { WindowManagerProvider, useWindowManager } from '../../context/WindowManagerContext';
import { Desktop } from './Desktop';
import { X, ArrowLeft, Monitor } from 'lucide-react';

const RetroDesktopInner = ({ onClose }) => {
  const { openWindow } = useWindowManager();

  useEffect(() => {
    // Open welcome window on initial load
    openWindow('welcome');
  }, [openWindow]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#008080] flex flex-col retro-container">
      {/* Top Banner to exit retro mode */}
      <div className="bg-[#111827] text-white px-4 py-2 border-b border-gray-700 flex items-center justify-between z-50 text-xs shadow-md">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-emerald-400">Windows 95 Interactive Simulator Mode</span>
          <span className="text-gray-400 hidden sm:inline">— Press <kbd className="bg-gray-800 px-1.5 py-0.5 rounded text-[10px] text-gray-300 border border-gray-600">ESC</kbd> or click return anytime</span>
        </div>
        <button
          onClick={onClose}
          type="button"
          className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-3 py-1 rounded text-xs transition-colors shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Modern Web</span>
        </button>
      </div>

      {/* Retro Desktop Area */}
      <div className="relative flex-1 w-full h-[calc(100vh-41px)] overflow-hidden">
        <Desktop />
      </div>
    </div>
  );
};

export const RetroOSOverlay = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('in-retro-mode');
    } else {
      document.body.classList.remove('in-retro-mode');
    }
    return () => {
      document.body.classList.remove('in-retro-mode');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <WindowManagerProvider>
      <RetroDesktopInner onClose={onClose} />
    </WindowManagerProvider>
  );
};

export default RetroOSOverlay;

