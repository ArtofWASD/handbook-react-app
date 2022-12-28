import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Homepage from "../src/pages/homePage/homepage";
import ChildrenCarsList from "../src/pages/children-cars-list-page/children-cars-list-page";
import CarsPartsList from "../src/pages/cars-parts-list-page/cars-parts-list-page";
import PartPostList from "../src/pages/part-post-list-page/part_post_list_page";
import RegisterPage from "../src/pages/register-page/register_page";
import LoginPage from "../src/pages/login-page/login_page";
import AccountPage from "../src/pages/account-page/account-page";
import PartPostPage from "./pages/part-post-page/part-post-page";
import AdminPage from "./pages/admin-page/admin-page";
import { useAppDispatch } from "../src/utils/hooks";
import { useEffect, useRef, useState } from "react";
import { fetchData } from "./services/reducers/dataSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const getData = useRef(true);
  // Получаем массив с машинами, ref для того что бы не получать ререндер фетча.
  useEffect(() => {
    if (getData.current) {
      dispatch(fetchData());
    }
    return () => {
      getData.current = false;
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="login"
          element={<LoginPage />}
        />
        <Route path="account" element={<AccountPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path=":name" element={<ChildrenCarsList />} />
        <Route path=":name/:childName" element={<CarsPartsList />} />
        <Route path=":name/:childName/:partName" element={<PartPostList />} />
        <Route
          path=":name/:childName/:partName/:postName"
          element={<PartPostPage />}
        />
        <Route path="post/:postName" element={<PartPostPage />} />
      </Route>
    </Routes>
  );
}
