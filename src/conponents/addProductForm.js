
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://back-pharmacie.onrender.com/products', {
        name,
        description,
      });
      navigate('/products');
    } catch (err) {
      setError("Erreur lors de l'ajout du produit. Veuillez vérifier vos informations.");
    }
  };

    return (
        
        <Container>
        <Box sx={{ marginTop: 15}}>
          <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom>Ajouter un produit</Typography>
        </Box>
        <Box >
            
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nom du Produit"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={4}
            />
            {error && <Typography color="error" variant="body2">{error}</Typography>}
            <Button type="submit" fullWidth variant="contained" 
              sx={{ mt: 3,
              bgcolor: '#007B7F', // Bleu turquoise foncé
              '&:hover': {
              bgcolor: '#006668', // Légèrement plus foncé au survol
              },
            }}
            
            
            >
              
              Ajouter le Produit</Button>
            </Box>
        </Box>
        </Container>
    );
};

export default  AddProductForm;
