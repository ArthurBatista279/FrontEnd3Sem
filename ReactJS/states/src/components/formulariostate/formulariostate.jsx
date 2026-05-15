import { useState } from 'react';
import "./formulariostate.css"

function FormularioState() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <div className="form-state-container">
      <h2>Perfil do Usuário</h2>
      
      <div className="form-group">
        <label htmlFor="nome">Primeiro Nome</label>
        <input 
          className="form-input"
          type="text" 
          id="nome"
          placeholder="Ex: João" 
          onChange={(evento) => setNome(evento.target.value)} 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="sobrenome">Sobrenome</label>
        <input 
          className="form-input"
          type="text" 
          id="sobrenome"
          placeholder="Ex: Silva" 
          onChange={(evento) => setSobrenome(evento.target.value)} 
        />
      </div>

      {(nome || sobrenome) && (
        <div className="result-preview">
          <label>Identificação Gerada</label>
          <strong>{nome} {sobrenome}</strong>
        </div>
      )}
    </div>
  );
}

export default FormularioState;