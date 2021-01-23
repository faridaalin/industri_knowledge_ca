import styled from "styled-components/macro"
import { colors } from "../style/base/variables"

export const StyledHomeNav = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
  font-size: clamp(1.3rem, 9vw, 4rem);
  width: 100%;

  a,
  span {
    width: 100%;
  }

  a {
    padding: 0.8rem 0;
    background-image: linear-gradient(${colors.basePink.pinkGradient});
    background-image: -webkit-linear-gradient(${colors.basePink.pinkGradient});
    -webkit-background-clip: text;
    -webkit-text-stroke: 3.5px transparent;
    color: #10141d;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    background-size: 200% 200%;
    transition: color 0.5s ease;

    :hover {
      color: transparent;
      transition: color 0.5s ease;
    }
  }
`
