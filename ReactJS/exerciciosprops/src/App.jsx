import { useState } from "react";
import "./App.css";
import "./index.css";
import Saudacao from "./components/exercicio01/saudacao";
import Produto from "./components/exercicio02/produto";
import Perfil from "./components/exercicio03/perfil";
import Botao from "./components/exercicio04/botao";
import Filme from "./components/exercicio05/filme";
import Aluno from "./components/exercicio06/aluno";
import Card from "./components/exercicio07/card";
import Contato from "./components/exercicio08/contato";
import Jogo from "./components/exercicio09/jogo";
import ItemLoja from "./components/exercicio10/itemLoja";
import Pessoa from "./components/desafioExtra/pessoa";

const contatos = [
  { id: 1, nome: "Ana Lima",      telefone: "(11) 91234-5678", email: "ana.lima@email.com" },
  { id: 2, nome: "Bruno Mendes",  telefone: "(21) 98765-4321", email: "bruno.mendes@email.com" },
  { id: 3, nome: "Carla Souza",   telefone: "(31) 97654-3210", email: "carla.souza@email.com" },
  { id: 4, nome: "Diego Alves",   telefone: "(41) 96543-2109", email: "diego.alves@email.com" },
  { id: 5, nome: "Elisa Ferreira",telefone: "(51) 95432-1098", email: "elisa.ferreira@email.com" },
];

const pessoas = [
  {
    id: 1,
    nome: "Arthur",
    sobrenome: "Batista",
    idade: 18,
    cidade: "São Paulo",
    foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur&backgroundColor=b6e3f4",
  },
  {
    id: 2,
    nome: "Mariana",
    sobrenome: "Costa",
    idade: 22,
    cidade: "Rio de Janeiro",
    foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana&backgroundColor=ffd5dc",
  },
  {
    id: 3,
    nome: "Lucas",
    sobrenome: "Oliveira",
    idade: 20,
    cidade: "Belo Horizonte",
    foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas&backgroundColor=d1d4f9",
  },
];

function Secao({ numero, titulo, children }) {
  return (
    <section className="secao">
      <div className="secao-header">
        <span className="secao-numero">{String(numero).padStart(2, "0")}</span>
        <h2 className="secao-titulo">{titulo}</h2>
      </div>
      <div className="secao-conteudo">{children}</div>
    </section>
  );
}

function App() {
  const [corDigitada, setCorDigitada] = useState("#7c3aed");

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-badge">ReactJS</div>
        <h1 className="app-titulo">Lista de Exercícios — Props</h1>
        <p className="app-subtitulo">
          Conceitos iniciais de Props no React · 10 exercícios + Desafio Extra
        </p>
      </header>

      <main className="app-main">

        <Secao numero={1} titulo="Componente Saudacao">
          <div className="lista-vertical">
            <Saudacao nome="Arthur" />
            <Saudacao nome="Mariana" />
            <Saudacao nome="Lucas" />
          </div>
        </Secao>

        <Secao numero={2} titulo="Componente Produto">
          <div className="grid-3">
            <Produto
              nome="Notebook Gamer"
              preco={4299.99}
              descricao="Intel Core i3, 8GB RAM, GTX 1080 — alto desempenho para jogos e trabalho."
            />
            <Produto
              nome="Smartphone Pro"
              preco={2799.00}
              descricao="Câmera de 108MP, bateria de 5000mAh e tela AMOLED 120Hz."
            />
            <Produto
              nome="Fone Bluetooth"
              preco={349.90}
              descricao="Cancelamento de ruído ativo, 30h de bateria e som Hi-Fi."
            />
          </div>
        </Secao>

        <Secao numero={3} titulo="Componente Perfil">
          <div className="lista-vertical">
            <Perfil nome="Arthur Batista"  idade={18} profissao="Desenvolvedor Front-end" />
            <Perfil nome="Mariana Costa"   idade={22} profissao="Designer UX/UI" />
            <Perfil nome="Lucas Oliveira"  idade={20} profissao="Analista de Dados" />
          </div>
        </Secao>

        <Secao numero={4} titulo="Componente Botao">
          <div className="controle-cor">
            <input 
              type="text" 
              placeholder="Digite uma cor (ex: red, blue, #000)" 
              value={corDigitada}
              onChange={(e) => setCorDigitada(e.target.value)}
              className="input-cor"
            />
            <Botao texto="Botão Dinâmico" cor={corDigitada} />
          </div>
        </Secao>

        <Secao numero={5} titulo="Componente Filme">
          <div className="grid-3">
            <Filme titulo="Interestelar"     ano={2014} genero="Ficção Científica" nota={9.3} />
            <Filme titulo="Coringa"          ano={2019} genero="Drama / Thriller"  nota={8.5} />
            <Filme titulo="Vingadores: Ultimato" ano={2019} genero="Ação / Aventura" nota={8.4} />
          </div>
        </Secao>

        <Secao numero={6} titulo="Componente Aluno">
          <div className="lista-vertical">
            <Aluno
              nome="Arthur Batista"
              curso="Análise e Desenvolvimento de Sistemas"
              imagem="https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur&backgroundColor=b6e3f4"
            />
            <Aluno
              nome="Mariana Costa"
              curso="Design Digital"
              imagem="https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana&backgroundColor=ffd5dc"
            />
            <Aluno
              nome="Lucas Oliveira"
              curso="Ciência da Computação"
              imagem="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas&backgroundColor=d1d4f9"
            />
          </div>
        </Secao>

        <Secao numero={7} titulo="Componente Card (props.children)">
          <div className="grid-2">
            <Card>
              <h3 style={{ color: "var(--accent-light)", marginBottom: 8 }}>Nota Importante</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                Este componente aceita <strong style={{ color: "var(--text)" }}>qualquer conteúdo</strong> via{" "}
                <code style={{ color: "var(--accent-light)" }}>props.children</code>, tornando-o completamente reutilizável.
              </p>
            </Card>
            <Card>
              <h3 style={{ color: "var(--accent-light)", marginBottom: 8 }}>Dica React</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                Componentes como este são chamados de <strong style={{ color: "var(--text)" }}>componentes contêiner</strong> — eles apenas estilizam o que está dentro deles.
              </p>
            </Card>
            <Card>
              <ul style={{ color: "var(--text-muted)", paddingLeft: 18, lineHeight: 2 }}>
                <li>Item de lista dentro do Card</li>
                <li>Qualquer JSX funciona aqui</li>
                <li>Totalmente flexível</li>
              </ul>
            </Card>
          </div>
        </Secao>

        <Secao numero={8} titulo="Componente Contato">
          <div className="lista-vertical">
            {contatos.map((c) => (
              <Contato key={c.id} nome={c.nome} telefone={c.telefone} email={c.email} />
            ))}
          </div>
        </Secao>

        <Secao numero={9} titulo="Componente Jogo">
          <div className="grid-3">
            <Jogo
              nome="The Last of Us Part II"
              plataforma="PlayStation 5"
              preco={249.90}
              imagem="https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg"
            />
            <Jogo
              nome="Elden Ring"
              plataforma="PC / Xbox / PS5"
              preco={299.99}
              imagem="https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg"
            />
            <Jogo
              nome="Red Dead Redemption 2"
              plataforma="PC / PS4 / Xbox"
              preco={179.90}
              imagem="https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg"
            />
          </div>
        </Secao>

        <Secao numero={10} titulo="Componente Item Loja">
          <div className="lista-vertical">
            <ItemLoja nome="Teclado Mecânico RGB"  preco={349.90} categoria="Periféricos"  estoque={12} />
            <ItemLoja nome="Mouse Sem Fio"          preco={189.00} categoria="Periféricos"  estoque={0}  />
            <ItemLoja nome="Monitor 27 pol 144Hz"   preco={1499.99} categoria="Monitores"   estoque={3}  />
            <ItemLoja nome="Webcam Full HD"          preco={259.90} categoria="Câmeras"      estoque={0}  />
            <ItemLoja nome="SSD NVMe 1TB"            preco={399.00} categoria="Armazenamento" estoque={7} />
          </div>
        </Secao>

        <Secao numero="+" titulo="Desafio Extra — Renderização Dinâmica">
          <div className="lista-vertical">
            {pessoas.map((p) => (
              <Pessoa
                key={p.id}
                nome={p.nome}
                sobrenome={p.sobrenome}
                idade={p.idade}
                cidade={p.cidade}
                foto={p.foto}
              />
            ))}
          </div>
        </Secao>

      </main>

      <footer className="app-footer">
        <p>Exercícios de Props — ReactJS · Desenvolvido por <strong>Arthur Batista</strong></p>
      </footer>
    </div>
  );
}

export default App;
