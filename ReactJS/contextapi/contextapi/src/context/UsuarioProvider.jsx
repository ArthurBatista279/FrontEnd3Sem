import { useState, useEffect } from "react";
import { UsuarioContext } from "./UsuarioContext";

const getStoredUsuario = () => {
  try {
    const stored = localStorage.getItem("usuario");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(getStoredUsuario);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  const adicionarProduto = (produto) => {
    setProdutos((prevProdutos) => [
      ...prevProdutos,
      { id: Date.now(), ...produto },
    ]);
  };

  const sair = () => {
    setUsuario(null);
    setProdutos([]);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        setUsuario,
        produtos,
        adicionarProduto,
        sair,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
