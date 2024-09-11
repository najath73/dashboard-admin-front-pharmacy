import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleHomeClick = () => {
    navigate('/dashboard-admin');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#1F2A30' }}>
      <Toolbar>
          <IconButton color="inherit" onClick={handleHomeClick}>
            <HomeIcon />
          </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Pharma 4All
        </Typography>
        
        <Button
          color="inherit"
          onClick={handleLogout} // Assurez-vous que la fonction logout est définie dans votre contexte
          sx={{ ml: 2 }} // Ajout d'un espacement à gauche pour le bouton
        >
          Déconnexion
        </Button>
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;


