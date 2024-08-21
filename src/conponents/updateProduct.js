import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const UpdateProduct = () => {
  const { id } = useParams(); // Récupérer l'ID du produit à modifier
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`https://back-pharmacie.onrender.com/products/${id}`);
        const { name, description } = response.data;
        setProductData({ name, description });
      } catch (error) {
        console.error('Erreur lors de la récupération des données du produit :', error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token'); 
      await axios.patch(`https://back-pharmacie.onrender.com/products/${id}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Produit mise à jour avec succès');
      navigate('/product-list'); // Rediriger vers la liste des pharmacies après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du produit :', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Modifier le Produit
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            name="name"
            label="Nom du produit"
            value={productData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            label="Description du produit"
            value={productData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
    
    <Button
        variant="contained"
        onClick={handleUpdate}
        sx={{
            mt: 3,
            bgcolor: '#007B7F', // Bleu turquoise foncé
            '&:hover': {
            bgcolor: '#006668', // Légèrement plus foncé au survol
            },
    }}
    >
        Mettre à jour
    </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdateProduct;
