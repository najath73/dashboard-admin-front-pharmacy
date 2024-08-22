import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Container } from '@mui/material';

const roleData = [
  { role: 'Admin', value: 10 },
  { role: 'Manager', value: 20 },
  { role: 'Worker', value: 30 },
  { role: 'User', value: 40 },
];

const RolePieChart = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Distribution des Rôles des Utilisateurs
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={roleData} 
                dataKey="value" 
                nameKey="role" 
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

export default RolePieChart;
