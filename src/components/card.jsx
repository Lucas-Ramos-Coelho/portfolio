import styles from "./card.module.css";

function Card({ text, img, link }) {
  return (
    <section className={styles.cardSection}>
      <div className={styles.cardTitle}>
        <h2 className={styles.title}>{text}</h2>
      </div>
      <div className={styles.cardImage}>
        <a href={link} target="_blank">
          <img src={img} alt={text} className={styles.image} />
        </a>
      </div>
    </section>
  );
}

export default Card;
