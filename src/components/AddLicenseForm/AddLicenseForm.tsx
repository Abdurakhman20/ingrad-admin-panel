import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./AddLicenseForm.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface IAddLicenseValues {
  name: string;
  value: string;
}

const AddLicenseForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<IAddLicenseValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IAddLicenseValues> = data => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.license_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${styles.form_field} ${styles.input}`}
          type={"text"}
          placeholder={"Название лицензии"}
          {...register("name", { required: "Пожалуйста введите название лицензии!" })}
        />
        {errors.name?.message && <ErrorMessage message={errors.name?.message} />}
        <input
          className={`${styles.form_field} ${styles.input}`}
          type={"text"}
          placeholder={"Ключ лицензии"}
          {...register("value", { required: "Пожалуйста введите ключ лицензии!" })}
        />
        {errors.value?.message && <ErrorMessage message={errors.value?.message} />}

        {isValid && (
          <button className={`${styles.form_field} ${styles.button}`} type="submit">
            Добавить
          </button>
        )}
      </form>
    </div>
  );
};

export default AddLicenseForm;
