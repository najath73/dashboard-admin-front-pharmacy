import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import PharmacyDetails from '../components/pharmacyDetails'

const PharmacyDetailsPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <PharmacyDetails />
    </Box>
  );
}

export default PharmacyDetailsPage;
