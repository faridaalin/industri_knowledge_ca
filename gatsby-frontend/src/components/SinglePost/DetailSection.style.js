import styled from "styled-components/macro"

export const DetailSection = styled.div`
  margin: 1rem 0;
  width: 50%;
  margin-left: auto;
    display: flex;
  justify-content: flex-end;

  span {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
    font-size: 10px;
    white-space: nowrap;
  }

  .date {
    background: var(--whitesmoke--lightest);
    color: var(--grey);
    margin-right: 1rem;
  }
  .category {
    background: var(--tangeringe--lighter);
    color: var(--black);
  }
`