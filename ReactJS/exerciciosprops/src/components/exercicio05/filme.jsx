import { useState } from "react";
import "./filme.css";

function Filme({ titulo, ano, genero, nota }) {
  const [curtido, setCurtido] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100)); // Simula likes iniciais
  const estrelas = Math.round(nota / 2);

  const toggleCurtir = () => {
    if (curtido) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setCurtido(!curtido);
  };

  return (
    <div className="filme-card">
      <div className="filme-header">
        <div>
          <h3 className="filme-titulo">{titulo}</h3>
          <span className="filme-ano">{ano}</span>
        </div>
        <button 
          className={`filme-curtir ${curtido ? "curtido" : ""}`}
          onClick={toggleCurtir}
        >
          {curtido ? "❤️" : "🤍"} {likes}
        </button>
      </div>
      <div className="filme-info">
        <span className="filme-badge">{genero}</span>
        <div className="filme-nota">
          <span className="nota-numero">{nota}</span>
          <span className="nota-estrelas">
            {"★".repeat(estrelas)}{"☆".repeat(5 - estrelas)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filme;
