import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./AddLicenseForm.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { addLicenseKey } from "../../store/slices/licenseSlice";
import { useAppDispatch } from "../../store/hooks";

interface IAddLicenseValues {
  name: string;
}

const AddLicenseForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<IAddLicenseValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IAddLicenseValues> = data => {
    const uniqueId = uuidv4();
    const newData = { value: uniqueId, ...data };
    dispatch(addLicenseKey(newData));
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
