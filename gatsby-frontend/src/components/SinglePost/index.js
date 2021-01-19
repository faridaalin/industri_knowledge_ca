import React from "react"
import BlockContent from "../BlockContent"
import { DetailSection } from "./DetailSection.style"
import SEO from "../seo"

function SinglePost(props) {
  const { _rawBody, categories, publishedAt } = props.post
  const { pathname } = window.location

  return (
    <>
      <SEO title={props.post.title} pathname={pathname} />
      <DetailSection>
        {publishedAt && <span className="date">{publishedAt}</span>}
        {categories &&
          categories.map(category => (
            <span className="category" key={category._id}>
              {category.title}
            </span>
          ))}
      </DetailSection>
      <BlockContent blocks={_rawBody} />
    </>
  )
}

export default SinglePost
