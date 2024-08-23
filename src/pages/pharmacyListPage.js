import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import PharmacyList from '../components/listPharmacies'

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
