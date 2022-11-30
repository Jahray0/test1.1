import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.main}>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>Titre de la location</div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>Titre de la location</div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>Titre de la location</div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>Titre de la location</div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>Titre de la location</div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>Titre de la location</div>
      </div>
    </div>
  );
}

export default Card;
