import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Perfil from "./components/perfil/Perfil";
import Mypage from "./components/mypage/Mypage";
import Header from "./components/header/Header";
import Produto from "./components/produto/Produto";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/produtos" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
