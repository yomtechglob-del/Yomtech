import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

console.log('MAIN JSX IS EXECUTING');
const rootEl = document.getElementById('root');
console.log('ROOT Element:', rootEl);

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);