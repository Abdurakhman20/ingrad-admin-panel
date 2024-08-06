import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { IFormValues } from "../Register/Register";

type LoginValuesType = Pick<IFormValues, "email" | "password">;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<LoginValuesType>({
    email: "",
    password: "",
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

    if (values.email && values.password) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const fields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Пароль" },
  ];

  useEffect(() => {
    if (submitted) {
      navigate("/");
    }
  }, [navigate, submitted]);

  return (
    <div className={styles.register_page}>
      <div className="wrapper">
        <h1 className={styles.title}>Войти</h1>
        <AuthForm
          isSubmitted={submitted}
          isValid={valid}
          values={values as IFormValues}
          fields={fields}
          handleInputChange={(event) => handleInputChange(event)}
          handleSubmit={handleSubmit}
        />
        <div className={styles.register}>
          Нет регистрации? &nbsp;
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
