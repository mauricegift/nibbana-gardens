import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} width="160" height="50" alt="Nibbana Grill - Home" />
        </Link>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <button className="close-btn" aria-label="close menu" onClick={toggleNav}>
            <IonIcon icon={closeOutline} aria-hidden="true" />
          </button>

          <Link to="/" className="logo">
            <img src={logo} width="160" height="50" alt="Nibbana Grill - Home" />
          </Link>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Home</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Menus</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">About Us</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Our Chefs</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Contact</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Other Services</span>
              </Link>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Nibbana Gardens, Eldoret City, <br />
              Shell, Eldoret-Nakuru Highway 
            </address>
            <p className="body-4 navbar-text">Open: 9.00 am - 5.30pm</p>
            <a href="mailto:booking@nibbanagardens.com" className="body-4 sidebar-link">booking@nibbanagardens.com</a>
            <div className="separator"></div>
            <p className="contact-label">Booking Requests Line</p>
            <a href="tel:+254711111111" className="body-1 contact-number hover-underline">
              +254711111111
            </a>
          </div>
        </nav>

        <button className="btn btn-secondary">
          <span className="text text-1">Find A Table</span>
          <span className="text text-2" aria-hidden="true">Find A Table</span>
        </button>

        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className="overlay" data-overlay onClick={toggleNav}></div>
      </div>
    </header>
  );
};

export default Header;
