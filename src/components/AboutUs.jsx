import React, { useEffect } from 'react';
import { FaDiscord, FaEnvelope } from 'react-icons/fa';
import './AboutSection.css';
import AboutImage2 from '../assets/about_2.JPG';
import AboutImage3 from '../assets/about_3.JPG';

const AboutUs = () => {
  useEffect(() => {
    const badges = document.querySelectorAll('.badge-grid .hackathon-badge');
    const discordCard = document.querySelector('.discord-card');
    if (!('IntersectionObserver' in window)) {
      badges.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    badges.forEach((el) => observer.observe(el));
    if (discordCard) observer.observe(discordCard);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="text-section">
            <div className="about-badge">ABOUT</div>
            <h1 className="about-title">We build awesome things together.</h1>
            
            <div className="about-description">
              <p>
              Hack With Me is an annual 24-hour coding hackathon designed for high schoolers. Students come together to build projects, solve problems, and share their skills with others.
              </p>
              <p>
               The goal of Hack With Me is to make hackathons accessible to everyone.In addition to the main edition, we sometimes host smaller ‘half-editions’ to keep the community active and give students more chances to collaborate.
              </p>
              <p>
               Hack With Me is the largest hackathon for high schoolers in Rwanda and across Africa, 
               bringing students together to learn, build, and connect.
              </p>

            </div>
            <div className="contact-section">
              <span className="contact-text">For any inquiries, contact us at:</span>
              <a href="mailto:info@hackwithme.org" className="contact-email">
                <FaEnvelope className="email-icon" aria-hidden="true" />
                info@hackwithme.org
              </a>
            </div>
          </div>

          <div className="image-section">
            <div className="badge-grid">
              <div className="hackathon-badge">
                <img src={AboutImage2} alt="Workshop and mentoring at Hack With Me" className="badge-full-image" loading="lazy" />
              </div>
              <div className="hackathon-badge">
                <img src={AboutImage3} alt="Hack With Me event memories" className="badge-full-image" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discord CTA */}
      <div className="discord-cta">
        <div className="discord-card" aria-label="Join our Discord community">
          <div className="discord-card-content">
            <h3 className="discord-title">Join Our Discord Community</h3>
            <a
              className="discord-button"
              href="https://discord.com/invite/rpsY54CDjF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="discord-icon" />
              Join Discord
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;