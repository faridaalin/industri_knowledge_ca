import React, { useRef, useEffect, useState } from "react"
import Img from "gatsby-image"
import { GitHub, ExternalLink } from "react-feather"
import BlockContent from "../BlockContent"
import Pagination from "../Pagination"
import styled from "styled-components/macro"
import { colors } from "../style/base/variables"

const StyledSingleProject = styled.div`
  section {
    min-height: 50vh;
  }

  .project {
    position: relative;
    height: 100vh;
  }
  .project-overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .project-intro {
    position: relative;
    background-color: rgb(16 20 29 / 0.85);

    .project__links {
      display: flex;
      flex-wrap: wrap;
      grid-gap: 8px;
      color: ${colors.baseGrey.greyLightest};
      font-weight: 700;
      text-transform: uppercase;

      a,
      p {
        white-space: nowrap;
        margin-right: 8px;
        font-size: 15px;
      }

      span {
        font-size: 14px;
        font-weight: 400;
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }

    .project__content {
      max-width: 60ch;
    }
  }

  .project__content {
    padding-top: 32px;

    h3 {
      font-weight: 700;
      font-size: 24px;
    }
  }

  .categories {
    padding-top: 32px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 16px;

    .category {
      padding: 8px 16px;
      background-color: rgba(231, 61, 87, 0.07);
      color: rgba(231, 61, 87, 1);
      text-transform: uppercase;
    }
  }
  @media only screen and (min-width: 768px) {
    .project-overlay {
      width: ${({ dynamicWidth }) => dynamicWidth / 2 + "px"};
      background-image: url(${props => props.imgurl});
      background-color: grey;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      background-color: #10141d;
    }
  }
`

function SingleProject({ project, next, prev }) {
  const [width, setWidth] = useState(null)
  const sectionRef = useRef()
  const githubSrc = project.githubLink
    ? project.githubLink
    : "https://github.com/faridaalin"
  const website = project.websiteLink
    ? project.websiteLink
    : "https://www.faridaalin.com"

  useEffect(() => {
    setWidth(sectionRef.current.clientWidth)
  }, [])

  return (
    <StyledSingleProject
      imgurl={project.mainImage.asset.url}
      dynamicWidth={width}
    >
      <section className="project small-section">
        <div className="project-intro" ref={sectionRef}>
          <div className="project__links">
            <a href={website}>
              Website <ExternalLink />
            </a>
            <a href={githubSrc}>
              Github <GitHub />
            </a>

            <p>
              Year: <span>{project.date.split(" ")[2]}</span>
            </p>
          </div>
          <div className="project__content">
            <h3>Goal</h3>
            <BlockContent blocks={project._rawBody} />
            <div className="categories">
              {project.categories.map(category => (
                <span key={category.title} className="category">
                  {category.title}
                </span>
              ))}
            </div>
          </div>
          <div className="project-overlay"></div>
        </div>
      </section>
      <section className="project-img-container">
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
