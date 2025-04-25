import Title from "./title.jsx";
import styles from "./sobre.module.css";

function Sobre() {
  return (
    <section className={styles.sobreSection}>
      <a id="sobre"/>
      <Title text="Quem sou eu?" color="black" />
      <div className={styles.sobretxt}>
        <p>
          Eu sou o Lucas, estudante de Desenvolvimento de Software
          Multiplataforma na Fatec CPS. Gosto muito de tecnologia e estou sempre
          buscando aprender mais, explorando tanto o front-end quanto o
          back-end. Meu foco é me tornar um desenvolvedor fullstack.
        </p>
        <a href="#"><button>Donwload CV</button></a>
      </div>
    </section>
  );
}

export default Sobre;
