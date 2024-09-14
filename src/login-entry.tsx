import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './components/AuthContext';
import Login from './components/Login';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <AuthProvider>
    <Login />
  </AuthProvider>,
);
