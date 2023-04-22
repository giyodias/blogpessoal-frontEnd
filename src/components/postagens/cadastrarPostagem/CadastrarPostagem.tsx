import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";

function CadastrarPostagem(){

const history = useNavigate();
const {id} = useParams<{id: string}>();
const [tema, setTema] = useState<Tema[]>([])
const [token, setToken] = useLocalStorage('token');

useEffect(() => {
    if (token === ''){
        alert("Você precisa estar logado.")
        history("/login")
    }
}, [token])







const [temas, setTemas] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    return(
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário</Typography>
                <TextField value="" id="titulo" variant="outlined" name="titulo"></TextField>
                <TextField value="" id="texto" variant="outlined" name="texto"></TextField>

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" id="emo-simple-select-helper-label">
                        <MenuItem value="">Descrição postagem</MenuItem>
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">Finalizar</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastrarPostagem;