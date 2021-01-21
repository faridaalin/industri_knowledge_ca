import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SingleProject from "../components/SingleProject"

const ProjectTemplate = props => {
  const project = props.data && props.data.project
  const next = props.pageContext.next
  const prev = props.pageContext.prev
  console.log("project:", project)

  return (
    <Layout>
      <SEO />
      {project && <SingleProject project={project} />}
      {prev ? (
        <Link to={`/projects/${prev.slug.current}`}>
          prev.slug.current.toUpperCase()
        </Link>
      ) : null}
      {next ? (
        <Link to={`/projects/${next.slug.current}`}>
          {next.slug.current.toUpperCase()}
        </Link>
      ) : null}
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
      date(formatString: "DD MMMM YYYY")
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
