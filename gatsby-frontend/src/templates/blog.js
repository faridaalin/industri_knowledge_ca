import React from "react"
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import SinglePost from '../components/SinglePost'



const BlogTemplate = props => {
  console.log(props)
  const { data, errors } = props
  const blogPost = data && data.blog
 

  return (
    <Layout>
       {errors && <p>Error</p>}

      {blogPost && <SinglePost blogPost={blogPost} /> }    
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
            fluid(maxWidth: 700) {
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

