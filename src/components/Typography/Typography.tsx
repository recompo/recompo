import React, { FC, PropsWithChildren } from "react"
import { Properties, Property } from "csstype"

export interface TypographyProps {
  color?: string
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "a" | "p"
  align?: Property.TextAlign
  font?: string
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  className?: string
  href?: string
  onClick?: React.MouseEventHandler
  style?: Properties
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  color,
  align = "match-parent",
  variant = "p",
  font,
  fontWeight,
  className,
  href,
  onClick,
  style
}) => {
  const textProps = {
    style: {
      textAlign: align ? align : "start",
      alignItems: align ? align : "",
      color: color ? color : "black",
      fontFamily: font
        ? font
        : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
      fontWeight: fontWeight,
      textDecoration: "none",
      style
    },
    className: className,
    onClick
  }
  if (variant === "h1") return <h1 {...textProps}>{children}</h1>
  else if (variant === "h2") return <h2 {...textProps}>{children}</h2>
  else if (variant === "h3") return <h3 {...textProps}>{children}</h3>
  else if (variant === "h4") return <h4 {...textProps}>{children}</h4>
  else if (variant === "h5") return <h5 {...textProps}>{children}</h5>
  else if (variant === "h6") return <h6 {...textProps}>{children}</h6>
  else if (variant === "li") return <li {...textProps}>{children}</li>
  else if (variant === "a")
    return (
      <a href={`${href ? href : "/"}`} {...textProps}>
        {children}
      </a>
    )
  else return <p {...textProps}>{children}</p>
}

export default Typography
