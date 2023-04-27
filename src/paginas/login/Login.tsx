import { TextField } from '@material-ui/core';
import { Grid, Typography, Button } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import React, {useState, ChangeEvent, useEffect} from 'react';
import './Login.css'
import UsuarioLogin from '../../models/UsuarioLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>(
    {
        id: 0,
        usuario: '',
        nome: '',
        senha: '',
        foto: '',
        token: ''
    }
)

useEffect(()=> {
    if(respUsuarioLogin.token !== ''){
        dispatch(addToken(respUsuarioLogin.token))
        dispatch(addId(respUsuarioLogin.id.toString()))
        history('/home');
    }
}, [respUsuarioLogin.token])

function updateModel(e: ChangeEvent<HTMLInputElement>){
    setUsuarioLogin({
        ...usuarioLogin,
        [e.target.name]: e.target.value
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
        await login('/usuarios/logar', usuarioLogin, setRespUsuarioLogin)
        toast.success('Usuário logado com sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    }catch(error){
        console.log(error);
        toast.error('Dados incorretos.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
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
