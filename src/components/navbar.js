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
    <AppBar position="fixed" sx={{ bgcolor: '#007B7F', width: `calc(100% - 240px)`, ml: '240px' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleHomeClick}>
            <HomeIcon />
          </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pharma App
        </Typography>
        <Box>
          
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{ ml: 2 }}
          >
            Déconnexion
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
