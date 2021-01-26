import React from "react"
import PageHeader from "../PageHeader"
import { StyledMain } from "./StyledMain.style"

const MainSection = ({ about, title, children }) => {
  console.log("about:", about)
  console.log("children:", children)
  console.log("about:", about ? "main__body about" : "main__body")
  return (
    <StyledMain className={about ? "main__body about" : "main__body"}>
      {title && <PageHeader title={title} />}
      {children}
    </StyledMain>
  )
}

export default MainSection
