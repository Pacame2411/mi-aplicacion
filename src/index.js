// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa el archivo CSS aquí
import App from './App';

// Estilos específicos para el header, body y footer
const headerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const bodyStyles = {
  padding: '20px',
};

const footerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* Header */}
      <header style={headerStyles}>
        <h1>Mi Aplicación</h1>
      </header>

      {/* Body */}
      <div style={bodyStyles}>
        <App />
      </div>

      {/* Footer */}
      <footer style={footerStyles}>
        © 2024 Mi Aplicación
      </footer>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
