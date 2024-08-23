import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import ContentWrapper from '../components/content';
import { Container, Typography, Box } from '@mui/material';
import CategoryPieChart from '../components/categoryPieChart';
import UserBarChart from '../components/userBarChart';
import PharmacyBarChart from '../components/pharmacyBarChart';
import RolePieChart from '../components/rolePieChart';

const DashboardAdmin = () =>  {
  return (
    <Container>
      <Box sx={{ display: 'flex' , marginTop: 15}}>
        <Navbar />
        <Sidebar />
            <Box>
              <Typography variant='h4' sx={{ fontWeight: '300' }} gutterBottom>
              Bienvenue sur le Dashboard Admin
              </Typography>
              <CategoryPieChart />
              <UserBarChart />
              <PharmacyBarChart />
              <RolePieChart />
            </Box>
      </Box>
      
    </Container>
  );
}

export default DashboardAdmin;
