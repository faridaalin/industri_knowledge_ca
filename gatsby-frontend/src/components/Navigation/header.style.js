import styled from "styled-components/macro"
//import { colors } from "../style/base/variables"

export const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  padding: 0 10%;
  position: fixed;
  z-index: 20000;
  background: #10141d;

  a,
  nav {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    height: 100%;
    width: 100%;
    grid-gap: 2rem;
    gap: 2rem;
  }

  .logo {
    grid-row: 1 / 1;
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
    top: 10vh;
    padding: 1rem 1rem 0;
    transform: translateX(50vw);
    transition: transform 0.7s ease;
    background: rgb(25 29 37);
    z-index: 100;
    height: 100vh;
    width: 50vw;
    text-align: right;
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
    background-color: rgba(231, 61, 87, 1);
    background-image: linear-gradient(
      95deg,
      rgba(243, 80, 105, 1) 0%,
      rgba(250, 106, 184, 1) 100%
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    transition: 0.25s background;
    :hover {
      color: var(--whitesmoke--light);
    }
  }
  .menu__item a.active {
    color: var(--whitesmoke--light);
  }

  @media all and (min-width: 821px) {
    /* .logo {
      width: 70%;
    } */
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
