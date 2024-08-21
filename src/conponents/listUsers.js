import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from the server
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://back-pharmacie.onrender.com/users'); // Remplace par ton URL API
        setUsers(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    // Navigate to delete page
    navigate(`/delete-user/${id}`);
  };

  const handleEdit = (id) => {
    // Navigate to edit page
    navigate(`/update-user/${id}`);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '80px' }}>
          Liste des Utilisateurs
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user._id} divider>
              <Grid container alignItems="center">
                <Grid item xs={8}>
                  <ListItemText
                    primary={`${user.firstname} ${user.name}`}
                    secondary={`Email: ${user.email} | Rôle: ${user.roles}`}
                  />
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end">
                  <IconButton color="primary" onClick={() => handleEdit(user._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(user._id)}>
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

export default UserList;
