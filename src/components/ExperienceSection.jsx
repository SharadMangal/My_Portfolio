import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section className="experience-section container" id="experience">
      <h2 className="section-title">where I've shipped.</h2>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        <div className="timeline-item">
          <div className="timeline-node"></div>
          <div className="experience-card hand-drawn-border">
            <div className="experience-header">
              <h3 className="company-name">House of Kasya</h3>
              <span className="experience-date">MAR 2024 &mdash; MAY 2024 &bull;</span>
            </div>
            <p className="job-title">Developer</p>
            <div className="job-desc" style={{ fontSize: '0.9rem' }}>
              <ul>
                <li><strong>E-commerce Platform:</strong> Built a unified e-commerce system integrating data from multiple APIs.</li>
                <li><strong>Data Handling:</strong> Performed data cleaning and analysis for better insights.</li>
              </ul>
            </div>
            <div className="experience-footer">
              <div className="tech-tags">
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Claude MCP</span>
              </div>
              <a href="https://sharadmangal.github.io/EcomAnalysisResume" target="_blank" rel="noreferrer" className="artifact-link">view artifact &#8599;</a>
            </div>
            <div className="decorative-dot"></div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-node"></div>
          <div className="experience-card hand-drawn-border-alt">
            <div className="experience-header">
              <h3 className="company-name">Growth Assist</h3>
              <span className="experience-date">MAY 2024 &mdash; JUL 2024 &bull; REMOTE</span>
            </div>
            <p className="job-title">Full Stack Development Intern</p>
            <div className="job-desc" style={{ fontSize: '0.9rem' }}>
              <ul>
                <li><strong>UI Modernization:</strong> Improved landing interface using HTML and CSS for better user experience.</li>
                <li><strong>API Integration:</strong> Integrated third-party APIs to enhance system functionality and efficiency.</li>
              </ul>
            </div>
            <div className="experience-footer">
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
