import React from "react"
import { StyledPageHeader } from "./StyledPageHeader.style"

const PageHeader = ({ title }) => {
  return (
    <StyledPageHeader className="main__heading small-section">
      <h1 className="title">{title}</h1>
    </StyledPageHeader>
  )
}

export default PageHeader
