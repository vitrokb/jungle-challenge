/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../styles/AvailableNany.css';
import availableIcon from '../images/available-nany-icon.svg';

function AvailableNany() {
  return (
    <section className="available-content">
      <img src={ availableIcon } alt="Available nany" />
      <a className="available-anchor" href="#availableNany">Sarah's day care available now in North Sydney</a>
      <p className="available-paragraph">Wednesday, Thursday, Friday - 7:30 - 5:30</p>
    </section>
  );
}

export default AvailableNany;
