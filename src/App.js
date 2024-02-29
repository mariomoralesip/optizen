import { Section } from "./components/Section";

function App() {
  const secciones = [1, 2, 3, 4, 5];
  return (
    <div>
      <header className="App-header">
        {secciones.map((seccion) => (
          <Section>
            <p>El contenido</p>
            <p>bla blbla.</p>
          </Section>
        ))}
      </header>
    </div>
  );
}

export default App;
