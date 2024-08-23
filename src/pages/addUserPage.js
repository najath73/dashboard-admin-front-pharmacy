import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import AddUserToPharmacy from '../components/addUserToPharmacyForm'

const AddUserToPharmacyPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <AddUserToPharmacy />
    </Box>
  );
}

export default AddUserToPharmacyPage;
