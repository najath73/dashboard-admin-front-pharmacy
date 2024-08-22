import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const UpdatePharmacy = () => {
  const { id } = useParams();
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
  
  const [initialPharmacyData, setInitialPharmacyData] = useState({}); // Stocker les données initiales

  useEffect(() => {
    const fetchPharmacyData = async () => {
      try {
        const response = await axios.get(`https://back-pharmacie.onrender.com/pharmacies/${id}`);
        const { name, address, phone, localisation } = response.data;
        const initialData = { name, address, phone, localisation }; // Stocker les valeurs initiales
        setPharmacyData(initialData);
        setInitialPharmacyData(initialData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la pharmacie :', error);
      }
    };

    fetchPharmacyData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPharmacyData({ ...pharmacyData, [name]: value });
  };

  const handleLocalisationChange = (e) => {
    const { name, value } = e.target;
    setPharmacyData({
      ...pharmacyData,
      localisation: {
        ...pharmacyData.localisation,
        [name]: value
      }
    });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Créer un objet contenant uniquement les champs modifiés
      const updatedData = {};
      if (pharmacyData.name !== initialPharmacyData.name) {
        updatedData.name = pharmacyData.name;
      }
      if (pharmacyData.address !== initialPharmacyData.address) {
        updatedData.address = pharmacyData.address;
      }
      if (pharmacyData.phone !== initialPharmacyData.phone) {
        updatedData.phone = pharmacyData.phone;
      }
      if (pharmacyData.localisation.longitude !== initialPharmacyData.localisation.longitude) {
        if (!updatedData.localisation) updatedData.localisation = {};
        updatedData.localisation.longitude = pharmacyData.localisation.longitude;
      }
      if (pharmacyData.localisation.latitude !== initialPharmacyData.localisation.latitude) {
        if (!updatedData.localisation) updatedData.localisation = {};
        updatedData.localisation.latitude = pharmacyData.localisation.latitude;
      }

      console.log(updatedData); // Afficher les données modifiées dans la console

      await axios.patch(`https://back-pharmacie.onrender.com/pharmacies/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log('Pharmacie mise à jour avec succès');
      navigate('/pharmacy-list'); // Rediriger vers la liste des pharmacies après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la pharmacie :', error);
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 15}}>
        <Typography variant='h5' sx={{ fontWeight: '300' }} gutterBottom> Modifier la Pharmacie</Typography>
      </Box>
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            name="name"
            label="Nom de la pharmacie"
            value={pharmacyData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="address"
            label="Adresse"
            value={pharmacyData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="phone"
            label="Numéro de téléphone"
            value={pharmacyData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="longitude"
            label="Longitude"
            value={pharmacyData.localisation.longitude}
            onChange={handleLocalisationChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="latitude"
            label="Latitude"
            value={pharmacyData.localisation.latitude}
            onChange={handleLocalisationChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            onClick={handleUpdate}
            sx={{
              mt: 3,
              bgcolor: '#007B7F',
              '&:hover': {
                bgcolor: '#006668',
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

export default UpdatePharmacy;
