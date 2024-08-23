import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import AddPharmacyForm from '../components/addPharmacyForm'

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
