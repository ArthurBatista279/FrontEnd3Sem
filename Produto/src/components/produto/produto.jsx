import "./produto.css"
import { useState } from "react"
import imgDefault from '../../assets/CelularGenerico.avif'

export default function Produto() {
    const genericSmartphone = imgDefault

    const [produto, setProduto] = useState({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })
    const [editId, setEditId] = useState(null)

    const [arrProdutos, setArrProdutos] = useState([
        { id: 1, nome: "Samsung Galaxy S24", preco: 3270.00, descricao: "Memória 512GB, RAM 8GB, Tela Dynamic AMOLED 2X", quantidade: 15, imagem: "https://m.media-amazon.com/images/I/61w7bBa9xTL._UF1000,1000_QL80_.jpg" },
        { id: 2, nome: "iPhone 16 Branco", preco: 6999.99, descricao: "Memória 512GB, RAM 8GB, Tela Super Retina XDR", quantidade: 8, imagem: "https://m.media-amazon.com/images/I/61ctYsUobKL._UF1000,1000_QL80_.jpg" },
        { id: 3, nome: "POCO X7 Pro", preco: 2320.00, descricao: "Memória 512GB, RAM 12GB, Tela AMOLED", quantidade: 20, imagem: "https://m.media-amazon.com/images/I/61wln8y-YUL._UF1000,1000_QL80_.jpg" },
        { id: 4, nome: "Motorola Edge 50", preco: 1897.99, descricao: "Memória 256GB, RAM 8GB, Tela P-OLED", quantidade: 12, imagem: "https://m.media-amazon.com/images/I/6170neB1kjL._UF1000,1000_QL80_.jpg" },
        { id: 5, nome: "Realme C67", preco: 1218.00, descricao: "Memória 256GB, RAM 8GB, Tela IPS LCD", quantidade: 25, imagem: "https://m.media-amazon.com/images/I/61EWzVugMpL._UF1000,1000_QL80_.jpg" }
    ])

    function handleSubmit(e) {
        e.preventDefault()
        
        if (editId) {
            setArrProdutos(arrProdutos.map(p => 
                p.id === editId ? { ...produto, id: editId, imagem: produto.imagem || genericSmartphone } : p
            ))
            setEditId(null)
        } else {
            setArrProdutos([...arrProdutos, { 
                ...produto, 
                id: Date.now(), 
                imagem: produto.imagem || genericSmartphone 
            }])
        }
        
        setProduto({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })
        e.target.reset()
    }

    function prepararEdicao(p) {
        setProduto(p)
        setEditId(p.id)

    }

    function removerProduto(id) {
        setArrProdutos(arrProdutos.filter(p => p.id !== id))
    }

    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza">Senai</h1>
                <h1 className="titulo--vermelho">Phone</h1>
            </header>

            <form className="formzin" action="" onSubmit={handleSubmit}>
                <h2 style={{marginBottom: '1rem', textAlign: 'center'}}>
                    {editId ? "Editar Smartphone" : "Cadastrar Smartphone"}
                </h2>
                <div className="input--dados">
                    <input 
                        className="input--metade" 
                        type="text" 
                        placeholder="Nome do Modelo" 
                        value={produto.nome}
                        onChange={(e) => setProduto({ ...produto, nome: e.target.value })} 
                        required
                    />
                    <input 
                        className="input--metade" 
                        type="number" 
                        placeholder="Preço (R$)" 
                        value={produto.preco || ""}
                        onChange={(e) => setProduto({ ...produto, preco: parseFloat(e.target.value) })} 
                        required
                    />
                    <input 
                        className="input--metade" 
                        type="number" 
                        placeholder="Quantidade em Estoque" 
                        value={produto.quantidade || ""}
                        onChange={(e) => setProduto({ ...produto, quantidade: parseInt(e.target.value) })} 
                        required
                    />
                    <input 
                        className="input--metade" 
                        type="text" 
                        placeholder="URL da Imagem (Opcional)" 
                        value={produto.imagem}
                        onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} 
                    />
                    <input 
                        className="input--metade" 
                        style={{gridColumn: '1 / -1'}}
                        type="text" 
                        placeholder="Especificações / Descrição" 
                        value={produto.descricao}
                        onChange={(e) => setProduto({ ...produto, descricao: e.target.value })} 
                        required
                    />
                </div>

                <div style={{display: 'flex', gap: '10px'}}>
                    <button type="submit" className="btn--cadastro">
                        {editId ? "Salvar Alterações" : "Adicionar Smartphone"}
                    </button>
                    {editId && (
                        <button 
                            type="button" 
                            className="btn--cadastro" 
                            style={{background: 'rgba(255,255,255,0.1)', boxShadow: 'none'}}
                            onClick={() => {setEditId(null); setProduto({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })}}
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>

            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <div className="produto-acoes">
                            <button className="btn-icon" onClick={() => prepararEdicao(prod)}>✏️</button>
                            <button className="btn-icon btn-delete" onClick={() => removerProduto(prod.id)}>🗑️</button>
                        </div>
                        <h2>{prod.nome}</h2>
                        <p><strong>Preço:</strong> R$ {prod.preco.toFixed(2)}</p>
                        <p><strong>Descrição:</strong> {prod.descricao}</p>
                        <p><strong>Estoque:</strong> {prod.quantidade} unidades</p>
                        <img src={prod.imagem} alt={prod.nome} />
                    </div>
                ))}
            </section>
        </>
    )
}