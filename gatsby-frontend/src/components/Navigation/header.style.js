import styled from "styled-components/macro"

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
    width: 70%;
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
    background-color: var(--whitesmoke--light);
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
    color: var(--grey--lightest);
    transition: 0.25s color;
    :hover {
      color: var(--whitesmoke--light);
    }
  }
  .menu__item a.active {
    color: var(--whitesmoke--light);
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
        //letter-spacing: 1.1px;

        :last-child {
          margin-right: 0;
        }
      }
    }
  }
`
