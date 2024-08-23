import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const AdminUser = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('super_admin');
  const [pharmacy, setPharmacy] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://back-pharmacie.onrender.com/users', {
        username,
        name,
        firstname,
        email,
        password,
        role,
        pharmacy: null
      });
      // Rediriger ou afficher un message de succès
      console.log('Administrateur ajouté avec succès:', response.data);
    } catch (err) {
      setError("Erreur lors de l'ajout de l'administrateur. Veuillez vérifier vos informations.");
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 15}}>
        <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom>Ajouter un Administrateur</Typography>
      </Box>
      <Box mt={1}>
        <Box mt={4} component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            type="email"
          />
          <TextField
            fullWidth
            label="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            type="password"
          />
          <TextField
            fullWidth
            label="Role"
            value="super_admin"
            onChange={(e) => setRole(e.target.value)}
            margin="normal"
          />

          {/* Afficher un message d'erreur si quelque chose ne va pas */}
          {error && (
            <Typography color="error" align="center" mt={2}>
              {error}
            </Typography>
          )}
        
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#35b2a3",
              color: "#fff",
              '&:hover': {
                backgroundColor: "#2f9a8e",
              },
              mt: 3,
            }}
            type="submit"
          >
            Ajouter l'Admin
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminUser;
