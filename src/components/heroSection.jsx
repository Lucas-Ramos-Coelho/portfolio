import styles from "./heroSection.module.css";
import Lucas from "../assets/img/Lucas.jpeg";

function Hero() {
  return (
    <main>
      <div className={styles.textbox}>
        <h1>Olá!</h1>
        <h1>Eu sou Lucas</h1>
        <h2>Desenvolvedor Front-End</h2>
        <a href="#projetos">
          <button>Meus Projetos</button>
        </a>
      </div>
      <div className={styles.imgbox}>
        <img src={Lucas}></img>
      </div>
    </main>
  );
}

export default Hero;
