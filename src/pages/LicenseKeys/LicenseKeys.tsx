import React, { useEffect, useState } from "react";
import styles from "./LicenseKeys.module.css";
import AddLicenseForm from "../../components/AddLicenseForm/AddLicenseForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLicenseKeys, removeLicenseKey, LicenseStatus } from "../../store/slices/licenseSlice";
import { Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import { ILicenseKey } from "../../models/ILicenseKey";

const LicenseKeys: React.FC = () => {
  const [isFormActive, setIsFormActive] = useState(false);

  const dispatch = useAppDispatch();
  const licenses = useAppSelector(state => state.license.licenses);
  const status = useAppSelector(state => state.license.status);

  useEffect(() => {
    dispatch(fetchLicenseKeys());
  }, [dispatch]);

  const handleLicenseDelete = (license: ILicenseKey) => {
    const confirm: boolean = window.confirm(
      "Вы действительно хотите удалить лицензию? ВНИМАНИЕ!!! При удалении лицензии, удаляться все сессии с данной лицензией!",
    );

    if (confirm) {
      dispatch(removeLicenseKey(license));
    }
  };
  const columns: ColumnsType<ILicenseKey> = [
    {
      title: "ID Лицензии",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Лицензия",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Действия",
      key: "action",
      render: (el: ILicenseKey) => (
        <Button type="default" danger onClick={() => handleLicenseDelete(el)}>
          Удалить
        </Button>
      ),
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
          {status === LicenseStatus.LOADING ? (
            <p>Загрузка...</p>
          ) : (
            <Table columns={columns} dataSource={licenses} className={styles.table} size="small" rowKey="id" />
          )}
        </div>
      </div>
    </div>
  );
};

export default LicenseKeys;
