import "./aluno.css";

function Aluno({ nome, curso, imagem }) {
  return (
    <div className="aluno-card">
      <img className="aluno-img" src={imagem} alt={`Foto de ${nome}`} />
      <div className="aluno-info">
        <h3 className="aluno-nome">{nome}</h3>
        <p className="aluno-curso">
          <span className="aluno-icone">🎓</span> {curso}
        </p>
      </div>
    </div>
  );
}

export default Aluno;
