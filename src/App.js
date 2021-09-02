/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import AvailableNany from './components/AvailableNany.jsx';
import Hero from './components/Hero.jsx';
import ShareArticle from './components/ShareArticle.jsx';
import News from './components/News.jsx';
import SharedPayments from './components/SharedPayments.jsx';
import FrameworkArticle from './components/FrameworkArticle.jsx';
import CoomingSoon from './components/CoomingSoon.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Hero />
      <AvailableNany />
      <ShareArticle />
      <News />
      <SharedPayments />
      <FrameworkArticle />
      <CoomingSoon />
      <Footer />
    </>
  );
}

export default App;
