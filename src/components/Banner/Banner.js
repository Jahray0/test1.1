import styles from "./Banner.module.scss";
import img from "../../assets/img.png";

function Banner() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
