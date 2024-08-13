import React from "react";
import styles from "./Home.module.css";
import RvtImg from "../../assets/revit_icon.jpg";

const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <h1 className={styles.title}>Админ-панель для сервера лицензий Revit</h1>
      <div className={styles.img}>
        <img alt="revit_img" src={RvtImg} />
      </div>
    </div>
  );
};

export default Home;
