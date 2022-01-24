import React from "react";
import { Routes, Route, } from 'react-router-dom';
import Layout from '../layout/Layout';
import Homepage from '../homepage/Homepage';
import CarsList from '../carsList/CarsList';
import CarsPartsList from '../carsPartsList/CarsPartsList';
import PartPostList from '../partPostList/PartPostList';
import Test from '../test/test';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='carslist/:id' element={<CarsList />} />
          <Route path='carslist/:id/carspartslist/:childId' element={<CarsPartsList />} />
          <Route path='carslist/:id/carspartslist/:childId/postlist/:postId' element={<PartPostList />} />
          <Route path='test' element={<Test />} />

        </Route>
      </Routes>
    </>
  )
}





