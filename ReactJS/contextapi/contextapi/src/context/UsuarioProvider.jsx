import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("Rafael");
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos((prevProdutos) => [
      ...prevProdutos,
      { id: Date.now(), ...produto },
    ]);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        setUsuario,
        produtos,
        adicionarProduto,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
