import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ContactForm from "../components/Contact-form"

const Contact = () => {
  const pathname = "/contact"

  return (
    <Layout title="Contact" contact>
      <SEO title="Contact" pathname={pathname} />
      <ContactForm />
    </Layout>
  )
}
export default Contact
