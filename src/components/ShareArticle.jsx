/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import presentationImage from '../images/image-section-1.svg';
import '../styles/ShareArticle.css';
import Line from './Line';

function ShareArticle() {
  return (
    <section className="share-article-line-content">
      <section className="share-article-content">
        <div className="share-article-image-content">
          <img className="share-article-image" src={ presentationImage } alt="Presentation of the section" />
        </div>
        <div className="share-article-text-content">
          <h3 className="share-article-title">Share your home, nanny and costs</h3>
          <p className="share-article-paragraph">You have a fantastic home, a fantastic nanny and wouldn’t cutting yourcosts in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <span className="share-article-span">Hapu means tribe</span> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
          <a className="share-article-anchor" href="#ready-to-get-started">Ready to get started?</a>
        </div>
      </section>
      <Line />
    </section>
  );
}

export default ShareArticle;
