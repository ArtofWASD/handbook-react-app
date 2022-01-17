import React from 'react';
import {Outlet} from 'react-router-dom'

import Header from "../header-app/header-app"
import SearchBar from "../search-app/search-app"
import Footer from "../footer-app/footer-app"

const Layout = () => {
    <>
    <Header/>
    <SearchBar/>

    <Outlet/>
    <Footer/>
    </>
}

export default Layout;