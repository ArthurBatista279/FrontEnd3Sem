import "./perfil.css";

function Perfil({ nome, idade, profissao }) {
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
      </div>
    </div>
  );
}

export default Perfil;