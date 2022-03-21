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
  disabled?: boolean;
  outline?: boolean;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color,
  disabled,
  outline
}) => {
  const cls = outline
    ? styles[`Recompo_Button-outline-${color}`]
    : styles[`Recompo_Button-${color}`];
  if (disabled) {
    return (
      <button disabled className={`${styles.Recompo_Button} ${cls}`}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={`${styles.Recompo_Button} ${cls}`}>{children}</button>
    );
  }
};

export default Button;
