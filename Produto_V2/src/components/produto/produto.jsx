import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'

export default function Produto() {
    //States e variaveis
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [editar, setEditar] = useState(false)
    const [selectedProduto, setSelectedProduto] = useState(null)

    const [arrProdutos, setArrProdutos] = useState([])

    //Ciclo de vida e funcoes
    async function cadastrarProduto(e) {
        e.preventDefault() // nao deixa o formulario ser postado

        // validar o formulario
        if (nome.trim().length === 0 || descricao.trim().length === 0 ||
            isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos corretamente")
            return
        }

        const objtocadastro = {
            nome,
            descricao,
            preco,
            quantidade,
            imagem: "image.jpg",
        }

        console.log(objtocadastro);

        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                body: JSON.stringify(objtocadastro),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })

            console.log(retornoAPI);
            if (!retornoAPI.ok) {
                throw new Error(`Erro na API: ${retornoAPI.status}`);
            }

            const dadosCadastrados = await retornoAPI.json();
            console.log(dadosCadastrados);
            setArrProdutos((prev) => [...prev, dadosCadastrados]);
            LimparFormulario();
        } catch (error) {
            alert("Nao foi possivel salvar os dados")
            console.log(error);
        }
    }

    async function editarProduto(e) {
        e.preventDefault()

        if (!selectedProduto) {
            alert("Nenhum produto selecionado para editar")
            return
        }

        if (nome.trim().length === 0 || descricao.trim().length === 0 ||
            isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos corretamente")
            return
        }

        const objtoeditar = {
            nome,
            descricao,
            preco,
            quantidade,
            imagem: "image.jpg",
        }

        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${selectedProduto.id}`, {
                method: "PUT",
                body: JSON.stringify(objtoeditar),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })

            if (!retornoAPI.ok) {
                throw new Error(`Erro na API: ${retornoAPI.status}`)
            }

            const produtoAtualizado = await retornoAPI.json()
            console.log(produtoAtualizado)
            setEditar(false)
            setSelectedProduto(null)
            LimparFormulario()
            await getDados()
        } catch (error) {
            alert("Nao foi possivel atualizar o produto")
            console.log(error)
        }
    }

    function LimparFormulario() {
        setNome("")
        setPreco(0)
        setDescricao("")
        setQuantidade(0)
        setImagem(img)
        setSelectedProduto(null)
    }

    useEffect(() => {
        getDados();
    }, [])

    async function getDados() {
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos")

            if (!retornoAPI.ok) {
                throw new Error(`Erro na API: ${retornoAPI.status}`)
            }

            const dados = await retornoAPI.json();
            console.log(dados);
            setArrProdutos(dados)
        } catch (error) {
            console.log("Erro ao Buscar os Produtos")
            console.log(error)
        }
    }

    async function deletar(id) {
        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: "DELETE"
            })

            if (!retornoAPI.ok) {
                throw new Error(`Erro na API: ${retornoAPI.status}`)
            }

            const novaLista = arrProdutos.filter((prod) => prod.id !== id)
            setArrProdutos(novaLista)
        } catch (error) {
            alert("Nao foi possivel deletar o produto")
            console.log(error)
        }
    }

    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
                <div className="input--dados">
                    <input className="input--metade" type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" type="number" id="preco" placeholder="Preço" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" type="text" id="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>

                {editar && (
                    <button type="button" className="btn--cadastro" onClick={() => {
                        setEditar(false)
                        setSelectedProduto(null)
                        LimparFormulario()
                    }}>
                        Cancelar
                    </button>
                )}
                <button type="submit" className="btn--cadastro">
                    {editar ? "Salvar Alterações" : "Adicionar Produto"}
                </button>
            </form>

            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a href="#" onClick={(e) => {
                            e.preventDefault()
                            setNome(prod.nome)
                            setPreco(prod.preco)
                            setDescricao(prod.descricao)
                            setQuantidade(prod.quantidade)
                            setEditar(true)
                            setSelectedProduto(prod)
                        }}>Editar</a>

                        <a href="#" onClick={(e) => {
                            e.preventDefault()
                            deletar(prod.id)
                        }}>Deletar</a>
                    </div>
                ))}
            </section>
        </>
    )
}