import styled from "styled-components/macro"
import { Link as GatsbyLink } from "gatsby"
import { colors } from "../style/base/variables"

export const StyledLink = styled(GatsbyLink)`
  background-image: url(${props => props.imgUrl});
  background-color: grey;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  padding-top: 75%;

  .project {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .project__title {
    color: ${colors.baseWhite.whitesmoke};
    font-weight: bold;
    font-size: 39px;
    line-height: 47px;
    padding-bottom: 24px;
}
    }
  }

  .project__title,
  button {
    opacity: 0;
  }

  :hover {
    .project {
      background: ${colors.baseBlack.blackLight};
    }
    .project__title,
    button {
      opacity: 1;
    }
  }
`
