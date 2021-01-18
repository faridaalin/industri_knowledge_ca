import React from "react"
import { Helmet } from "react-helmet"

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Test title</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;900&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

export default Head
