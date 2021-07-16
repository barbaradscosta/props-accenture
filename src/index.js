import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App
      name={'Bárbara Costa'}
      primeira={'Essa props será renderizada no App.js'}
      segunda={'Essa props será renderizada no componenteFilho.js'}
    />
  </React.StrictMode>,
  document.getElementById('root')
);