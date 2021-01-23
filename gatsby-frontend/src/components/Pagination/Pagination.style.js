import styled from "styled-components/macro"

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ prev }) => (!prev ? "flex-end" : "space-between")};
  padding-top: 120px;
  padding-bottom: 120px;
`
