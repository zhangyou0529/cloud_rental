import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import { studioTheme } from './ui-components'

import config from './aws-exports'
import { Amplify } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

export { default as Listingstwo } from "./Listingstwo";

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AmplifyProvider theme = {studioTheme}>
    <Router>
      <App />
    </Router>
  </AmplifyProvider>
);

reportWebVitals();