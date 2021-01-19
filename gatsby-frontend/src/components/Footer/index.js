import React from "react"
import { StyledFooter } from "./footer.style"
import { GitHub, Linkedin, Send } from "react-feather"

const Footer = () => (
  <StyledFooter className="footer">
    <div>
      <GitHub />
      <Linkedin />
      <Send />
    </div>
    <p>Created and designed by Farida Alin</p>
  </StyledFooter>
)

export default Footer
