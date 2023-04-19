interface UsuarioLogin{
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    token?: string | null //ou vai ser string ou vai ser null
}

export default UsuarioLogin