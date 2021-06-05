import React, { useEffect, useRef } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import {
  StyledLink,
  StyledProjectSection,
} from "../components/ProjectPreview/styles"
import { gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonOutline } from "../components/Buttons"
import { ChevronRight } from "react-feather"
import SEO from "../components/seo"

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }) => {
  const pathname = "/projects"
  const projects = data.allSanityProject.nodes.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  let projectsRef = useRef({ key: [] })

  useEffect(() => {

    projectsRef.current.key.forEach((element) => {
      gsap.from(element, {
      scrollTrigger: element,
      autoAlpha: 0,
      y: 70,
      duration: 1.5,
      stagger: 0.25

      })
    });
  }, [projectsRef])

  return (
    <Layout title="Projects">
      <SEO
        title="Projects"
        pathname={pathname}
        description="Projects I have worked on either as schoold assignments or client projects"
      />
      <StyledProjectSection>
        {projects.map((project, index) => (
          <StyledLink
            to={project.slug.current}
            key={"key" + index}
            ref={el => { projectsRef.current.key[index] = el }}
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
