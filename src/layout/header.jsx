import styles from "./header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.namebox}>
          <h3 className={styles.name}>Lucas Ramos Coelho</h3>
        </div>
        <div className={styles.optionbox}>
          <a href="#sobre" className={styles.option}>Sobre</a>
          <a href="#projetos" className={styles.option}>Projetos</a>
          <a href="#contato" className={styles.option}>Contatos</a>
        </div>
      </header>
      <div className={styles.line}>
        <></>
      </div>
    </>
  );
}

export default Header;
