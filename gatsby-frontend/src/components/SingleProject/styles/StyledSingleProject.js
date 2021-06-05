import styled from "styled-components/macro"
import { colors } from "../../style/base/variables"

export const StyledSingleProject = styled.div`
  section {
    min-height: 50vh;
  }

  .project__img-link {
    width: 100%;
    min-height: 200px;
  }

  .project {
    position: relative;
    height: 80vh;
  }
  .project-overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .project-intro {
    position: relative;
    background-color: rgb(16 20 29 / 0.85);

    .project__links {
      display: flex;
      flex-wrap: wrap;
      grid-gap: 8px;
      color: ${colors.baseGrey.greyLightest};
      font-weight: 700;
      align-items: center;
      justify-content: flex-start;

      a,
      p {
        white-space: nowrap;
        margin-right: 8px;
        font-size: 15px;
      }

      span {
        font-size: 14px;
        font-weight: 400;
        color: rgb(161 168 177);
      }

      svg {
        width: 14px;
        height: 14px;
      }
    }

    .project__content {
      max-width: 60ch;
    }

    a {
      :hover {
        background-image: linear-gradient(
          95deg,
          rgba(243, 80, 105, 1) 0%,
          rgba(250, 106, 184, 1) 100%
        );
        background-clip: text;
        color: transparent;
        background-repeat: repeat;
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        transition: 0.25s background;
        svg {
          stroke: url(#pink-gradient);
        }
      }
    }
  }

  .project__content {
    h3 {
      font-weight: 700;
      font-size: 24px;
    }
  }

  .categories {
    padding-top: 32px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 16px;
    font-size: 12px;

    .category {
      padding: 8px 16px;
      background-color: rgba(231, 61, 87, 0.07);
      color: rgba(231, 61, 87, 1);
      text-transform: uppercase;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    .project-overlay {
      width: ${({ dynamicWidth }) => dynamicWidth / 2 + "px"};
      background-image: url(${props => props.imgurl});
      background-color: grey;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      background-color: #10141d;
    }
  }
`
