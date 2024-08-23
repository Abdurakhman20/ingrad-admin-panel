import React, { useEffect, useState } from "react";
import styles from "./LicenseKeys.module.css";
import LicenseKey from "../../components/LicenseKey/LicenseKey";
import AddLicenseForm from "../../components/AddLicenseForm/AddLicenseForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLicenseKeys, removeLicenseKey, LicenseStatus } from "../../store/slices/licenseSlice";
import { Pagination } from "antd";
import { ILicenseKey } from "../../models/ILicenseKey";

const LicenseKeys: React.FC = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9); // Количество элементов на странице

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
  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
  };

  const paginatedLicenses = licenses.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
            paginatedLicenses.map(item => (
              <LicenseKey handleDelete={() => handleLicenseDelete(item)} license={item} key={item.id} />
            ))
          )}
        </div>
        <div className={styles.pagination_wrapper}>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={licenses.length}
            onChange={handlePageChange}
            showSizeChanger
            onShowSizeChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default LicenseKeys;
