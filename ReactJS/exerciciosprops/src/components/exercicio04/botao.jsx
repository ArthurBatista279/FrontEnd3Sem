import "./botao.css";

function Botao({ texto, cor }) {
  return (
    <button className="botao" style={{ backgroundColor: cor }}>
      {texto}
    </button>
  );
}

export default Botao;
