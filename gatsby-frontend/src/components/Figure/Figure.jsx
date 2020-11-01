import React from "react"
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import styled from 'styled-components'


const StyledFigure = styled.figure`
margin-bottom: 1rem;

`


function Figure(props) {
  console.log("IMG PROPS:", props.asset._ref)
  const sanityConfig = {projectId: '9wdbtffm', dataset: 'production'}
  const imageAssetId = `${props.asset._ref}`
  
  const fluidProps = getFluidGatsbyImage(imageAssetId, {maxWidth: 500}, sanityConfig)
  
  return (
    <div>
          <StyledFigure>
      {props.asset && (
      
      <Img fluid={fluidProps} />
      )}

    </StyledFigure>
    </div>

  )
}

export default Figure
