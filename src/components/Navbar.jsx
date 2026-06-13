import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-brand">
        <div className="navbar-logo">S</div>
        <div className="navbar-title-wrapper">
          <div className="navbar-title">Sharad Mangal</div>
          <div className="navbar-subtitle">APP DEV &bull; PROBLEM SOLVER</div>
        </div>
      </div>
      <div className="navbar-links">
        <a href="#about">ABOUT</a>
        <a href="#work">WORK</a>
        <a href="#projects">PROJECTS</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#resume">RESUME</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
