import styled from "styled-components/macro"

export const StyledPageHeader = styled.header`
  .main__heading {
    grid-row: 1 / 2;
    position: relative;
    font-weight: 900;
    height: 20vh;

    ::after {
      content: "${props => props.title}";
      position: absolute;
      top: 0;
      left: -5px;
      font-size: clamp(5vh, 10rem, 12vw);
      background-image: linear-gradient(
        95deg,
        rgb(253 53 84) 0%,
        rgb(220 115 172) 100%
      );
      background-image: -o-linear-gradient(
        355deg,
        rgb(253 53 84) 0%,
        rgb(220 115 172) 100%
      );
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-stroke: 3.5px transparent;
      color: #10141d;
      filter: opacity(0.1);
      z-index: -200;
      text-transform: uppercase;
      width: 100%;
      height: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
    }

    .title {
      /* font-size: 32px;
      font-weight: 900;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      background-color: rgba(231, 61, 87, 1);
      background-image: linear-gradient(
        95deg,
        rgb(253 53 84) 0%,
        rgb(220 115 172) 100%
      );
      background-image: -o-linear-gradient(
        355deg,
        rgb(253 53 84) 0%,
        rgb(220 115 172) 100%
      );
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      text-shadow: 2px 2px 10px rgb(0 0 0 / 0.16); */
    }

    .title-overlay {
      position: absolute;
      left: 0;
      top: 0;
      font-size: clamp(4rem, 20vw, 9rem);
      font-weight: 900;
      width: 100%;
      -webkit-text-stroke: 2px white;
      opacity: 0.3;
      text-transform: uppercase;
      color: #10141d;
    }
  }
  @media only screen and (min-width: 576px) {
    .main__heading {
      height: 25vh;
    }
  }
  @media only screen and (min-width: 768px) {
    .main__heading {
      min-height: 30vh;
    }
  }
`
