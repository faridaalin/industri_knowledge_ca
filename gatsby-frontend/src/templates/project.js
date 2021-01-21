import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import SingleProject from "../components/SingleProject"
import { ButtonDefault } from "../components/Buttons/index"
import Pagination from "../components/Pagination"

const ProjectTemplate = props => {
  const project = props.data && props.data.project
  const next = props.pageContext.next
  const prev = props.pageContext.prev

  return (
    <Layout>
      <SEO />
      {project && <SingleProject project={project} />}
      <Pagination next={next} prev={prev} />
      {/* <div>
        {prev ? (
          <ButtonDefault
            icon="left"
            linkHref={`/projects/${prev.slug.current}`}
          >
            {prev.slug.current.toUpperCase()}
          </ButtonDefault>
        ) : null}
        {next ? (
          <ButtonDefault
            icon="right"
            linkHref={`/projects/${next.slug.current}`}
          >
            {next.slug.current.toUpperCase()}
          </ButtonDefault>
        ) : null}
      </div> */}
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
