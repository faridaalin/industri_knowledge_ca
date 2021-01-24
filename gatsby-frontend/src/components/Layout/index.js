import React from "react"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import SEO from "../seo"

const Layout = ({ title, children, home, about, contact }) => {
  const { pathname } = window.location

  console.log("ABOUT:", about)

  return (
    <StyledLayout home={home} about={about} contact={contact}>
      <SEO title={title} pathname={pathname} />
      <GlobalStyle />
      <Navigation home={home} />
      <main className={home ? "main home" : "main"}>
        <section className={about ? "main__body about" : "main__body"}>
          {title && (
            <header className="main__heading small-section" data-title={title}>
              <h1 className="title">{title}</h1>
            </header>
          )}
          {children}
        </section>
      </main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
