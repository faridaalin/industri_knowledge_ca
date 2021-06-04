import React from "react"
import Layout from "../components/Layout"


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
