import React, { useEffect, useState } from "react";
import { Container, Typography, Box, List, ListItem, Button, ListItemText, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import axios from 'axios';

const PharmacyDetails = () => {
  const { id } = useParams(); // Récupérer l'ID de la pharmacie depuis l'URL
  const navigate = useNavigate();
  const [pharmacyData, setPharmacyData] = useState({
    name: '',
    address: '',
    phone: '',
    localisation: {
      longitude: '',
      latitude: '',
    }
  });

const [pharmacyUsers, setPharmacyUsers] = useState([]);
  useEffect(() => {
    const fetchPharmacyData = async () => {
      try {
        const response = await axios.get(`https://back-pharmacie.onrender.com/pharmacies/${id}`);
        const { name, address, phone, localisation } = response.data;
        setPharmacyData({ name, address, phone, localisation });

        const usersResponse = await axios.get(`https://back-pharmacie.onrender.com/pharmacies/${id}/users`);
        setPharmacyUsers(usersResponse.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la pharmacie :', error);
      }
    };

    fetchPharmacyData();
    
  }, [id]);
  
  const handleAddUser = (pharmacyId) => {
    navigate(`/add-user-to-pharmacy/${pharmacyId}`);
  };
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '80px' }}>
          Détails de la Pharmacie
        </Typography>
        <List>
          <ListItem divider>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <ListItemText
                  primary={`Nom: ${pharmacyData.name}`}
                  secondary={`Adresse: ${pharmacyData.address}`}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary">
                Téléphone: {pharmacyData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary">
                  Localisation : Longitude - {pharmacyData.localisation.longitude}, Latitude - {pharmacyData.localisation.latitude}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Box>

        <Box mt={4}>
          <Typography variant="h5" align="center" gutterBottom>
            Utilisateurs la pharmacie
          </Typography>
          <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PersonAddIcon />}
                    onClick={(e) => {
                      e.stopPropagation(); // Empêche le clic sur le bouton d'ouvrir les détails de la pharmacie
                      handleAddUser(id);
                    }}
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
          <List>
                {pharmacyUsers.length > 0 ? (
                pharmacyUsers.map((user) => (
                <ListItem key={user._id} divider>
                  <ListItemText
                    primary={`Nom: ${user.name}`}
                    secondary={`Email: ${user.email} | Rôle: ${user.role}`}
                  />
                </ListItem>
              ))) : (
              <Typography variant="body1" align="center" color="textSecondary">
                Aucun utilisateur trouvé pour cette pharmacie.
              </Typography>
            )}
          </List>
        </Box>
    </Container>
    

    
  );
};

export default PharmacyDetails;
