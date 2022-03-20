import React, { FC, PropsWithChildren } from "react";
import styles from "./Typography.module.scss";
import { Property } from "csstype";
import { useTheme } from "../../theme";

export interface TypographyProps {
  color?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  align?: Property.TextAlign;
  font?: string;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  color,
  align = "match-parent",
  variant = "p",
  font,
  fontWeight
}) => {
  const { textColor, font: themeFont, fontWeight: weight } = useTheme();
  const textProps = {
    style: {
      textAlign: align,
      color: textColor ?? color,
      fontFamily: themeFont || font,
      fontWeight: weight || fontWeight
    }
  };
  if (variant === "h1") return <h1 {...textProps}>{children}</h1>;
  else if (variant === "h2") return <h2 {...textProps}>{children}</h2>;
  else if (variant === "h3") return <h3 {...textProps}>{children}</h3>;
  else if (variant === "h4") return <h4 {...textProps}>{children}</h4>;
  else if (variant === "h5") return <h5 {...textProps}>{children}</h5>;
  else if (variant === "h6") return <h6 {...textProps}>{children}</h6>;
  else return <p {...textProps}>{children}</p>;
};

export default Typography;
