import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import {
  StyledLink,
  StyledProjectSection,
} from "../components/ProjectPreview/styles"
import { ButtonOutline } from "../components/Buttons"
import { ChevronRight } from "react-feather"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const pathname = "/projects"
  const projects = data.allSanityProject.nodes.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  return (
    <Layout title="Projects">
      <SEO
        title="Projects"
        pathname={pathname}
        description="Projects I have worked on either as schoold assignments or client projects"
      />
      <StyledProjectSection className="small-section">
        {projects.map(project => (
          <StyledLink
            to={project.slug.current}
            key={project._id}
            imgurl={project.mainImage.asset.url}
            data-sal-duration="1200"
            data-sal="slide-up"
            data-sal-delay="1200"
            data-sal-easing="ease-out-bounce"
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
