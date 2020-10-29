
import styled from 'styled-components/macro';

export const StyledLayout = styled.div`
width: 100%;
min-height: 100vh;
margin: 0 auto;
display: grid;
grid-template-rows: auto 1fr auto;
grid-template-columns: 100%;
overflow-x: hidden;

main {
    width: 90vw;
    max-width: 62.5rem;
    margin: 0 auto;
}
`