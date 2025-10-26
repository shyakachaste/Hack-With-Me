import React from 'react';
import './Sponsors.css';
import linuxFoundationLogo from '../assets/sponsors/thelinuxfoundation.png';
import githubEducationLogo from '../assets/sponsors/github-education.png';
import inspectorPlanetLogo from '../assets/sponsors/Inspector_Planet.png';
import codecraftersLogo from '../assets/sponsors/codecrafters.png';
import umuravaLogo from '../assets/sponsors/Umurava.png';
import dreamizeafricaLogo from '../assets/sponsors/dreamizeafrica.png';

const sponsors = [
  { name: 'The Linux Foundation', logo: linuxFoundationLogo },
  { name: 'GitHub Education', logo: githubEducationLogo },
  { name: 'Umurava', logo: umuravaLogo },
  { name: 'Inspector Planet', logo: inspectorPlanetLogo },
  { name: 'DreamizeAfrica', logo: dreamizeafricaLogo },
  { name: 'Codecrafters', logo: codecraftersLogo },
];

const Sponsors = () => {
  return (
    <section className="sponsors-page" id="sponsors">
      <div className="sponsors-container">
        <header className="sponsors-header">
          <div className="sponsors-badge">SPONSORS</div>
        </header>

        <div className="donation-cta">
          <div className="donation-card">
            <p className="donation-intro">
              Our sponsors are the reason Hack With Me keeps growing every year. They help us make it possible for high school students to come together, learn new skills, and build amazing projects.
            </p>
            
            <h2 className="donation-title">Support Hack With Me</h2>
            <p className="donation-text">
              Your donation helps us provide food, prizes, and free access for students. Every contribution, no matter the size, helps us keep Hack With Me going and give more students the chance to learn and build together.
            </p>
            <a
              className="donation-button"
              href="https://hcb.hackclub.com/donations/start/hackwithme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now
            </a>
            
            <p className="donation-contact">
              Want to partner with us or extend a special offer? Contact us at{' '}
              <a href="mailto:info@hackwithme.org">info@hackwithme.org</a>
            </p>
          </div>
        </div>

        <div className="sponsors-grid">
          {sponsors.map((s) => (
            <div key={s.name} className="sponsor-card">
              <div className="sponsor-media">
                {s.logo ? (
                  <img src={s.logo} alt={s.name} className="sponsor-logo" loading="lazy" decoding="async" />
                ) : (
                  <div className="sponsor-placeholder" aria-label={s.name}>
                    <span>{s.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;