import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import styles from "./Sessions.module.css";
import { ISession } from "../../models/ISession";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchSessions, removeSession, SessionStatus } from "../../store/slices/sessionSlice";

const Sessions: React.FC = () => {
  const dispatch = useAppDispatch();
  const sessions = useAppSelector(state => state.session.sessions);
  const status = useAppSelector(state => state.session.status);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  const handleDeleteSession = (id: number) => {
    dispatch(removeSession(id));
  };

  const columns: ColumnsType<ISession> = [
    {
      title: "ID Сессии",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Старт",
      dataIndex: "startingDateTime",
      key: "startingDateTime",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "IP адрес",
      dataIndex: "ipAddress",
      key: "ipAddress",
    },
    {
      title: "Пользователь Windows",
      dataIndex: "windowsUserName",
      key: "windowsUserName",
    },
    {
      title: "Пользователь Revit",
      dataIndex: "revitUserName",
      key: "revitUserName",
    },
    {
      title: "Версия Revit",
      dataIndex: "revitVersion",
      key: "revitVersion",
    },
    {
      title: "Ключ лицензии",
      dataIndex: "licenseKey",
      key: "licenseKey",
    },
    {
      title: "Токен доступа",
      dataIndex: "accessToken",
      key: "accessToken",
    },
    {
      title: "Действия",
      key: "action",
      render: (el: ISession) => (
        <Button type="default" danger onClick={() => handleDeleteSession(el.id)}>
          Удалить
        </Button>
      ),
    },
  ];

  return (
    <div className={styles.sessions}>
      <div className="wrapper">
        <h1 className={styles.title}>Активные Сессии</h1>
        {status === SessionStatus.LOADING ? (
          <p>Загрузка...</p>
        ) : (
          <Table columns={columns} dataSource={sessions} className={styles.table} size="small" rowKey="id" />
        )}
      </div>
    </div>
  );
};

export default Sessions;
