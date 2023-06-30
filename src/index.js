import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals.js'
import sessionReducer from './features/store/sessionReducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(sessionReducer);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
)

reportWebVitals();
