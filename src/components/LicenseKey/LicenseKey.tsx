import React from "react";
import { Button } from "antd";
import styles from "./LicenseKey.module.css";
import { ILicenceKey } from "../../models/ILicenseKey";

interface ILicenseKeyProps {
  license: ILicenceKey;
  handleDelete: () => void;
}

const LicenseKey: React.FC<ILicenseKeyProps> = ({ license, handleDelete }) => {
  return (
    <div className={styles.license}>
      <div className={styles.license_content}>
        <div>ID Лицензии: {license.id}</div>
        <div>Лицензия: {license.value}</div>
        <div>Название: {license.name}</div>
      </div>
      <Button className={styles.delete_btn} danger type="default" onClick={handleDelete}>
        Удалить
      </Button>
    </div>
  );
};

export default LicenseKey;
