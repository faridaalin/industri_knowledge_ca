import styled from "styled-components/macro"

export const StyledAbout = styled.div`
  .about__content {
    h2 {
      font-size: clamp(2.6rem, -0.875rem + 8.333333vw, 4rem);
    }
  }

  @media all and (min-width: 768px) {
    display: flex;

    .about__img {
      width: 50%;
    }

    .about__content {
      width: 50%;
      margin-left: 48px;
    }
  }
`
