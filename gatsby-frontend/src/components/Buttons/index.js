import React from "react"
import { Link } from "gatsby"
import { StyledButtonOutline, StyledButtonDefault } from "./Buttons.style"
import { ChevronRight, ChevronLeft } from "react-feather"

export const ButtonOutline = ({ children }) => {
  return <StyledButtonOutline>{children}</StyledButtonOutline>
}

export const ButtonDefault = ({ children, icon, linkHref }) => {
  const iconRight = icon === "right" && <ChevronRight className="chevright" />
  const iconLeft = icon === "left" && <ChevronLeft className="chevleft" />
  return (
    <StyledButtonDefault>
      <Link to={linkHref}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    </StyledButtonDefault>
  )
}
