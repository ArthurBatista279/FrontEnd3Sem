import "./produto.css";

function Produto({ nome, preco, descricao }) {
  return (
    <div className="produto-card">  
      <div className="produto-header">
        <h3 className="produto-nome">{nome}</h3>
      </div>
      <p className="produto-preco">
        <span className="preco-label">Preço:</span> R$ {preco.toFixed(2)}
      </p>
      {descricao && <p className="produto-descricao">{descricao}</p>}
    </div>
  );
}

export default Produto;