import React from "react";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Perfil = ({ children }) => {
  const { novoUsuario, setUsuario, setNovoUsuario } = useContext(UsuarioContext);
  return (
    <>
      <h2>Perfil</h2>
      <span>Nome: {novoUsuario}</span>
      <p>
        Esse é o perfil do usuário {novoUsuario}.
        <input type="text" placeholder="Digite um novo nome" />
        <button
          onClick={() => {
            setUsuario("Arthur");
          }}
        >
          Alterar Usuário
        </button>
      </p>
    </>
  );
};

export default Perfil;
