import React, { useEffect, useState } from "react";
import styles from "./LicenseKeys.module.css";
import LicenseKey from "../../components/LicenseKey/LicenseKey";
import AddLicenseForm from "../../components/AddLicenseForm/AddLicenseForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLicenseKeys, LicenseStatus } from "../../store/slices/licenseSlice";

const LicenseKeys: React.FC = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const dispatch = useAppDispatch();
  const licenses = useAppSelector(state => state.license.licenses);
  const status = useAppSelector(state => state.license.status);

  useEffect(() => {
    dispatch(fetchLicenseKeys());
  }, [dispatch]);

  const handleLicenseDelete = () => {
    const confirm: boolean = window.confirm("Вы действительно хотите удалить лицензию?");

    if (confirm) {
      console.log("accepted!");
    }
  };

  console.log(licenses);

  return (
    <div className={styles.licenseKeys_wrapper}>
      <div className="wrapper">
        <h1 className={styles.title}>Лицензии</h1>
        <div className={styles.addLicenseFormContainer}>
          <button className={styles.addButton} onClick={() => setIsFormActive(!isFormActive)}>
            {isFormActive ? "Скрыть" : "Добавить лицензию"}
          </button>
          {isFormActive && <AddLicenseForm />}
        </div>

        <div className={styles.licenseKeys}>
          {status === LicenseStatus.LOADING ? (
            <p>Загрузка...</p>
          ) : (
            licenses.map(item => <LicenseKey handleDelete={handleLicenseDelete} license={item} key={item.id} />)
          )}
          {}
        </div>
      </div>
    </div>
  );
};

export default LicenseKeys;
