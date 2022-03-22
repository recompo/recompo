import React, { FC, PropsWithChildren } from "react";
import styles from "./ButtonGroup.module.scss";

export type ButtonGroupProps = {
  gap: string;
};

const ButtonGroup: FC<PropsWithChildren<ButtonGroupProps>> = ({
  children,
  gap
}) => {
  return (
    <div className={styles.ReCompo_ButtonGroup} role="group" style={{ gap }}>
      {children}
    </div>
  );
};

export default ButtonGroup;
