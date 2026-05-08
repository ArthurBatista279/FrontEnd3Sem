import MyPeople from "../../assets/barney.webp";
import "./Cardperfil.css"

function Cardperfil() {
    return (

      <div className="card-perfil">
        <img className="card-perfil__image" src={MyPeople} alt="imagem do usuario" />
      </div>

    )

}

export default Cardperfil