import React from 'react';
import logo from './img/logo.png'// Assicurati di avere un'immagine del logo nella cartella public o src

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}

export default Logo;