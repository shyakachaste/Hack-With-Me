import React, { useMemo } from 'react';
import useSEO from './useSEO';
import Footer from '../components/Footer';
import './Projects.css';
import { getEditionYears, getProjectsByEdition } from './projectsData';

const Projects = () => {
  useSEO({
    title: 'Projects — Hack With Me',
    description: 'Explore shipped projects from Hack With Me. Each project includes a live demo and preview.',
    canonical: 'https://hackwithme.org/projects'
  });
  const editionYears = useMemo(() => getEditionYears(), []);
  const selectedYear = editionYears[0] || 2025;
  const projects = useMemo(() => getProjectsByEdition(selectedYear), [selectedYear]);
  // no sample titles above the header; simple subtitle instead
  // Simplified: grid of image cards only

  return (
    <>
      <section className="projects-page">
        <div className="projects-container">
          <header className="projects-header" role="heading" aria-level={1}>
            <div className="projects-badge">PROJECTS</div>
            <h1 className="projects-title">Hack With Me Shipped Projects</h1>
            <p className="projects-subtitle">Projects developed in Hack With Me 2025</p>
          </header>

          <div className="projects-toolbar" role="region" aria-label="Projects toolbar">
            <div className="edition-badge" aria-label={`Edition 1`}>
              <span className="edition-label">Edition</span>
              <span className="edition-pill">1</span>
            </div>
          </div>

          {/* removed list of project names at the top */}

          {projects.length === 0 ? (
            <div className="projects-card">
              <h2 className="coming-soon">No projects yet for {selectedYear}</h2>
              <p className="coming-copy">Check back after the hackathon concludes.</p>
            </div>
          ) : (
            <>
              <ul className="projects-grid-modern">
                {projects.map((p) => (
                  <li key={p.id} className="project-card-modern">
                    <a className="project-media-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} — Live Demo`}>
                      <img className="project-media-img" src={p.image} alt={`${p.title} preview`} />
                    </a>
                    <div className="project-info">
                      <h3 className="project-name">{p.title}</h3>
                      {p.description && <p className="project-summary">{p.description}</p>}
                      <div className="project-actions-row">
                        <a className="live-btn" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="projects-support" aria-live="polite">
                If you want to help or support any project, please contact us at{' '}
                <a href="mailto:info@hackwithme.org">info@hackwithme.org</a>.
              </p>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;


