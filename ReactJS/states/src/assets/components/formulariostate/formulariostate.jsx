import { useState } from 'react';

function FormularioState() {
  const [nome, setNome] = useState("sem texto");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <div>
      <h2>Formulario com State</h2>
      
      <label htmlFor="nome">Nome:</label>
      <input 
        type="text" 
        placeholder="Digite seu nome" 
        onChange={(evento) => setNome(evento.target.value)} 
      />
      
      <br />
        
      <label htmlFor="sobrenome">Sobrenome:</label>
      <input 
        type="text" 
        placeholder="Digite seu sobrenome" 
        onChange={(evento) => setSobrenome(evento.target.value)} 
      />

      <br />

      <label>
        Texto Digitado: <strong>{nome} {sobrenome}</strong>
      </label>
    </div>
  );
}

export default FormularioState;