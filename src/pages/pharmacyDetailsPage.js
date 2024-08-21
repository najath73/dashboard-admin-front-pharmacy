import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import PharmacyDetails from '../conponents/pharmacyDetails'

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
