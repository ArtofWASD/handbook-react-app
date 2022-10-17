import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "pages/homePage/homepage";
import CarsList from "pages/carsListPage/carsListPage";
import CarsPartsList from "../../pages/carsPartsListPage/carsPartsListPage";
import PartPostList from "../../pages/partPostListPage/partPostListPage";
import PartPostPage from "../part-post-page/part-post-page";
import RegisterPage from "pages/registerPage/RegisterPage";
import LoginPage from "pages/loginPage/LoginPage";
import AccountPage from "pages/accountPage/AccountPage"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "services/reducers/dataSlice";


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/:id" element={<CarsList />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="/:id/:childId" element={<CarsPartsList />} />
        <Route path="/:id/:childId/:partId" element={<PartPostList />} />
        <Route
          path="/:id/:childId/:partId/:postId"
          element={<PartPostPage />}
        />
      </Route>
    </Routes>
  );
}
