import React from 'react'; // Se você for utilizar JSX precisa, desse import React,
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // JSX ABAIXO
  <React.StrictMode>
    <App />
  </React.StrictMode>
);