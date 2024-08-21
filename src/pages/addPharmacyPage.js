import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import AddPharmacyForm from '../conponents/addPharmacyForm'

const AddPharmacyPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <AddPharmacyForm />
    </Box>
  );
}

export default AddPharmacyPage;
