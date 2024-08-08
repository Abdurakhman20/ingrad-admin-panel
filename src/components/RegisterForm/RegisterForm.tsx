import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterFormValues } from "../../pages/Register/Register";
import styles from "./RegisterForm.module.css";

interface IAuthFormProps {}

const RegisterForm: React.FC<IAuthFormProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<IRegisterFormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IRegisterFormValues> = (data) => {
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
          {...(register("firstName"), { required: true })}
        />
        <input
          className={styles.form_field}
          type={"text"}
          placeholder={"Фамилия"}
          {...(register("lastName"), { required: true })}
        />
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
        <input
          className={styles.form_field}
          type={"password"}
          placeholder={"Повторите пароль"}
          {...(register("passwordAgain"), { required: true })}
        />

        <button className={styles.form_field} type="submit" disabled={!isValid}>
          Ввод
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
