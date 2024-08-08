import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterFormValues } from "../../pages/Register/Register";
import styles from "./RegisterForm.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface IAuthFormProps {}

const RegisterForm: React.FC<IAuthFormProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isValid, errors },
  } = useForm<IRegisterFormValues>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IRegisterFormValues> = (data) => {
    // Дальше данные можно закинуть в глобальное состояние
    console.log(data);
    reset();
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.form_field}
          type={"text"}
          placeholder={"Имя"}
          {...register("firstName", { required: "Пожалуйста введите имя!" })}
        />
        {errors.firstName?.message && (
          <ErrorMessage message={errors.firstName?.message} />
        )}
        <input
          className={styles.form_field}
          type={"text"}
          placeholder={"Фамилия"}
          {...register("lastName", {
            required: "Пожалуйста введите фамилию!",
          })}
        />
        {errors.lastName?.message && (
          <ErrorMessage message={errors.lastName?.message} />
        )}
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
        <input
          className={styles.form_field}
          type={"password"}
          placeholder={"Повторите пароль"}
          {...register("passwordAgain", {
            required: "Повторение пароля обязательно",
            minLength: {
              value: 4,
              message: "Пароль должен содержать минимум 4 символов",
            },
            validate: (value) =>
              value === getValues("password") || "Пароли не совпадают!",
          })}
        />
        {errors.passwordAgain?.message && (
          <ErrorMessage message={errors.passwordAgain?.message} />
        )}

        {isValid && (
          <button className={styles.form_field} type="submit">
            Ввод
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
