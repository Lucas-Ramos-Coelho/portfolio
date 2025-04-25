import styles from "./projetos.module.css";
import Title from "./title";
import Card from "./card";
import Coffee from "../assets/img/Coffee.png";
import Portfolio from "../assets/img/Portfolio.png";
import Volkswagen from "../assets/img/Volkswagen.png";

function Projetos() {
  return (
    <section id="projetos" className={styles.projetosSection}>
      <Title text="Projetos" color="white" />
      <div className={styles.projetos}>
        <Card
          text="Coffee Shop"
          img={Coffee}
          link="https://lucascoffee.netlify.app"
        />
        <Card
          text="Portfólio"
          img={Portfolio}
          link="https://lucasportfolio.netlify.app"
        />
        <Card
          text="Volkswagen"
          img={Volkswagen}
          link="https://vwlucas.netlify.app"
        />
      </div>
    </section>
  );
}


export default Projetos;
