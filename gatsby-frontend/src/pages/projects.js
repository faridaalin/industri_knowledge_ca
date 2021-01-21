import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  const projects = data.allSanityProject.nodes

  return (
    <Layout title="Projects">
      <section>
        {projects.map(project => (
          <Link key={project._id} to={project.slug.current}>
            {project.title}
            <Img
              style={{ maxHeight: "100%" }}
              fluid={project.mainImage.asset.fluid}
              alt={project.mainImage.alt}
            />
          </Link>
        ))}
      </section>
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
