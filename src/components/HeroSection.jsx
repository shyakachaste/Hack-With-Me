import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay" />
      <div className="hero-content">
        <h1>Hack With Me</h1>
        <p className="subtext">Join the largest in-person high school hackathon in Rwanda —  24 hours of coding  cool projects with others.</p>
        <p className="date">Next Edition Coming Soon • Let’s build something awesome together.</p>
        <form className="newsletter">
          <input type="email" placeholder="Sign up to get updates on the next edition" />
          <button type="submit">Submit</button>
        </form>
        <a href="/sponsors" className="sponsor-link">Interested in becoming a sponsor?</a>
      </div>
    </section>
  );
};

export default HeroSection;
