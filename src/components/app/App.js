import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../header-app/header-app"
import SearchBar from "../search-app/search-app"
import CarsList from "../cars-list-app/cars-list"
import Footer from "../footer-app/footer-app"
import Data from "../data/data"
import PartsListGroup from "../parts-group-list-app/parts-group-list"

import './app.css';


export default function App() {
  return (
    <React.Fragment>

        <Header />
        <SearchBar />
        <Routes>
          <Route path="/PartsListGroup" element={<PartsListGroup />} />
          <Route path="/" element={<CarsList
            posts={Data}
          />} />
        </Routes>
        <Footer />

    </React.Fragment>
  )
}



