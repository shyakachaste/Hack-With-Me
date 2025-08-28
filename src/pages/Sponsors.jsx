import React from 'react';
import useSEO from './useSEO';
import './Sponsors.css';
import Footer from '../components/Footer';
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
  useSEO({
    title: 'Sponsors — Hack With Me',
    description: 'Meet the organizations supporting Hack With Me.',
    canonical: 'https://hackwithme.org/sponsors'
  });
  return (
    <>
      <section className="sponsors-page">
        <div className="sponsors-container">
          <header className="sponsors-header">
            <div className="sponsors-badge">SPONSORS</div>
            <h1 className="sponsors-title">Hack With Me Sponsors</h1>
            <p className="sponsors-subtitle">
              Thanks to our incredible sponsors for supporting high school hackers.
            </p>
          </header>

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

          <div className="donation-cta">
            <div className="donation-card">
              <p className="donation-intro">If you want to partner with us or extend a special offer, don’t hesitate to contact us at <a href="mailto:info@hackwithme.org">info@hackwithme.org</a>.</p>
              <h2 className="donation-title">Support Hack With Me</h2>
              <p className="donation-text">
                Your donation helps us provide food, prizes, and free access for students.
              </p>
              <a
                className="donation-button"
                href="https://hcb.hackclub.com/donations/start/hackwithme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sponsors;


