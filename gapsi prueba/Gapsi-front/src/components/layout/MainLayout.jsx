import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../common/Sidebar';
import { Outlet } from 'react-router-dom';

import MenuAppBar from '../common/topbar'

const sidebarWidth = 350;

const MainLayout = () => {
  return (

   
<Box display="block">

<Box
       
        sx={{
         position:"relative",
         display:"block",
          height: "5vh",
          width:"100vw"        }} >
   <MenuAppBar/>
   </Box>


   <Box
        sx={{
        position:"realtive",
        display:"block",
         height: "5vh",
         width:"100vw"        }} >

      {/* sidebar */}
      <Sidebar sidebarWidth={sidebarWidth}  />
      {/* sidebar */}

      <Box
        component="main" left={sidebarWidth} position="relative"
        sx={{
          marginLeft:{sidebarWidth},
          position:"relative",
          p: 3,
          height: "100vh",
          width: { sm: `calc(100% - ${sidebarWidth}px)` }
        }}
      >
        <Outlet />
      </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;