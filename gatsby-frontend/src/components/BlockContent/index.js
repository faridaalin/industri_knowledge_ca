import React from "react"
import PortableText from '@sanity/block-content-to-react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"
import styled from "styled-components/macro"
import Figure from '../Figure/Figure'


export const H2 = styled.h2`
color: var(--black--grey);
font-size: 1.8rem;
padding: 0.5rem 0;
`;
export const H3 = styled.h3`
font-size: 1.2rem;
`;
export const H4 = styled.h4`

`;

export const P = styled.p`
font-weight: 100;
font-size: 1rem;
padding: 1rem 0;

`;


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
    mainImage (props) {
      return <Figure {...props.node} />
    },
  },
}

const BlockContent = ({ blocks }) => <PortableText blocks={blocks} serializers={serializers} />


export default BlockContent
