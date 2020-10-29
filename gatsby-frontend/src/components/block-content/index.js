import React from "react"
// import SyntaxHighlighter from "react-syntax-highlighter"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

const serializers = {
  types: {
    code: ({node}) => {
        if (!node || !node.code) { return null }
        const {language, code} = node 
        return (
                <SyntaxHighlighter language={language || 'text'} style={xonokai}>
               {code}
              </SyntaxHighlighter>

        )
    },
  },
}

export default serializers;


