import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Mypage = () => {
  const { usuario } = useContext(UsuarioContext)

  return (
    <>
      <h2>My Blog</h2>
      <p>Bem-vindo à sua página, {usuario}.</p>
      <p>Aqui você pode ver o conteúdo e navegar pelo site.</p>
    </>
  )
}

export default Mypage