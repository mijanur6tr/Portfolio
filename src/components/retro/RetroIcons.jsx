import React from 'react';

// Authentic Windows 95 4-color tiled flag logo
export const WinLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Red tile */}
    <path d="M1 2.5L7 1V7H1V2.5Z" fill="#ff3333" />
    {/* Green tile */}
    <path d="M8 1L15 2.2V7H8V1Z" fill="#33cc33" />
    {/* Blue tile */}
    <path d="M1 8H7V14L1 12.5V8Z" fill="#0066ff" />
    {/* Yellow tile */}
    <path d="M8 8H15V12.8L8 14V8Z" fill="#ffcc00" />
    {/* Pixel trailing dots */}
    <rect x="0" y="4" width="1" height="1" fill="#000" />
    <rect x="15" y="4" width="1" height="1" fill="#000" />
  </svg>
);

// Classic My Computer / Desktop Icon
export const ComputerIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Monitor housing */}
    <rect x="4" y="3" width="24" height="18" fill="#d4d0c8" stroke="#000000" strokeWidth="1" />
    <rect x="5" y="4" width="22" height="1" fill="#ffffff" />
    <rect x="5" y="4" width="1" height="16" fill="#ffffff" />
    <rect x="27" y="4" width="1" height="17" fill="#808080" />
    <rect x="5" y="20" width="23" height="1" fill="#808080" />
    {/* Screen */}
    <rect x="7" y="6" width="18" height="12" fill="#008080" stroke="#000000" strokeWidth="1" />
    <rect x="8" y="7" width="16" height="1" fill="#004040" />
    {/* Screen contents - mini windows */}
    <rect x="10" y="9" width="7" height="5" fill="#ffffff" stroke="#000080" strokeWidth="0.5" />
    <rect x="10" y="9" width="7" height="1.5" fill="#000080" />
    {/* Monitor neck & stand */}
    <rect x="13" y="21" width="6" height="3" fill="#808080" stroke="#000" strokeWidth="0.5" />
    <rect x="8" y="24" width="16" height="4" fill="#d4d0c8" stroke="#000000" strokeWidth="1" />
    <rect x="9" y="25" width="14" height="1" fill="#ffffff" />
    <rect x="23" y="25" width="1" height="2.5" fill="#808080" />
    {/* Power LED */}
    <rect x="21" y="18" width="1.5" height="1" fill="#00ff00" />
  </svg>
);

// About Me / User Profile Card
export const UserIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Card base */}
    <rect x="4" y="4" width="24" height="24" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <rect x="5" y="5" width="22" height="1" fill="#ffffff" />
    <rect x="27" y="5" width="1" height="22" fill="#808080" />
    {/* Blue banner top */}
    <rect x="5" y="5" width="22" height="6" fill="#000080" />
    <rect x="7" y="7" width="8" height="2" fill="#ffffff" />
    {/* Avatar photo square */}
    <rect x="7" y="14" width="8" height="9" fill="#008080" stroke="#808080" strokeWidth="1" />
    <circle cx="11" cy="17" r="2" fill="#ffd700" />
    <path d="M8.5 22C8.5 20.5 9.5 19.5 11 19.5C12.5 19.5 13.5 20.5 13.5 22H8.5Z" fill="#ffffff" />
    {/* Text lines */}
    <rect x="17" y="14" width="8" height="1.5" fill="#000080" />
    <rect x="17" y="17" width="8" height="1.5" fill="#808080" />
    <rect x="17" y="20" width="6" height="1.5" fill="#808080" />
    <rect x="17" y="23" width="7" height="1.5" fill="#808080" />
  </svg>
);

// Projects / Explorer Folder Icon
export const FolderProjectsIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Back tab */}
    <path d="M4 6H13L15 9H27V12H4V6Z" fill="#d49b00" stroke="#000" strokeWidth="1" />
    {/* White sheet protruding */}
    <rect x="8" y="8" width="16" height="10" fill="#ffffff" stroke="#808080" strokeWidth="1" />
    <rect x="10" y="10" width="8" height="1" fill="#000080" />
    <rect x="10" y="12" width="12" height="1" fill="#808080" />
    <rect x="10" y="14" width="10" height="1" fill="#808080" />
    {/* Front folder flap */}
    <path d="M3 11H29L26 26H5L3 11Z" fill="#ffcc00" stroke="#000000" strokeWidth="1" />
    <line x1="4" y1="12" x2="28" y2="12" stroke="#ffe066" strokeWidth="1" />
    {/* Subtle folder shadow */}
    <line x1="5.5" y1="25" x2="25.5" y2="25" stroke="#997a00" strokeWidth="1" />
    {/* Code brackets symbol on folder */}
    <path d="M12 17L10 19L12 21" stroke="#804000" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M20 17L22 19L20 21" stroke="#804000" strokeWidth="1.5" strokeLinecap="square" />
    <line x1="17" y1="17" x2="15" y2="21" stroke="#804000" strokeWidth="1.2" />
  </svg>
);

// Skills / Control Panel Tools Icon
export const SkillsSetupIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gear background */}
    <circle cx="16" cy="16" r="10" fill="#a0a0a0" stroke="#000" strokeWidth="1" />
    <circle cx="16" cy="16" r="4" fill="#d4d0c8" stroke="#000" strokeWidth="1" />
    {/* Gear teeth */}
    <rect x="14.5" y="4" width="3" height="4" fill="#a0a0a0" stroke="#000" strokeWidth="0.8" />
    <rect x="14.5" y="24" width="3" height="4" fill="#a0a0a0" stroke="#000" strokeWidth="0.8" />
    <rect x="4" y="14.5" width="4" height="3" fill="#a0a0a0" stroke="#000" strokeWidth="0.8" />
    <rect x="24" y="14.5" width="4" height="3" fill="#a0a0a0" stroke="#000" strokeWidth="0.8" />
    {/* Crossed Screwdriver & Wrench */}
    <path d="M7 25L13 19L15 21L9 27Z" fill="#ff4444" stroke="#000" strokeWidth="0.8" />
    <line x1="13" y1="19" x2="24" y2="8" stroke="#d4d0c8" strokeWidth="2.5" />
    <path d="M22 6L25 9L27 7L24 4Z" fill="#808080" stroke="#000" strokeWidth="0.8" />
  </svg>
);

// Experience / WordPad Document Icon
export const DocumentIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sheet of paper */}
    <path d="M6 3H20L26 9V29H6V3Z" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    {/* Folded corner */}
    <path d="M20 3V9H26" fill="#d4d0c8" stroke="#000000" strokeWidth="1" />
    {/* Header / Lines */}
    <rect x="9" y="8" width="8" height="2" fill="#000080" />
    <rect x="9" y="12" width="14" height="1.5" fill="#808080" />
    <rect x="9" y="15" width="14" height="1.5" fill="#808080" />
    <rect x="9" y="18" width="14" height="1.5" fill="#808080" />
    <rect x="9" y="21" width="10" height="1.5" fill="#808080" />
    <rect x="9" y="24" width="12" height="1.5" fill="#008080" />
    {/* Bookmark/Briefcase badge */}
    <circle cx="21" cy="23" r="3.5" fill="#ff9900" stroke="#000" strokeWidth="0.8" />
    <rect x="19" y="22" width="4" height="2" fill="#ffffff" />
  </svg>
);

// Resume / PDF Icon
export const ResumePdfIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Paper */}
    <path d="M6 3H20L26 9V29H6V3Z" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <path d="M20 3V9H26" fill="#e0e0e0" stroke="#000000" strokeWidth="1" />
    {/* Red PDF banner */}
    <rect x="4" y="13" width="22" height="8" fill="#cc0000" stroke="#000" strokeWidth="0.8" />
    <text x="7" y="19" fill="#ffffff" fontSize="5.5" fontWeight="bold" fontFamily="monospace">PDF</text>
    {/* Document lines */}
    <rect x="9" y="7" width="8" height="1.5" fill="#808080" />
    <rect x="9" y="23" width="14" height="1.5" fill="#808080" />
    <rect x="9" y="26" width="10" height="1.5" fill="#808080" />
    {/* Download arrow badge */}
    <circle cx="23" cy="24" r="3.5" fill="#008000" stroke="#000" strokeWidth="0.8" />
    <path d="M23 22V26M21.5 24.5L23 26L24.5 24.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="square" />
  </svg>
);

// Contact / Outlook Mail Icon
export const ContactMailIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Back Envelope */}
    <rect x="4" y="8" width="24" height="17" fill="#ffffcc" stroke="#000000" strokeWidth="1" />
    {/* Stamp */}
    <rect x="22" y="10" width="4" height="5" fill="#3366cc" stroke="#808080" strokeWidth="0.5" />
    {/* Envelope flap open letter */}
    <path d="M5 9L16 18L27 9" stroke="#b39900" strokeWidth="1.5" />
    {/* Lines on letter */}
    <rect x="7" y="19" width="10" height="1.5" fill="#808080" />
    <rect x="7" y="21.5" width="7" height="1.5" fill="#808080" />
  </svg>
);

// MS-DOS Prompt / Terminal Icon
export const TerminalIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* CRT monitor frame */}
    <rect x="3" y="4" width="26" height="20" fill="#000000" stroke="#808080" strokeWidth="1" />
    <rect x="4" y="5" width="24" height="18" fill="#111111" />
    {/* Green prompt */}
    <text x="6" y="12" fill="#00ff00" fontSize="5" fontFamily="monospace" fontWeight="bold">C:\&gt;</text>
    <rect x="18" y="8.5" width="3" height="4" fill="#00ff00" />
    <text x="6" y="18" fill="#00ff00" fontSize="4" fontFamily="monospace">READY</text>
    {/* Monitor base */}
    <rect x="12" y="24" width="8" height="3" fill="#808080" stroke="#000" strokeWidth="0.5" />
    <rect x="7" y="27" width="18" height="2" fill="#c0c0c0" stroke="#000" strokeWidth="0.8" />
  </svg>
);

// Recycle Bin Icon
export const RecycleBinIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bin Rim */}
    <ellipse cx="16" cy="7" rx="10" ry="2.5" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
    {/* Bin Body */}
    <path d="M6 7L9 26C9 27.5 12 28.5 16 28.5C20 28.5 23 27.5 23 26L26 7" fill="#808080" stroke="#000" strokeWidth="1" />
    {/* Wire mesh lines */}
    <path d="M10 10L22 25M22 10L10 25M16 8V27M7.5 17H24.5" stroke="#404040" strokeWidth="0.8" />
    {/* Paper sticking out */}
    <path d="M12 6L15 2L18 6H12Z" fill="#ffffff" stroke="#808080" strokeWidth="0.8" />
  </svg>
);

// System Tray Speaker Icon
export const SpeakerIcon = ({ className = "w-4 h-4", muted = false }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5H5L9 2V14L5 11H2V5Z" fill="#000000" />
    {!muted ? (
      <>
        <path d="M11 5C12 6 12 10 11 11" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M13 3C15 5 15 11 13 13" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" />
      </>
    ) : (
      <>
        <line x1="11" y1="5" x2="15" y2="11" stroke="#cc0000" strokeWidth="1.5" />
        <line x1="15" y1="5" x2="11" y2="11" stroke="#cc0000" strokeWidth="1.5" />
      </>
    )}
  </svg>
);

// Window Controls
export const MinimizeGlyph = () => (
  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
    <rect x="1" y="7" width="8" height="2" fill="#000000" />
  </svg>
);

export const MaximizeGlyph = () => (
  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
    <rect x="1" y="1" width="8" height="8" stroke="#000000" strokeWidth="1.5" />
    <rect x="1" y="1" width="8" height="2" fill="#000000" />
  </svg>
);

export const RestoreGlyph = () => (
  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
    <rect x="3" y="1" width="6" height="6" stroke="#000000" strokeWidth="1" />
    <rect x="3" y="1" width="6" height="1.5" fill="#000000" />
    <rect x="1" y="3" width="6" height="6" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
    <rect x="1" y="3" width="6" height="1.5" fill="#000000" />
  </svg>
);

export const CloseGlyph = () => (
  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
    <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="#000000" strokeWidth="1.8" strokeLinecap="square" />
  </svg>
);

export const InfoIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="10" fill="#000080" />
    <text x="12" y="16" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">i</text>
  </svg>
);
