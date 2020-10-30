import React from "react"
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import SinglePost from '../components/SinglePost'
import Img from "gatsby-image"
import styled from "styled-components/macro"

export const Section = styled.section`
padding: 2.5rem 0;
background: var(--whitesmoke--light);
color: var(--black);
padding: 2rem 1rem;

.content {
  margin-top: 2rem;
  max-width: 45rem;
    margin: 0 auto;
}
`;


const BlogTemplate = props => {

  const { data, errors } = props;
  const blogPost = data && data.blog;

  return (
    <Layout>
      <Section className="post-container">
      <div className="">
            <Img 
                style={{ maxHeight: "100%" }}
            fluid={blogPost.mainImage.asset.fluid} 
            alt={blogPost.mainImage.alt} />
       </div>
       <div className="content">
       {blogPost && <SinglePost blogPost={blogPost} /> }  
       </div>  
      </Section>
    </Layout>
  )
}

export default BlogTemplate;

export const query = graphql`
 query BlogTemplateQuery($id: String!) {
     blog: sanityPost(id: { eq: $id }) {
        title
        _id
        mainImage {
          asset {
            url
            fluid{
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
`;

