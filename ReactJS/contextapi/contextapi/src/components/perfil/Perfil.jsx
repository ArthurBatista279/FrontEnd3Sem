import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {

    const { usuario, setUsuario, sair } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState("")
    const navigate = useNavigate()

    const handleAtualizarUsuario = (event) => {
        event.preventDefault()
        const nome = novoUsuario.trim()
        if (!nome) return
        setUsuario(nome)
        setNovoUsuario("")
        navigate("/")
    }

    return (
        <>
            <h2>Minha página de perfil</h2>
            {usuario ? (
                <>
                    <form onSubmit={handleAtualizarUsuario}>
                        <p>Usuário atual: <strong>{usuario}</strong></p>
                        <div>
                            <input
                                type="text"
                                placeholder="Digite um novo usuário"
                                value={novoUsuario}
                                onChange={(e) => setNovoUsuario(e.target.value)} />
                        </div>
                        <button type="submit">Alterar usuário</button>
                    </form>
                    <button type="button" onClick={() => { sair(); navigate("/"); }}>
                        Sair
                    </button>
                </>
            ) : (
                <form onSubmit={handleAtualizarUsuario}>
                    <p>Faça login com seu nome para acessar páginas privadas.</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={novoUsuario}
                            onChange={(e) => setNovoUsuario(e.target.value)} />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            )}
        </>
    )
}

export default Perfil