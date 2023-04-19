import React, { ChangeEvent, useEffect, useState } from 'react';
import './CadastroUsuario.css'
import { Button, Grid, TextField} from '@material-ui/core';
import { Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/Service';
import Usuario from '../../models/Usuario';

function CadastroUsuario(){
    const history = useNavigate()

    const [usuario, setUsuario] = useState<Usuario>({
      id: 0,
      nome: '',
      usuario: '',
      foto: '',
      senha: ''
    })
    
    const [usuarioResult, setUsuarioResult] = useState<Usuario>({
      id: 0,
      nome: '',
      usuario: '',
      foto: '',
      senha: ''
    })
  
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    
    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(event.target.value)
  }
  
    function updateModel(event: ChangeEvent<HTMLInputElement>) {
      setUsuario({
        ...usuario,
        [event.target.name]: event.target.value
      })
    }
  
    async function onSubmit(event: ChangeEvent<HTMLFormElement>){
      event.preventDefault()
      if(confirmarSenha === usuario.senha) {
        try {
          await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
          alert('Usuário cadastrado com sucesso')
        } catch (error) {
          alert('Por favor, verifique os campos')
        }
      } else {
        alert('As senhas não coincidem')
        setConfirmarSenha('')
        setUsuario({
          ...usuario,
          senha: ''
        })
      }
    }
  
    useEffect(() => {
    }, [usuario.nome])
  
    useEffect(() => {
      if(usuarioResult.id !== 0) {
        history('/login')
      }
    }, [usuarioResult])
  
    function back() {
      history('/login')
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'>
            <img src="https://ik.imagekit.io/4b6skpwgz/Forest-bro.png?updatedAt=1681517696244" alt="Imagem da tela de login" className='fotoLogin'/>
            </Grid>
            <Grid item xs={6} alignItems='center'>
            <Box>
                <form onSubmit={onSubmit}>
                    <Typography
                    variant='h4' align='center' gutterBottom className='tituloCadastrar'
                            >
                    Cadastre-se
                    </Typography>
                uario
                    <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} variant='outlined' label='Nome' margin='normal' id='nome' fullWidth />
                    <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} variant='outlined' label='Email' margin='normal' id='email' fullWidth />
                    <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} variant='outlined' label='Senha' margin='normal' id='senha' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} variant='outlined' label='Confirmar senha' margin='normal' id='confirmarSenha' type='password' fullWidth />
                    <TextField value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} variant='outlined' label='Foto' margin='normal' id='usuario' fullWidth />
                    <Box>
                        <Button type='submit' variant='contained' color='primary'>
                        Cadastrar
                        </Button>

                        <Button variant='contained' color='secondary' className='botaoCancelar'>
                        <Link to='/login' className='botaoCadastrar'/>
                        Cancelar
                        </Button>
                    </Box>

                </form>
            </Box>
            </Grid>

        </Grid>



    );
}

export default CadastroUsuario;