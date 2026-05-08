import "./contato.css";

function Contato({ nome, telefone, email }) {
  return (
    <div className="contato-card">
      <div className="contato-avatar">
        {nome.charAt(0).toUpperCase()}
      </div>
      <div className="contato-info">
        <h3 className="contato-nome">{nome}</h3>
        <p className="contato-detalhe">
          <span>Fone:</span> {telefone}
        </p>
        <p className="contato-detalhe">
          <span>Email:</span> {email}
        </p>
      </div>
    </div>
  );
}

export default Contato;
