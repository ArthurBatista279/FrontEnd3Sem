import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Home = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <h2>Home</h2>
      <p>Bem-vindo, {usuario}!</p>
    </>
  );
};

export default Home;
