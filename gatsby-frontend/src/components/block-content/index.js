import React from "react"
import PortableText from '@sanity/block-content-to-react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"
import styled from "styled-components/macro"


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

a {
  padding: 0 1px;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  padding: 0 8px;
  color: var(--grey);
  outline: none;

  :hover {
  color: var(--grey--lighter);
}

  :focus {
  color: var(--grey);
  outline: 1px solid var(--grey);
  border-radius: 2px;
}

:active {
  color: var(--whitesmoke);
}
}
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
  },
}

const BlockContent = ({ blocks }) => <PortableText blocks={blocks} serializers={serializers} />


// const BlockContent = ({ blocks }) => (
//   <BaseBlockContent blocks={blocks} serializers={serializers} />
// )

export default BlockContent
