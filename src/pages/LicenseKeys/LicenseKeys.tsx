import React from "react";
import styles from "./LicenseKeys.module.css";
import LicenseKey from "../../components/LicenseKey/LicenseKey";
import { ILicenceKey } from "../../models/ILicenseKey";

const LicenseKeys: React.FC = () => {
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
  ];
  return (
    <div className='wrapper'>
      <h2 className={styles.title}>Лицензии</h2>
      <div className={styles.licenseKeys_wrapper}>
        {licenseItems.map(item => (
          <LicenseKey handleDelete={handleLicenseDelete} license={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default LicenseKeys;
