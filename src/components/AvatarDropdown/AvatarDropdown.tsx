import React, { FC, useState, PropsWithChildren } from "react"
import styles from "./AvatarDropdown.module.scss"
import { Avatar } from "../"

type DropdownItem = {
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
  dropdown_items: DropdownItem[]
}

const AvatarDropdown: FC<PropsWithChildren<AvatarDropdownProps>> = ({
  dropdown_items,
  src,
  alt,
  variant,
  size,
  children,
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
          {dropdown_items.map((item: DropdownItem, idx) => (
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
