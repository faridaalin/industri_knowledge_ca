import React from "react"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import SEO from "../seo"

const Layout = ({ title, children }) => {
  const { pathname } = window.location
  return (
    <StyledLayout>
      <SEO title={title} pathname={pathname} />
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
