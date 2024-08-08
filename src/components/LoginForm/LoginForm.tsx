import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormValues } from "../../pages/Login/Login";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
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

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${styles.form_field} ${styles.input}`}
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

        <div className={styles.passwordContainer}>
          <input
            className={`${styles.form_field} ${styles.input} ${styles.passwordInput}`}
            type={showPassword ? "text" : "password"} // Меняем тип на text или password
            placeholder={"Пароль"}
            {...register("password", {
              required: "Пароль обязателен",
              minLength: {
                value: 4,
                message: "Пароль должен содержать минимум 4 символов",
              },
            })}
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={toggleShowPassword}
          >
            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
          </button>
        </div>
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}

        {isValid && (
          <button
            className={`${styles.form_field} ${styles.button}`}
            type="submit"
          >
            Вход
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
