import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Marquee from './components/Marquee';
import TerminalSection from './components/TerminalSection';
import AboutSection from './components/AboutSection';
import ToolbeltSection from './components/ToolbeltSection';
import ProjectsSection from './components/ProjectsSection';

import ExperienceSection from './components/ExperienceSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <Marquee />
      <TerminalSection />
      <AboutSection />
      <ToolbeltSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
      
      <Chatbot />

      <footer className="footer container" style={{textAlign: 'center', padding: '5rem 0', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.8', letterSpacing: '0.05em'}}>
        <div className="footer-content">
          <p style={{ fontWeight: '600', color: 'var(--bg-dark)' }}>DESIGNED + BUILT BY SHARAD &middot; 2026</p>
          <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-script)', fontSize: '1.2rem', margin: '0.5rem 0' }}>made with caffeine + curiosity &#10022;</p>
          <p>v1.0 &mdash; react &middot; fastapi &middot; mongo &middot; claude</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
