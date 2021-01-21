import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SingleProject from "../components/SingleProject"

const ProjectTemplate = ({ data, errors, pageContext }) => {
  console.log("pageContext:", pageContext)
  console.log("DATA:", data)
  const project = data && data.project
  const next = pageContext.next
  const prev = pageContext.prev

  return (
    <Layout>
      {errors && <p>Error</p>}

      {project && <SingleProject project={project} />}
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(_id: { eq: $id }) {
      id
      title
      body {
        _rawChildren
      }
    }
  }
`
