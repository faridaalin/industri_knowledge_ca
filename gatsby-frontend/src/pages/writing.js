import React from "react";
import Layout from "../components/Layout/"
import {graphql, Link} from 'gatsby';
import Img from 'gatsby-image'



const Writing = ({data}) => {  
  return (
    <Layout title="Writing">
   
  {data.allSanityPost.nodes.map((item) => 

  <div key={item.id}>
    <div>
    <Img fluid={item.mainImage.asset.fluid} alt ={item.mainImage.alt} />
    </div>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <p><time>{item.publishedAt}</time></p>
    <Link to={item.slug.current}>Read more</Link>
  </div>
  
  )}
    </Layout>
  )
}
export default Writing

export const query = graphql`
{
  allSanityPost {
    nodes {
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


