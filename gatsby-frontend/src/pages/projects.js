import React from "react";
import Layout from "../components/Layout"
import {graphql, Link} from 'gatsby';



const Projects = ({data}) => {
  console.log(data.allSanityProject.nodes)
  return (
    <Layout title="Projects">
    <div>
  {data.allSanityProject.nodes.map((item) => <Link key={item._id} to={item.slug.current}>{item.title}</Link>)}
    </div>
    </Layout>
  )
}
export default Projects

export const query = graphql`
{
  allSanityProject {
    nodes {
      title
      _id
      slug {
        current
      }
        mainImage {
          asset {
            url
            fluid {
              ...GatsbySanityImageFluid
              src
            }
          }
          alt
      }
    }
  }
}
`