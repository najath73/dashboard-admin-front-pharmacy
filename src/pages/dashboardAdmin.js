import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import ContentWrapper from '../conponents/content';
import { Box } from '@mui/material';

const DashboardAdmin = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <ContentWrapper />
    </Box>
  );
}

export default DashboardAdmin;
