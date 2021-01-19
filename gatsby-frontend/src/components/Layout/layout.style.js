import styled from "styled-components/macro"

export const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  overflow-x: hidden;

  .main {
    width: 90vw;
    height: 100vh;
    max-width: 62.5rem;
    margin: 0 auto;
    ${props =>
      props.home &&
      `display: flex; align-items: center; justify-content: center; height: 100%;`}
  }

  .main__title {
    text-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
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
    margin-top: calc(2rem + 1vw);
    margin-bottom: calc(4rem + 1vw);
    position: relative;
    font-weight: 900;
    text-transform: uppercase;
  }

  .main__title:before {
    content: "";
    display: block;
    width: 1rem;
    height: 4px;
    background: var(--tangeringe);
    left: 0;
    top: 50%;
    position: absolute;
  }
`
