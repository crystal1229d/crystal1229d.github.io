import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./locales/i18n"; 
import { DarkModeContextProvider } from './context/DarkModeContext';
import { LanguageContextProvider } from './context/LanguageContext';
import { UnderlineProvider } from './context/UnderlineContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <LanguageContextProvider>
        <UnderlineProvider>
          <App />
        </UnderlineProvider>
      </LanguageContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);