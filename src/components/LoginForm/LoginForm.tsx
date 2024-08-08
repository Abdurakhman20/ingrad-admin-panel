import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginFormValues } from "../../pages/Login/Login";
import styles from "./LoginForm.module.css";

interface ILoginFormProps {}

const LoginForm: React.FC<ILoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<ILoginFormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<ILoginFormValues> = (data) => {
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
          {...(register("email"), { required: true })}
        />

        <input
          className={styles.form_field}
          type={"password"}
          placeholder={"Пароль"}
          {...(register("password"), { required: true })}
        />

        <button className={styles.form_field} type="submit" disabled={!isValid}>
          Ввод
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
