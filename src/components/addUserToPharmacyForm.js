import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddUserToPharmacy = () => {
  const [pharmacy, setPharmacy] = useState(null);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('PHARMACY_WORKER');
  const { id } = useParams(); // Get pharmacy ID from URL params
  //const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch pharmacy details
    const fetchPharmacy = async () => {
      try {
        const response = await axios.get(`https://back-pharmacie.onrender.com/pharmacies/${id}`);
        setPharmacy(response.data);
      } catch (error) {
        console.error('Error fetching pharmacy:', error);
      }
    };

    fetchPharmacy();
  }, [id]);

  const handleAddUser = async () => {
    try {
      const newUser = {
        username,
        name,
        firstname,
        email,
        roles: role,
      };

      await axios.post(`https://back-pharmacie.onrender.com/pharmacies/${id}/users`, newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('User added successfully');
      // navigate(`/pharmacy-list/${id}`); // Redirect to pharmacy details or list page
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  if (!pharmacy) return <div>Loading...</div>;

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '80px' }}>
          Ajouter un utilisateur à la pharmacie {pharmacy.name}
        </Typography>
        <Box mt={4}>
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
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Rôle</InputLabel>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Rôle"
            >
              <MenuItem value="pharmacy_manager">Pharmacy Manager</MenuItem>
              <MenuItem value="pharmacy_worker">Pharmacy Worker</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007B7F",
              color: "#fff",
              '&:hover': {
                backgroundColor: "#006668",
              },
              mt: 3,
            }}
            onClick={handleAddUser}
          >
            Ajouter l'utilisateur
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddUserToPharmacy;
