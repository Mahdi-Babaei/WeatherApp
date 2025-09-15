import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './context/Theme';
import CityProvider from './context/City';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CityProvider>
      <App />
      </CityProvider>
    </ThemeProvider>
  </React.StrictMode>
);

