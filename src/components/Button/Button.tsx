// Importing react
import React from "react"
import { FC, PropsWithChildren, MouseEventHandler } from "react"
// importing styles
import styles from "./Button.module.scss"

// Props
export type ButtonProps = {
  // Optional
  variant?:
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "inherit"
    | "secondary"
  disabled?: boolean
  className?: string
  outline?: boolean
  hover?: object
  focus?: object
  onClick: MouseEventHandler
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  // Optional
  variant,
  disabled,
  className,
  outline,
  hover,
  focus,
  onClick,
  children
}) => {
  // check if its outline or not
  const cls = outline
    ? styles[`Recompo_Button-outline-${variant}`]
    : styles[`Recompo_Button-${variant}`]
  // check if its disabled
  if (disabled) {
    return (
      <button
        disabled
        className={`${styles.Recompo_Button} ${cls} ${
          className ? className : ""
        } ${hover ? hover : ""} ${focus ? focus : ""}`}
      >
        {children}
      </button>
    )
  } else {
    return (
      <button
      onClick={
        onClick
          ? onClick
          : () => {
              return
            }
      }
        className={`${styles.Recompo_Button} ${cls} ${
          className ? className : ""
        } `}
      >
        {children}
      </button>
    )
  }
}

export default Button
