// TODO: Login Verify before sending post request

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
