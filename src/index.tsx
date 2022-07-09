import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadingProvider } from './hooks/loading';
import Routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <Routes />
    </LoadingProvider>
  </React.StrictMode>
);
