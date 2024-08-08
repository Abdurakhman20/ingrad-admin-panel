import React from "react";
import styles from "./ErrorMessage.module.css";

interface IErrorMessage {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return <span className={styles.error}>{message}</span>;
};

export default ErrorMessage;
