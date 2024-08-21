import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const SidebarUserPanel = () =>  {
  return (
    
    <Box display="flex" alignItems="center" p={2}>
      <Avatar src="dist/img/user2-160x160.jpg" alt="User" />
      <Box ml={2}>
        <Typography variant="body1">Alexander Pierce</Typography>
      </Box>
    </Box>
  );
}

export default SidebarUserPanel;
