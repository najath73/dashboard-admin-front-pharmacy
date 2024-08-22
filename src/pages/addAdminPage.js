import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import AdminUser from '../conponents/addAdminForm'

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
