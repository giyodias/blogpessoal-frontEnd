import { Button, Container, TextField, Typography } from "@mui/material";
import React,{ ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../services/Service";
import Tema from "../../../models/Tema";
import useLocalStorage from 'react-use-localstorage';


function CadastrarTema(){
    const history = useNavigate();
    const {id} = useParams<{id: string}>()
    const {token, setToken} = useLocalStorage('token')
    const {temas, setTemas} = useState<Tema>({
        id: 0,
        descricao: ''
    })

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
    alert("Tema atualizado com sucesso!")
}else{
    post('/tema', temas, setTemas, {
        headers: {
            'Authorization': token
        }
    })
    alert('Tema cadastrado com sucesso!')
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