import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { StyledLink } from "../components/ProjectPreview/ProjectPreview.style"
import { ButtonOutline } from "../components/Buttons"
import { ChevronRight } from "react-feather"

import styled from "styled-components/macro"

export const StyledProjectSection = styled.section`
  display: grid;
  grid-gap: 16px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Projects = ({ data }) => {
  const projects = data.allSanityProject.nodes.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )
  console.log("PROJECTS:", projects)

  return (
    <Layout title="Projects">
      <StyledProjectSection className="small-section">
        {projects.map(project => (
          <StyledLink
            to={project.slug.current}
            key={project._id}
            imgurl={project.mainImage.asset.url}
          >
            <div className="project">
              <p className="project__title">{project.title}</p>
              <ButtonOutline>
                View Project
                <ChevronRight />
              </ButtonOutline>
            </div>
          </StyledLink>
        ))}
      </StyledProjectSection>
    </Layout>
  )
}
export default Projects

export const query = graphql`
  {
    allSanityProject {
      nodes {
        title
        date
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
