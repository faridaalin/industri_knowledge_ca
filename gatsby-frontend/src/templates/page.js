import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import aboutpage from "../components/aboutpage"

const PageTemplate = props => {
  const { data, errors } = props
  const page = data && data.page

  return (
    <Layout>
      {errors && <p>Error</p>}

      {page && <aboutpage page={page} />}
    </Layout>
  )
}

export default PageTemplate
