import { Box, CardContent, Typography, Card, CardActions, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeletarPostagem(){
    const history = useNavigate();
    
    const {id} = useParams<{id: string}>()

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
      )
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token === ''){
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
    }, [])

useEffect(()=>{
    if(id !== undefined){
        findById(id)
    }
}, [id])

async function findById(id: string){
    buscaId(`/postagens/${id}`, setPosts, {
        headers:{
            'Authorization' : token
        }
    })
}

function sim(){
    history('/posts')
    deleteId(`/postagens/${id}`, {
        headers: {
            'Authorization' : token
        }
    })
    toast.success('Postagem deletada com sucesso!', {
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

function nao(){
    history('/posts')
}

    return(
        <>
        <Box m={2}>
            <Card variant="outlined">
                <CardContent>
                    <Box justifyContent="center">
                        <Typography color="textSecondary" gutterBottom>
                        Deseja deletar a postagem:
                        </Typography>
                        <Typography color="textSecondary">
                            {post?.titulo}
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

export default DeletarPostagem;