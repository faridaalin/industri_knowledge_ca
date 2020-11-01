import React from "react"
import PortableText from '@sanity/block-content-to-react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"
import Figure from '../Figure/Figure'
import {H2, H3, H4, P} from './typography.style'


const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h2':
          return <H2 className="h2">{props.children}</H2>

        case 'h3':
          return <H3 className="h3">{props.children}</H3>

        case 'h4':
          return <H4 className="h4">{props.children}</H4>

        case 'p':
          return <P className="p">{props.children}</P>

        default:
          return <P className="p">{props.children}</P>
      }
    },
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
    mainImage: (props) => {
       
        return <Figure {...props.node} />
      
    },
  },
}

const BlockContent = ({ blocks }) => <PortableText blocks={blocks} serializers={serializers} />


export default BlockContent
