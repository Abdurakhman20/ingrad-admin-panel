import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

export interface ILoginFormValues {
  email: string;
  password: string | number;
}

const Login: React.FC = () => {
  return (
    <div className={styles.register_page}>
      <div className="wrapper">
        <h1 className={styles.title}>Войти</h1>
        <LoginForm />
        <div className={styles.register}>
          Нет регистрации? &nbsp;
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
