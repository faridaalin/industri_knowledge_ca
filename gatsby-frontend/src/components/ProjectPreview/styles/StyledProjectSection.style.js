import styled from "styled-components/macro"

export const StyledProjectSection = styled.section`
  display: grid;
  grid-gap: 16px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 86px;
  }
`
