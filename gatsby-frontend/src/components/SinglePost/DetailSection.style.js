import styled from "styled-components/macro"

export const DetailSection = styled.div`
  margin: 1.5rem 0 2rem;

    display: flex;
  justify-content: flex-end;

  span {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .date {
    background: rgb(248 249 250 / 48%);
    color: var(--grey);
    margin-right: 1rem;
  }
  .category {
    background: rgb(255 121 0 / 51%);
    color: var(--black);
  }
`