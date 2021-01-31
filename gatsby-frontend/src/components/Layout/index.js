import React from "react"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./styles/layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"

const Layout = props => {
  const { title, children, home, about } = props

  return (
    <StyledLayout {...props}>
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
