import React from 'react';
import { Drawer, Box, List, Divider } from '@mui/material';
import SidebarUserPanel from './sidebarUserPanel';
import SidebarMenu from './sidebarMenu';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1F2A30', // Couleur sombre pour la sidebar
        },
      }}
      variant="permanent"
      anchor="left"
    >

       {/* Main content */}
      <Box
        component="main"
        sx={{
          marginTop: '64px',
          bgcolor: 'background.default',
        }}
      >
      </Box>

      {/* SidebarUserPanel */}
      <SidebarUserPanel />
    

      {/* Divider */}
      <Divider sx={{ borderColor: '#333' }} />

      {/* SidebarMenu */}
      <SidebarMenu />
    </Drawer>
  );
};

export default Sidebar;
