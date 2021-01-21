import React from "react"
import Layout from "../components/Layout"
import Aboutpage from "../components/about"
import { graphql } from "gatsby"

export const query = graphql`
  {
    page: sanityPage(slug: { current: { eq: "about" } }) {
      title
      _rawBody
      mainImage {
        asset {
          url
          fluid {
            ...GatsbySanityImageFluid
            src
          }
        }
      }
    }
  }
`

const About = props => {
  const { data, errors } = props
  const page = data && data.page
  console.log("page:", page)

  return (
    <Layout title={data.page.title} about>
      {errors && <p>Error</p>}
      <Aboutpage page={page} />
    </Layout>
  )
}
export default About
