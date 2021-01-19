import styled from "styled-components/macro"
//import { colors } from "../style/base/variables"

export const StyledHeader = styled.header`
  width: 100%;
  padding: 32px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 900;
  width: 90vw;
  max-width: 62.5rem;
  margin: 0 auto;

  .menu {
    display: grid;
    grid-template-rows: 1fr;
    width: 100%;
    position: relative;
  }

  .logo {
    grid-row: 1 / 1;
    width: 30%;
  }

  .menu_hamburger {
    display: grid;
    grid-template-rows: 4px 4px 4px;
    grid-row: 1 / 1;
    height: 25px;
    width: 30px;
    display: grid;
    grid-template-rows: 4px 4px 4px;
    align-content: space-around;
    cursor: pointer;
    margin-left: auto;
  }

  .menu_hamburger span {
    transition: 0.3s;
    background-color: white;
  }

  .menu__items {
    list-style: none;
    position: absolute;
    right: 0;
    top: 2rem;
    padding: 1rem 1rem 0;
    transform: translateX(120%);
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
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
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
    .logo {
      width: 70%;
    }
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
