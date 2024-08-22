import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { useAuth } from '../hooks/AuthContext';

const SidebarUserPanel = () => {
  const { user } = useAuth(); // Utiliser le contexte d'authentification

  // Vérifier si l'utilisateur est connecté
  if (!user) {
    return null; // Ou afficher un message indiquant que l'utilisateur n'est pas connecté
  }

  const { username, avatar } = user; // Extraire les informations de l'utilisateur

  return (
    <Box display="flex" alignItems="center" p={2}>
      <Avatar src={avatar || "https://gravatar.com/avatar/40343cd80c30e6ef9117800cc0c717ac?s=400&d=robohash&r=x"} alt="User" />
      <Box ml={2}>
        <Typography variant="body1">{username || "Nom d'utilisateur"}</Typography>
      </Box>
    </Box>
  );
}

export default SidebarUserPanel;
