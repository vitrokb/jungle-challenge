/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import '../styles/FrameworkArticle.css';
import Line from './Line';
import frameworkArticleImage from '../images/image-framework-section.svg';

function FrameworkArticle() {
  return (
    <section className="framework-article-content">
      <h3 className="framework-article-title">A framework built for the long term</h3>
      <p className="framework-article-paragraph">Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
      <a className="framework-article-anchor" href="#read-how-Hapus">Read how Hapu’s tribal background defines our app</a>
      <img className="framework-article-image" src={ frameworkArticleImage } alt="Billing history example" />
      <Line />
    </section>
  );
}

export default FrameworkArticle;
