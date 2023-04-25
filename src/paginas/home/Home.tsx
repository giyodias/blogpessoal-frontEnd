import { Button, Typography, Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/modalPostagem';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';


function Home() {
  let history = useNavigate();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history("/login")
        }
      }, [token])
  return (
    <>
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{backgroundColor: 'pink'}}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
            variant="h3"
            gutterBottom
            color="inherit"
            component="p"
            align="center"
            style={{color:'white', fontWeight: 'bold'}}
            >

            Seja bem vindo!
            </Typography>
            <Typography
            variant="h5"
            gutterBottom
            color="inherit"
            component="h5"
            align="center"
            style={{color: 'white', fontWeight: 'bold'}}
            >
              expresse etc etc
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem/>
            </Box>
            <Box>
              <Link to='/posts'/>
              <Button
              variant="outlined"
              style={{borderColor: 'white', backgroundColor: 'pink', color: 'white'}}
              >Ver postagens
              </Button>
            </Box>
            
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src="" alt="" className='fotoHome'/>

        </Grid>
        <Grid xs={12} style={{ backgroundColor: 'white' }}>
          <ModalPostagem/>
        </Grid>
        <TabPostagem/>
      </Grid>
      
    </>
  );
}

export default Home;