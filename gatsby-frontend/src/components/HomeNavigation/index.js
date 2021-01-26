import React from "react"
import { Link } from "gatsby"
import { StyledHomeNav } from "./homeNavigation.style"
import SEO from "../seo"

const HomeNavigation = () => {
  return (
    <StyledHomeNav>
      <SEO title="Home" />
      <ul>
        <li>
          <Link to="/about" aria-label="about">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" aria-label="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" aria-label="projects">
            Contact
          </Link>
        </li>
      </ul>
    </StyledHomeNav>
  )
}

export default HomeNavigation
