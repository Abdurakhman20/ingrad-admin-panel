import React, { useState } from "react";
import styles from "./SessionCard.module.css";
import { ISession } from "../../models/ISession";

interface ISessionCardProps {
  session: ISession;
}

const SessionCard: React.FC<ISessionCardProps> = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sessionCard}>
      <div className={styles.header} onClick={toggleCard}>
        <div>ID Сессии: {session.id}</div>
        <button className={styles.toggleButton}>{isOpen ? "↑" : "↓"}</button>
      </div>
      {isOpen && (
        <div className={styles.details}>
          <div>Старт: {new Date(session.startingDateTime).toLocaleString()}</div>
          <div>IP адрес: {session.ipAddress}</div>
          <div>Пользователь Windows: {session.windowsUserName}</div>
          <div>Пользователь Revit: {session.revitUserName}</div>
          <div>Версия Revit: {session.revitVersion}</div>
          <div>Ключ лицензии: {session.licenseKey}</div>
          <div>Токен доступа: {session.accessToken}</div>
          <button className={styles.closeButton}>Закрыть сессию</button>
        </div>
      )}
    </div>
  );
};

export default SessionCard;
