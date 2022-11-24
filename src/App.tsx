import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Homepage from "../src/pages/homePage/homepage";
import ChildrenCarsList from "../src/pages/children-cars-list-page/children-cars-list-page";
import CarsPartsList from "../src/pages/cars-parts-list-page/cars-parts-list-page";
import PartPostList from "../src/pages/part-post-list-page/part_post_list_page";
import RegisterPage from "../src/pages/register-page/register_page";
import LoginPage from "../src/pages/login-page/login_page";
import AccountPage from "../src/pages/account-page/account-page";
import PartPostPage from "../src/components/part-post-page/part-post-page";
import { useAppDispatch } from "../src/utils/hooks";
import { useEffect, useRef } from "react";
import { fetchData } from "./services/reducers/dataSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const getData = useRef(true)

  useEffect(() => {
    if (getData.current) {
      dispatch(fetchData())
    }
    return () => {
      getData.current = false;
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/:name" element={<ChildrenCarsList />}/>
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
