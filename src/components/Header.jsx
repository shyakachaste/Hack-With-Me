import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const socialLinks = [
    {
      icon: Instagram,
      url: 'https://www.instagram.com/hackwithme_official',
      label: 'Instagram'
    },
    {
      icon: FaXTwitter,
      url: 'https://twitter.com/hackwithme_official',
      label: 'Twitter'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/hack-with-me/',
      label: 'LinkedIn'
    }
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu} className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-icon ${isOpen ? 'open' : ''}`}></span>
        </div>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/editions" onClick={closeMenu}>Editions</Link></li>
            <li><Link to="/sponsors" onClick={closeMenu}>Sponsors</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          </ul>
          
          <div className="social-links">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;