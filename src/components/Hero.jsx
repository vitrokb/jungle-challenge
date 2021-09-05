import React from 'react';
import Header from './Header.jsx';
import HeroContent from './HeroContent.jsx';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <Header />
      <HeroContent />
    </section>
  );
}

export default Hero;
