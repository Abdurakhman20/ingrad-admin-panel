import React, { useState } from "react";
import styles from "./Register.module.css";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const Register: React.FC = () => {
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

  return (
    <div className={styles.register_page}>
      <div className="wrapper">
        <h1 className={styles.title}>Регистрация</h1>
        <div className={styles.form_container}>
          <form className={styles.register_form} onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className={styles.success_message}>
                <h3>
                  Добро пожаловать {values.firstName} {values.lastName}{" "}
                </h3>
                <div> Ваша регистрация прошла успешно! </div>
              </div>
            )}

            {!valid &&
              fields.map((field) => (
                <React.Fragment key={field.name}>
                  <input
                    className={styles.form_field}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={values[field.name as keyof IFormValues]}
                    onChange={handleInputChange}
                  />
                  {submitted && !values[field.name as keyof IFormValues] && (
                    <span id={`${field.name}-error`}>
                      Пожалуйста напишите {field.placeholder.toLowerCase()}
                    </span>
                  )}
                </React.Fragment>
              ))}

            {!valid && (
              <button className={styles.form_field} type="submit">
                Зарегистрироваться
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
