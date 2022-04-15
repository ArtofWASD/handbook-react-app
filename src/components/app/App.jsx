import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { fetchData } from '../../services/reducers/data-slice';
import Layout from '../layout/layout';
import Homepage from '../homepage/homepage';
import CarsList from '../cars-list/cars-list';
import CarsPartsList from '../cars-parts-list/cars-parts-list';
import PartPostList from '../part-post-list/part-post-list';
import PartPostPage from '../part-post-page/part-post-page';

export default function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/:id' element={<CarsList />} />
        <Route path='/:id/:childId' element={<CarsPartsList />} />
        <Route path='/:id/:childId/:partId' element={<PartPostList />} />
        <Route path='/:id/:childId/:partId/:postId' element={<PartPostPage />} />
      </Route>
    </Routes>
  )
}





