import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

function Home() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            Hotel
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>


    </div>
  )
}

export default Home