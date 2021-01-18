import React, { useState } from "react"
import { Link } from "gatsby"
import { StyledHeader } from "./header.style"
import Logo from "../../images/logo4.svg"

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <StyledHeader>
      <nav className="menu">
        <Link to="/" className="logo" aria-label="home">
          <img src={Logo} alt="Farida Alin logo" />
        </Link>
        <div
          className="menu_hamburger"
          onClick={handleMenu}
          onKeyDown={handleMenu}
          role="button"
          tabIndex="0"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu__items ${showMenu ? "show" : ""}`}>
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
              to="/blog"
              activeClassName="active"
              partiallyActive={true}
              aria-label="blog"
            >
              Writing
            </Link>
          </li>
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
    </StyledHeader>
  )
}

export default Navigation
