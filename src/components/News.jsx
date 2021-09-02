/* eslint-disable max-len */
import React, { useState } from 'react';
import '../styles/News.css';
import Line from './Line';

const axios = require('axios').default;

function News() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChange(e) {
    if (e.target.name === 'name') {
      return setName(e.target.value);
    }

    setEmail(e.target.value);
  }

  function validateEmail(emailToValidate) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(emailToValidate).toLowerCase());
  }

  function sendUser() {
    const validatedEmail = validateEmail(email);
    if (!validatedEmail) {
      return console.log('Email inválido');
    }

    axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
      name,
      email,
    })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <section className="news-content">
      <h3 className="news-title">Are you a parent without a nanny and looking to share?</h3>
      <p className="news-paragraph">Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
      <form className="news-form">
        <input className="form-input" name="name" onChange={ handleChange } type="text" placeholder="Your name" />
        <input className="form-input" name="email" onChange={ handleChange } type="email" placeholder="Your email" />
        <button className="form-button" onClick={ sendUser } type="button">Send</button>
      </form>
      <Line />
    </section>
  );
}

export default News;
