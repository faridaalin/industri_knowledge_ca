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

  .project__img-link {
    width: 100%;
    min-height: 200px;
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
        width: 14px;
        height: 14px;
      }
    }

    .project__content {
      max-width: 60ch;
    }

    a {
      :hover {
        background-image: linear-gradient(
          95deg,
          rgba(243, 80, 105, 1) 0%,
          rgba(250, 106, 184, 1) 100%
        );
        background-clip: text;
        color: transparent;
        background-repeat: repeat;
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        transition: 0.25s background;
        svg {
          stroke: url(#pink-gradient);
        }
      }
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
    padding-top: 86px;
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
        <svg width="0" height="0">
          <linearGradient
            id="pink-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#F35069" offset="0%" />
            <stop stopColor="#FA6AB8" offset="100%" />
          </linearGradient>
        </svg>
        <div className="project-intro" ref={sectionRef}>
          <div className="project__links">
            <a target="blank" rel="noopener noreferer" href={website}>
              Website <ExternalLink />
            </a>
            <a target="blank" rel="noopener noreferer" href={githubSrc}>
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
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="project__img-link"
          >
            <Img
              style={{ maxHeight: "100%" }}
              fluid={project.projectImage.asset.fluid}
              alt={project.projectImage.alt}
            />
          </a>
        </div>
        <Pagination next={next} prev={prev} />
      </section>
    </StyledSingleProject>
  )
}

export default SingleProject
