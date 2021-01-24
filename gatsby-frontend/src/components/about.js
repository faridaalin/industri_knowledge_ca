import React from "react"
import PortableText from "@sanity/block-content-to-react"
import { Link } from "gatsby"
import { GitHub, Linkedin } from "react-feather"
import Img from "gatsby-image"
import {
  StyledAbout,
  AboutHeading,
  AboutSubHeading,
  AboutParagraph,
} from "./about.style"

const serializers = {
  marks: {
    internalLink: ({ children, mark }) => {
      return (
        <Link to={`/${children[0]}`} className="customLink">
          {children}
        </Link>
      )
    },
    link: ({ children, mark }) =>
      mark.blank ? (
        <a
          href={mark.href}
          target="blank"
          rel="noopener noreferer"
          className="customLink"
        >
          {children}
        </a>
      ) : (
        <a className="customLink" href={mark.href}>
          {children}
        </a>
      ),
  },
  types: {
    block(props) {
      switch (props.node.style) {
        case "h2":
          return (
            <AboutHeading className="about-h2">{props.children}</AboutHeading>
          )
        case "h4":
          return (
            <AboutSubHeading className="about-h2">
              {props.children}
            </AboutSubHeading>
          )
        case "p":
          return (
            <AboutParagraph className="about-p">
              {props.children}
            </AboutParagraph>
          )

        default:
          return (
            <AboutParagraph className="about-p">
              {props.children}
            </AboutParagraph>
          )
      }
    },
  },
}

function Aboutpage(props) {
  const blocks = props.page._rawBody
  const img = props.page.mainImage.asset.fluid
  return (
    <StyledAbout>
      <div className="about__img">
        <Img fluid={img} alt="Farida Alin" />
      </div>
      <div className="about__content">
        <PortableText blocks={blocks} serializers={serializers} />
        <div className="social-media social-media-home">
          <a
            href="https://github.com/faridaalin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/farida-a-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </StyledAbout>
  )
}

export default Aboutpage
