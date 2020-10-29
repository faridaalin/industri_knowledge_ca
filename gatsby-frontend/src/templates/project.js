import React from "react"
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import SingleProject from '../components/SingleProject'

const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.project
 

  return (
    <Layout>
       {errors && <p>Error</p>}

      {project && <SingleProject project={project} /> }    
    </Layout>
  )
}

export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      body {
        _rawChildren
      }
    }
  }
`;