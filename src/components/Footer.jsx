import React from 'react';
import './Footer.css';
import { FaInstagram, FaXTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="fiscal-note">
        Hack With Me is fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit with the EIN 81-2908499.
      </p>

      <div className="social-icons">
        <a href="https://www.instagram.com/hackwithme_official" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram-icon" />
        </a>
        <a href="https://twitter.com/hackwithme25" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="icon twitter-icon" />
        </a>
        <a href="https://www.linkedin.com/company/hack-with-me/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="https://discord.gg/rpsY54CDjF" aria-label="Discord" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="icon discord-icon" />
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} Hack With Me. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/code-of-conduct">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
