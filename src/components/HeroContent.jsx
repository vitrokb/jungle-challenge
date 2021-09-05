/* eslint-disable max-len */
import React from 'react';
import '../styles/HeroContent.css';
import playIcon from '../images/play-icon.svg';
import imageHero from '../images/image-hero.svg';

function HeroContent() {
  return (
    <section className="hero-content">
      <div className="hero-content-left">
        <h2 className="hero-content-title">Easily create or join a local nanny share with Hapu</h2>
        <p className="hero-content-paragraph">Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
        <div className="hero-play-content">
          <button className="hero-play-button" type="button"><img src={ playIcon } alt="Play icon" /></button>
          <a href="#play-button" className="hero-play-paragraph">See hapu in action (27 seconds)</a>
        </div>
      </div>
      <div className="hero-content-right">
        <img src={ imageHero } alt="Right side hero" />
      </div>
    </section>
  );
}

export default HeroContent;
