import React from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'

function ListaPostagens() {
  return (
    <>
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
    </>
  )
}

export default ListaPostagens