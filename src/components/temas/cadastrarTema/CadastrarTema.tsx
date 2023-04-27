import { Button, Container, TextField, Typography } from "@mui/material";
import React,{ ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../services/Service";
import Tema from "../../../models/Tema";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";

function CadastrarTema(){
    const history = useNavigate();
    const {id} = useParams<{id: string}>()

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
      )

    const {temas, setTemas} = useState<Tema>({
        id: 0,
        descricao: ''
    })

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
    buscaId(`/tema/${id}`, setTemas, {
        headers:{
            'Authorization' : token
        }
    })
}

function UpdateTema(e: ChangeEvent<HTMLInputElement>){
    setTemas({
        ...temas,
        [e.target.name]: e.target.value,
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()
    console.log("tema" + JSON.stringify(temas))
    if(id !== undefined){
        console.log(temas)
    put('/tema', temas, setTemas, {
        headers: {
            'Authorization': token
        }
    })
    toast.success('Tema atualizado com sucesso!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}else{
    post('/tema', temas, setTemas, {
        headers: {
            'Authorization': token
        }
    })
    toast.success('Tema cadastrado com sucesso!', {
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
back()
}

function back(){
    history('/temas')
}

    return(
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro de tema</Typography>

                <TextField value={temas.descricao} onChange={(e: ChangeEvent<HTMLInputElement>)=> UpdateTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth></TextField>
                
                <Button type="submit" variant="contained" color="primary">Finalizar</Button>
            </form>
        </Container>
    )
}

export default CadastrarTema;