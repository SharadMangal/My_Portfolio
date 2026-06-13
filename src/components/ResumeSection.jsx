import React, { useState } from 'react';
import './ResumeSection.css';

const ResumeSection = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="resume-section container" id="resume">
      <div className="resume-grid">
        <div className="resume-left">
          <h2 className="section-title">the resume.</h2>
          <p className="section-subtitle">
            if you're the "I'll skim the PDF" type, this one's for you.
          </p>
          <p className="resume-desc">
            One page. Honest. Updated. Click to preview inline, or grab the file &mdash; your call.
          </p>
          
          <div className="resume-actions-container">
            <div className="decorative-dot-small"></div>
            <div className="resume-actions">
              <button className="btn-primary" onClick={() => setShowPreview(!showPreview)}>
                <span className="icon">&#128196;</span> {showPreview ? 'CLOSE PREVIEW' : 'OPEN FULL PREVIEW'}
              </button>
              <a href="/Resume_Sharad.pdf" download className="btn-secondary">
                <span className="icon">&#8681;</span> DOWNLOAD .PDF
              </a>
            </div>
          </div>
        </div>
        
        <div className="resume-right">
          <div className="resume-document-container">
            <div className="tape"></div>
            <div className="resume-document">
              {showPreview ? (
                <iframe src="/Resume_Sharad.pdf" title="Resume Preview" className="pdf-viewer" />
              ) : (
                <div className="resume-placeholder"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
