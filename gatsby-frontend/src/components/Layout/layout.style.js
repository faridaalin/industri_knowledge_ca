import styled from "styled-components/macro"

const overlayBackground = `content: "";
background: linear-gradient(180deg, rgba(29, 36, 52, 0) 30%, #1d2434 100%);
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;`

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  overflow-x: hidden;

  .main {
    position: relative;
    width: 100vw;
    padding: 70px 10% 120px 10%;

    ::after {
      ${({ about }) => (about ? `${overlayBackground}` : "")}
      ${({ contact }) => (contact ? `${overlayBackground}` : "")};
      @media all and (min-width: 768px) {
        ${({ about }) => (about ? `max-width: 65vw` : "")}
        ${({ contact }) => contact && ` max-width: 70vw; right: 0; left: auto;`}
      }
    }
  }

  .main.home {
    padding-bottom: 0;
    height: 100vh;
  }

  .main__body {
    ${props =>
      props.home
        ? `display: flex; align-items: center; justify-content: center; height: 100%;`
        : `grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 2fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
      `};

    .small-section {
      margin: 0 auto;
      width: 100%;
      max-width: 995px;
    }
  }

  .main__heading {
    grid-row: 1 / 2;
    position: relative;
    font-weight: 900;
    height: 20vh;

    ::after {
      content: attr(data-title);
      position: absolute;
      top: 0;
      left: -5px;
      background: -webkit-linear-gradient(
        95deg,
        rgba(243, 80, 105, 1) 0%,
        rgba(250, 106, 184, 1) 20%
      );
      -webkit-background-clip: text;
      -webkit-text-stroke: 3.5px transparent;
      color: #10141d;
      text-transform: uppercase;
      opacity: 0.08;
      width: 100%;
      height: auto;
      min-height: 100%;
      font-size: clamp(5vh, 10rem, 14vw);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
    }

    .title {
      font-size: 32px;
      font-weight: 900;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      background-color: rgba(231, 61, 87, 1);
      background-image: linear-gradient(
        95deg,
        rgba(243, 80, 105, 1) 0%,
        rgba(250, 106, 184, 1) 20%
      );
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      text-shadow: 2px 2px 10px rgb(0 0 0 / 0.16);
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
      height: 30vh;
    }

    .main__heading {
      /* padding-bottom: 86px; */
    }
  }
`
