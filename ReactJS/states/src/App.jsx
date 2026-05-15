import './App.css';
import FormularioState from './components/formulariostate/formulariostate';
import Contador from './components/contador/contador';
import CadFruta from './components/cardfruta/cadfruta';

function App() {
  return (
    <main className="app-main">
      <CadFruta />
      
      <div className="extra-components">
        <section className="component-card">
          <Contador />
        </section>
        <section className="component-card">
          <FormularioState />
        </section>
      </div>
    </main>
  );
}

export default App;