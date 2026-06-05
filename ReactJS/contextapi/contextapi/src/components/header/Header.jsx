import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"

const Header = () => {
  const { usuario, sair } = useContext(UsuarioContext)

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/mypage">My Blog</Link>
        <Link to="/produtos">Produtos</Link>
        <span>({usuario ? usuario : "visitante"})</span>
        {usuario && (
          <button type="button" onClick={sair}>
            Sair
          </button>
        )}
      </nav>
    </header>
  )
}

export default Header