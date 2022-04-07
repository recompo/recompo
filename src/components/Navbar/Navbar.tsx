// Imports
import React from "react"
import { FC, PropsWithChildren, useState } from "react"
import styles from "./Navbar.module.scss"
import { Property } from "csstype"
import { AvatarProps } from "../Avatar/Avatar"
import Avatar from "../Avatar"
import Typography from "../Typography"
// Required for props
interface Links {
  name: string
  url?: string
  font?: string
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  color?: Property.Color | string
}
interface MenuIcon {
  name?: string
  openIconURL?: string
  closeIconURL?: string
}
interface Logo {
  avatar: AvatarProps
  align?: "start" | "center" | "end"
  gap?: number | string
  left?: number | string
}
// Props
export interface NavbarProps {
  // Required
  logo: Logo
  // Optional
  accent?: string
  background?: string
  color?: string
  links?: Links[]
  position?: Property.Position
  rounded?: boolean
  radius?: number | string
  variant?: "glassy" | "transparent" | "solid"
  MenuIcon?: MenuIcon
  margin?: number | string
  border?: boolean
  borderColor?: string
  shadow?: boolean
}

const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  // Required
  logo,
  // Optional
  accent,
  background,
  color,
  children,
  links,
  position,
  rounded,
  radius,
  variant,
  MenuIcon,
  margin,
  border,
  borderColor,
  shadow = true
}) => {
  // States
  const [menu, setMenu] = useState(false)
  // Callbacks
  const toggleMenu = () => setMenu(!menu)
  const closeMenu = () => setMenu(false)
  const accentColor = accent ? accent : color
  const pos = position ? position : "fixed"
  const navStyles = {
    style: {
      backgroundColor: background
        ? `${variant === "glassy" ? `rgba(${background}, 0.5)` : background}`
        : "",
      position: pos,
      borderRadius: rounded ? `${radius ? radius : "2rem"}` : 0,
      color: color ? color : "black",
      margin: rounded ? `${margin ? margin : 0}` : 0,
      width: rounded ? "98%" : "100vw",
      justifyContent: logo && logo.align ? logo.align : "start",
      backdropFilter: variant === "glassy" ? `blur(16px)` : "",
      gap: logo && logo.gap ? logo.gap : 0,
      paddingLeft: logo && logo.left ? logo.left : 20,
      borderBottom: border
        ? `2px solid ${borderColor ? borderColor : "#e5e7eb"}`
        : "",
      boxShadow: shadow
        ? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
        : "",
      marginTop: rounded ? "3vh" : 0
    }
  }
  return (
    <>
      <nav className={styles.navbar} {...navStyles}>
        <div style={{ justifyContent: logo && logo.align ? logo.align : "" }}>
          <Avatar
            radius={
              logo && logo.avatar && logo.avatar?.radius
                ? logo.avatar.radius
                : "50%"
            }
            src={logo && logo.avatar && logo.avatar?.src}
            style={{
              avatar: {
                marginTop: "35px"
              }
            }}
            alt={
              logo && logo.avatar && logo.avatar?.alt
                ? logo.avatar.alt
                : "loading..."
            }
            size={
              logo && logo.avatar && logo.avatar?.size ? logo.avatar.size : 50
            }
          />
        </div>
        {links ? (
          <ul className={styles.links}>
            {links.map((link: Links, random) => {
              return (
                // Typography
                <Typography
                  key={random}
                  className={styles.link}
                  fontWeight={link?.weight}
                  variant="a"
                  href={link.url ? link.url : "/"}
                  font={
                    link?.font
                      ? link.font
                      : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                  }
                >
                  {" "}
                  {link.name}
                </Typography>
              )
            })}
          </ul>
        ) : null}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src={
              menu
                ? `${
                    MenuIcon?.closeIconURL
                      ? MenuIcon.closeIconURL
                      : `https://res.cloudinary.com/recompo/image/upload/v1648295848/menuClose_dgltoc.svg`
                  }`
                : `${
                    MenuIcon?.openIconURL !== undefined
                      ? MenuIcon.openIconURL
                      : "https://res.cloudinary.com/recompo/image/upload/v1648295848/menuOpen_wc5oso.svg"
                  }`
            }
            alt={menu ? "Close" : "Menu"}
            className="toggle"
            onClick={toggleMenu}
            style={{ textAlign: "right" }}
          />
        </div>
        {children}
      </nav>
    </>
  )
}

export default Navbar
