import React from "react"
import Img from "gatsby-image"
import { GitHub, ExternalLink } from "react-feather"
import BlockContent from "../BlockContent"
import Pagination from "../Pagination"
import styled from "styled-components/macro"

const StyledSingleProject = styled.div`
  section {
    min-height: 50vh;
    max-height: 100vh;
  }
  .project {
    position: relative;
  }
  .project-overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(16, 20, 29, 0.95) 0%,
        rgba(16, 20, 29, 0.95) 100%
      ),
      url(${props => props.imgurl});
    background-color: grey;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .project-intro {
    position: relative;
    max-width: 60ch;
    min-height: 50vh;
  }

  .categories {
    padding-top: 32px;
  }
  @media only screen and (min-width: 768px) {
    section {
      height: 100vh;
    }
    .project-overlay {
      width: 60%;
      height: 50vh;
    }
  }
`

function SingleProject({ project, next, prev }) {
  console.log("SINGLE PROJECT:", project)

  const githubSrc = project.githubLink
    ? project.githubLink
    : "https://github.com/faridaalin"
  const website = project.websiteLink
    ? project.websiteLink
    : "https://www.faridaalin.com"

  return (
    <StyledSingleProject imgurl={project.mainImage.asset.url}>
      <section className="project small-section">
        <div className="project-intro">
          <div className="project__links">
            <a href={website}>
              Website <ExternalLink />
            </a>
            <a href={githubSrc}>
              Github <GitHub />
            </a>
            <p>
              Year <span>{project.date.split(" ")[2]}</span>
            </p>
            <p>
              Category <span>{project.projectOrigin}</span>
            </p>
          </div>
          <div className="project__content">
            <h3>Goal</h3>
            <BlockContent blocks={project._rawBody} />
            <div className="categories">
              {project.categories.map(category => category.title)}
            </div>
          </div>
        </div>
        <div className="project-overlay"></div>
      </section>
      <section>
        <div className="project__img">
          <Img
            fluid={project.projectImage.asset.fluid}
            alt={project.projectImage.alt}
          />
        </div>
        <Pagination next={next} prev={prev} />
      </section>
    </StyledSingleProject>
  )
}

export default SingleProject
