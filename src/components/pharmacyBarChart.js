import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Container } from '@mui/material';

const pharmacyData = [
  { pharmacy: 'Pharmacy A', products: 100 },
  { pharmacy: 'Pharmacy B', products: 80 },
  { pharmacy: 'Pharmacy C', products: 60 },
  { pharmacy: 'Pharmacy D', products: 50 },
  { pharmacy: 'Pharmacy E', products: 40 },
];

const PharmacyBarChart = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Top 5 Pharmacies avec le Plus de Produits
        </Typography>
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pharmacyData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="pharmacy" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="products" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default PharmacyBarChart;
