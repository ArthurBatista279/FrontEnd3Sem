import "./CadastroFilme.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cadastro from "../../components/Cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/Services";
import Swal from "sweetalert2";
import Alerta from "../../components/alerta/Alerta";

const CadastroFilme = () => {
  const [valor, setValor] = useState("");
  const [idGenero, setIdGenero] = useState("");
  const [editar, setEditar] = useState(false);
  const [idEditar, setIdEditar] = useState(0);
  const [listaFilmes, setListaFilmes] = useState([]);
  const [listaGeneros, setListaGeneros] = useState([]);

  // Busca gêneros cadastrados na API
  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/generos");
      setListaGeneros(retornoAPI.data);
      return retornoAPI.data;
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Problemas ao carregar os gêneros!",
        icon: "error",
      });
      return [];
    }
  };

  // Busca filmes da API e formata os dados
  const getFilmes = async (generosCarregados = listaGeneros) => {
    try {
      const retornoAPI = await api.get("/filmes");
      
      const generos = generosCarregados.length > 0 ? generosCarregados : await getGeneros();

      const filmesFormatados = retornoAPI.data.map((filme) => {
        const generoEncontrado = generos.find(g => g.idGenero === filme.idGenero);
        return {
          id: filme.idFilme,
          titulo: filme.titulo,
          idGenero: filme.idGenero,
          genero: {
            nome: generoEncontrado ? generoEncontrado.nome : "Não cadastrado"
          }
        };
      });
      
      setListaFilmes(filmesFormatados);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Problemas ao carregar a lista de filmes!",
        icon: "error",
      });
    }
  };

  // Efeito para carregar dados iniciais
  useEffect(() => {
    const inicializar = async () => {
      const generos = await getGeneros();
      await getFilmes(generos);
    };
    inicializar();
  }, []);

  // Cadastra um novo filme
  const cadastrarFilme = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, preencha o nome do filme!",
        icon: "warning",
      });
      return;
    }

    if (!idGenero) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, selecione um gênero!",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("titulo", valor);
    formData.append("idGenero", idGenero);

    try {
      await api.post("/filmes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Sucesso!",
        text: "Filme cadastrado com sucesso!",
        icon: "success",
      });

      limparFormulario();
      await getFilmes();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Erro ao cadastrar o filme. Tente novamente!",
        icon: "error",
      });
    }
  };

  // Edita um filme existente
  const editarFilme = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, preencha o nome do filme!",
        icon: "warning",
      });
      return;
    }

    if (!idGenero) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, selecione um gênero!",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("titulo", valor);
    formData.append("idGenero", idGenero);

    try {
      await api.put(`/filmes/${idEditar}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Sucesso!",
        text: "Filme atualizado com sucesso!",
        icon: "success",
      });

      limparFormulario();
      await getFilmes();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Erro ao atualizar o filme. Tente novamente!",
        icon: "error",
      });
    }
  };

  // Prepara o formulário para edição
  const PreEditar = (item) => {
    setValor(item.titulo);
    setIdGenero(item.idGenero || "");
    setEditar(true);
    setIdEditar(item.id);
  };

  // Exclui um filme
  const excluirFilme = async (item) => {
    const result = await Swal.fire({
      title: "Tem certeza que deseja excluir?",
      text: "Essa ação não poderá ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      const retornoAPI = await api.delete(`/filmes/${item.id}`);
      if (retornoAPI.status === 200 || retornoAPI.status === 204) {
        Swal.fire({
          title: "Deletado!",
          text: "O filme foi excluído com sucesso!",
          icon: "success",
        });
        await getFilmes();
      } else {
        Swal.fire({
          title: "Erro!",
          text: "Problemas ao excluir o filme. Tente novamente!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro!",
        text: "Erro ao excluir o filme. Tente novamente!",
        icon: "error",
      });
    }
  };

  // Limpa o formulário e reseta o estado de edição
  const limparFormulario = () => {
    setValor("");
    setIdGenero("");
    setEditar(false);
    setIdEditar(0);
  };

  return (
    <>
      <Header />

      <main>
        <Cadastro
          tituloCadastro="Cadastro de Filme"
          placeholder="filme"
          funcCadastro={editar ? editarFilme : cadastrarFilme}
          valor={valor}
          setValor={setValor}
          valorSelect={idGenero}
          setValorSelect={setIdGenero}
          btnEditar={editar}
          cancelarEdicao={limparFormulario}
          listaGeneros={listaGeneros}
        />

        <Lista
          tituloLista="Lista de Filmes"
          lista={listaFilmes}
          tipoLista="filme"
          funcExcluir={excluirFilme}
          funcEditar={PreEditar}
        />
      </main>

      <Footer />
    </>
  );
};

export default CadastroFilme;
