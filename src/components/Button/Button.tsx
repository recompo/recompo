import React, { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

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
  // you can also take colors from themes
  if (color === "primary")
    return (
      <button
        className={`${styles.Recompo_Button} ${styles["Recompo_Button-primary"]}`}
      >
        {children}
      </button>
    );
  else if (color === "secondary") {
    return (
      <button
        className={`${styles.Recompo_Button} ${styles["Recompo_Button-secondary"]}`}
      >
        {children}
      </button>
    );
    }
  // we should add an else here which returns theme provided button
};

export default Button;
