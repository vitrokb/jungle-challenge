/* eslint-disable max-len */
import React from 'react';
import '../styles/SharedPayments.css';
import Line from './Line';
import presentationImage from '../images/image-section-2.svg';

function SharedSection() {
  return (
    <section className="shared-payments-line-content">
      <section className="shared-payments-content">
        <div className="shared-payments-image-content">
          <img className="shared-payments-image" src={ presentationImage } alt="Presentation of the section" />
        </div>
        <div className="shared-payments-text-content">
          <h3 className="shared-payments-title">Shared payments made simple</h3>
          <p className="shared-payments-paragraph">Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>
          <a className="shared-payments-anchor" href="#read-how-Bridgets">Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
      </section>
      <Line />
    </section>
  );
}

export default SharedSection;
