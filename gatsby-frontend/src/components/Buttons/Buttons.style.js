import styled from "styled-components/macro"
import { colors } from "../style/base/variables"

const defaultButtonStyle = `
padding: 8px 16px;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
font-size: 11px;
line-height: 22px;
`
const defaultIconStyle = `
width: 16px;
height: 16px;
stroke-width: 3;
`
const flexCenter = `
display: flex;
align-items: center;
justify-content: center;
`

export const StyledButtonOutline = styled.button`
  ${defaultButtonStyle}
  background: transparent;
  border: 2px solid ${colors.baseWhite.whitesmokeLight};
  color: ${colors.baseWhite.whitesmokeLight};
  font-weight: 700;

  svg {
    ${defaultIconStyle}
  }

  :hover {
    background: ${colors.baseWhite.whitesmokeLight};
    color: ${colors.baseBlack.blackLight};
  }
`

export const StyledButtonDefault = styled.button`
  ${defaultButtonStyle}
  border: none;
  min-width: 150px;
  background: ${colors.baseWhite.whitesmokeLight};
  color: ${colors.baseBlack.blackLight};
  letter-spacing: 1px;

  svg {
    ${defaultIconStyle}
  }

  svg.chevright {
    margin-left: 16px;
  }
  svg.chevleft {
    margin-right: 16px;
  }

  a {
    ${flexCenter}
  }

  :hover {
    background: ${colors.baseBlack.blackLightest};
    color: ${colors.baseWhite.whitesmokeLight};
    font-weight: bold;
  }
`
