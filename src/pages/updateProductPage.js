import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import UpdateProduct from '../components/updateProduct'

const UpdateProductPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <UpdateProduct />
    </Box>
  );
}

export default UpdateProductPage;
