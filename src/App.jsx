import "./assets/styles/colores.css";
import "./assets/styles/globalAnimations.css";
import Header from "./components/Header";


function App() {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <main style={{ marginLeft: "260px", width: "100%", padding: "2rem" }}>
        {/* Tu contenido */}
        <section id="hero">
          <h1>Bienvenido a mi Portafolio</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
