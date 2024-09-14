import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './components/AuthContext';
import CreateUser from './components/CreateUser';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <AuthProvider>
    <CreateUser />
  </AuthProvider>,
);
