import React from "react"
import Layout from "../components/Layout/"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components/macro"

export const Thumbnail = styled(Link)`
  margin-bottom: 2rem;
  width: 100%;

  :hover {
    color: var(--whitesmoke--lightest);

    .title {
      text-decoration: underline;
    }
  }

  .thumbnail__content {
    padding-top: 1rem;

    .title {
      padding: 0.5rem 0;
    }

    .description {
      padding-bottom: 1rem;
    }
    .date {
      color: var(--grey--lightest);
    }
  }


  @media all and (min-width:768px) {
    display: flex;

    .thumbnail__img {
    flex: 1;
  }
  .thumbnail__content {
    flex: 2;
    padding: 0 1rem;

    .title {
      padding-top: 0;
    }

    .description {
      font-size: 1rem;
      line-height: 1.2;
      padding-top: 0.5rem;
    }
    .date {
    font-size: 14px;
    padding-top: 1rem;
  }
  }
  }
 
`
export const Section = styled.section`
  max-width: 45rem;
  margin: 0 auto;
  padding: 2.5rem 0;
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
            <div className="thumbnail__img">
            <Img 
                style={{ maxHeight: "100%" }}
            fluid={item.mainImage.asset.fluid} 
            alt={item.mainImage.alt} />
            </div>
  
            <div className="thumbnail__content">
              <h3 className="title">{item.title}</h3>
              <p className="description">{item.description}</p>
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
