import "./assets/styles/colores.css";
import "./assets/styles/globalAnimations.css";
import About from "./components/About";
import Formacion from "./components/Formacion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Software";

function App() {
  return (
    <div style={{ display: "flex" }}>
  <Header />
  <main>
    <Hero />
    <About />
    <Formacion />
    <Skills />
  </main>
</div>
  );
}

export default App;
