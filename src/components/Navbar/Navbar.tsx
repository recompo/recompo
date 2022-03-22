import React, { FC, PropsWithChildren, useState } from "react"
import styles from "./Navbar.module.scss"
import { Property } from "csstype"

interface NavLink {
  name: string
  url: string
}

type NavLogo = {
  name: string
  url: string
}

export type NavbarProps = {
  background?: string
  color?: string
  accent?: string
  links?: NavLink[]
  logo?: NavLogo
  position?: Property.Position
  rounded?: boolean
}

const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  background,
  color,
  accent,
  links,
  logo,
  children,
  position
}) => {
  let links_: number
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)
  const closeMenu = () => setMenu(false)
  const accentcolor = accent ? accent : color
  const pos = position ? position : "relative"

  const navStyles = {
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    height: "80px",
    background: background,
    color: color,
    width: "100%"
  }

  return (
    <nav
      className={styles.navbar}
      data-background={background}
      data-color={color}
      data-accent={accentcolor}
      data-links={links_}
      data-position={pos}
      style={{ background }}
    >
      {logo ? (
        <a href={logo.url} className={styles.logo}>
          {logo.name}
        </a>
      ) : (
        <div></div>
      )}
      {links ? (
        <ul className={styles.links}>
          {links.map((link: NavLink, idx) => {
            return (
              <li key={idx} className={styles.link} onClick={closeMenu}>
                <a href={link.url}>{link.name}</a>
              </li>
            )
          })}
        </ul>
      ) : null}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={menu ? "/images/nav-close.svg" : "/images/nav-bars.svg"}
          alt={menu ? "Close" : "Menu"}
          className="toggle"
          onClick={toggleMenu}
          style={{ textAlign: "right" }}
        />
      </div>
      {children}
    </nav>
  )
}

export default Navbar
