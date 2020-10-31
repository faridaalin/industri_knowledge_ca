import React from "react"
import Img from "gatsby-image"


function Figure(props) {
    console.log("IMG PROPS:", props.asset)
  return (
    <figure>
      {/* {props.asset && (
        <div className="">
          <Img
            style={{ maxHeight: "100%" }}
            fluid={props.asset.mainImage.asset.fluid}
            alt={props.asset.mainImage.alt}
          />
        </div>
      )}
      <figcaption className="">Write something here</figcaption> */}
    </figure>
  )
}

export default Figure
