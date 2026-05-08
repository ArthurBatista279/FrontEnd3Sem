import "./pessoa.css";

function Pessoa({ nome, sobrenome, idade, cidade, foto }) {
  return (
    <div className="pessoa-card">
      <img className="pessoa-foto" src={foto} alt={`Avatar de ${nome}`} />
      <div className="pessoa-info">
        <h3 className="pessoa-nome">{nome} {sobrenome}</h3>
        <p className="pessoa-detalhe">
          <span>🎂</span> {idade} anos
        </p>
        <p className="pessoa-detalhe">
          <span>📍</span> {cidade}
        </p>
      </div>
    </div>
  );
}

export default Pessoa;
