import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Logo from "../../assets/img/logo.svg";
import Botao from "../../components/botao/Botao";
import { UsuarioContext } from "../../context/UsuarioContext";

const Login = () => {
  const { usuario, setUsuario, sair } = useContext(UsuarioContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const emailTrimado = email.trim();
    if (!emailTrimado) return;
    setUsuario(emailTrimado);
    navigate("/filmes");
  };

  return (
    <main className="main_login">
      <div className="banner"></div>
      
      <section className="section_login">
        <img src={Logo} alt="Logo do Filmoteca" />
        {usuario ? (
          <div className="logado">
            <p>
              Logado como: <strong>{usuario}</strong>
            </p>
            <button
              type="button"
              onClick={() => {
                sair();
              }}
              className="btn_sair"
            >
              Sair
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="form_login">
            <h1>Login</h1>
            <div className="campos_login">
              <div className="campo_input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="campo_input">
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>
            <Botao nomeDoBotao="Entrar" />
          </form>
        )}
      </section>
    </main>
  );
};

export default Login;
