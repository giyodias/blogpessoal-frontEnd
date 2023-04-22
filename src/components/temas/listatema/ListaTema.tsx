import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tema from '../../../models/Tema'
import useLocalStorage from 'react-use-localstorage'
import { Link, useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Service'

function ListaTemas() {

  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token')
  const history = useNavigate();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado.")
      history("/login")
    }
  }, [token])

  async function getTema(){
    await busca("/tema", setTemas, {
      headers:{
        'Authorization': token
      }
    })
  }

  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema => (
        <Box m={4}>
          <Card >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema:
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
              
            </CardContent>
            <CardActions>
              <Link to={`/formularioTema/${tema.id}`}>
                <Button color='primary' variant='contained' size="small">Editar</Button>
              </Link>
              <Link to={`/deletarTema/${tema.id}`}>
                <Button color='secondary' variant='contained' size="small">Deletar</Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
      ))
    }
    </>
  )
}

export default ListaTemas