import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';  // Importas App.jsx que es el componente raíz

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
