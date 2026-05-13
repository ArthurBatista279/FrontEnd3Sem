import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import CadastroFruta from './pages/cadastrofruta/cadastrofruta'
import CadastroProduto from './pages/cadastroproduto/cadastroproduto'
import Homepage from './pages/home/homepage'
import QuemSomos from './pages/quemsomos/quemsomos'
import { Routes } from 'react-router-dom'

export default function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<QuemSomos />} path="/quemsomos" />
        <Route element={<CadastroFruta />} path="/frutas" />
        <Route element={<CadastroProduto />} path="/produtos" />
      </Routes>
    </BrowserRouter>  
      
  )
}