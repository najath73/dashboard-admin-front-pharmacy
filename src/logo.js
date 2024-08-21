import React from 'react';
import logo from './1.png'; // Ajuste le chemin en fonction de l'emplacement de ton fichier

const LogoApp = () => {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
    </div>
  );
};

export default LogoApp;
