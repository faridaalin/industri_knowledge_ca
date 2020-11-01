import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import { StyledFigure } from "./figure.style"

function Figure(props) {
  console.log("IMG PROPS:", props.asset._ref)
  const sanityConfig = { projectId: "9wdbtffm", dataset: "production" }
  const imageAssetId = `${props.asset._ref}`

  const fluidProps = getFluidGatsbyImage(
    imageAssetId,
    { maxWidth: 500 },
    sanityConfig
  )

  return (
    <div>
      <StyledFigure>{props.asset && <Img fluid={fluidProps} />}</StyledFigure>
    </div>
  )
}

export default Figure
