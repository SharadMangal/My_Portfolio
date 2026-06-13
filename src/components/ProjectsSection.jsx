import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "JKLU Eezy",
      tagline: "Campus Utility App",
      slug: "jklu-eezy",
      type: "mobile",
      desc: "Built a full-stack campus utility app with features like contact directory, mess management, lost-and-found, complaints, and study materials. Implemented secure login using JWT & Flutter Secure Storage, AWS S3 for file uploads, and optimized REST APIs for smooth and scalable performance.",
      tech: ["Flutter", "Node.js", "MongoDB", "AWS S3", "JWT"],
      status: "live",
      url: "https://sharadmangal.github.io/JKLUEesy_resume/",
      previewLabel: "LIVE PREVIEW"
    },
    {
      id: 2,
      title: "RestaurantOS",
      tagline: "Premium Restaurant Operating System",
      slug: "restaurant-os",
      type: "web",
      desc: "Built a modern web platform to automate restaurant operations, featuring a fully integrated POS system, live Kitchen Display (KDS), interactive seating planner, and staff QR check-ins. Managed secure user authentication and database architecture.",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "HTML/CSS"],
      status: "live",
      url: "https://sharadmangal.github.io/RESTAURANTOS/",
      previewLabel: "LIVE PREVIEW"
    },
    {
      id: 3,
      title: "Guru",
      tagline: "Voice Assistant App",
      slug: "guru-ai",
      type: "mobile",
      desc: "A Voice Assistant App with ChatGPT & DALL·E integrates conversational AI and image generation to enable users to interact using voice commands and receive intelligent responses along with AI-generated visuals.",
      tech: ["Flutter", "ChatGPT API", "DALL-E API"],
      status: "live",
      url: "https://sharadmangal.github.io/guru/",
      previewLabel: "LIVE PREVIEW"
    },
    {
      id: 4,
      title: "MeBlogs",
      tagline: "Blogging platform",
      slug: "meblogs",
      type: "mobile",
      desc: "A feature-rich platform empowering individuals to share stories and ideas globally. Designed for seamless content creation and discovery, offering a modern and intuitive user experience.",
      tech: ["Flutter", "ChatGPT API", "DALL-E API"],
      status: "live",
      url: "https://sharadmangal.github.io/meBlogs/",
      previewLabel: "LIVE PREVIEW"
    },
    {
      id: 5,
      title: "House of Kasya",
      tagline: "E-commerce Platform",
      slug: "house-of-kasya",
      type: "web",
      desc: "Built a unified e-commerce system integrating data from multiple APIs. Performed data cleaning and analysis for better insights.",
      tech: ["PostgreSQL", "Node.js", "Next.js", "Claude MCP"],
      status: "live",
      url: "https://sharadmangal.github.io/EcomAnalysisResume",
      previewLabel: "LIVE PREVIEW"
    },
    {
      id: 6,
      title: "kids app",
      tagline: "AI-Powered Kids Learning App",
      slug: "kids-app",
      type: "mobile",
      desc: "Built an interactive mobile app for children aged 3–8 that turns real-world exploration into learning adventures. Features include AI camera-based object recognition, smart learning missions, voice guidance, animated mascot interactions, reward system, and progress tracking for engaging child education.",
      tech: ["Flutter", "Supabase", "Gemini Vision", "Google ML Kit", "BLoC", "Rive", "Lottie", "Flutter TTS"],
      status: "live",
      url: "https://sharadmangal.github.io/kids-app/",
      previewLabel: "LIVE PREVIEW"
    }
  ];

  return (
    <section className="projects-section container" id="projects">
      <div className="chapter-label">CHAPTER 05 &mdash; THE COMIC STRIP OF PROJECTS</div>
      <h2 className="section-title">
        every project is<br />
        <span className="italic-serif">a tiny story.</span>
      </h2>
      <p className="section-subtitle">First the problem, then the build.</p>

      <div className="projects-list">
        {projects.map((proj, index) => (
          <div className="project-card" key={proj.id} style={{ marginBottom: index === projects.length - 1 ? '0' : '6rem' }}>
            <div className="project-story hand-drawn-border">
              <div className="project-label-top">PROJECT.0{proj.id} &mdash; THE STORY</div>
              <h3 className="project-tagline">{proj.tagline}</h3>
              <p className="project-desc-text">{proj.desc}</p>
              
              {proj.type === 'mobile' && proj.url && (
                <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(proj.url)}`} alt="Scan to open on phone" style={{ width: '70px', height: '70px', border: '2px solid var(--text-primary)', padding: '4px', backgroundColor: '#f6f5ef' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>SCAN TO OPEN<br/>ON PHONE</span>
                </div>
              )}

              <div className="decorative-dot-proj"></div>
            </div>
            
            <div className="project-visual">
              <div className={proj.type === 'mobile' ? 'mobile-window' : 'browser-window'}>
                
                {proj.type === 'web' ? (
                  <div className="browser-topbar">
                    <div className="browser-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="browser-title">{proj.slug.toUpperCase()}</div>
                    {proj.status === 'live' ? (
                      <a href={proj.url || '#'} target="_blank" rel="noreferrer" className="browser-link" style={{textDecoration: 'none'}}>live preview &#10022;</a>
                    ) : (
                      <div className="browser-link">coming soon</div>
                    )}
                  </div>
                ) : (
                  <div className="mobile-topbar">
                    <div className="mobile-notch"></div>
                  </div>
                )}
                
                <div className={proj.type === 'mobile' ? "mobile-content-image" : "browser-content-image"}>
                  {proj.status === 'live' ? (
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                      <iframe 
                        src={proj.url || 'about:blank'} 
                        title={proj.title}
                        style={{width: '100%', height: '100%', border: 'none'}}
                      />
                      {/* Invisible overlay so click opens new tab instead of interacting with iframe */}
                      <a href={proj.url || '#'} target="_blank" rel="noreferrer" style={{position: 'absolute', inset: 0, zIndex: 10}}></a>
                    </div>
                  ) : (
                    <img 
                      src={`/placeholder-${proj.slug}.png`} 
                      alt={`${proj.slug} mockup`} 
                      onError={(e) => { e.target.src='https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000'; }} 
                    />
                  )}
                  {proj.status === 'coming_soon' && (
                    <div className="preview-label-toast">{proj.previewLabel}</div>
                  )}
                </div>

                <div className="browser-footer">
                  <div className="browser-footer-left">
                    <h4 className="footer-proj-title">{proj.title}</h4>
                    <div className="footer-tech-tags">
                      {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="browser-footer-right">
                    {proj.status === 'coming_soon' ? (
                       <button className="btn-link-status">link &bull; coming soon</button>
                    ) : (
                       proj.type === 'mobile' && (
                         <a href={proj.url || '#'} target="_blank" rel="noreferrer" className="btn-link-status active">live preview &#8599;</a>
                       )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
