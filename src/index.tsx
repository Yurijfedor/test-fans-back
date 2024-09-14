import React from 'react';
import ReactDOM from 'react-dom/client';

const Placeholder = () => {
  return (
    <div>
      <h1>Это placeholder для многоточечных входов</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Placeholder />
  </React.StrictMode>,
);
