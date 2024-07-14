import React from "react";
import styles from "./CustomInput.module.scss";

interface CustomInputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  name,
  placeholder,
  className,
}) => {
  return (
    <div className={styles.CustomInput}>
      <label className={styles.label}></label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${styles.input} ${className ? className : ""}`}
      />
    </div>
  );
};

export default CustomInput;
