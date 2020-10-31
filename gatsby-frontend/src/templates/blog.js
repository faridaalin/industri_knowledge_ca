import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SinglePost from "../components/SinglePost"
import styled from "styled-components/macro"

export const Article = styled.article`
  padding: 2.5rem 0;
  background: var(--whitesmoke--light);
  color: var(--black);
  padding: 2rem 1rem;

  .content {
    margin-top: 2rem;
    max-width: 45rem;
    margin: 0 auto;

    ul {
      padding: 0 2rem;
      font-size: 16px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      padding: 0 0.5rem;
      color: var(--black--dark);
      background: var(--grey--lightest); 
      outline: none;

      :hover {
        color: var(--grey--lightest);
        background: var(--black--lighter);
      }

      :focus {
        outline: 1px solid var(--black);
        color: var(--whitesmoke--lightest);
        background: var(--black);
        border-radius: 2px;
      }
      :active {
        color: var(--whitesmoke--lightest);
        background: var(--black);
      }
    }
  }
`

export const HeroContainer = styled.section`
  min-height: 100%;

  .hero-img {
    background: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: calc(200px + 15vw);
  }
`

const BlogTemplate = props => {

  const { data, errors } = props
  const post = data && data.blog

  return (
    <Layout title="Blog">
      <Article className="post-container">
        <HeroContainer
          className="hero-container"
          image={post.mainImage.asset.fluid.src}
        >
          <div className="hero-img"></div>
        </HeroContainer>
        <section className="content">
          {post && <SinglePost post={post} />}
        </section>
      </Article>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($id: String!) {
    blog: sanityPost(id: { eq: $id }) {
      title
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
      publishedAt(formatString: "DD MMMM YY")
      _rawBody
    }
  }
`
