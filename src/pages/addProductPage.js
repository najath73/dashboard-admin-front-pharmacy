import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import AddProductForm from '../conponents/addProductForm'

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
