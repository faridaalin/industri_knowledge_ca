import React from "react";
import Layout from "../components/Layout/"
import {graphql, Link} from 'gatsby';



const Writing = ({data}) => {
  return (
    <Layout title="Writing">
    <div>
  {data.allSanityPost.edges.map(({node}) => <Link key={node.id} to={node.slug.current}>{node.title}</Link>)}
    </div>
    </Layout>
  )
}
export default Writing

export const query = graphql`
{
  allSanityPost {
    edges {
      node {
        id
        title
        slug {
          current
        }
      }
    }
  }
}
`