import React, { FC, PropsWithChildren } from "react"
import styles from "./Button.module.scss"

export type ButtonProps = {
  variant?:
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "inherit"
    | "secondary"
  disabled?: boolean
  outline?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  disabled,
  outline
}) => {
  const cls = outline
    ? styles[`Recompo_Button-outline-${variant}`]
    : styles[`Recompo_Button-${variant}`]
  if (disabled) {
    return (
      <button disabled className={`${styles.Recompo_Button} ${cls}`}>
        {children}
      </button>
    )
  } else {
    return (
      <button className={`${styles.Recompo_Button} ${cls}`}>{children}</button>
    )
  }
}

export default Button
