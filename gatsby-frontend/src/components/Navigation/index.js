import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StyledHeader } from "./header.style"
import Logo from "../../images/logo4.svg"

const Navigation = ({ home }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [navbarColor, setNavbarColor] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const getWindowScrollY = () => {
    if (window.pageYOffset >= 85) {
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", getWindowScrollY)
    return () => window.removeEventListener("scroll", getWindowScrollY)
  }, [])

  return (
    <StyledHeader className="navigation" navbarColor={navbarColor}>
      {home ? (
        <Link to="/" className="logo" aria-label="home">
          <img src={Logo} alt="Farida Alin logo" />
        </Link>
      ) : (
        <>
          <Link to="/" className="logo" aria-label="home">
            <img src={Logo} alt="Farida Alin logo" />
          </Link>
          <nav className="menu">
            <div
              className="menu_hamburger"
              onClick={handleMenu}
              onKeyDown={handleMenu}
              role="button"
              tabIndex="0"
            >
              MENU
            </div>
            <ul className={`menu__items ${showMenu ? "show" : ""}`}>
              <li className="menu__item">
                <Link
                  to="/about"
                  className="activeClassName"
                  activeClassName="active"
                  aria-label="about"
                >
                  About
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to="/projects"
                  activeClassName="active"
                  partiallyActive={true}
                  aria-label="projects"
                >
                  Projects
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to="/contact"
                  activeClassName="active"
                  className="activeClassName"
                  aria-label="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </StyledHeader>
  )
}

export default Navigation
