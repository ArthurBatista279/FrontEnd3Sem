import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Produto = () => {
  const { usuario, produtos, adicionarProduto } = useContext(UsuarioContext);
  const [nome, setNome] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome.trim()) {
      return;
    }

    adicionarProduto({ nome: nome.trim() });
    setNome("");
  };

  return (
    <>
      <h2>Produtos</h2>
      <p>Olá, {usuario}! Cadastre um produto e confira a lista atualizada.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do produto:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar produto</button>
      </form>

      <h3>Lista de produtos</h3>
      {produtos.length > 0 ? (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
    </>
  );
};

export default Produto;
