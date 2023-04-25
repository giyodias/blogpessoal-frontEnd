import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import { buscaId, put, post, busca } from '../../../services/Service';
import { TokenState } from "../../../store/tokens/tokenReducer";
import { useSelector } from "react-redux";

function CadastrarPostagem(){

const history = useNavigate();

const {id} = useParams<{id: string}>();

const [temas, setTemas] = useState<Tema[]>([]);

const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

useEffect(() => {
    if (token === ''){
        alert("Você precisa estar logado.")
        history("/login")
    }
}, [token])

const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
})

const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    tema: null
})

useEffect(() => {
    getTemas()
    if(id !== undefined){
        findByIdPostagem(id)
    }
},[id])

useEffect(() => { 
    setPostagem({
        ...postagem,
        tema: tema
    })
}, [tema])

async function getTemas(){
    await busca('/tema', setTemas, {
        headers: {
            'Authorization': token
        }
    })
}

async function findByIdPostagem(id: string){
    await buscaId(`postagens/${id}`, setPostagem, {
        headers: {
            'Authorization' : token
        }
    })
}

function updatePostagem(e: ChangeEvent<HTMLInputElement>){

    setPostagem({
        ...postagem,
        [e.target.name]: e.target.value,
        tema: tema
    })
}

useEffect(()=> {
    setPostagem({
        ... postagem,
        tema: tema
})
}, [tema])

async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()

    if(id !== undefined){
        put('/postagens', postagem, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
        alert('Postagem atualizada com sucesso');
    }else{
        post('/postagens', postagem, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
        alert('Postagem cadastrada com sucesso!');
    }
      back()
  }
function back(){
    history('/posts')
}


    return(
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>)=>updatePostagem(e)} id="titulo" variant="outlined" name="titulo"></TextField>
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>)=>updatePostagem(e)}id="texto" variant="outlined" name="texto"></TextField>

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select 
                    labelId="demo-simple-select-helper-label" 
                    id="emo-simple-select-helper-label"
                    onChange={(e) => buscaId (`/tema/${e.target.value}`, setTema, {
                        headers: {
                            'Authorization': token
                        } 
                        })}>
                            {
                                temas.map(tema => (
                                    <MenuItem value={tema.id}>{tema.descricao}</MenuItem> 
                                ))
                            }
                        
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">Finalizar</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastrarPostagem;