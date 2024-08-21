import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import UpdatePharmacy from '../conponents/updatePharmacy'

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
