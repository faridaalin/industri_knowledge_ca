import React from "react"
import { Link } from "gatsby"
import { StyledFooter } from "./footer.style"
import { GitHub, Linkedin, Send } from "react-feather"

const Footer = () => (
  <StyledFooter className="footer">
    <svg width="0" height="0">
      <linearGradient id="pink-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#F35069" offset="0%" />
        <stop stopColor="#FA6AB8" offset="100%" />
      </linearGradient>
    </svg>
    <div>
      <a href="https://github.com/faridaalin">
        <GitHub />
      </a>
      <a href="https://www.linkedin.com/in/farida-a-">
        <Linkedin />
      </a>
      <Link to="/contact">
        <Send />
      </Link>
    </div>
    <p>Created and designed by Farida Alin</p>
  </StyledFooter>
)

export default Footer
