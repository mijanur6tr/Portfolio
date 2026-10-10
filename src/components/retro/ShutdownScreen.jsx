import React, { useState } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { ComputerIcon, WinLogo } from './RetroIcons';
import { playStartupChime } from '../../utils/sound';

export const ShutdownScreen = () => {
  const { shutdownMode, setShutdownMode } = useWindowManager();
  const [selectedOption, setSelectedOption] = useState('shutdown');

  if (shutdownMode === 'none') return null;

  if (shutdownMode === 'dialog') {
    return (
      <div className="fixed inset-0 bg-black/40 z-[110000] flex items-center justify-center p-4 select-none">
        <div className="win-window-frame w-[360px] bg-[#c0c0c0] shadow-2xl flex flex-col">
          {/* Title Bar */}
          <div className="h-6 px-1.5 win-titlebar-active flex items-center justify-between text-white text-xs font-bold">
            <div className="flex items-center gap-1.5">
              <ComputerIcon className="w-3.5 h-3.5" />
              <span>Shut Down Windows</span>
            </div>
            <button
              type="button"
              onClick={() => setShutdownMode('none')}
              className="win-control-btn"
            >
              &times;
            </button>
          </div>

          {/* Dialog Body */}
          <div className="p-4 flex flex-col gap-3 text-xs text-gray-900">
            <div className="flex items-start gap-3">
              <ComputerIcon className="w-10 h-10 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">
                  What would you like the computer to do?
                </p>
                <div className="mt-2.5 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="shutdown_action"
                      checked={selectedOption === 'shutdown'}
                      onChange={() => setSelectedOption('shutdown')}
                    />
                    <span>Shut down the computer?</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="shutdown_action"
                      checked={selectedOption === 'restart'}
                      onChange={() => setSelectedOption('restart')}
                    />
                    <span>Restart the computer?</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-end gap-2 pt-3 border-t border-gray-300">
              <button
                type="button"
                onClick={() => {
                  if (selectedOption === 'restart') {
                    setShutdownMode('none');
                    playStartupChime();
                  } else {
                    setShutdownMode('off');
                  }
                }}
                className="win-btn font-bold px-4 py-1 text-xs"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setShutdownMode('none')}
                className="win-btn px-4 py-1 text-xs"
              >
                No
              </button>
              <button
                type="button"
                onClick={() => alert('Windows 95 Portfolio Environment by Mijanur Rahman.')}
                className="win-btn px-4 py-1 text-xs"
              >
                Help
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // shutdownMode === 'off'
  return (
    <div className="fixed inset-0 bg-black z-[120000] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-md space-y-6">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#ff9900] tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(255,153,0,0.4)]">
          It's now safe to turn off your computer.
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm font-sans">
          Thank you for visiting Mijanur Rahman's interactive desktop portfolio.
        </p>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setShutdownMode('none');
              playStartupChime();
            }}
            className="win-btn font-bold text-xs py-2 px-6 bg-[#c0c0c0] text-gray-900 shadow-lg hover:bg-white"
          >
            Restart Windows 95
          </button>
        </div>
      </div>
    </div>
  );
};
