import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormValues } from "../../pages/Login/Login";
import styles from "./LoginForm.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface ILoginFormProps {}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<ILoginFormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<ILoginFormValues> = (data) => {
    // Дальше данные можно закинуть в глобальное состояние
    console.log(data);
    reset();
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.form_field}
          type={"email"}
          placeholder={"Email"}
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Неверный формат Email",
            },
          })}
        />
        {errors.email?.message && (
          <ErrorMessage message={errors.email?.message} />
        )}

        <input
          className={styles.form_field}
          type={"password"}
          placeholder={"Пароль"}
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 4,
              message: "Пароль должен содержать минимум 4 символов",
            },
          })}
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}

        {isValid && (
          <button className={styles.form_field} type="submit">
            Вход
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
