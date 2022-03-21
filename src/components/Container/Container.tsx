import React, { FC, PropsWithChildren } from "react";
import styles from "./Container.module.css";

export interface ContainerProps {}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
