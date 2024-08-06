import React from "react";
import styles from "./Sessions.module.css";
import SessionCard from "../../components/SessionCard/SessionCard";

const sessions_data = [
  {
    id: 78,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 79,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 111,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 7111,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
  {
    id: 1115,
    startingDateTime: "2024-08-06T06:56:21.2694613",
    ipAddress: "::ffff:172.27.0.1",
    windowsUserName: "ING0070_158",
    revitUserName: "112",
    revitVersion: "2022",
    licenseKey: "84EC95C6-7572-4AB1-BCF5-5C04F1A63A58",
    accessToken: "D40513BA-7B40-41B9-9450-785398C11EA5",
  },
];

const Sessions: React.FC = () => {
  return (
    <div className={styles.sessions}>
      <div className="wrapper">
        <h1 className={styles.title}>Активные Сессии</h1>
        <div className={styles.sessions_wrapper}>
          {sessions_data.map((session) => (
            <SessionCard session={session} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
