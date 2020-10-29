
import styled from 'styled-components/macro';

export const StyledLayout = styled.div`
width: 100%;
min-height: 100vh;
margin: 0 auto;
display: grid;
grid-template-rows: auto 1fr auto;
grid-template-columns: 100%;
overflow-x: hidden;

.main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
    background: pink
}
`