import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([])
  
  const history = useNavigate();


  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  )


  useEffect(()=>{
    if(token == ''){
      toast.info('Você precisa estar logado.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
      history("/login")
    }
  }, [token])

  async function getPostagem(){
    await busca("/postagens", setPostagem, {
      headers:{
        'Authorization': token
      }
    })
  }

  useEffect(()=>{
    getPostagem()
  }, [postagem.length])


  return (
    <>
    {
      postagem.map(postagem => (
      <Box m={4}>
        <Card >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Titulo 
            </Typography>
            <Typography variant="h5" component="h2">
              Texto
            </Typography>
            <Typography variant="body1" component="p">
              Tema
            </Typography>
            <Typography variant="body2" component="p">
              Postado por: {postagem.usuario?.nome}
            </Typography>

          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' size="small">Editar</Button>
            <Button color='secondary' variant='contained' size="small">Deletar</Button>
          </CardActions>
        </Card>
      </Box>
      ))
    }
    </>
  )
}

export default ListaPostagem