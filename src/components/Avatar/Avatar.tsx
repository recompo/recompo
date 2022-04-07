// Import React
import React from "react"
import { FC } from "react"
// Import Styles
import styles from "./Avatar.module.scss"
import { Properties } from "csstype"
// Props needed
export interface AvatarProps {
  // Required
  src: string
  // Optional
  alt?: string
  variant?: "circular" | "rounded" | "square"
  size?: number | string
  height?: number | string
  width?: number | string
  radius?: number | string
  className?: string
  style?: React.CSSProperties
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
  className,
  style,
  color
}) => {
  const styles = {
    style: {
      borderRadius: radius
        ? radius
        : `${
            variant === "circular"
              ? "50%"
              : `${variant === "rounded" ? "2rem" : 0}`
          }`,
      style
    }
  }
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
        width={(size ? size : width) || (width ? width : 250)}
        // if radius is provided then it would be radius or else it would be the number provided
        {...styles}
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
        {...styles}
      />
    )
  // if nothing is provided then switch to the default
  else {
    return (
      <img
        src={src}
        className={className}
        alt={alt ? alt : "loading"}
        height={size ? size : height || height ? height : 250}
        width={size ? size : width || width ? width : 250}
        {...styles}
      />
    )
  }
}

export default Avatar
