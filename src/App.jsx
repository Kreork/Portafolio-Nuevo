import "./assets/styles/colores.css";
import "./assets/styles/globalAnimations.css";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <div style={{ display: "flex" }}>
  <Header />
  <main>
    <Hero />
  </main>
</div>
  );
}

export default App;
