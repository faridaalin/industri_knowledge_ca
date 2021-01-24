import styled from "styled-components"
import { colors } from "../style/base/variables"

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  padding: 48px;

  p {
    padding-top: 16px;
    font-size: 12px;
    color: ${colors.baseWhite.whitesmoke};
  }
`
