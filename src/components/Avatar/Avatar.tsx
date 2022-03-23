import React, { FC, PropsWithChildren } from "react"
import styles from "./Avatar.module.scss"

export type AvatarProps = {
  size: string
  variant: "circular" | "rounded" | "square"
  src: string
  alt: string
}

const Avatar: FC<PropsWithChildren<AvatarProps>> = ({
  children,
  size,
  variant,
  src,
  alt
}) => {
  if (variant === "circular")
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    )
  else if (variant === "rounded")
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ borderRadius: "25px" }}
      />
    )
  else if (variant === "square")
    return <img src={src} alt={alt} width={size} height={size} />
}

export default Avatar
