import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const text = "FLUTTER • DART • NODE.JS • EXPRESS • MONGODB • POSTGRES • NEXT.JS • REACT • AWS S3 • JWT • CLOUDFLARE • ";
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
