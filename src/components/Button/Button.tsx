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
  } else if (color === "success")
    return (
      <button
        className={`${styles.Recompo_Button} ${styles["Recompo_Button-success"]}`}
      >
        {children}
      </button>
    );
  else if (color === "error")
    return (
      <button
        className={`${styles.Recompo_Button} ${styles["Recompo_Button-danger"]}`}
      >
        {children}
      </button>
    );
  else if (color === "info")
    return (
      <button
        className={`${styles.Recompo_Button} ${styles["Recompo_Button-info"]}`}
      >
        {children}
      </button>
    );
  else if (color === "warning")
    return (
      <button
        className={`${styles.Recompo_Button} ${styles["Recompo_Button-warning"]}`}
      >
        {children}
      </button>
    );
  // we should add an else here which returns theme provided button
};

export default Button;
