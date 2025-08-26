import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects — Hack With Me</title>
        <meta name="description" content="Explore Hack With Me projects. Coming soon." />
        <link rel="canonical" href="https://hackwithme.org/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hack With Me" />
        <meta property="og:url" content="https://hackwithme.org/projects" />
        <meta property="og:title" content="Projects — Hack With Me" />
        <meta property="og:description" content="Explore Hack With Me projects. Coming soon." />
        <meta property="og:image" content="/hackwithme_xbanner.png" />
        <meta property="og:image:alt" content="Hack With Me banner" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects — Hack With Me" />
        <meta name="twitter:description" content="Explore Hack With Me projects. Coming soon." />
        <meta name="twitter:image" content="/hackwithme_xbanner.png" />
      </Helmet>
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


