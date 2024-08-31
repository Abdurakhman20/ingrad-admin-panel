import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import softaproLogo from "../../assets/softapro.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.header_container}>
          <div className={styles.logo}>
            <img className={styles.logo_img} src={softaproLogo} />
            <Link className={styles.logo_link} to="/">
              SOFTAPRO
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <Link className={styles.link} to="/sessions">
                  Сессии
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link className={styles.link} to="/license-keys">
                  Лицензионные ключи
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.auth}>
            <Link className={styles.link} to="/register">
              Регистрация
            </Link>
            <Link className={styles.link} to="/login">
              Вход
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
