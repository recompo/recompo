// Import React
import React from "react"
import { FC } from "react"
// Import Styles
import styles from "./Avatar.module.scss"

// Props needed
export interface AvatarProps {
  // Required
  src: string
  // Optional
  alt?: string
  variant?: "circular" | "rounded" | "square"
  size?: number | string
  height: number | string
  width: number | string
  radius?: number | string
  className?: string
}

const Avatar: FC<AvatarProps> = ({
  // Required
  src,
  // Optional
  alt,
  variant,
  size,
  height,
  width,
  radius,
  className
}) => {
  // Check if the variant is rounded
  if (variant === "rounded")
    // Return if it is
    return (
      <img
        src={src}
        className={className}
        alt={alt ? alt : "loading"}
        // if size is provided then it would be size or else it will be height
        height={size ? size : height || height ? height : 250}
        // if size is provided then it would be size or else it would be width
        width={size ? size : width || width ? width : 250}
        // if radius is provided then it would be radius or else it would be the number provided
        style={{ borderRadius: radius ? radius : "25px" }}
      />
    )
  // Check if square
  else if (variant === "square")
    return (
      <img
        src={src}
        className={className}
        alt={alt ? alt : "loading"}
        height={size ? size : height || height ? height : 250}
        width={size ? size : width || width ? width : 250}
        style={{ borderRadius: radius ? radius : "" }}
      />
    )
  // if nothing is provided then switch to the default
  else {
    return (
      <img
        src={src}
        className={className ? className : ''}
        alt={alt ? alt : "loading"}
        height={size ? size : height || height ? height : 250}
        width={size ? size : width || width ? width : 250}
        style={{ borderRadius: radius ? radius : "50%" }}
      />
    )
  }
}

export default Avatar
