import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import AddUserToPharmacy from '../conponents/addUserForm'

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
