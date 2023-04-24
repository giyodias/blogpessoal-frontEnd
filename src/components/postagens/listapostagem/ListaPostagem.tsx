import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token')
  const history = useNavigate();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado.")
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