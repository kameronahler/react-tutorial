import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App/App';
import '../node_modules/normalize.css/normalize.css';
import './scss/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
