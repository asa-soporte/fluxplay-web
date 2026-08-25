import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Register Service Worker for PWA and WebAPK installation
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Fluxplay PWA Service Worker registered:', registration.scope);
      })
      .catch((error) => {
        console.error('Fluxplay Service Worker registration failed:', error);
      });
  });
} else if ('serviceWorker' in navigator) {
  // Also register in dev mode for testing installability
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => console.log('Fluxplay PWA SW active:', reg.scope))
      .catch(() => {});
  });
}

