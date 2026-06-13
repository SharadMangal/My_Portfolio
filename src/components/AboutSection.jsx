import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section container" id="about">
      <div className="about-grid">
        <div className="about-left">
          <div className="chapter-label">CHAPTER 03 &mdash; THE HUMAN</div>
          <h2 className="section-title">
            a quick<br />
            <span className="italic-serif">field-note</span> about me.
          </h2>
          <p className="section-subtitle">basically: a builder who can't sit still.</p>
        </div>
        
        <div className="about-right">
          <p>
            I'm a <strong>final-year CSE student</strong> at JK Lakshmipat University, Jaipur &mdash; and an <strong>app developer at heart</strong>. Most of my best work lives on phones (Flutter), but I'm equally at home spinning up Node APIs, wiring Mongo, or wrangling Next.js + Postgres for an e-commerce engine.
          </p>
          <p>
            What I actually love isn't the stack &mdash; it's the puzzle. I'll happily spend a weekend reverse-engineering something just to understand it. JKLU Eezy started because I watched a junior get lost on campus. Guru started because I wanted an AI that could draw what it said.
          </p>
          <p>
            I've shipped for <strong>Growth Assist</strong> (remote intern) and currently build at <strong>House of Kasya</strong>. Off-keyboard I led a 35-person team for the JKLU Marathon and an outstation trip for 40 students &mdash; so yes, I can be trusted with deadlines and humans.
          </p>
          
          <div className="signature">
            &mdash; Sharad <span className="pen-icon">&#9997;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
