import React, { useEffect, useState } from "react";
import axios from "axios";
import Contenu from "./Contenu";
import styles from "./Contenu.module.scss";
//import Card from "../Card/Card";

export default function AxiosRequest() {
  //stocker la data de l'api dans un state
  const [data, setData] = useState([]);

  //Aller chercher les données de la web API - requête GET
  const getData = () => {
    axios
      .get("logements.json")
      //.then((res) => console.log(res.data))
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.mainVignette}>
      {data.map((logement) => (
        <Contenu key={logement.id} logement={logement} />
        //<Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}
