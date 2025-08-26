import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Counting from '../components/Counting';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hack With Me — Rwanda's in‑person high school hackathon</title>
        <meta name="description" content="Build projects, learn with mentors, and join Rwanda’s high school hackathon community." />
        <link rel="canonical" href="https://hackwithme.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hack With Me" />
        <meta property="og:url" content="https://hackwithme.org/" />
        <meta property="og:title" content="Hack With Me — Rwanda's in‑person high school hackathon" />
        <meta property="og:description" content="Build projects, learn with mentors, and join Rwanda’s high school hackathon community." />
        <meta property="og:image" content="/hackwithme_xbanner.png" />
        <meta property="og:image:alt" content="Hack With Me banner" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hack With Me — Rwanda's in‑person high school hackathon" />
        <meta name="twitter:description" content="Build projects, learn with mentors, and join Rwanda’s high school hackathon community." />
        <meta name="twitter:image" content="/hackwithme_xbanner.png" />
      </Helmet>
      <HeroSection />
      <AboutUs />
      <Counting />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
