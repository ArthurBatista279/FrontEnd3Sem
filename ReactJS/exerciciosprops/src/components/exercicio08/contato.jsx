import { useState } from "react";
import "./contato.css";

function Contato({ nome, telefone, email }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <div className={`contato-card ${favorito ? "favorito" : ""}`}>
      <div className="contato-avatar">
        {nome.charAt(0).toUpperCase()}
      </div>
      <div className="contato-info">
        <div className="contato-header">
          <h3 className="contato-nome">{nome}</h3>
          <button 
            className={`contato-favorito ${favorito ? "is-favorito" : ""}`}
            onClick={() => setFavorito(!favorito)}
          >
            {favorito ? "⭐" : "☆"}
          </button>
        </div>
        <p className="contato-detalhe">
          <span>Fone:</span> {telefone}
        </p>
        <p className="contato-detalhe">
          <span>Email:</span> {email}
        </p>
      </div>
    </div>
  );
}

export default Contato;
