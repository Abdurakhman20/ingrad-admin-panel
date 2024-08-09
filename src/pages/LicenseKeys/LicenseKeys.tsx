import React from "react";
import styles from "./LicenseKeys.module.css";

const LicenseKeys: React.FC = () => {
  const handleLicenseDelete = () => {
    const confirm: boolean = window.confirm("Вы действительно хотите удалить сессию?");

    if (confirm) {
      console.log("accepted!");
    }
  };
  return (
    <div className='wrapper'>
      <h2 className={styles.title}>Лицензии</h2>
      <div className={styles.licenseKeys_wrapper}>
        <div className={styles.license}>
          <div className={styles.license_content}>
            <div>ID Лицензии: 1</div>
            <div>Лицензия: C85929A2-89D8-4334-8537-7F53A7664D3F</div>
            <div>Название: ingp</div>
          </div>
          <button className={styles.license_delete_btn} onClick={handleLicenseDelete}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default LicenseKeys;
