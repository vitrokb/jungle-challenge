/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import '../styles/CoomingSoon.css';
import presentationImage from '../images/image-section-3.svg';

function CoomingSoon() {
  return (
    <section className="cooming-soon-content">
      <img className="cooming-soon-image" src={ presentationImage } alt="Presentation of the section" />
      <h3 className="cooming-soon-title">Coming soon: Nanny Share Daily Diary!</h3>
      <p className="cooming-soon-paragraph">With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!</p>
    </section>
  );
}

export default CoomingSoon;
