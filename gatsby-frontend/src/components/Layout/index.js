import React, { useEffect, useRef } from "react"
import sal from "sal.js"
import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./styles/layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import { TimelineLite, Power3 } from "gsap"
import "../../../node_modules/sal.js/dist/sal.css"

const Layout = props => {
  const { title, children, home, about } = props
  let titleRef = useRef(null)

  let tl = new TimelineLite();

  useEffect(() => {
  
    tl.from(titleRef.current, 2, {x:200, opacity: 0, ease: Power3.easeInOut})
  }, [])

  return (
    <StyledLayout {...props}>
      <GlobalStyle />
      <Navigation home={home} />
      <main className={home ? "main home" : "main"}>
        <section className={about ? "main__body about" : "main__body"}>
          {title && (
            <header
              className="main__heading small-section"
              ref={titleRef}
           
            >
              <h1 className="title" >{title}</h1>
              <span className="decorative-title">{title}</span>
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
