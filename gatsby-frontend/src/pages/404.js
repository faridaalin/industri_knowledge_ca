import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components/macro"
import { Link } from "gatsby"

const StyledNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
`

const notFound = () => {
  return (
    <Layout>
      <StyledNotFound>
        <h1>Sorry, this page does not exist.</h1>
        <p>
          Go back to{" "}
          <Link className="customLink" to="/">
            home
          </Link>
        </p>
      </StyledNotFound>
    </Layout>
  )
}

export default notFound
