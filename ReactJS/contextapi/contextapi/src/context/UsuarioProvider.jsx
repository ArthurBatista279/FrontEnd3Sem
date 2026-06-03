import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("Arthur");

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
