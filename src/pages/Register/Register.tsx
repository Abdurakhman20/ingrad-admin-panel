import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<IFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.passwordAgain
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const fields = [
    { name: "firstName", type: "text", placeholder: "Имя" },
    { name: "lastName", type: "text", placeholder: "Фамилия" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Пароль" },
    {
      name: "passwordAgain",
      type: "password",
      placeholder: "Повторите пароль",
    },
  ];

  useEffect(() => {
    if (submitted) {
      navigate("/");
    }
  }, [navigate, submitted]);

  return (
    <div className={styles.register_page}>
      <div className="wrapper">
        <h1 className={styles.title}>Регистрация</h1>
        <AuthForm
          isSubmitted={submitted}
          isValid={valid}
          values={values}
          fields={fields}
          handleInputChange={(event) => handleInputChange(event)}
          handleSubmit={handleSubmit}
        />
        <div className={styles.login}>
          Уже зарегистрированы? &nbsp;
          <Link to="login">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
