import React, { FC } from "react"
import styles from "./Input.module.scss"
export type InputProps = {
  label?: string
  disabled?: boolean
  borderRadius?: "xs" | "sm" | "md" | "lg" | "xl"
  placeHolder?: string
  value?: string
  onChange?: any
  name: string
}

const Input: FC<InputProps> = ({
  label,
  disabled,
  onChange,
  placeHolder,
  value,
  borderRadius,
  name
}) => {
  if (label) {
    return (
      <>
        <label htmlFor={name}>
          {label}
          <input
            name={name}
            disabled={disabled}
            onChange={onChange ? onChange : () => {}}
            value={value}
            placeholder={placeHolder}
            className={`${styles[`Recompo_Input-${borderRadius}`]} ${
              styles["Recompo_Input"]
            } ${disabled && styles["Recompo_Input-disabled"]} `}
          />
        </label>
      </>
    )
  }
  return (
    <input
      name={name}
      disabled={disabled}
      onChange={onChange ? onChange : () => {}}
      value={value}
      placeholder={placeHolder}
      className={`${styles[`Recompo_Button-${borderRadius}`]}`}
    />
  )
}

export default Input
