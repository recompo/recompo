import React from "react"
import { FC, PropsWithChildren } from "react"
import styles from "./Container.module.scss"

export interface ContainerProps {
  className: string
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
