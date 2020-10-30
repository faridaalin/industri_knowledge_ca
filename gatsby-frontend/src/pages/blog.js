import React from "react"
import Layout from "../components/Layout/"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components/macro"

export const Thumbnail = styled(Link)`
  margin-bottom: 2rem;
  width: 100%;
  /* min-height: 251px;
  max-height: 300px; */

  :hover {
    color: var(--whitesmoke--lightest);

    .title {
      text-decoration: underline;
    }
  }

  .gatsby-image-wrapper{
    /* min-height: 200px;

    div {
      padding-bottom: 0 !important;
    } */
  }
  .date {
    color: var(--grey--lightest);
  }
`
export const Section = styled.section`
  max-width: 45rem;
  margin: 0 auto;
`

const Blog = ({ data }) => {
  return (
    <Layout title="Blog">
      <Section className="container">
        {data.allSanityPost.nodes.map(item => (
          <Thumbnail
            key={item.title}
            to={item.slug.current}
            className="thumbnail"
          >
      
            <Img 
                style={{ maxHeight: "100%" }}
            fluid={item.mainImage.asset.fluid} 
            alt={item.mainImage.alt} />
      

            <div className="thumbnail__content">
              <h3 className="title">{item.title}</h3>
              <p>{item.description}</p>
              <p className="date">
                <time>{item.publishedAt}</time>
              </p>
            </div>
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
