import React from 'react';
import logo from './img/logo.png'// Assicurati di avere un'immagine del logo nella cartella public o src

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
