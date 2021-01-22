import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SingleProject from "../components/SingleProject"

const ProjectTemplate = props => {
  const project = props.data && props.data.project
  const next = props.pageContext.next
  const prev = props.pageContext.prev

  return (
    <Layout title={project.title}>
      <SEO title={project.title} />
      {project && <SingleProject project={project} next={next} prev={prev} />}
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      githubLink
      websiteLink
      projectOrigin
      body {
        _rawChildren
      }
      categories {
        title
      }
      slug {
        current
      }
      date(formatString: "DD MM YYYY")
      mainImage {
        alt
        asset {
          url
          fluid {
            ...GatsbySanityImageFluid
            src
          }
        }
      }
      projectImage {
        alt
        asset {
          url
          fluid {
            ...GatsbySanityImageFluid
            src
          }
        }
      }
      _rawBody
    }
  }
`
