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

//import React from "react";

//const Card = ({ logement }) => {
//  console.log(logement);
//  return (
//    <div>
//      <ul>
//        <li>Contenu de logement : </li>
//        <li>L'id : {logement.id}</li>
//        <li>Le titre : {logement.title}</li>
//        <li>Description : {logement.description}</li>
//        <li>
//          cover : <img src={logement.cover} alt="coucou"></img>
//        </li>
//        <li>
//          ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//        </li>
//      </ul>
//    </div>
//  );
//};
//export default Card;
