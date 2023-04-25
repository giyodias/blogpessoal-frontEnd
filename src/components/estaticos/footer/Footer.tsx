import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import GithubIcon from '@material-ui/icons/Github';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';


function Footer() {

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )
  
var footerComponent;

if(token !== ''){
<Grid /*o footer tem somente um grid pois é uma faixa */
    /*abaixo temos as caracteristicas do grid*/
    container /*classifica o grid como container(contém outras coisas)*/
    direction="row" /*classifica a direção como linear, já que é um footer */
    justifyContent="center" /*centraliza o conteudo*/
    alignItems="center" /*centraliza o grid */
   >
        <Box
        display={'flex'}
        alignItems="center"
        style={{backgroundColor: 'pink', height: '150px'}}
        width={'100%'}
        justifyContent={'space-around'} /*distribui os itens com espaçamento nos finais*/
        > 
            <Box>
                <Box
                paddingTop={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    style={{color: 'white'}}
                    >
                    Me siga nas redes sociais abaixo!
                    </Typography>
                </Box>
                <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                >
                    <a href="https://github.com/giyodias" target="_blank" >
                        <GithubIcon style={{fontSize: 60, color: 'white'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/giyodias/" target="_blank" >
                        <LinkedInIcon style={{fontSize: 60, color: 'white'}}/>
                    </a>
                </Box>
            </Box>
            <Box paddingTop={1}>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: 'white' }}
                component={'span'}
              >
                © 2023 Copyright: Giyo Dias
              </Typography>
            </Box>
        </Box>
    </Grid>
}

    return (
    <>
    {footerComponent}
    </>
    )
  }
  
  export default Footer;