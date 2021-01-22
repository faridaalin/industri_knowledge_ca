import React from "react"
import { ButtonDefault } from "../Buttons/index"
import { StyledPagination } from "./Pagination.style"

const Pagination = (...props) => {
  const [{ next }] = props
  const [{ prev }] = props
  return (
    <StyledPagination prev={prev}>
      {prev ? (
        <ButtonDefault icon="left" linkHref={`/projects/${prev.slug.current}`}>
          {prev.slug.current.toUpperCase()}
        </ButtonDefault>
      ) : null}
      {next ? (
        <ButtonDefault icon="right" linkHref={`/projects/${next.slug.current}`}>
          {next.slug.current.toUpperCase()}
        </ButtonDefault>
      ) : null}
    </StyledPagination>
  )
}

export default Pagination
