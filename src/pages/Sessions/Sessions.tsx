import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import styles from "./Sessions.module.css";
import { ISession } from "../../models/ISession";
import { getSessions } from "../../api/sessions";

const sessions_data = [
  {
    id: 1,
    startingDateTime: "2024-08-06T08:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 2,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 3,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 4,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 5,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 6,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 7,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 8,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 9,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 10,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 11,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 12,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 13,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 14,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 15,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 16,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 17,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 18,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 19,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 20,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 21,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 22,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 23,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 24,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 25,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 26,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 27,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 28,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 29,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
];

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
      <Button type="default" danger onClick={() => window.alert("Вы выбрали сессию с id: " + el.id)}>
        Удалить
      </Button>
    ),
  },
];

const Sessions: React.FC = () => {
  const [sessions, setSessions] = useState<ISession[]>();

  useEffect(() => {
    const getAllSessions = async () => {
      try {
        const response = await getSessions();
        setSessions(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllSessions();
  }, []);

  console.log(sessions);

  return (
    <div className={styles.sessions}>
      <div className="wrapper">
        <h1 className={styles.title}>Активные Сессии</h1>
        <Table columns={columns} dataSource={sessions_data} className={styles.table} size="small" rowKey="id" />
      </div>
    </div>
  );
};

export default Sessions;
