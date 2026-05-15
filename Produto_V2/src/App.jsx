import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produto from "./components/produto/produto";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Produto />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App