'use client';

import React, { useState } from 'react';
import { Monitor } from 'lucide-react';
import RetroOSOverlay from './RetroOSOverlay';

export const RetroDesktopTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Floating Action Button (Only on md+ screens / Desktop only) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center">
        {/* Tooltip */}
        {showTooltip && (
          <div className="mr-3 px-3 py-1.5 bg-[#0f172a] text-white text-xs font-medium rounded-lg shadow-xl border border-emerald-500/30 whitespace-nowrap animate-fade-in flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Switch to Retro Windows OS Mode</span>
          </div>
        )}

        {/* Round Desktop Button */}
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          type="button"
          aria-label="Launch Windows OS Interactive Desktop"
          className="relative group w-14 h-14 rounded-full bg-[#0c0b13] border-2 border-emerald-400 text-emerald-400 flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:scale-108 hover:bg-[#151322] hover:shadow-emerald-500/40 transition-all duration-300 cursor-pointer"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/20 animate-ping pointer-events-none group-hover:bg-emerald-400/30"></span>

          <Monitor className="w-6 h-6 transition-transform group-hover:scale-110" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
        </button>
      </div>

      {/* Windows OS Modal Simulator */}
      <RetroOSOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default RetroDesktopTrigger;

