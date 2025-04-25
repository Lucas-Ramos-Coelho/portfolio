import Title from "./title";
import styles from "./habilidades.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";

function Habilidades() {
  return (
    <section className={styles.habilidadesSection}>
      <Title text="Habilidades" color="black" />
      <div className={styles.habilidades}>
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ color: "#E34F26", fontSize: "100px" }}
        />
        <FontAwesomeIcon
          icon={faCss3}
          style={{ color: "#1572B6", fontSize: "100px" }}
        />
        <FontAwesomeIcon
          icon={faJs}
          style={{ color: "#F7DF1E", fontSize: "100px" }}
        />
        <FontAwesomeIcon
          icon={faAngular}
          style={{ color: "#DD0031", fontSize: "100px" }}
        />
        <FontAwesomeIcon
          icon={faReact}
          style={{ color: "#61DAFB", fontSize: "100px" }}
        />
      </div>
    </section>
  );
}

export default Habilidades;
