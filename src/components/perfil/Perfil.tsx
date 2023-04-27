import { useSelector } from "react-redux";
import Usuario from "../../models/Usuario";
import { useEffect, useState } from "react";
import { buscaId } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokenReducer";

function Perfil() {
    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

const [usuario, setUsuario] = useState<Usuario>({
id: +userId,
nome: '',
usuario: '',
foto: '',
senha: ''
})

const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
);

async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
    headers: {'Authorization': token}
    })
}

useEffect(() => {
    getUserById(+userId)
}, [])

    return(
        <>
        </>
    )
}

export default Perfil;