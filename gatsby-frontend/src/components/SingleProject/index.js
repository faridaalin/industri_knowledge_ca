import React, { useRef, useEffect, useState } from "react"
import Img from "gatsby-image"
import { GitHub, ExternalLink } from "react-feather"
import BlockContent from "../BlockContent"
import Pagination from "../Pagination"
import { StyledSingleProject } from "./styles/StyledSingleProject"

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
        <div
          className="project-intro"
          ref={sectionRef}
        >
          <div className="project__content">
            <h3>Goal</h3>
            <BlockContent blocks={project._rawBody} />
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
            <p>
              Designer: <span>{project.designer}</span>
            </p>
            <p>
              Developer: <span>{project.developer}</span>
            </p>
          </div>
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
