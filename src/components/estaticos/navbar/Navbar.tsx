import React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

function Navbar(){
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )
  
  const history = useNavigate();

  const dispatch = useDispatch();
  
function goLogout(){
  dispatch(addToken(''));

  toast.info('Usuário deslogado', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  history('/login')
}

var navbarComponent;
if(token !== ''){
  navbarComponent =
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

}

    return( 
    <>
     {navbarComponent}
    </>
    )
  }
  
  export default Navbar;