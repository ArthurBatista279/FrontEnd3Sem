import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {

    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState("")

    const handleAtualizarUsuario = () => {
        const nome = novoUsuario.trim()
        if (!nome) return
        setUsuario(nome)
        setNovoUsuario("")
    }

    return (
        <>
            <h2>Minha página de perfil</h2>
            <p>Usuário atual: <strong>{usuario}</strong></p>
            <div>
                <input
                    type="text"
                    placeholder="Digite o novo usuário"
                    value={novoUsuario}
                    onChange={(e) => setNovoUsuario(e.target.value)} />

                <button onClick={handleAtualizarUsuario}>Alterar usuário</button>
            </div>
        </>
    )
}

export default Perfil