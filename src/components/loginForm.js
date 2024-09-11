import React, { useState } from 'react';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Grid, Box, Alert, Paper } from '@mui/material';
import { AuthorizationError } from '../utils/errors';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // État pour les erreurs
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password); // Appel à la fonction login du contexte
      navigate('/dashboard-admin'); // Redirection après login
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // Gérer les erreurs en fonction de leur type
      if (error instanceof AuthorizationError) {
        setError(error.message);
      } else {
        setError(error.message || "Nom d'utilisateur ou mot de passe incorrect.");
      }
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #74ebd5 0%, #9face6 100%)',
      }}
    >
      <Paper elevation={10} sx={{ padding: 4, borderRadius: '16px', width: '100%', maxWidth: '400px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3, color: '#333' }}>
            Connexion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ borderRadius: '8px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Mot de passe"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ borderRadius: '8px' }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                bgcolor: '#007B7F',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 123, 127, 0.5)',
                '&:hover': {
                  bgcolor: '#006668',
                },
              }}
            >
              Connexion
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
