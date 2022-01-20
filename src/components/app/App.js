import React from "react";
import { Routes, Route, } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Homepage } from '../homepage/Homepage';
import { Carslist } from '../carsList/Carslist';
import { CarsPartsList } from '../carsPartsList/CarsPartsList';
import './App.css';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path='carslist/:id' element={<Carslist />}/>
          <Route path='carslist/:id/carspartslist/:childId' element={<CarsPartsList />}/>
        </Route>
      </Routes>
    </>
  )
}





