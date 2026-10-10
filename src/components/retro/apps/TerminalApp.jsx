import React, { useState, useRef, useEffect } from 'react';
import { useWindowManager } from '../../../context/WindowManagerContext';
import { projectData } from '../../../assets';

export const TerminalApp = () => {
  const { openWindow, closeWindow } = useWindowManager();
  const [history, setHistory] = useState([
    { text: 'Microsoft(R) Windows 95', type: 'system' },
    { text: '(C)Copyright Microsoft Corp 1981-1995.', type: 'system' },
    { text: 'Mijanur Rahman Portfolio Environment v1.0', type: 'system' },
    { text: "Type 'help' or 'dir' to list available commands.", type: 'system' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim().toLowerCase();
    const newHistory = [...history, { text: `C:\\MIJANUR> ${inputVal}`, type: 'input' }];

    if (cmd === 'help' || cmd === '?') {
      newHistory.push(
        { text: 'Available commands:', type: 'output' },
        { text: '  dir        - List directory contents', type: 'output' },
        { text: '  about      - Display professional summary', type: 'output' },
        { text: '  projects   - List portfolio projects', type: 'output' },
        { text: '  skills     - List technical skill stack', type: 'output' },
        { text: '  contact    - Display direct contact methods', type: 'output' },
        { text: '  open <app> - Open window (e.g. open projects, open resume)', type: 'output' },
        { text: '  cls        - Clear screen', type: 'output' },
        { text: '  exit       - Close MS-DOS Prompt', type: 'output' }
      );
    } else if (cmd === 'dir') {
      newHistory.push(
        { text: ' Volume in drive C has no label.', type: 'output' },
        { text: ' Directory of C:\\MIJANUR', type: 'output' },
        { text: ' ', type: 'output' },
        { text: ' ABOUT    TXT      1,420  05-10-26  12:00p', type: 'output' },
        { text: ' PROJECTS EXE     18,432  05-10-26  12:00p', type: 'output' },
        { text: ' SKILLS   DAT      4,096  05-10-26  12:00p', type: 'output' },
        { text: ' RESUME   PDF    198,240  05-10-26  12:00p', type: 'output' },
        { text: ' CONTACT  BAT        512  05-10-26  12:00p', type: 'output' },
        { text: '         5 File(s)    222,700 bytes', type: 'output' }
      );
    } else if (cmd === 'about' || cmd === 'whoami') {
      newHistory.push({
        text: 'Mijanur Rahman - Full-Stack Developer & CTO @ MAJHI. Engineering student at KUET.',
        type: 'output',
      });
    } else if (cmd === 'projects') {
      newHistory.push(
        { text: 'Projects in database:', type: 'output' },
        ...projectData.map((p) => ({
          text: ` - [${p.id}] ${p.title} (${p.technologies.slice(0, 3).join(', ')})`,
          type: 'output',
        }))
      );
    } else if (cmd === 'skills') {
      newHistory.push({
        text: 'Stack: React, Next.js, Node.js, Express, TypeScript, PostgreSQL, MongoDB, Prisma, AstraDB, RAG.',
        type: 'output',
      });
    } else if (cmd === 'contact') {
      newHistory.push(
        { text: 'Email: mijanrhdev@gmail.com', type: 'output' },
        { text: 'WhatsApp: +8801642674330', type: 'output' },
        { text: 'GitHub: https://github.com/mijanur6tr', type: 'output' }
      );
    } else if (cmd.startsWith('open ')) {
      const app = cmd.replace('open ', '').trim();
      if (['about', 'projects', 'skills', 'experience', 'resume', 'contact'].includes(app)) {
        openWindow(app);
        newHistory.push({ text: `Launching ${app}...`, type: 'output' });
      } else {
        newHistory.push({ text: `Unknown application: ${app}`, type: 'output' });
      }
    } else if (cmd === 'cls' || cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'exit') {
      closeWindow('terminal');
      setInputVal('');
      return;
    } else if (cmd !== '') {
      newHistory.push({
        text: `Bad command or file name: '${inputVal}'. Type 'help' for available commands.`,
        type: 'output',
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="flex flex-col h-full bg-black text-[#00ff00] font-mono text-xs p-3 overflow-y-auto select-text">
      <div className="space-y-0.5 leading-relaxed">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={
              item.type === 'input'
                ? 'text-white'
                : item.type === 'system'
                ? 'text-gray-400'
                : 'text-[#00ff00]'
            }
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Input Line */}
      <div className="flex items-center gap-1 mt-2">
        <span className="text-white shrink-0">C:\MIJANUR&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
          className="bg-transparent text-[#00ff00] focus:outline-none flex-1 border-none font-mono text-xs"
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};
