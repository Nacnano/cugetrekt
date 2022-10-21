// TODO: Add action button just like GG Docs
// TODO: Add create new form button

import React from 'react';
import ReactDOM from 'react-dom/client';

import MyRoutes from './routes/routes';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Providers/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster position="top-center" />
      <MyRoutes />
    </AuthProvider>
  </React.StrictMode>
);
