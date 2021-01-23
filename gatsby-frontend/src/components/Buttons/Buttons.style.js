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
cursor: pointer;
box-shadow: 0px 1px 5px #000000ba;
transition: all 0.3s ease;
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
    border-color: ${colors.baseWhite.whitesmokeLight};
    color: ${colors.baseBlack.blackLight};
  }

  :active {
    background: ${colors.baseGrey.greyLightest};
    border-color: ${colors.baseGrey.greyLightest};
    color: ${colors.baseBlack.black};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(68 82 113 / 0.5);
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

  :active {
    background: ${colors.baseBlack.blackLight};
    color: ${colors.baseGrey.greyLightest};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(68 82 113 / 0.5);
  }
`
