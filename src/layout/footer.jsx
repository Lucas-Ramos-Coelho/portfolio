import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.line}>
        <></>
      </div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p>© 2025 Lucas Ramos Coelho</p>
          <p>Obrigado por visitar meu portfólio!</p>
          <button
            className={styles.top}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            ↑ Voltar ao topo
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
