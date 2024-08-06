import React from "react";
import styles from "./SessionCard.module.css";

export interface Session {
  id: number;
  startingDateTime: string;
  ipAddress: string;
  windowsUserName: string;
  revitUserName: string;
  revitVersion: string;
  licenseKey: string;
  accessToken: string;
}

interface SessionCardProps {
  session: Session;
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>ID: {session.id}</h2>
      <hr />
      <p>
        <strong>Дата активации:</strong> &nbsp;
        {new Date(session.startingDateTime).toLocaleString()}
      </p>
      <hr />
      <p>
        <strong>IP Адрес:</strong> &nbsp; {session.ipAddress}
      </p>
      <hr />
      <p>
        <strong>Имя пользователя Windows:</strong> &nbsp;{" "}
        {session.windowsUserName}
      </p>
      <hr />
      <p>
        <strong>Имя пользователя Revit:</strong> &nbsp; {session.revitUserName}
      </p>
      <hr />
      <p>
        <strong>Версия Revit:</strong> &nbsp; {session.revitVersion}
      </p>
      <hr />
      <p>
        <strong>Ключ лицензии:</strong> &nbsp; {session.licenseKey}
      </p>
      <hr />
      <p>
        <strong>Токен доступа:</strong> &nbsp; {session.accessToken}
      </p>
    </div>
  );
};

export default SessionCard;
