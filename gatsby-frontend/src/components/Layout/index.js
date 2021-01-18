import React from "react"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"

const Layout = ({ title, children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Navigation />
      <main className="main">
        <h1 className="main__title">{title}</h1>

        {children}
      </main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
