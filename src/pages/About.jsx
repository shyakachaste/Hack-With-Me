import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default About;
