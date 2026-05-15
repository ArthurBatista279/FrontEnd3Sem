import { useState } from "react";
import "./jogo.css";

function Jogo({ nome, plataforma, preco, imagem }) {
  const [comprado, setComprado] = useState(false);

  return (
    <div className={`jogo-card ${comprado ? "comprado" : ""}`}>
      <img className="jogo-img" src={imagem} alt={`Capa de ${nome}`} />
      <div className="jogo-info">
        <h3 className="jogo-nome">{nome}</h3>
        <span className="jogo-plataforma">{plataforma}</span>
        <p className="jogo-preco">R$ {preco.toFixed(2)}</p>
        <button 
          className={`jogo-botao ${comprado ? "btn-comprado" : ""}`}
          onClick={() => setComprado(!comprado)}
        >
          {comprado ? "No Carrinho" : "Comprar"}
        </button>
      </div>
    </div>
  );
}

export default Jogo;
