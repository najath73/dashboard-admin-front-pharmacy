import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Box, Typography, Container } from '@mui/material';

const userData = [
  { month: 'Jan', users: 50 },
  { month: 'Feb', users: 40 },
  { month: 'Mar', users: 60 },
  { month: 'Apr', users: 70 },
  { month: 'May', users: 80 },
  { month: 'Jun', users: 90 },
  { month: 'Jul', users: 100 },
];

const UserBarChart = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Nombre d'Utilisateurs Inscrits par Mois
        </Typography>
        <BarChart width={730} height={250} data={userData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#82ca9d" />
        </BarChart>
      </Box>
    </Container>
  );
};

export default UserBarChart;
