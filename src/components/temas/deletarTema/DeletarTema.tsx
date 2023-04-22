import { Box, CardContent, Typography, Card, CardActions, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';

function DeletarTema(){
    const history = useNavigate();
    const {id} = useParams<{id: string}>()
    const {token, setToken} = useLocalStorage('token')
    const {temas, setTemas} = useState<Tema>()

    useEffect(() => {
        if (token === ''){
            alert("Você precisa estar logado.")
            history("/login")
        }
    }, [])

useEffect(()=>{
    if(id !== undefined){
        findById(id)
    }
}, [id])

async function findById(id: string){
    buscaId(`/tema/${id}`, setTemas, {
        headers:{
            'Authorization' : token
        }
    })
}

function sim(){
    history('/temas')
    deleteId(`/tema/${id}`, {
        headers: {
            'Authorization' : token
        }
    })
    alert("Tema deletado com sucesso!")
}

function nao(){
    history('/temas')
}

    return(
        <>
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box justifyContent="center">
                        <Typography color="textSecondary" gutterBottom>
                        Deseja deletar o tema:
                        </Typography>
                        <Typography color="textSecondary">
                            {temas?.descricao}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                        <Box mx={2}>
                            <Button onClick={sim}variant="contained" className="marginLeft" size="large" color="primary">Sim</Button>
                            <Button onClick={nao}variant="contained" size="large" color="secondary">Não</Button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Box>
        </>
    )
}

export default DeletarTema;