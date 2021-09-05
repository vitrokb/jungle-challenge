/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading.jsx';
import AvailableNany from './components/AvailableNany.jsx';
import Hero from './components/Hero.jsx';
import ShareArticle from './components/ShareArticle.jsx';
import News from './components/News.jsx';
import SharedPayments from './components/SharedPayments.jsx';
import FrameworkArticle from './components/FrameworkArticle.jsx';
import CoomingSoon from './components/CoomingSoon.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    loading
    ? <Loading />
    : <>
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
