import "./CadastroGenero.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cadastro from "../../components/Cadastro/Cadastro";
import Lista from "../../components/Lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/Services";

const CadastroGenero = () => {

    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([
        {id: 1, nome: "Romance"},
        {id: 2, nome: "Comédia"}
    ])

    useEffect(() => {
        getGeneros()
    }, [])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/generos")
            setListaGeneros(retornoAPI.data)
        } catch (error) {
            console.error(error)
            alert("Problemas ao carregar os dados da API!")
        }
    }

    const cadastrarGenero = async (e) => {
        e.preventDefault()

        if (!valor.trim()) {
            alert("Por favor, preencha o nome do gênero!")
            return
        }

        const objCadastro = {
            nome: valor.trim()
        }

        try {
            await api.post("/generos", objCadastro)
            alert("Gênero cadastrado com sucesso!")
            limparFormulario()
            await getGeneros()
        } catch (error) {
            console.error(error)
            alert("Erro ao cadastrar o gênero. Tente novamente!")
        }
    };

    const limparFormulario = () => {
        setValor("")
    }

    const excluirGenero = (id) => {
        alert(`Em desenvolvimento: Excluir gênero com id!`)
    };

    const editarGenero = (id) => {
        alert(`Em desenvolvimento: Editar gênero com id`)
    };

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Gênero"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="gênero"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={cadastrarGenero}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}

                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"
                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"
                    funcExcluir = {excluirGenero}
                    funcEditar = {editarGenero}
                />
            </main>
            <Footer />
        </>
    );
}
export default CadastroGenero;