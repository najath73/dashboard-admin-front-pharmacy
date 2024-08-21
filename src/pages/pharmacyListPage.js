import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import PharmacyList from '../conponents/listPharmacies'

const PharmacyListPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <PharmacyList />
    </Box>
  );
}

export default PharmacyListPage;
