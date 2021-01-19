import styled from "styled-components"
import { colors } from "../style/base/variables"


export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    color: ${colors.baseWhite.whitesmokeDark};
    margin-right: 16px;
    width: 16px;
    height: 16px;
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
