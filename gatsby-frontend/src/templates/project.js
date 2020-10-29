import React from 'react';
import {graphql} from 'gatsby'


const ProjectTemplate = (props) => {
console.log("DATA:",props)
const { data, errors } = props
const project = data && data.project

   
      return (
        <div>
          
          {errors && <p>Error</p>}
          {project && <h2 title={project.title || 'Untitled'}></h2>}
    
          {errors && console.log(errors)}
          {project && console.log()}
        </div>
      )

     
    
  }
  
  export default ProjectTemplate

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
  `
  