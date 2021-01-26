import styled from "styled-components/macro"

export const StyledHomeNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-weight: 900;

  ul {
    list-style: none;
  }

  a {
    font-size: clamp(1.3rem, 9vw, 4rem);
    text-transform: uppercase;
    padding: 0.8rem 0;
    text-align: center;
    width: 100%;
    letter-spacing: 6px;

    background-image: linear-gradient(
      95deg,
      rgba(243, 80, 105, 1) 0%,
      rgba(250, 106, 184, 1) 100%
    );
    background: -webkit-linear-gradient(
      95deg,
      rgba(243, 80, 105, 1) 0%,
      rgba(250, 106, 184, 1) 20%
    );
    -webkit-background-clip: text;
    -webkit-text-stroke: 3.5px transparent;
    color: #10141d;
    transition: color 0.4s ease;

    :hover {
      color: transparent;
    }
  }

  .page-enter {
    opacity: 0;
    transition: opacity 400ms;
    transition-delay: 600ms;
  }
  .page-enter-active {
    opacity: 1;
  }
  .page-exit {
    opacity: 1;
  }
  .page-exit-active {
    opacity: 0;
    transition: opacity 400ms;
  }
`
