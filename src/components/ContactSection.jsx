import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sharadmangal1010@gmail.com', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <div className="chapter-label">CHAPTER 08 &mdash; SAY HI</div>
          <h2 className="section-title">
            got an idea?<br />
            <span className="italic-serif">let's build.</span>
          </h2>
          <p className="contact-subtitle">internship, freelance, or just to nerd out.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">&#9993;</span>
              <span>sharadmangal1010@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">&#128222;</span>
              <span>+91-6377789034</span>
            </div>
            <div className="contact-item">
              <span className="icon">&#128205;</span>
              <span>Jaipur, India</span>
            </div>
          </div>
          
          <div className="contact-socials">
            <a href="https://github.com/SharadMangal" target="_blank" rel="noreferrer" className="social-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sharad-mangal-706626258/" target="_blank" rel="noreferrer" className="social-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="contact-right">
          <div className="contact-form-container hand-drawn-border">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              {status === 'success' && (
                <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  &#10004; Request sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  &#10008; Something went wrong. Please try again.
                </div>
              )}
              <div className="form-group">
                <label>YOUR NAME</label>
                <input type="text" name="name" placeholder="e.g., Riya Sharma" required />
              </div>
              <div className="form-group">
                <label>YOUR EMAIL</label>
                <input type="email" name="email" placeholder="you@company.com" required />
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea name="message" placeholder="tell me about what you're building..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                <span className="icon">&#10148;</span> {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
          <div className="decorative-dot-contact"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
