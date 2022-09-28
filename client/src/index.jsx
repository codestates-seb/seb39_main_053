import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD:client/src/index.jsx
import App from './App';
=======
import App from './App.jsx';
>>>>>>> 0a0593d28ffd01e5d80fdad215652271ff57ca09:client/src/index.js
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
