import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import UpdatePharmacy from '../components/updatePharmacy'

const UpdatePharmacyPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <UpdatePharmacy />
    </Box>
  );
}

export default UpdatePharmacyPage;
