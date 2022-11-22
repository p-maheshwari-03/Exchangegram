import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { gapi } from 'gapi-script';

import './index.css';
import App from './App';

const initClient = () => {
  gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scope: ''
  });
};
gapi.load('client:auth2', initClient);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
