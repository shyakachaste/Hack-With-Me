import React, { useEffect, useRef } from 'react';
import useSEO from './useSEO';
import './Editions.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaHashtag } from 'react-icons/fa';
import Footer from '../components/Footer';

const Editions = () => {
  useSEO({
    title: 'Editions — Hack With Me',
    description: 'Past editions of Hack With Me and what we built together.',
    canonical: 'https://hackwithme.org/editions'
  });
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
          {editions.map((e) => (
            <a key={e.id} href={e.url} target="_blank" rel="noopener noreferrer" className="edition-link" aria-label={`Learn more about ${e.name}`}>
              <article className="edition-card">
                <div className="edition-card-header">
                  <FaHashtag aria-hidden="true" />
                  <span>Edition {e.number}</span>
                </div>
                <h2 className="edition-name">{e.name}</h2>
                <ul className="edition-meta">
                  <li>
                    <FaCalendarAlt className="meta-icon" aria-hidden="true" />
                    <span>{e.date}</span>
                  </li>
                  <li>
                    <FaMapMarkerAlt className="meta-icon" aria-hidden="true" />
                    <span>{e.location}</span>
                  </li>
                </ul>
                <div className="edition-stats-inline" aria-label="Edition stats">
                  <InlineStat num={e.participants} label="Participants" />
                  <InlineStat num={e.projects} label="Projects" />
                </div>
                <div className="edition-actions">
                  <span className="learn-more">Learn more</span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

const InlineStat = ({ num, label }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frameId;
    const durationMs = 900;
    const start = performance.now();
    const animate = (t) => {
      const progress = Math.min(1, (t - start) / durationMs);
      const value = Math.floor(progress * num);
      el.textContent = value.toString();
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [num]);
  return (
    <div className="stat-pill" role="group" aria-roledescription="stat">
      <span className="num" ref={ref}>0</span>
      <span className="lbl">{label}</span>
    </div>
  );
};

const editions = [
  {
    id: 1,
    number: 1,
    name: 'Hack With Me 2025',
    date: '16th — 17th August 2025',
    location: 'Kigali Independent University (ULK), Gisozi',
    participants: 100,
    projects: 25,
    url: 'https://hackwithme2025.com'
  }
];

export default Editions;


