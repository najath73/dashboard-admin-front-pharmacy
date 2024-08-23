import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/material';
import AdminUser from '../components/addAdminForm'

const AddAdminPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <AdminUser />
    </Box>
  );
}

export default AddAdminPage;
