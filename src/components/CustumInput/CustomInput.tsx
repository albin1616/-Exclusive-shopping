import React from "react";
import { CustomInputProps } from "../../types/types";
import styles from "./CustomInput.module.scss";

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
