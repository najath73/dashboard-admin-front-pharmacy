import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://back-pharmacie.onrender.com/products'); // Remplace par ton URL API
        setProducts(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    // Navigate to delete page
    const response = await axios.delete(`https://back-pharmacie.onrender.com/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  };

  const handleEdit = (id) => {
    // Navigate to edit page
    navigate(`/update-product/${id}`);
  };

  return (
    <Container>
      <Box sx={{ marginTop: 15}}>
        <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom>Liste des Produits</Typography>
      </Box>
      <Box mt={1}>
        <List>
          {products.map((product) => (
            <ListItem key={product._id} divider>
              <Grid container alignItems="center">
                <Grid item xs={8}>  
                  <ListItemText
                    primary={product.name}
                    secondary={product.description}
                  />
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end">
                  <IconButton color="primary" onClick={() => handleEdit(product._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(product._id)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ProductList;