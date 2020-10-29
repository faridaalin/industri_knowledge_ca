import React, { useState } from "react"
import { Link } from "gatsby"
import { StyledHeader } from "./header.style"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    console.log("clicked")
    setShowMenu(!showMenu)
  }

  return (
    <StyledHeader>
      <nav className="menu">
        <Link to="/" className="activeClassName logo" aria-label="home">
          Fa.
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
            <Link to="/work" className="activeClassName" aria-label="work">
              Work
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to="/writing"
              className="activeClassName"
              aria-label="writing"
            >
              Writing
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/about" className="activeClassName" aria-label="about">
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link
              to="/contact"
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

export default Header
