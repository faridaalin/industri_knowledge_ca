import React from "react"
import { Link } from "gatsby"
import { StyledHomeNav } from "./homeNavigation.style"

const HomeNavigation = () => {
  return (
    <StyledHomeNav>
      <Link to="/projects" aria-label="projects">
        <span>Projects</span>
      </Link>
      <Link to="/blog" aria-label="blog">
        <span>Writing</span>
      </Link>
      <Link to="/about" aria-label="about">
        <span>About</span>
      </Link>
      <Link to="/contact" aria-label="projects">
        <span>Contact</span>
      </Link>
    </StyledHomeNav>
  )
}

export default HomeNavigation
