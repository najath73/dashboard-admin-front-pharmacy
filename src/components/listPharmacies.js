import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, IconButton, Button, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PharmacyList = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get('https://back-pharmacie.onrender.com/pharmacies');
        setPharmacies(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des pharmacies:', error);
      }
    };

    fetchPharmacies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://back-pharmacie.onrender.com/pharmacies/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPharmacies(pharmacies.filter(pharmacy => pharmacy._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de la pharmacie:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-pharmacy/${id}`);
  };

  const handleAddUser = (pharmacyId, e) => {
    e.stopPropagation(); // Empêche le clic sur le bouton d'ouvrir les détails de la pharmacie
    navigate(`/add-user-to-pharmacy/${pharmacyId}`);
  };

  const handlePharmacyClick = (pharmacyId) => {
    navigate(`/pharmacy-details/${pharmacyId}`);
  };

  return (
    <Container>
      <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column'}}>
        <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom>Liste des Pharmacies</Typography>
      </Box>
      <Box mt={1}>
        <List>
          {pharmacies.map((pharmacy) => (
            <ListItem   
              key={pharmacy._id} 
              divider 
              button 
              onClick={() => handlePharmacyClick(pharmacy._id)} // Rend la pharmacie cliquable
            >
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <ListItemText
                    primary={pharmacy.name}
                    secondary={`Adresse: ${pharmacy.address} | Téléphone: ${pharmacy.phone}`}
                  />
                </Grid>
                <Grid item xs={6} container justifyContent="flex-end">
                  <IconButton color="primary" onClick={(e) => {
                    e.stopPropagation(); // Empêche le clic sur le bouton d'ouvrir les détails de la pharmacie
                    handleEdit(pharmacy._id);
                  }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={(e) => {
                    e.stopPropagation(); // Empêche le clic sur le bouton d'ouvrir les détails de la pharmacie
                    handleDelete(pharmacy._id);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PersonAddIcon />}
                    onClick={(e) => handleAddUser(pharmacy._id, e)} // Passe l'événement à handleAddUser
                    sx={{
                      backgroundColor: '#35b2a3',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#006666'
                      },
                      ml: 2,
                    }}
                  >
                    Ajouter Utilisateur
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default PharmacyList;
