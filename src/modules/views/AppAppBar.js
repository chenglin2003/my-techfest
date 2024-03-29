import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '../components/Toolbar';
import AppBar from '../components/AppBar';

import { Link as RouterLink } from "react-router-dom";

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: 'black'}} >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link 
            component={RouterLink}
            to="/"
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24, fontWeight: 'bold' }}
          >
            
            {'CONTENTIFY'}
    
          </Link>
          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
