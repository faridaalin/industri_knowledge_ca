import styled from "styled-components/macro"

export const StyledHeader = styled.header`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;

  .menu {
    display: grid;
    grid-template-rows: 1fr;
    width: 100%;
    position: relative;
  }

  .logo {
    grid-row: 1 / 1;
    color: var(--tangeringe);
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
  }
  .menu__items.show {
      transform: translateX(0);
    }

  .menu__item  {
    margin-bottom: 1rem;
  }
  .menu__item a  {
    color: var(--grey--lightest);
  }
  .menu__item a.active  {
    color: var(--whitesmoke--lightt);
  }
`
