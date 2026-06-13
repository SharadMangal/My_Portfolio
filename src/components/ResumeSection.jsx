import React from 'react';
import './ResumeSection.css';

const ResumeSection = () => {

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
              <a href="https://drive.google.com/file/d/1M_s1p7whULCrie9HGXfWiuYPakcsYP_y/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary">
                <span className="icon">&#128196;</span> OPEN FULL IN NEW TAB
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1M_s1p7whULCrie9HGXfWiuYPakcsYP_y" className="btn-secondary">
                <span className="icon">&#8681;</span> DOWNLOAD .PDF
              </a>
            </div>
          </div>
        </div>
        
        <div className="resume-right">
          <div className="resume-document-container">
            <div className="tape"></div>
            <div className="resume-document">
              <iframe src="https://drive.google.com/file/d/1M_s1p7whULCrie9HGXfWiuYPakcsYP_y/preview" title="Resume Preview" className="pdf-viewer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
