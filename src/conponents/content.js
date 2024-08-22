import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const drawerWidth = 100; // La même largeur que votre Sidebar

const ContentWrapper = () => {
  return (
    <Container
      sx={{
        marginLeft: `${drawerWidth}px`, // Ajoutez cette ligne pour tenir compte de la largeur de la Sidebar
      }}
    >
      <Box sx={{ marginTop: 10 }}>
        <IconButton
          size="large"
          sx={{
            fontSize: '70px',
            color: '#35b2a3',
            '&:hover': {
              color: '#2f9a8e',
              transform: 'scale(1.1)',
            },
          }}
        >
          <AdminPanelSettingsIcon fontSize="inherit" />
        </IconButton>

        <Typography variant="h2">Bienvenue sur le Dashboard Admin</Typography>

        <Typography>
          Gérez facilement les utilisateurs, les produits et les pharmacies grâce à cette interface moderne, intuitive et
          conçue pour vous offrir la meilleure expérience. Accédez rapidement aux informations importantes et prenez le contrôle total.
        </Typography>
      </Box>
    </Container>
  );
};

export default ContentWrapper;
