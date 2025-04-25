import styles from "./contato.module.css";
import Title from "./title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function contato() {
  return (
    <section id="contato" className={styles.contatoSection}>
      <Title text="Entre em contato" color="black" />

      <div className={styles.conteudoContato}>
        <div className={styles.redes}>
          <h3>Redes Sociais</h3>
          <div className={styles.linksSociais}>
            <a
              href="https://www.linkedin.com/in/lucas-ramos-coelho"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </a>
            <a href="https://github.com/Lucas-Ramos-Coelho" target="_blank">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lucas.rc2105@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} /> E-mail
            </a>
          </div>
        </div>

        <div className={styles.form}>
          <form>
            <label>Nome:</label>
            <input type="text" name="nome" placeholder="Nome" />
            <label>E-mail:</label>
            <input type="text" name="email" placeholder="E-mail" />
            <label>Mensagem:</label>
            <input
              type="text"
              name="mensagem"
              placeholder="Mensagem"
              className={styles.mensagem}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default contato;
