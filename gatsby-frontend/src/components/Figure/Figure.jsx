import React from "react"
import Img from "gatsby-image"
import UrlBuilder from '@sanity/image-url';

// const builder = imageUrlBuilder(myConfiguredSanityClient)


const urlFor = (source) => UrlBuilder({projectId: '9wdbtffm', dataset: 'production'}).image(source)


// function urlFor(source) {
//   return builder.image(source)
// }


function Figure(props) {
    console.log("IMG PROPS:", props)
  return (
    <figure>
      {props.asset && (
        <div className="">
          <img
            
            src={urlFor(props.asset)}
            alt={props.alt}
          />
        </div>
      )}
      <figcaption className="">Write something here</figcaption>
    </figure>
  )
}

export default Figure
