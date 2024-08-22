import React from 'react';
import { Drawer, Box, Toolbar } from '@mui/material';
import SidebarUserPanel from '../conponents/sidebarUserPanel';
import SidebarMenu from '../conponents/sidebarMenu';

const Sidebar = () =>  {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <SidebarUserPanel />
        <SidebarMenu />
      </Box>
    </Drawer>
  );
}

export default Sidebar;
