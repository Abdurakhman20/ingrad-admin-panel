import { Link } from "react-router-dom";
import { Button } from "antd";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className={styles.wrapper}>
        <span className={styles.icon}>😕</span>
        <p className={styles.desc}>Эта страница была удалена или никогда не существовала!</p>
        <Link to="/">
          <Button type="primary">На Главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
