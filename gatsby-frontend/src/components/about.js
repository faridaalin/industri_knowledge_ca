import React from "react"
import PortableText from "@sanity/block-content-to-react"

const serializers = {
  types: {
    marks: {
      internalLink: ({ children, mark }) => (
        <a href={mark.slug.current}>{children}</a>
      ),
      link: ({ children, mark }) =>
        mark.blank ? (
          <a href={mark.href} target="_blank" rel="noopener noreferer">
            {children}
          </a>
        ) : (
          <a href={mark.href}>{children}</a>
        ),
    },
  },
}

function Aboutpage(props) {
  console.log("Aboutpage PROPS:", props)
  const blocks = props.page
  return (
    <div>
      <p>Title: </p>
      <p>text</p>
      <PortableText blocks={blocks} serializers={serializers} />
    </div>
  )
}

export default Aboutpage
