import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import styles from "./Sessions.module.css";
import { ISession } from "../../models/ISession";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchSessions, removeSession, SessionStatus } from "../../store/slices/sessionSlice";

// const sessions_data = [
//   {
//     id: 1,
//     startingDateTime: "2024-08-06T08:56:21.2694613",
//     ipAddress: "::ffff:172.27.0.1",
//     windowsUserName: "ING0070_158",
//     revitUserName: "112",
//     revitVersion: "2022",
//     licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
//     accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
//   },
//   {
//     id: 2,
//     startingDateTime: "2024-08-06T06:56:21.2694613",
//     ipAddress: "::ffff:172.27.0.1",
//     windowsUserName: "ING0070_158",
//     revitUserName: "112",
//     revitVersion: "2022",
//     licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
//     accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
//   },
//   {
//     id: 3,
//     startingDateTime: "2024-08-06T06:56:21.2694613",
//     ipAddress: "::ffff:172.27.0.1",
//     windowsUserName: "ING0070_158",
//     revitUserName: "112",
//     revitVersion: "2022",
//     licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
//     accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
//   },
//   {
//     id: 4,
//     startingDateTime: "2024-08-06T06:56:21.2694613",
//     ipAddress: "::ffff:172.27.0.1",
//     windowsUserName: "ING0070_158",
//     revitUserName: "112",
//     revitVersion: "2022",
//     licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
//     accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
//   },
//   {
//     id: 5,
//     startingDateTime: "2024-08-06T06:56:21.2694613",
//     ipAddress: "::ffff:172.27.0.1",
//     windowsUserName: "ING0070_158",
//     revitUserName: "112",
//     revitVersion: "2022",
//     licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
//     accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
//   },
// ];

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
