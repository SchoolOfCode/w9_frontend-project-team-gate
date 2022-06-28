import React from 'react';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
