import Title from "../../components/Title/Title";
import styles from "./Home.module.scss";
import img from "../../assets/img.png";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import AxiosRequest from "../../components/AxiosRequest/AxiosRequest";

//import { useState } from "react";
//import CardFruit from "../../components/CardFruit/CardFruit";

function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <Card />
      <AxiosRequest />
    </div>
  );
}

export default Home;
