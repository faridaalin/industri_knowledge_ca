import { createGlobalStyle } from "styled-components/macro"

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --heading-xl: 64px;
    --heading-l: 48px;
    --heading-m: 32px;
    --heading-s: 25px;
    --heading-xs: 21px;
    
    --text-l: 22px;
    --text-m: 18px;
    --text-s: 16px;
    
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
    box-shadow: 1px 5px 14px rgba(0, 0, 0, 0.1);

    }


html {
    width: 100%;
    height: 100%;
}

body {
    width: 100%;
    height: 100%;
    background: #10141D; 
    color: rgba(173,181,189,1);
    font-size: 1.125rem;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    font-size: 16px;
}

img {
    width: 100%;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
        &:hover,
        &:focus {
            outline: 0;
        }
}

.customLink {
    :hover, :focus {
        color:  #10141D;
    }
    ::after{
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, rgba(243, 80, 105, 1) 0%, rgba(250, 106, 184, 1) 100%);
    left: 0;
    bottom: 3px;
    z-index: -1;
    transition: height 1s;
    }
}

.customLink:hover::after, .customLink:focus::after {
        height: 75%;
    }

 `
export default GlobalStyle
