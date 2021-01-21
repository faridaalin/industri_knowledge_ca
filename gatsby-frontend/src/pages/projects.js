import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { StyledLink } from "../components/ProjectPreview/ProjectPreview.style"
import { ButtonOutline } from "../components/Buttons"
import { ChevronRight } from "react-feather"

const Projects = ({ data }) => {
  const projects = data.allSanityProject.nodes

  return (
    <Layout title="Projects">
      <section>
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
