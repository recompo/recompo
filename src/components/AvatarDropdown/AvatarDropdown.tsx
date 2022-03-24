import React from 'react'
import { FC, useState } from "react"
import styles from "./AvatarDropdown.module.scss"
import { Avatar } from "../"

type Items = {
  image: string
  text: string
  href?: string
}

export type AvatarDropdownProps = {
  size: string
  variant: "circular" | "rounded" | "square"
  src: string
  alt: string
  background: string
  color: string
  items: Items[]
}

const AvatarDropdown: FC<AvatarDropdownProps> = ({
  items,
  src,
  alt,
  variant,
  size,
  background,
  color
}) => {
  const [dropdown, setDropdown] = useState(false)
  const toggleDropdown = () => setDropdown(!dropdown)
  const closeDropdown = () => setDropdown(false)

  return (
    <div className={styles.avatarDropdown}>
      <div onClick={toggleDropdown} className={styles.avatar}>
        <Avatar variant={variant} src={src} alt={alt} size={size} />
      </div>
      <div
        className={dropdown ? styles.dropdownActive : styles.dropdown}
        style={{ background: background }}
      >
        <h1 style={{ color: color }}>Actions</h1>
        <ul>
          {items.map((item: Items, idx) => (
            <li onClick={closeDropdown} key={idx}>
              {item.href ? (
                <a href={item.href}>
                  <img src={item.image} alt={item.text} />
                  <span style={{ color: color }}>{item.text}</span>
                </a>
              ) : (
                <a>
                  <img src={item.image} alt={item.text} />
                  <span style={{ color: color }}>{item.text}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AvatarDropdown
