import "./itemLoja.css";

function ItemLoja({ nome, preco, categoria, estoque }) {
  const disponivel = estoque > 0;

  return (
    <div className={`item-loja-card ${disponivel ? "disponivel" : "indisponivel"}`}>
      <div className="item-header">
        <h3 className="item-nome">{nome}</h3>
        <span className={`item-status ${disponivel ? "status-ok" : "status-erro"}`}>
          {disponivel ? "Produto disponível" : "Produto indisponível"}
        </span>
      </div>
      <div className="item-footer">
        <span className="item-categoria">{categoria}</span>
        <span className="item-preco">R$ {preco.toFixed(2)}</span>
      </div>
      {disponivel && (
        <p className="item-estoque">{estoque} unidade(s) em estoque</p>
      )}
    </div>
  );
}

export default ItemLoja;
