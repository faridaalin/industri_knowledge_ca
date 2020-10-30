import { createGlobalStyle } from "styled-components/macro"

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}
:root {
        /* Base color 1 */
      
        --tangeringe: rgba(255,84,0,1);
        --tangeringe--dark: rgba(255,96,0,1);
        --tangeringe--light: rgba(255,109,0,1);
        --tangeringe--lighter: rgba(255,121,0,1);
        --tangeringe--lightest: rgba(255,133,0,1);
      
        /* Base color 2 */
      
        --black: rgba(13,16,23,1);
        --black--dark:  rgba(22,27,39,1);
        --black--light: rgba(29,36,52,1);
        --black--lighter: rgba(37,45,65,1);
        --black--lightest: rgba(45,54,78,1);
      
        --black--grey: rgba(16,20,29,1);
      
        /* Base color 3 */
      
        --whitesmoke: rgba(173,181,189,1);
        --whitesmoke--dark: rgba(206,212,218,1);
        --whitesmoke--light: rgba(222,226,230,1);
        --whitesmoke--lighter: rgba(233,236,239,1);
        --whitesmoke--lightest: rgba(248,249,250,1);
     
        --grey: rgba(33,37,41,1);
        --grey--dark: rgba(52,58,64,1);
        --grey--light: rgba(73,80,87,1);
        --grey--lighter:  rgba(108,117,125,1);
        --grey--lightest: rgb(173 181 189 / 77%);
      
        /* --headings-font: "Roboto", sans-serif; */
        --headings-font: "Montserrat", sans-serif;
        --text-font: "Work Sans", sans-serif;
        /* Font weight*/
        --thin: 200;
        --light: 300;
        --regular: 400;
        --medium: 500;
        --bold: 700;
        --bold-black: 900;
      
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
background: var(--black);
color: var(--whitesmoke);
font-size: 1.125rem;
font-family: 'Work Sans', sans-serif;
line-height: 1.5;
overflow-x: hidden;
}
body.light {
background: var(--whitesmoke--light);
color:  var(--black); 
}

h1, h2, h3, h4, h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
}
h1 {
    font-size:  calc(1.5rem + 0.3vw);
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
