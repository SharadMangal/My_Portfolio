import React, { useState, useRef, useEffect } from 'react';
import './TerminalSection.css';

const TerminalSection = () => {
  const [history, setHistory] = useState([
    { type: 'command', text: './hello' },
    { type: 'output', text: '+ welcome, recruiter. this is a live terminal.' },
    { type: 'output', text: "+ type 'help' to see the menu." }
  ]);
  const [input, setInput] = useState('');
  const terminalBodyRef = useRef(null);

  // Fix: Instead of scrollIntoView (which jumps the whole page), 
  // we strictly scroll the terminal container's internal scrollTop.
  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmdStr = input.trim().toLowerCase();
    const args = cmdStr.split(' ');
    const cmd = args[0];
    
    if (!cmd) return;

    const newHistory = [...history, { type: 'command', text: input }];
    
    switch(cmd) {
      case 'help':
        newHistory.push({ type: 'output', text: `available commands:
  whoami      — about Sharad
  skills      — list skills
  projects    — list projects
  experience  — work history
  contact     — how to reach me
  resume      — download resume
  clear       — clear the terminal` });
        break;
      case 'whoami':
        newHistory.push({ type: 'output', text: `Sharad Mangal — B.Tech CSE, JK Lakshmipat University.
I build Flutter apps, full-stack web tools, and the occasional AI side quest.
Currently shipping at House of Kasya.` });
        break;
      case 'skills':
        newHistory.push({ type: 'output', text: `mobile      : Flutter, Dart
frontend    : HTML, CSS, JS, Next.js
backend     : Node.js, Express, REST
databases   : MongoDB, PostgreSQL, MySQL, Supabase
languages   : C, C++, Python, Java
ai          : ChatGPT, DALL·E, Claude MCP` });
        break;
      case 'projects':
        newHistory.push({ type: 'output', text: `projects/
  01. JKLU Eezy                    — A campus, in your pocket.
  02. Guru                         — Voice assistant + DALL·E imagination.
  03. MeBlogs                      — Stories with AI-illustrated covers.
  04. House of Kasya — Ecom Engine — Many APIs, one storefront.
  05. Library Management System    — The classic, done right in Java.
tip: type 'open <slug>' to jump. e.g. 'open jklu-eezy'` });
        break;
      case 'resume':
        window.open('/Resume_Sharad.pdf', '_blank');
        newHistory.push({ type: 'output', text: 'opening resume...' });
        break;
      case 'experience':
      case 'contact':
        newHistory.push({ type: 'output', text: 'Please scroll through the site for more details!' });
        break;
      case 'open':
        if (args[1]) {
           newHistory.push({ type: 'output', text: `Opening project: ${args[1]}... (links coming soon)` });
        } else {
           newHistory.push({ type: 'output', text: `usage: open <slug>` });
        }
        break;
      case 'clear':
        setHistory([
          { type: 'command', text: './hello' },
          { type: 'output', text: '+ welcome, recruiter. this is a live terminal.' },
          { type: 'output', text: "+ type 'help' to see the menu." }
        ]);
        setInput('');
        return;
      case 'sudo':
        newHistory.push({ type: 'output', text: 'nice try, recruiter. permission denied.' });
        break;
      default:
        newHistory.push({ type: 'output', text: `zsh: command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section className="terminal-section container" id="work">
      <div className="terminal-header">
        <div className="terminal-title-area">
          <div className="chapter-label">CHAPTER 02 &mdash; THE INTERACTIVE LOBBY</div>
          <h2 className="section-title">talk to my portfolio.</h2>
          <p className="section-subtitle">go on, type something &rarr;</p>
        </div>
        <div className="terminal-hints">
          <span className="hint-label">try:</span>
          <span className="hint-commands">help &bull; whoami &bull; projects &bull; resume</span>
        </div>
      </div>

      <div className="terminal-window" onClick={() => document.getElementById('terminal-input').focus()}>
        <div className="terminal-topbar">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title-text">sharad@portfolio &mdash; zsh &mdash; 80&times;24</div>
        </div>
        <div className="terminal-body" ref={terminalBodyRef}>
          {history.map((line, idx) => (
            <div key={idx} className={`terminal-line ${line.type}`}>
              {line.type === 'command' && <span className="prompt">sharad@portfolio:~$</span>}
              {line.type === 'output' && !line.text.includes('available commands') && !line.text.includes('projects/') && !line.text.includes('mobile      :') && !line.text.includes('Sharad Mangal —') && <span className="accent">+</span>}
              <span className="content">{line.text}</span>
            </div>
          ))}
          
          <form className="terminal-line input-line" onSubmit={handleCommand}>
            <span className="prompt">sharad@portfolio:~$</span>
            <input 
              id="terminal-input"
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
        
        <div className="terminal-decoration-circle"></div>
      </div>
    </section>
  );
};

export default TerminalSection;
