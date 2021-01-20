import styled from "styled-components/macro"
import { colors } from "../style/base/variables"

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  overflow-x: hidden;

  .main {
    padding-bottom: 120px;
    position: relative;

    ::after {
      ${({ about }) =>
        about &&
        `content: "";
      background: linear-gradient(180deg, rgba(29, 36, 52, 0) 0%, #1d2434 100%);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;`}
       @media all and (min-width: 768px)  {
        ${({ about }) => about && `width: 80%;`}
       }
    }

 
  }

  .main__body {
    ${props =>
      props.home &&
      `display: flex; align-items: center; justify-content: center; height: 100%;`};
    margin: 0 auto;
    width: 90vw;
    grid-row: 2 / 3;
  }

  .main__body.about {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 2fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .main__heading {
    grid-row: 1 / 2;
    position: relative;
  }

  .title {
    position: relative;
    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
    background-color: rgba(231, 61, 87, 1);
    background-image: linear-gradient(
      95deg,
      rgba(243, 80, 105, 1) 0%,
      rgba(250, 106, 184, 1) 20%
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    margin-top: calc(2rem + 1vw);
    margin-bottom: calc(4rem + 1vw);
    font-weight: 900;
    text-transform: uppercase;
  }

  .title-overlay {
    position: absolute;
    left: 0;
    top: 0;
    font-size: clamp(4rem, 20vw, 9rem);
    font-weight: 900;
    width: 100%;
    -webkit-text-stroke: 2px white;
    opacity: 0.3;
    text-transform: uppercase;
    color: #10141d;
  }

  @media only screen and (min-width: 463px) {
    .main.home {
      grid-template-rows: 220px 2fr;
   
    }
    .title-overlay {
      top: calc(3px + -5vw);
    }
`
