import React from 'react';
import Footer from '../components/Footer';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <section className="projects-page">
        <div className="projects-container">
          <header className="projects-header">
            <div className="projects-badge">PROJECTS</div>
            <h1 className="projects-title">Projects</h1>
            <p className="projects-subtitle">A gallery of shipped projects from Hack With Me.</p>
          </header>
          <div className="projects-card">
            <h2 className="coming-soon">Coming soon</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;


