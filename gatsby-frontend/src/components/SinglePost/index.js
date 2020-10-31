import React from "react"
import BlockContent from "../BlockContent"
import {DetailSection} from './DetailSection.style'



function SinglePost(props) {
  const { _rawBody, categories, publishedAt } = props.post
  

  return (
    <>
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
