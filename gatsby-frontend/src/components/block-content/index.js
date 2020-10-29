import React from "react"
import PortableText from '@sanity/block-content-to-react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"

const serializers = {
  types: {
    //  block (props) {
    //   if (props) {
    //     console.log("PROPS SERIALISERS", props)
    //   }
    // },
    code: ({ node }) => {
      if (!node || !node.code) {
        return null
      }
      const { language, code } = node
      return (
        <SyntaxHighlighter language={language || "text"} style={xonokai}>
          {code}
        </SyntaxHighlighter>
      )
    },
  },
}

const BlockContent = ({ blocks }) => <PortableText blocks={blocks} serializers={serializers} />


// const BlockContent = ({ blocks }) => (
//   <BaseBlockContent blocks={blocks} serializers={serializers} />
// )

export default BlockContent
