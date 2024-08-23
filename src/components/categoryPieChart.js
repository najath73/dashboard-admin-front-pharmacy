import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Container } from '@mui/material';

const categoryData = [
  { category: 'Medications', value: 400 },
  { category: 'Supplements', value: 300 },
  { category: 'Cosmetics', value: 300 },
  { category: 'Other', value: 200 },
];

const CategoryPieChart = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Répartition des Produits par Catégorie
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={categoryData} 
                dataKey="value" 
                nameKey="category" 
                outerRadius={100} 
                fill="#8884d8" 
                label 
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPieChart;
