import React from "react";
import { IFormValues } from "../../pages/Register/Register";
import styles from "./AuthForm.module.css";

type FieldsType = {
  name: string;
  type: string;
  placeholder: string;
};

interface IAuthForm {
  isSubmitted: boolean;
  isValid: boolean;
  values: IFormValues;
  fields: FieldsType[];
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm: React.FC<IAuthForm> = ({
  isSubmitted,
  isValid,
  values,
  fields,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div className={styles.form_container}>
      <form className={styles.register_form} onSubmit={handleSubmit}>
        {!isValid &&
          fields.map((field) => (
            <React.Fragment key={field.name}>
              <input
                className={styles.form_field}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={values[field.name as keyof IFormValues]}
                onChange={(event) => handleInputChange(event)}
              />
              {isSubmitted && !values[field.name as keyof IFormValues] && (
                <span id={`${field.name}-error`}>
                  Пожалуйста напишите {field.placeholder.toLowerCase()}
                </span>
              )}
            </React.Fragment>
          ))}

        {!isValid && (
          <button className={styles.form_field} type="submit">
            Зарегистрироваться
          </button>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
