import { Link } from "react-router-dom";
import { Button } from "antd";

import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className={s.wrapper}>
        <span className={s.icon}>😕</span>
        <p className={s.desc}>Эта страница была удалена или никогда не существовала!</p>
        <Link to="/">
          <Button type="primary">На Главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
