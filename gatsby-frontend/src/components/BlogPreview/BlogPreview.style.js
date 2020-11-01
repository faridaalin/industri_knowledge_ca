import styled from "styled-components/macro"
import { Link as GatsbyLink } from "gatsby"


export const Thumbnail = styled(GatsbyLink)`
  margin-bottom: 2rem;
  width: 100%;
  min-height: 200px;

  display: flex;
  flex-direction: column;

  :hover {
    color: var(--whitesmoke--lightest);

    .title {
      text-decoration: underline;
    }
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  .title {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  .description {
    font-size: 1em;
    line-height: 1.5;
    margin: 0 0 1rem;
    flex: 1 0 auto;
  }

  .date {
    margin-top: 0.75rem;
    color: var(--grey--light);
    font-size: 0.9rem;
  }

  .category {
    color: var(--tangeringe--light);
    margin-top: 1rem;
  }
`
export const Section = styled.section`
  @media all and (min-width: 521px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
    gap: 1.5rem;
  }
`
