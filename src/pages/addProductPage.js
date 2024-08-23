import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import AddProductForm from '../components/addProductForm'

const AddProductPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <AddProductForm />
    </Box>
  );
}

export default AddProductPage;
