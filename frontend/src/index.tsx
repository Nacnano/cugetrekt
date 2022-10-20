// TODO: Add action button just like GG Docs
// TODO: Add create new form button

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import MyRoutes from './routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);
