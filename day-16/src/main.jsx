import './index.css';

import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createUserResources } from './resources/userResource.js';

createUserResources(); // then app is coming up this will be called and all the promises will be ready

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
