// TODO: Add action button just like GG Docs
// TODO: Add create new form button

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import MyRoutes from './routes/routes';
import Header from './components/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <MyRoutes />
  </React.StrictMode>
);
