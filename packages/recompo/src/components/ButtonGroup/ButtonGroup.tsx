// Importing
import React from "react"
import { FC, PropsWithChildren } from "react"
import styles from "./ButtonGroup.module.scss"

// Props
export type ButtonGroupProps = {
  // Optional
  gap?: number | string
  grid?: boolean
}

// Code
const ButtonGroup: FC<PropsWithChildren<ButtonGroupProps>> = ({
  gap,
  grid,
  children
}) => {
  return (
    <div
      className={styles.ReCompo_ButtonGroup}
      role="group"
      style={{ gap: gap ? gap : "2rem", display: grid ? "grid" : "flex" }}
    >
      {children}
    </div>
  )
}

export default ButtonGroup
