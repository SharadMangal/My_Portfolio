import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-content">
        <div className="chapter-label">CHAPTER 01 &mdash; MEET THE BUILDER</div>
        <h1 className="hero-title">
          I turn messy<br />
          problems <span className="italic-serif">into</span><br />
          <span className="highlight-text">shippable apps.</span>
        </h1>
        
        <div className="hero-description">
          <p className="greeting">Hi, I'm Sharad.</p>
          <p>I build things that solve real problems &mdash; usually for phones, sometimes for browsers, occasionally for the universe.</p>
        </div>

        <div className="hero-actions">
          <button className="btn-primary">SEE THE WORK &rarr;</button>
          <button className="btn-secondary">ASK MY AI +</button>
        </div>

        <div className="hero-socials">
          <span className="social-text">Find me &rarr;</span>
          <div className="social-links">
            <a href="mailto:contact@sharadmangal.com" className="social-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://github.com" className="social-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com" className="social-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="sticky-note">
          <div className="tape"></div>
          
          <div className="illustration-wrapper">
             <div className="speech-bubble hand-drawn-border">
               <strong>PROBLEM</strong><br />campus chaos?
               <div className="speech-tail"></div>
             </div>
             
             <div className="person">
               <div className="head">
                 <div className="eyes"><span></span><span></span></div>
                 <div className="mouth"></div>
               </div>
               <div className="body"></div>
             </div>
             
             <div className="desk">
               <div className="laptop">
                 <div className="screen">
                   <span style={{color: '#9fb29e'}}>&gt;</span> shipping...<br />
                   <span style={{color: '#888'}}>npm run build &check;</span>
                 </div>
               </div>
               <div className="mug">
                  <div className="mug-handle"></div>
               </div>
               <div className="desk-line"></div>
               <div className="desk-leg left"></div>
               <div className="desk-leg right"></div>
             </div>
             
             <div className="tech-stack-left">
               <div className="tech-box">flutter <span className="dot"></span></div>
               <div className="tech-box">node.js <span className="dot"></span></div>
             </div>
             
             <div className="tech-stack-right">
               <div className="tech-box">mongo <span className="dot"></span></div>
               <div className="tech-box">claude <span className="dot"></span></div>
             </div>

             <div className="solution-box hand-drawn-border-alt">
               <div className="solution-title">SOLUTION.app</div>
               <div className="solution-content">
                  <div className="icon">S</div>
                  <div className="solution-text">
                    ship it.<br />
                    <span className="status-code">&#123; status: 200 &#125;</span>
                  </div>
               </div>
             </div>
             
             {/* Lines pointing */}
             <svg className="connecting-lines" width="100%" height="100%">
               <path d="M 230 180 Q 250 150 270 200" fill="none" stroke="#1e1e1e" strokeWidth="1.5" />
               <path d="M 320 220 L 370 200" fill="none" stroke="#1e1e1e" strokeWidth="1.5" />
             </svg>
          </div>
          
          <div className="quote">"every product is a problem in a costume."</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
