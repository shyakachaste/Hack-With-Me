import React from 'react';
import './Editions.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaHashtag } from 'react-icons/fa';
import Footer from '../components/Footer';

const Editions = () => {
  return (
    <>
    <section className="editions-page">
      <div className="editions-container">
        <header className="editions-header">
          <div className="editions-badge">PAST EDITIONS</div>
          <h1 className="editions-title">Hack With Me Editions</h1>
          <p className="editions-subtitle">A look back at what we’ve built together.</p>
        </header>

        <div className="editions-grid">
          <a href="https://hackwithme2025.com" target="_blank" rel="noopener noreferrer" className="edition-link" aria-label="Learn more about Hack With Me 2025 on hackwithme2025.com">
            <article className="edition-card">
              <div className="edition-card-header">
                <FaHashtag aria-hidden="true" />
                <span>Edition 1</span>
              </div>
              <h2 className="edition-name">Hack With Me 2025</h2>
              <ul className="edition-meta">
                <li>
                  <FaCalendarAlt className="meta-icon" aria-hidden="true" />
                  <span>16th — 17th August 2025</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="meta-icon" aria-hidden="true" />
                  <span>Kigali Independent University (ULK), Gisozi</span>
                </li>
              </ul>
              <div className="edition-actions">
                <span className="learn-more">Learn more</span>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Editions;


