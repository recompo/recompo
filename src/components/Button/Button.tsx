import React, { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  color?:
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "inherit"
    | "secondary";
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, color }) => {
  return (
    <button
      className={`${styles.Recompo_Button} ${
        styles[`Recompo_Button-${color}`]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
