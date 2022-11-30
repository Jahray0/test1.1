import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="coucou"
          />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.link}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={styles.link}>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
