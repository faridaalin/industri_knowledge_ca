import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { TweenMax, Power3 } from "gsap"
import { StyledHomeNav } from "./styles/homeNavigation.style"
import SEO from "../seo"

const HomeNavigation = () => {
  let linkRef1 = useRef(null)
  let linkRef2 = useRef(null)
  let linkRef3 = useRef(null)
  

  useEffect(() => {
    TweenMax.staggerTo([linkRef1.current, linkRef2.current, linkRef3.current],.8, {
      opacity:1,
      y: -64,
      ease: Power3.easeOut
    }, 0.4)
  }, [linkRef1, linkRef2, linkRef3])
  return (
    <StyledHomeNav>
      <SEO title="Home" />
      <ul>
        <li ref={linkRef1}>
          <Link to="/about" aria-label="about">
            About
          </Link>
        </li>
        <li ref={linkRef2}>
          <Link to="/projects" aria-label="projects">
            Projects
          </Link>
        </li>
        <li ref={linkRef3}>
          <Link to="/contact" aria-label="projects">
            Contact
          </Link>
        </li>
      </ul>
    </StyledHomeNav>
  )
}

export default HomeNavigation
