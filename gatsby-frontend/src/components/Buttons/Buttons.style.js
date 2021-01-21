import styled from "styled-components/macro"
import { colors } from "../style/base/variables"

export const StyledRegularButton = styled.button`
  background: transparent;
  border: 2px solid ${colors.baseWhite.whitesmokeLight};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 11px;
  line-height: 22px;
  color: ${colors.baseWhite.whitesmokeLight};

  svg {
    margin-left: 16px;
    width: 16px;
    height: 16px;
    stroke-width: 3;
  }

  :hover {
    background: ${colors.baseWhite.whitesmokeLight};
    color: ${colors.baseBlack.blackLight};
  }
`
