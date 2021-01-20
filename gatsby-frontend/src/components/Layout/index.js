import React from "react"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import SEO from "../seo"

const Layout = ({ title, children, home, about }) => {
  const { pathname } = window.location

  return (
    <StyledLayout home={home} about={about}>
      <SEO title={title} pathname={pathname} />
      <GlobalStyle />
      <Navigation />
      <main className={home ? "main home" : "main"}>
        <section className={about ? "main__body about" : "main__body"}>
          {title && (
            <heading className="main__heading">
              <h1 className="title" data-before={title}>
                {title}
              </h1>
              <p className="title-overlay">{title}</p>
            </heading>
          )}
          {children}
        </section>
      </main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
