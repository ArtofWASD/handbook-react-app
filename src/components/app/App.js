import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { fetchData } from '../../services/reducers/data-slice';
import Layout from '../layout/layout';
import Homepage from '../homepage/homepage';
import CarsList from '../cars-list/cars-list';
import CarsPartsList from '../carsPartsList/CarsPartsList';
import PartPostList from '../partPostList/PartPostList';
import PartPostPage from '../partPost/PartPostPage';

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  })

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='carslist/:id' element={<CarsList />} />
        <Route path='carslist/:id/carspartslist/:childId' element={<CarsPartsList />} />
        <Route path='carslist/:id/carspartslist/:childId/partlist/:partId' element={<PartPostList />} />
        <Route path='carslist/:id/carspartslist/:childId/partlist/:partId/post/:postId' element={<PartPostPage />} />
      </Route>
    </Routes>
  )
}





