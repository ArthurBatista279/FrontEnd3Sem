import "./filme.css";

function Filme({ titulo, ano, genero, nota }) {
  const estrelas = Math.round(nota / 2);

  return (
    <div className="filme-card">
      <div className="filme-header">
        <div>
          <h3 className="filme-titulo">{titulo}</h3>
          <span className="filme-ano">{ano}</span>
        </div>
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
