function Contador() {

    return (
    <div className="contador">
        <h1 className="contador__title">Contador: {contador}</h1>
        <button onClick={Incrementar}>Contar (++)</button>
        <button onClick={Decrementar}>Contar (--)</button>
      </div>
    );

}

export default Contador;