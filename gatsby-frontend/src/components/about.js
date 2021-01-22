import React from "react"
import PortableText from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import {
  StyledAbout,
  AboutHeading,
  AboutSubHeading,
  AboutParagraph,
} from "./about.style"
import { Link } from "gatsby"

const serializers = {
  marks: {
    internalLink: ({ children, mark }) => {
      return <Link to={`/${children[0]}`}>{children}</Link>
    },
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="blank" rel="noopener noreferer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
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
      </div>
    </StyledAbout>
  )
}

export default Aboutpage

/*
        .about-p:first-child {
    color: #f8f9fa;
    font-weight: 500;
  }
      */
