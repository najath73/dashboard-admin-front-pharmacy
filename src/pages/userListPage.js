import React from 'react';
import Navbar from '../conponents/navbar';
import Sidebar from '../conponents/sidebar';
import { Box } from '@mui/material';
import UserList from '../conponents/listUsers'

const UserListPage = () =>  {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <UserList />
    </Box>
  );
}

export default UserListPage;
