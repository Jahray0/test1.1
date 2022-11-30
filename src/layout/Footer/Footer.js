import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.titles}>Kasa</h3>
          <p className={styles.right}>c 2020 Kasa. All rights reserved</p>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
