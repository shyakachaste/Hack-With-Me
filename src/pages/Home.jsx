import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Counting from '../components/Counting';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Counting />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
