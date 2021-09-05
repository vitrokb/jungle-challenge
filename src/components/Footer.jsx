/* eslint-disable max-len */
import React, { useState } from 'react';
import '../styles/Footer.css';
import calendarIcon from '../images/calendar-icon.svg';
import hapuLogo from '../images/hapu-logo.svg';
import facebook from '../images/Facebook.svg';
import twitter from '../images/Twitter.svg';
import instagram from '../images/Instagram.svg';
import Line from './Line.jsx';

function Footer() {
  const minWidth = 768;
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener('resize', (e) => {
    setSize(e.target.innerWidth);
  });

  return (
    <footer className="footer-content">
      <h3 className="footer-title">Become a nanny share host</h3>
      <p className="footer-paragraph">Takes less than 5 minutes to get started</p>
      <button className="footer-button-content" type="button">
        <img src={ calendarIcon } alt="Calendar Icon" />
        <div>
          <p className="footer-button-first-paragraph">Create Your Nanny Share</p>
          <p className="footer-button-second-paragraph">Takes less than 5 minutes</p>
        </div>
      </button>
      <a className="footer-anchor" href="#or-browse-local">Or browse local nanny-shares</a>
      <div className="footer-subsection-content">
        <img className="footer-logo" src={ hapuLogo } alt="Hapu's logo" />
        <div className="footer-links-content">
          <a className="footer-links" href="#share-you-store">Share Your Nanny</a>
          <a className="footer-links" href="#our-story">Our Story</a>
          <a className="footer-links" href="#blog">Blog</a>
          <a className="footer-links" href="#terms-privacy">Terms & Privacy</a>
        </div>
        <div className="footer-socials-content">
          <button className="footer-social-button" type="button"><img src={ facebook } alt="Facebook logo" /></button>
          <button className="footer-social-button" type="button"><img src={ twitter } alt="Twitter logo" /></button>
          <button className="footer-social-button" type="button"><img src={ instagram } alt="Instagram logo" /></button>
        </div>
      </div>
      {size < minWidth ? <Line /> : null}
      <p className="footer-last-paragraph">Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </footer>
  );
}

export default Footer;
