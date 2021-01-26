import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { StyledHomeNav } from "./homeNavigation.style"
import SEO from "../seo"

const HomeNavigation = () => {
  let linkRef1 = useRef(null)
  let linkRef2 = useRef(null)
  let linkRef3 = useRef(null)

  useEffect(() => {
    gsap.from([linkRef1.current, linkRef2.current, linkRef3.current], 0.8, {
      delay: 0.2,
      ease: "power.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    })
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
