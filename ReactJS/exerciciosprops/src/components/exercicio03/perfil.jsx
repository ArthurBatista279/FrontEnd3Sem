import { useState } from "react";
import "./perfil.css";

function Perfil({ nome, idade, profissao }) {
  const [seguindo, setSeguindo] = useState(false);

  return (
    <div className="perfil-card">
      <div className="perfil-avatar">
        {nome.charAt(0).toUpperCase()}
      </div>
      <div className="perfil-info">
        <h3 className="perfil-nome">{nome}</h3>
        <p className="perfil-detalhe">
          <span className="perfil-label">Idade:</span> {idade} anos
        </p>
        <p className="perfil-detalhe">
          <span className="perfil-label">Profissão:</span> {profissao}
        </p>
        <button 
          className={`perfil-botao ${seguindo ? "seguindo" : ""}`}
          onClick={() => setSeguindo(!seguindo)}
        >
          {seguindo ? "Seguindo" : "Seguir"}
        </button>
      </div>
    </div>
  );
}

export default Perfil;