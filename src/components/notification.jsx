import styles from './notification.module.css';

function Notification({ mensagem, tipo, onClose }) {
  if (!mensagem) return null;

  return (
    <div className={`${styles.alert} ${styles[tipo]}`}>
      {mensagem}
      <button onClick={onClose} className={styles.close}>×</button>
    </div>
  );
}

export default Notification;
