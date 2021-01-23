import styled from "styled-components"
import { colors } from "../style/base/variables"

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  padding: 48px;
  div {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
  }
  svg {
    display: grid;
    align-items: center;
    color: ${colors.baseWhite.whitesmokeDark};
    width: 16px;
    height: 16px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    :hover {
      stroke: url(#pink-gradient);
      transform: scale(1.2);
    }
    &:last-child {
      margin-right: 0;
    }
  }

  p {
    padding-top: 16px;
    font-size: 12px;
    color: ${colors.baseWhite.whitesmoke};
  }
`
