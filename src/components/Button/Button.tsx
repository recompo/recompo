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
  disabled?: boolean;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, color, disabled }) => {
  if (disabled) {
    return <button
      disabled
      className={`${styles.Recompo_Button} ${
        styles[`Recompo_Button-${color}`]
      }`}
    >
      {children}
    </button>
  }
  else {
    return <button
      className={`${styles.Recompo_Button} ${
        styles[`Recompo_Button-${color}`]
      }`}
    >
      {children}
    </button>
  }
};

export default Button;