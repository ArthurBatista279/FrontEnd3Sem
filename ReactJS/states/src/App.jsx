import { useState } from 'react'
import './App.css'

function App() {
  const [titulo, setTitulo] = useState("Brave")

  function mudarTexto() {
    setTitulo("Novo Título")
  }

  return (
    <>
    <h1>Minha Pagina de {texto}</h1>
    <button onClick={mudarTexto}>Mudar texto</button>
    </>
  );
}

export default App;