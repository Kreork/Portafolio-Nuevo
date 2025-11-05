import "./assets/styles/colores.css";
import "./assets/styles/globalAnimations.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <div style={{ display: "flex" }}>
  <Header />
  <main>
    <Hero />
    <About />
  </main>
</div>
  );
}

export default App;
