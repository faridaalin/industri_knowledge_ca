import styled from "styled-components/macro"

export const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  padding: 0 10%;
  position: fixed;
  z-index: 20000;
  min-height: 85px;
  ${({ navbarColor }) =>
    navbarColor &&
    `background: #10141D;
    box-shadow: 0px 10px 30px 10px rgb(13 17 27 / 0.9);`}

  a,
  nav {
    /* display: -ms-grid;
    display: grid;
    grid-auto-flow: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    grid-gap: 2rem;
    gap: 2rem; */
  }

  .logo {
    width: 60px;
  }

  .menu_hamburger {
    font-weight: 500;
    letter-spacing: 2px;
  }

  .menu_hamburger span {
    transition: 0.3s;
    background-color: white;
  }

  .menu__items {
    list-style: none;
    position: absolute;
    right: 0;
    top: 70px;
    padding-top: 200px;
    transform: translateX(100vw);
    transition: transform 0.7s ease;
    background: rgb(25 29 37);
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: #10141d;
    text-align: right;
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: minmax(min-content, max-content);
    grid-gap: 16px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .menu__items.show {
    transform: translateX(0);
  }

  .menu__item {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 900;
  }

  .menu__item a {
    width: 100%;
    text-align: center;
    background-image: linear-gradient(
      95deg,
      rgba(243, 80, 105, 1) 0%,
      rgba(250, 106, 184, 1) 100%
    );
    background-image: -o-linear-gradient(
      355deg,
      rgba(243, 80, 105, 1) 0%,
      rgba(250, 106, 184, 1) 100%
    );
    background: -webkit-linear-gradient(
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
    -webkit-transition: 0.25s background;
    -o-transition: 0.25s background;
    transition: 0.25s background;
    -webkit-transition: opacity 0.5s ease;
    -o-transition: opacity 0.5s ease;

    opacity: 0.4;
    transition: opacity 0.5s ease;
    :hover {
      opacity: 1;
    }
  }
  .menu__item a.active {
    opacity: 1;
  }

  @media all and (min-width: 821px) {
    .menu {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: space-between;
    }

    .menu_hamburger {
      display: none;
    }

    .menu__items {
      padding: 0;
      width: auto;
      position: initial;
      transform: translateX(0);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background: transparent;

      .menu__item {
        padding: 0;
        margin-right: 1rem;
        margin-bottom: 0;
        font-size: 1.2rem;
        :last-child {
          margin-right: 0;
        }
      }
    }
  }
`
