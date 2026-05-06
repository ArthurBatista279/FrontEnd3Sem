import "./Menu.css";
import MyPeople from "../../assets/barney.webp";

function Menu() {
    return(
    <nav class="menu">
      <a href="#" className="menu__item">Home</a>
      <a href="#" className="menu__item">Quem Somos</a>
      <a href="#" className="menu__item">Contato</a>
      <a href="#" className="menu__item menu__item--signin">Entrar</a>
      <a href="#" className="menu__item menu__item--signup">Cadastrar</a>
      <div class="card-perfil">
        <img class="card-perfil__image" src={MyPeople} alt="imagem do usuario" />
      </div>
    </nav>
    );
}

export default Menu;