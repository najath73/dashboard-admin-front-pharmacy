import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import ContentWrapper from '../conponents/content';
import { Container, Typography, Box } from '@mui/material';
import CategoryPieChart from '../conponents/categoryPieChart';
import UserBarChart from '../conponents/userBarChart';
import PharmacyBarChart from '../conponents/pharmacyBarChart';
import RolePieChart from '../conponents/rolePieChart';

const DashboardAdmin = () =>  {
  return (
    <Container>
      <ContentWrapper/>
      <Box sx={{ display: 'flex' , marginTop: 5}}>
        <Navbar />
        <Sidebar />
            <Box>
              <Typography variant='h4' sx={{ fontWeight: '300' }} gutterBottom>
              Dashboard
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
