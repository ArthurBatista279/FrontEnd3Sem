import { useState } from "react"
import "./contador.css"

const Contador = () => {
    const [valor, setValor] = useState(0)

    return (
        <div className="contador-container">
            <h2>Contador Dinâmico</h2>
            <div className="contador-label">Valor Atual</div>
            <div className="contador-valor">{valor}</div>
            <button 
                className="contador-btn" 
                onClick={() => setValor(prev => prev + 1)}
            >
                +
            </button>
        </div>
    )
}

export default Contador;