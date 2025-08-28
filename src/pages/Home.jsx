import React from 'react';
import useSEO from './useSEO';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Counting from '../components/Counting';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  useSEO({
    title: 'Hack With Me — Rwanda\'s Largest high school hackathon',
    description: 'Join the largest in-person high school hackathon in Rwanda and Africa — build projects, learn, and connect.',
    canonical: 'https://hackwithme.org/'
  });
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
