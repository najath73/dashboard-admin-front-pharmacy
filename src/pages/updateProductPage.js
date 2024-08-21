import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import UpdateProduct from '../conponents/updateProduct'

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
