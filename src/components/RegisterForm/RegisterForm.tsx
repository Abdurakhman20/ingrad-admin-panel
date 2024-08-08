import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterFormValues } from "../../pages/Register/Register";
import styles from "./RegisterForm.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

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

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowPasswordAgain = () => {
    setShowPasswordAgain((prev) => !prev);
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${styles.form_field} ${styles.input}`}
          type={"text"}
          placeholder={"Имя"}
          {...register("firstName", { required: "Пожалуйста введите имя!" })}
        />
        {errors.firstName?.message && (
          <ErrorMessage message={errors.firstName?.message} />
        )}
        <input
          className={`${styles.form_field} ${styles.input}`}
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
            type={showPassword ? "text" : "password"}
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

        <div className={styles.passwordContainer}>
          <input
            className={`${styles.form_field} ${styles.input} ${styles.passwordInput}`}
            type={showPasswordAgain ? "text" : "password"}
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
          <button
            type="button"
            className={styles.togglePassword}
            onClick={toggleShowPasswordAgain}
          >
            {showPasswordAgain ? (
              <IoMdEye size={20} />
            ) : (
              <IoMdEyeOff size={20} />
            )}
          </button>
        </div>

        {errors.passwordAgain?.message && (
          <ErrorMessage message={errors.passwordAgain?.message} />
        )}

        {isValid && (
          <button
            className={`${styles.form_field} ${styles.button}`}
            type="submit"
          >
            Регистрация
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
