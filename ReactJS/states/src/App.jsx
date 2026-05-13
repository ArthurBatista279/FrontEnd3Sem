import { useState } from 'react';
import './App.css';
import FormularioState from './components/formulariostate/formulariostate';
import Contador from './components/contador/contador';

function App() {
  const [titulo, setTitulo] = useState("Brave");
  const [contador, setContador] = useState(0);

  function mudarTexto() {
    setTitulo("Microsoft");
  }
  
  function mudarTexto2() {
    setTitulo("Adenicon");
  }

  function Incrementar() {
    const novoValor = contador + 1;
    
    if (novoValor > 10) {
      setContador(0);
    } else {
      setContador(novoValor);
    }
  }

  function Decrementar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <div className="container">
      <h1>Minha Pagina de {titulo}</h1>
      <button onClick={mudarTexto}>Mudar para Microsoft</button>
      <button onClick={mudarTexto2}>Mudar para Adenicon</button>

      <Contador/>
      <br />
      <FormularioState/>

      <hr />
    </div>
  );
}

export default App; 