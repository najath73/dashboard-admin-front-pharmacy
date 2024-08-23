import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const AddPharmacyForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://back-pharmacie.onrender.com/pharmacies', {
        name,
        address,
        phone,
        localisation: {
          longitude: parseFloat(longitude),
          latitude: parseFloat(latitude),
        },
      });
      // Rediriger ou afficher un message de succès
      console.log('Pharmacie ajoutée avec succès:', response.data);
    } catch (err) {
      setError("Erreur lors de l'ajout de la pharmacie. Veuillez vérifier vos informations.");
    }
  };

  return (
    <Container >
      <Box sx={{ marginTop: 15}}>
        <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom> Ajouter une Pharmacie</Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nom de la Pharmacie"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Adresse"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Téléphone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="longitude"
            label="Longitude"
            name="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="latitude"
            label="Latitude"
            name="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          {error && <Typography color="error" variant="body2">{error}</Typography>}
          <Button type="submit" fullWidth variant="contained"
          sx={{
            mt: 3,
            bgcolor: '#007B7F', // Bleu turquoise foncé
            '&:hover': {
            bgcolor: '#006668', // Légèrement plus foncé au survol
            },
    }}
    >
            Ajouter la Pharmacie
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddPharmacyForm;
