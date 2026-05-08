import "./jogo.css";

function Jogo({ nome, plataforma, preco, imagem }) {
  return (
    <div className="jogo-card">
      <img className="jogo-img" src={imagem} alt={`Capa de ${nome}`} />
      <div className="jogo-info">
        <h3 className="jogo-nome">{nome}</h3>
        <span className="jogo-plataforma">{plataforma}</span>
        <p className="jogo-preco">R$ {preco.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Jogo;
