import styled from "styled-components/macro"

export const StyledMain = styled.section`
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
`
