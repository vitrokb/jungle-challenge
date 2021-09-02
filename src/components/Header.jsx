/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import logo from '../images/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-content">
      <div className="header-first-content">
        <img className="logo" src={ logo } alt="logo" />
        <div className="header-anchors-content">
          <a className="header-anchor first" href="#create-nany-share">Create Your Nanny Share</a>
          <a className="header-anchor second" href="#browse-share">Browse Shares</a>
          <a className="header-anchor third" href="#our-store">Our Story</a>
        </div>
      </div>
      <div className="header-second-content">
        <button className="become-nanny-button" type="button">Become a Nanny Share Host</button>
        <button className="sign-in-button" type="button">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
