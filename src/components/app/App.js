import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Header from "../header-app/header-app"
import SearchBar from "../search-app/search-app"
import CardsList from "../cards-list-app/cards-list"
import Footer from "../footer-app/footer-app"
import Data from "../data/data"

import './app.css';

export default function App(){
  return(
    <React.Fragment>
    <Header />
    <SearchBar />
    <CardsList
      posts={Data}
    />
    <Footer />
    <Routes>
      <Route/>
    </Routes>
  </React.Fragment>
  )
}



