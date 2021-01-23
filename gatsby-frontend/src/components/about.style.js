import styled from "styled-components/macro"

export const StyledAbout = styled.section`
  font-weight: 500;
  margin: 0 auto;
  width: 100%;
  max-width: 995px;

  p:first-child {
    font-weight: 500;
  }

  .about__content {
    div {
      .about-p:first-child {
        font-weight: 500;
      }
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

export const AboutHeading = styled.h2`
  font-size: clamp(2.6rem, -0.875rem + 8.333333vw, 4rem);
  font-weight: 900;
  padding-top: 32px;
  padding-bottom: 16px;
  @media all and (min-width: 768px) {
    padding-top: 0;
    margin-top: -17px;
  }
`
export const AboutSubHeading = styled.h4`
  font-weight: 500;
  font-size: clamp(1rem, 1.5vw, 1rem);
`

export const AboutParagraph = styled.p`
  font-weight: 100;
  padding: 1rem 0;
  opacity: 0.8;
  font-size: clamp(1rem, 1.5vw, 1rem);
`
