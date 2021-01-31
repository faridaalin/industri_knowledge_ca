import React from "react"
import PageHeader from "../PageHeader"
import { StyledMain } from "./styles/StyledMain.style"

const MainSection = ({ about, title, children }) => {
  return (
    <StyledMain className={about ? "main__body about" : "main__body"}>
      {title && <PageHeader title={title} />}
      {children}
    </StyledMain>
  )
}

export default MainSection
