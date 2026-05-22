import "./Login.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <>
            <Header />
        <h1>Login</h1>
        <Link to="/generos">Gêneros</Link>
      </>
   );
}

export default Login;