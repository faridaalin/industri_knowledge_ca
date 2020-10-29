import {
    createGlobalStyle
} from "styled-components/macro"

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
}
html {
    width: 100%;
    height: 100%;
}
body {
width: 100%;
height: 100%;
margin: 0;
padding: 0;
background-color: white;
color: black;
font-size: 1.125rem;
font-family: 'Work Sans', sans-serif;
line-height: 1.5rem;
font-weight: 400;
overflow-x: hidden;
}
h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.375rem;
    color: black;
    @media (min-width: 1200px) {
        font-size: 2.625rem;
        line-height: 4rem;
    }
}
h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: black;

}
a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;
    &:hover,
    &:focus {
        outline: 0;
    }
}
`
export default GlobalStyle