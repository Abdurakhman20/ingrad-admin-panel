import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import AuthForm from "../../components/RegisterForm/RegisterForm";

export interface IRegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string | number;
  passwordAgain: string | number;
}

const Register: React.FC = () => {
  return (
    <div className={styles.register_page}>
      <div className="wrapper">
        <h1 className={styles.title}>Регистрация</h1>
        <AuthForm />
        <div className={styles.login}>
          Уже зарегистрированы? &nbsp;
          <Link to="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
