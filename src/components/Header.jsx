import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/home" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-icon ${isOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/editions" onClick={closeMenu}>Editions</Link></li>
          <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/sponsors" onClick={closeMenu}>Sponsors</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
