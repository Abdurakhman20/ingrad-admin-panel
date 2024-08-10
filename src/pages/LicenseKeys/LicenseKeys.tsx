import React, { useState } from "react";
import styles from "./LicenseKeys.module.css";
import LicenseKey from "../../components/LicenseKey/LicenseKey";
import { ILicenceKey } from "../../models/ILicenseKey";
import AddLicenseForm from "../../components/AddLicenseForm/AddLicenseForm";

const LicenseKeys: React.FC = () => {
  const [isFormActive, setIsFormActive] = useState(false);

  const handleLicenseDelete = () => {
    const confirm: boolean = window.confirm("Вы действительно хотите удалить сессию?");

    if (confirm) {
      console.log("accepted!");
    }
  };
  const licenseItems: ILicenceKey[] = [
    {
      id: 1,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 2,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 3,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 4,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 5,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 6,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 7,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 8,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 9,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 10,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 11,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 12,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
    {
      id: 13,
      value: "C85929A2-89D8-4334-8537-7F53A7664D3F",
      name: "ingp",
    },
  ];
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
          {licenseItems.map(item => (
            <LicenseKey handleDelete={handleLicenseDelete} license={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LicenseKeys;
