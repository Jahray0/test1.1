import Title from "../../components/Title/Title";
import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.main}>
      <Title text={"A propos"} />
      <h1>404 Page not found</h1>
    </div>
  );
}

export default About;
