import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SinglePost from "../components/SinglePost"
import {
  Article,
  HeroContainer,
} from "../components/Blog-template/BlogTemplate.style"
import SEO from "../components/seo"

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

const BlogTemplate = props => {
  console.log("BLOG TEMPLATE PROPS:", props)
  const { data } = props
  const post = data && data.blog

  return (
    <Layout title="Blog">
      <SEO />
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
