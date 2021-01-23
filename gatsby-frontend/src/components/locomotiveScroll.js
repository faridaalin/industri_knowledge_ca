import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"

const Scroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
    })
 
  }, [])


}


