import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './App.css';
import './index.css';
import { store } from './store.js';
import { Provider } from 'react-redux'
import { ThemeProvider } from '../src/contexts/ThemeContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
    <Provider store={store}>
       <App />
    </Provider>
    </ThemeProvider>
  </BrowserRouter>,
);
