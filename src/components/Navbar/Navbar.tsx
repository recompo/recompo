import React, { FC, PropsWithChildren, useState } from "react";
import styles from './Navbar.module.css'
import { Property } from 'csstype'

interface NavLink {
    name: string;
    url: string;
}

type NavLogo = {
    name: string;
    url: string;
}


export type NavbarProps = {
    background?: string;
    color?: string;
    accent?: string;
    links?: NavLink[];
    logo?: NavLogo;
    position?: Property.Position;
    rounded?: boolean;
}

const Navbar: FC<PropsWithChildren<NavbarProps>> = ({ background, color, accent, links, logo, children, position }) => {
    let links_: number;
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => setMenu(!menu);
    const closeMenu = () => setMenu(false);
    const accentcolor = accent ? accent : color
    const pos = position ? position : "relative"

    const navStyles = {
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'borderBox',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        height: '80px',
        background: background,
        color: color,
        width: '100%',
    }

    return (
        <nav
            className={styles.navbar}
        >
            {logo ? <a href={logo.url} className={styles.logo}>{logo.name}</a> : <div></div>}
            <ul className={styles.links}>
                {links.map((link: NavLink) => {
                    return (
                        <li className={styles.link} onClick={closeMenu}>
                            <a href={link.url}>{link.name}</a>
                        </li>
                    )
                })}
            </ul>
            <img 
                src={menu ? "/images/nav-close.svg" : "/images/nav-bars.svg"} 
                alt={menu ? "Close" : "Menu"} 
                className="toggle" 
                onClick={toggleMenu} 
            />
            {children}
        </nav>
    )
}

export default Navbar;
