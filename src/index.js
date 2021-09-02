import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './hooks/provider';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
