import styled from "styled-components/macro"
import { colors } from "../style/base/variables"
console.log(colors)

export const StyledHomeNav = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
  font-size: 2.3rem;
  width: 100%;

  a,
  span {
    width: 100%;
  }

  a {
    padding: 0.8rem 0;
    background-color: rgba(231, 61, 87, 1);
    background-image: linear-gradient(${colors.basePink.pinkGradient});
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-stroke: 2px transparent;
    color: #10141d;
    text-align: center;
    letter-spacing: 4px;
    background-size: 200% 200%;
    animation: fadeIn 0.5s ease forwards;

    :hover {
      background-image: -webkit-linear-gradient(
        ${colors.basePink.pinkGradient}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      color: transparent;
    }
  }

  @keyframes fadeIn {
    0% {
      background-size: 300%;
      background-position: -9em 1em;
    }
    20% {
      background-size: 57%;
      background-position: 0 1em;
    }
    100% {
      background-size: 57%;
      background-position: 0 0;
    }
  }
`
