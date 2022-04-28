import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/VET4PETS-front-end/'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


