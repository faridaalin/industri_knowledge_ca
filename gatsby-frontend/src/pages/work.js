import React from "react";
import Layout from "../components/Layout/"
import {graphql, Link} from 'gatsby';



const Work = ({data}) => {
  return (
    <Layout title="Work">
    <div>
  {data.allSanityProject.edges.map(({node}) => <Link key={node.id} to={node.slug.current}>{node.title}</Link>)}
    </div>
    </Layout>
  )
}
export default Work

export const query = graphql`
{
  allSanityProject {
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