import styled from "styled-components/macro"

export const StyledPagination = styled.div`
  width: 100%;
  padding-top: 120px;
  display: flex;
  justify-content: ${({ prev }) => (!prev ? "flex-end" : "space-between")};
`
