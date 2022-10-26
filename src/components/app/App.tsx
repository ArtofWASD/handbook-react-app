import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "pages/homePage/homepage";
import ChildrenCarsList from "pages/carsListPage/childrenCarsListPage";
import CarsPartsList from "../../pages/carsPartsListPage/carsPartsListPage";
import PartPostList from "../../pages/partPostListPage/partPostListPage";
import PartPostPage from "../part-post-page/part-post-page";
import RegisterPage from "pages/registerPage/RegisterPage";
import LoginPage from "pages/loginPage/LoginPage";
import AccountPage from "pages/accountPage/AccountPage";
import { useEffect } from "react";
import { fetchData } from "services/reducers/dataSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { setUser } from "services/reducers/userSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const isAppLoad = useAppSelector((state) => state.data.status);

  const isUserLogin = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
      } else {
        console.log("пользовател вышел");
      }
    });
  };

  useEffect(() => {
    isUserLogin();
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Routes>
      {isAppLoad === "Resolved" ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/:id" element={<ChildrenCarsList />} />
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
      ) : (
        <></>
      )}
    </Routes>
  );
}
