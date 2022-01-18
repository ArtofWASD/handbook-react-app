import React from "react";
import { Routes, Route, } from 'react-router-dom';

import { Layout } from '../layout/Layout'
import { Homepage } from '../homepage/Homepage'
import { PartsList} from '../partslist/Partslist'

import './App.css';



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path='partslist/:id' element={<PartsList />}/>
        </Route>
      </Routes>
    </>
  )
}





