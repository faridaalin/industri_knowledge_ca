import React from "react"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import SEO from "../seo"

const Layout = ({ title, children, home }) => {
  const { pathname } = window.location
  return (
    <StyledLayout home={home}>
      <SEO title={title} pathname={pathname} />
      <GlobalStyle />
      <Navigation />
      <main className="main">
        <p className="overlay-title">{title}</p>
        {title && (
          <h1 className="main__title" data-before={title}>
            {title}
          </h1>
        )}
        {children}
      </main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
