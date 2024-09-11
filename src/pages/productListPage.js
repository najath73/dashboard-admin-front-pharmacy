import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import ProductList from '../components/listProduct'

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
