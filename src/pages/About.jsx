import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About — Hack With Me</title>
        <meta name="description" content="Hack With Me is an annual 24-hour high school coding hackathon in Rwanda. Learn, build, and connect with mentors and peers." />
        <link rel="canonical" href="https://hackwithme.org/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hack With Me" />
        <meta property="og:url" content="https://hackwithme.org/about" />
        <meta property="og:title" content="About — Hack With Me" />
        <meta property="og:description" content="Learn about our mission, impact, and the community behind Rwanda’s high school hackathon." />
        <meta property="og:image" content="/hackwithme_xbanner.png" />
        <meta property="og:image:alt" content="Hack With Me banner" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About — Hack With Me" />
        <meta name="twitter:description" content="Learn about our mission, impact, and the community behind Rwanda’s high school hackathon." />
        <meta name="twitter:image" content="/hackwithme_xbanner.png" />
      </Helmet>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
