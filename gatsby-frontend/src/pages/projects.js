import React from "react";
import Layout from "../components/Layout"
import {graphql, Link} from 'gatsby';



const Projects = ({data}) => {
  return (
    <Layout title="Projects">
    <div>
  {data.allSanityProject.edges.map(({node}) => <Link key={node.id} to={node.slug.current}>{node.title}</Link>)}
    </div>
    </Layout>
  )
}
export default Projects

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