import "./saudacao.css";

function Saudacao({ nome }) {
  return (
    <div className="saudacao-card">
      <p className="saudacao-texto">
        Olá, <strong>{nome}</strong>! Seja bem-vindo(a)!
      </p>
    </div>
  );
}

export default Saudacao;