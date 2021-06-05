import React, { useEffect, useRef } from "react"

import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./styles/layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import { gsap,  Power3 } from "gsap"
import "../../../node_modules/sal.js/dist/sal.css"

const Layout = props => {
  const { title, children, home, about } = props
  let sectionRef = useRef(null)

  let tl = gsap.timeline({repeatDelay: 1});

  useEffect(() => {
  
    const header = sectionRef.current.firstElementChild;
    const main = sectionRef.current.lastElementChild;
  
    tl.from(header,  {x:200, opacity: 0, duration: 2, ease: Power3.easeInOut})
    .from(main, 2, {y:200, opacity: 0,  duration: 2, ease: Power3.easeInOut}, 2)
  }, [])

  return (
    <StyledLayout {...props}>
      <GlobalStyle />
      <Navigation home={home} />
      <main className={home ? "main home" : "main"}>
        <section className={about ? "main__body about" : "main__body"} ref={sectionRef}>
          {title && (
            <header
              className="main__heading small-section"

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
