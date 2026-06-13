import React from 'react';
import './ToolbeltSection.css';

const ToolbeltSection = () => {
  const tools = [
    { title: 'MOBILE', items: ['Flutter', 'Dart'] },
    { title: 'FRONTEND', items: ['HTML', 'CSS', 'JavaScript', 'Next.js'] },
    { title: 'BACKEND', items: ['Node.js', 'Express', 'REST APIs'] },
    { title: 'DATABASES', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'] },
    { title: 'LANGUAGES', items: ['C', 'C++', 'Python', 'Java'] },
    { title: 'CLOUD & AUTH', items: ['AWS S3', 'JWT'] },
    { title: 'AI / LLM', items: ['ChatGPT API', 'DALL-E', 'Claude MCP'] },
    { title: 'CURIOUS ABOUT', items: ['Unreal Engine', 'AR/VR', 'Blockchain'] }
  ];

  return (
    <section className="toolbelt-section container">
      <div className="toolbelt-header">
        <h2 className="section-title">the tool-belt.</h2>
        <p className="toolbelt-subtitle">picked up over ~3 years</p>
      </div>
      
      <div className="toolbelt-grid">
        {tools.map((group, idx) => (
          <div key={idx} className={`tool-card ${idx % 2 === 0 ? 'hand-drawn-border' : 'hand-drawn-border-alt'}`}>
            <div className="tool-label">{group.title}</div>
            <ul className="tool-list">
              {group.items.map((item, i) => (
                <li key={i}><span className="bullet">&#9656;</span> {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolbeltSection;
