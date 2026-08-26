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
if ('serviceWorker' in navigator) {
  const registerSW = () => {
    const swUrl = '/sw.js';
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Fluxplay PWA Service Worker registered:', registration.scope);
      })
      .catch((error) => {
        console.warn('Fluxplay Service Worker registration error:', error);
      });
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    registerSW();
  } else {
    window.addEventListener('load', registerSW);
  }
}

