import { TextField } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import React from 'react';
import './Login.css'

function Login(){
    return(
    <>
    <Grid container alignItems={'center'}>
        <Grid item xs={6} justifyContent='center'> 
            <Box display='flex' justifyContent={'center'}>
                <Grid item xs={6}>
                    <form>
                        <Typography
                        variant='h4' align='center' gutterBottom fontWeight='bold'
                        >
                        Login
                        </Typography>
                       
                        <TextField variant='outlined' label='Email' margin='normal' id='usuario' fullWidth />
                        <TextField variant='outlined' label='Senha' margin='normal' id='senha' type='password' fullWidth />
                        
                    </form>
                    <Typography marginTop={2} align='center' variant='body1' >Ainda não tem uma conta?<Link to='/cadastrar' className='linkCadastrar'> Cadastre-se! </Link> </Typography>
                </Grid>
                
            </Box>
        </Grid>
        <Grid item xs={6}>
        <img src="https://ik.imagekit.io/4b6skpwgz/Forest-bro.png?updatedAt=1681517696244" alt="Imagem da tela de login" className='fotoLogin' />
            </Grid> 
    </Grid> 
    
    </>
    )
}

export default Login
