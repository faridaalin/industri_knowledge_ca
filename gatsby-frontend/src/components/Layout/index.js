import React, { useEffect, useRef } from "react"

import GlobalStyle from "../style/GlobalStyle"
import { StyledLayout } from "./styles/layout.style"
import Navigation from "../Navigation/"
import Footer from "../Footer"
import { gsap,  Power3 } from "gsap"


const Layout = props => {
  const { title, children, home, about } = props
  let sectionRef = useRef(null)
  let logoRef = useRef(null)
  let navbarIconRef = useRef(null)
  let navLinksRef = useRef(null)



  useEffect(() => {
    let tl = gsap.timeline();
    if(!home) {
      const header = sectionRef.current.firstElementChild;
      const main = sectionRef.current.lastElementChild;
      const logo = logoRef.current;
      const navbarIcon = navbarIconRef.current
      const about = navLinksRef.current.children[0]
      const projects = navLinksRef.current.children[1]
      const contact = navLinksRef.current.children[2]
  
  
      tl.from(header,  {x:200, opacity: 0, duration: 1.5, ease: Power3.easeInOut}, "Start")
      tl.staggerFrom(main, 1.5, {
        y:200,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.8,
      })
  
      tl.staggerFrom([logo, navbarIcon, about, projects, contact], 2, {
        y: 0,
        opacity: 0,
        ease: Power3.easeOut,
        delay: .8,
      }, .2, "Start")
    }
  
  }, [home])

  return (
    <StyledLayout {...props}>
      <GlobalStyle/>
      <Navigation home={home}  navbarIconRef={navbarIconRef} navLinksRef={navLinksRef} logoRef={logoRef}/>
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
