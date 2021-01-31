import React from "react"
import { Link } from "gatsby"
import {
  StyledButtonOutline,
  StyledButtonDefault,
} from "./styles/Buttons.style"
import { ChevronRight, ChevronLeft } from "react-feather"

export const ButtonOutline = ({ children, type }) => {
  return (
    <StyledButtonOutline type={type ? type : "button"}>
      {children}
    </StyledButtonOutline>
  )
}

export const ButtonDefault = ({ children, icon, linkHref, type }) => {
  const iconRight = icon === "right" && <ChevronRight className="chevright" />
  const iconLeft = icon === "left" && <ChevronLeft className="chevleft" />
  return (
    <StyledButtonDefault type={type ? type : "button"}>
      <Link to={linkHref}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    </StyledButtonDefault>
  )
}
