import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"
import SyntaxHighlighter from "react-syntax-highlighter"

const serializers = {
  types: {
    code: ({node}) => {
        if (!node || !node.code) { return null }
        const {language, code} = node 
        return (
          <SyntaxHighlighter language={language || 'text'}>
            {code}
          </SyntaxHighlighter>
        )
    },
  },
}

export default serializers;


