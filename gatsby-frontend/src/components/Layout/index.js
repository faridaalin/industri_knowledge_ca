import React from 'react';
import GlobalStyle from '../style/GlobalStyle';
import {StyledLayout} from './layout.style'
import Header from "../Header/"
import Footer from "../Footer"

const Layout = ({title, children}) => {
    return (
        <StyledLayout>
            <GlobalStyle />
            <Header />
            <main id="main-content">
            <h1>{title}</h1>
                {children}</main>
            <Footer />
        </StyledLayout>
    )
}

export default Layout;