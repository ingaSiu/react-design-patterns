import './index.css';

import App from './App.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// fix the issue by explicitly specifying the type of rootElement
// const rootElement = document.getElementById("root")
// const root = ReactDOM.createRoot(rootElement as HTMLElement)

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

