import React from "react";
import styles from "./Input.module.css";

interface Props {
  label: string;
  name: string;
  type?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<Props> = ({
  label,
  name,
  type = "text",
  value,
  handleChange,
  handleBlur,
  error,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={error ? styles.errorInput : ""}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
