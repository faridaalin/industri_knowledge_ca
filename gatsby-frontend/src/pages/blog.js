import React from "react"
import Layout from "../components/Layout/"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Section, Thumbnail } from "../components/BlogPreview/BlogPreview.style"

const Blog = ({ data }) => {
  return (
    <Layout title="Blog">
      <Section className="container small-section ">
        {data.allSanityPost.nodes.map(item => (
          <Thumbnail
            key={item.title}
            to={item.slug.current}
            activeClassName="active"
            className="thumbnail"
          >
            <div className="thumbnail__img">
              <Img
                style={{ maxHeight: "100%" }}
                fluid={item.mainImage.asset.fluid}
                alt={item.mainImage.alt}
              />
            </div>

            {item.categories.map(category => (
              <span className="category" key={category.title}>
                {category.title}
              </span>
            ))}

            <h3 className="title">{item.title}</h3>

            <p className="description">{item.description}</p>
            <span className="date">{item.publishedAt}</span>
          </Thumbnail>
        ))}
      </Section>
    </Layout>
  )
}
export default Blog

export const query = graphql`
  {
    allSanityPost {
      nodes {
        _id
        categories {
          title
          _id
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
        title
        description
        publishedAt(formatString: "DD MMMM YY")
        slug {
          current
        }
      }
    }
  }
`
