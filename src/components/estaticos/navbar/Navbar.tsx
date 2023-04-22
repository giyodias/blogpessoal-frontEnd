import React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(){
  const[token, setToken] = useLocalStorage('token');
  const history = useNavigate();

function goLogout(){
  setToken('')
  alert("Usuário deslogado.")
  history('/login')
}
    return( 
    <>
      <AppBar position="static" style={{background: 'pink'}}>
        <Toolbar variant="dense">
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >

            <Box style={{cursor: 'pointer'}}>
              <Link to='/home'>
                <Typography variant="h5" color="inherit">
                  Home
                </Typography>
              </Link>
            </Box>

            <Box mx={1} style={{cursor: 'pointer'}}>
              <Link to='/posts'>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Link>
            </Box>

            <Box mx={1} style={{cursor: 'pointer'}}>
              <Link to='/temas'>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Link>
            </Box>

            <Box mx={1} style={{cursor: 'pointer'}}>
              <Link to='/formularioTemas'>
                <Typography variant="h6" color="inherit">
                  Cadastrar temas
                </Typography>
              </Link>
            </Box>

            <Box mx={1} style={{cursor: 'pointer'}} onClick={goLogout}>
            <Typography variant="h6" color="inherit">
                Sair
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
    )
  }
  
  export default Navbar;