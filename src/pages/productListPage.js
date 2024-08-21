import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import ProductList from '../conponents/listProduct'

const ProdutListPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <ProductList />
    </Box>
  );
}

export default ProdutListPage;
