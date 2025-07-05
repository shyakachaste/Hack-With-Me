import React from 'react';
import './AboutSection.css';
import AboutImage from '../assets/about.jpg';

const AboutUs = () => {

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="text-section">
            <div className="about-badge">ABOUT</div>
            <h1 className="about-title">We build awesome things together.</h1>
            
            <div className="about-description">
              <p>
               Hack With Me is an annual 24-hour coding hackathon designed for high schoolers. 
               Students come together to build projects, solve problems, and share their skills with others.
              </p>
              <p>
               The goal of Hack With Me is to make hackathons accessible to everyone — even if you don’t have a team or idea, 
               you’ll still be able to build something great with the help of mentors and workshops.
              </p>
              <p>
               Hack With Me is the largest hackathon for high schoolers in Rwanda and across Africa, 
               bringing students together to learn, build, and connect.
              </p>

            </div>
            <div className="contact-section">
              <span className="contact-text">For any inquiries, contact us at:</span>
              <a href="mailto:hello@hackwithme.com" className="contact-email">
                hello@hackwithme.com
              </a>
            </div>
          </div>

          <div className="image-section">
            <div className="hackathon-badge">
                 <img src={AboutImage} alt="About Hack With Me" className="badge-full-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;