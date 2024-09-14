import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './components/AuthContext';
import User from './components/User';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <AuthProvider>
    <User />
  </AuthProvider>,
);
