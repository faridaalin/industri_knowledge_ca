import React from "react"
import PortableText from "@sanity/block-content-to-react"
import Img from "gatsby-image"

const serializers = {
  marks: {
    internalLink: ({ children, mark }) => {
      console.log("children:", children[0])
      return <a href={children[0]}>{children}</a>
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
}

function Aboutpage(props) {
  const blocks = props.page._rawBody
  const img = props.page.mainImage.asset.fluid
  console.log("LOKING for img:", img)
  return (
    <div>
      <Img fluid={img} alt="Farida Alin" />
      <PortableText blocks={blocks} serializers={serializers} />
    </div>
  )
}

export default Aboutpage
