import React from "react";
import styles from "./Contenu.module.scss";

const Contenu = ({ logement }) => {
  console.log(logement);
  return (
    <div className={styles.cardBody}>
      <img className={styles.cardImg} src={logement.cover} alt="coucou"></img>
      <div className={styles.cardTitle}>{logement.title}</div>
    </div>
  );
};

export default Contenu;
