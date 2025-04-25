import styles from './title.module.css';

function Title({ text, color }) {
  return (
    <h2 className={`${styles.title} ${styles[color]}`}>
      {text}
    </h2>
  );
}

export default Title;
