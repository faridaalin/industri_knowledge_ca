
import styled from 'styled-components/macro';

export const StyledLayout = styled.div`
width: 100%;
min-height: 100vh;
margin: 0 auto;
display: grid;
grid-template-rows: auto 1fr auto;
grid-template-columns: 100%;
overflow-x: hidden;

.main {
    width: 90vw;
    max-width: 62.5rem;
    margin: 0 auto;
}

.main__title {
    color: var(--whitesmoke--light);
    padding-top: calc(2rem + 1vw);
    padding-bottom: calc(4rem + 1vw);
    position: relative;
    

}

.main__title:before {
  content: "";
  display: block;
  width: 1rem;
height: 4px;
  background: var(--tangeringe);
  left: 0;
  top: 50%;
  position: absolute;
}
`