import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const AddProductInPharmacyForm = () => {
  const [products, setProducts] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedPharmacy, setSelectedPharmacy] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch the list of products and pharmacies from the backend
    axios.get('https://back-pharmacie.onrender.com/products')
      .then(response => setProducts(response.data))
      .catch(err => console.error("Error fetching products:", err));

    axios.get('https://back-pharmacie.onrender.com/pharmacies')
      .then(response => setPharmacies(response.data))
      .catch(err => console.error("Error fetching pharmacies:", err));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://back-pharmacie.onrender.com/products-in-pharmacy', {
        product: selectedProduct,
        pharmacy: selectedPharmacy,
        price: parseFloat(price),
        quantity: parseInt(quantity, 10),
      });
      setSuccess("Produit ajouté avec succès à la pharmacie !");
      // Réinitialiser les champs du formulaire après l'ajout
      setSelectedProduct('');
      setSelectedPharmacy('');
      setPrice('');
      setQuantity('');
    } catch (err) {
      setError("Erreur lors de l'ajout du produit à la pharmacie. Veuillez vérifier vos informations.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h4">PharmaApp</Typography>
        <Typography component="h2" variant="h5">Ajouter un produit à une pharmacie</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="product-label">Produit</InputLabel>
            <Select
              labelId="product-label"
              id="product"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              required
            >
              {products.map((product) => (
                <MenuItem key={product._id} value={product._id}>{product.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="pharmacy-label">Pharmacie</InputLabel>
            <Select
              labelId="pharmacy-label"
              id="pharmacy"
              value={selectedPharmacy}
              onChange={(e) => setSelectedPharmacy(e.target.value)}
              required
            >
              {pharmacies.map((pharmacy) => (
                <MenuItem key={pharmacy._id} value={pharmacy._id}>{pharmacy.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="Prix"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="quantity"
            label="Quantité"
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {error && <Typography color="error" variant="body2">{error}</Typography>}
          {success && <Typography color="primary" variant="body2">{success}</Typography>}
          <Button type="submit" fullWidth variant="contained"sx={{
            mt: 3, mb:2,
            bgcolor: '#007B7F', // Bleu turquoise foncé
            '&:hover': {
              bgcolor: '#006668', // Légèrement plus foncé au survol
            },
          }}>
            Ajouter le produit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddProductInPharmacyForm;
