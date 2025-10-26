import React from 'react';
import useSEO from './useSEO';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Counting from '../components/Counting';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';
import Events from '../components/Events';

const Home = () => {
  useSEO({
    title: 'Hack With Me',
    description: 'Join the largest in-person high school hackathon in Rwanda and Africa — 24 hours of coding cool projects with others',
    canonical: 'https://hackwithme.org/'
  });
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Counting />
      <Events />
      <Sponsors />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
