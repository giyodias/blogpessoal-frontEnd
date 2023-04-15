import React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function Navbar() {
    return (
    <>
      <AppBar position="static" style={{background: 'pink'}}>
        <Toolbar variant="dense">
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
            <Box style={{cursor: 'pointer'}}>
              <Typography variant="h5" color="inherit">
                bloguinho
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: 'pointer'}}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: 'pointer'}}>
            <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: 'pointer'}}>
            <Typography variant="h6" color="inherit">
                cadastrar temas
              </Typography>
            </Box>
            <Box mx={1} style={{cursor: 'pointer'}}>
            <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
    )
  }
  
  export default Navbar;