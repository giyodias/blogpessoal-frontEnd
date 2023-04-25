import { TextField } from '@material-ui/core';
import { Grid, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import React, {useState, ChangeEvent, useEffect} from 'react';
import './Login.css'
import UsuarioLogin from '../../models/UsuarioLogin';
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/action';

function Login(){

    const history= useNavigate();

    const dispatch = useDispatch();

    const [token, setToken] = useState('');

const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {
        id: 0,
        usuario: '',
        nome: '',
        senha: '',
        foto: '',
        token: ''
    }
)

function updateModel(e: ChangeEvent<HTMLInputElement>){
    setUsuarioLogin({
        ...usuarioLogin,
        [e.target.name]: e.target.value
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
        await login('/usuarios/logar', usuarioLogin, setToken)
        alert('Usuário logado com sucesso');

    }catch(error){
        console.log(error);
        alert('Dados incorretos.');
    }

}
useEffect(() => {
    if(token !== '') {
        dispatch(addToken(token))
        history('/home')
    }
  }, [token])

    return(
    <>
    <Grid container alignItems={'center'}>
        <Grid item xs={6} justifyContent='center'> 
            <Box display='flex' justifyContent={'center'}>
                <Grid item xs={6}>
                    <form onSubmit ={onSubmit}>
                        <Typography
                        variant='h4' 
                        align='center' 
                        gutterBottom 
                        fontWeight='bold'
                        >
                        Login
                        </Typography>

                        <TextField 
                        value={usuarioLogin.usuario} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        variant='outlined' 
                        name='usuario'
                        label='Email' 
                        margin='normal'  
                        fullWidth />

                        <TextField 
                        value={usuarioLogin.senha} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        variant='outlined' 
                        label='Senha' 
                        margin='normal' 
                        name='senha' 
                        type='password' 
                        fullWidth 
                        />
                        
                        <Box>
                            <Button type='submit' variant='contained' color='primary' fullWidth>
                                Logar
                            </Button>
                        </Box>

                    </form>
                    <Typography marginTop={2} align='center' variant='body1' >Ainda não tem uma conta? </Typography>
                    <Typography className='linkRota'>
                    <Link to='/cadastrousuario' className='linkCadastrar'> Cadastre-se! </Link>
                    </Typography>
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
