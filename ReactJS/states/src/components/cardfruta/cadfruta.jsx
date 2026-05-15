import { useState } from "react";
import "./cadfruta.css"

function CadFruta() {

    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Mamão", quantidade: 10 },
        { id: 2, nome: "Abacate", quantidade: 5 },
        { id: 3, nome: "Banana", quantidade: 2 }
    ])

    function Cadastrar(e) {
        e.preventDefault();
        
        if (!fruta || !quantidade) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const novaFruta = {
            id: Date.now(),
            nome: fruta,
            quantidade: parseInt(quantidade)
        }

        setArrFrutas([...arrFrutas, novaFruta])
        limparFormulario()
    }

    function limparFormulario() {
        setFruta("")
        setQuantidade("")
    }

    return (
        <section className="fruit-app">
            <header className="fruit-app__header">
                <h1>Frutaria Gourmet</h1>
                <p>Gerencie seu estoque com estilo</p>
            </header>

            <div className="fruit-app__container">
                <form className="fruit-form" onSubmit={Cadastrar}>
                    <div className="form-group">
                        <label htmlFor="fruta">Nome da Fruta</label>
                        <input
                            placeholder="Ex: Manga Rosa"
                            type="text"
                            id="fruta"
                            value={fruta}
                            className="form-input"
                            onChange={(e) => setFruta(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input
                            placeholder="0"
                            type="number"
                            id="quantidade"
                            value={quantidade}
                            className="form-input"
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-submit">
                        <span>Adicionar ao Estoque</span>
                    </button>
                </form>

                <div className="fruit-list-container">
                    <h2>Estoque Atual</h2>
                    <ul className="fruit-list">
                        {arrFrutas.map((f) => (
                            <li key={f.id} className="fruit-item">
                                <div className="fruit-item__info">
                                    <span className="fruit-name">{f.nome}</span>
                                    <span className="fruit-qty">{f.quantidade} unidades</span>
                                </div>
                                <div className="fruit-item__status">Disponível</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default CadFruta;

