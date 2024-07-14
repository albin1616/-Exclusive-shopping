import React from "react";
import { CustomButtonProps } from "../../types/types";
import styles from "./CustomButton.module.scss";

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className ? className : ""}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
