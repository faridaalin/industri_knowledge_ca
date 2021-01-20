import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import me from "../images/me.png"
import { StyledAbout } from "./about.style"

const About = () => {
  return (
    <Layout title="About" about>
      <StyledAbout className="about">
        <div className="about__img">
          <img src={me} alt="Farida Alin" />
        </div>
        <div className="about__content">
          <h2>Hi there</h2>
          <p className="text-m">
            My name is Farida and I am a front-end development student,
            currently located in Oslo, Norway. I'm at my second and last year of
            my studies at
            <a href="https://www.noroff.no/">Noroff</a> - School of technology
            and digital media.
          </p>
          <p className="text-s">
            So far it has been a steep learning curve and I've enjoyed all
            aspects of it. Looking forward to soon pursue and begin my career in
            the web development industry.
          </p>
          <p className="text-m">
            Feel free to view some of the <Link to="/projects">projects</Link>{" "}
            I've worked on and don't hesitate to{" "}
            <Link to="/contact">contact</Link> me if you have questions.
          </p>
        </div>
      </StyledAbout>
    </Layout>
  )
}
export default About
