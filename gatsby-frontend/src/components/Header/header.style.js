import styled from "styled-components/macro"

export const StyledHeader = styled.header`
  width: 100%;
  background: white;
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
    background-color: black;
  }

  .menu__items {
    list-style: none;
    position: absolute;
    right: 0;
    top: 2rem;
    transform: translateX(91px);
  }
  .menu__items.show {
      transform: translateX(0px);

    }

  .menu__item a {
  }



  @media all and (min-width:600px) {
    transform: translateX(91px);
  }
`
