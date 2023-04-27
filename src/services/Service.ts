import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-kedr.onrender.com/'
})

export const login = async(url: string, dados:Object, setDados:Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const cadastrarUsuario = async(url: string, dados:Object, setDados:Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const busca = async(url: string, setDados:Function, header: any) =>{
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const buscaId = async(url: string, setDados:Function, header: any) =>{
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const post = async(url: string, dados:Object, setDados:Function, header: any) =>{
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const put = async(url: string, dados:Object, setDados:Function, header: any) =>{
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deleteId = async(url: string, header: any) =>{
    await api.delete(url, header)
    
}