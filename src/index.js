import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import CartProvider from './features/reusables/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> 
      <App />
    </CartProvider> 
  </React.StrictMode>,
)

reportWebVitals();
