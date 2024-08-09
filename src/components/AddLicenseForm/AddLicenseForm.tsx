import React from "react";
import styles from "./AddLicenseForm.module.css";

const AddLicenseForm: React.FC = () => {
  return (
    <div className={styles.form_container}>
      <form className={styles.license_form} onSubmit={event => event.preventDefault()}>
        <input className={`${styles.form_field} ${styles.input}`} type={"text"} placeholder={"Название лицензии"} />
        <input className={`${styles.form_field} ${styles.input}`} type={"text"} placeholder={"Ключ лицензии"} />
        <button className={`${styles.form_field} ${styles.button}`} type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default AddLicenseForm;
