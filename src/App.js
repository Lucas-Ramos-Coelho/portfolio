import Header from "./layout/header";
import Footer from "./layout/footer";
import Hero from "./components/heroSection";
import Sobre from "./components/sobre";
import Habilidades from "./components/habilidades"
import Projetos from "./components/projetos"
import Contato from "./components/contato"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
