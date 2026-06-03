import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Perfil from "./components/perfil/Perfil";
import Mypage from "./components/mypage/Mypage";
import Header from "./components/header/Header";
import UsuarioProvider from "./context/UsuarioProvider";

function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;
