import Button from "../../ui/button/button";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Input from "../../ui/input/input";
import { useState } from "react";
import { fetchSearchPostQuery } from "../../services/reducers/dataSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const userInfo = useAppSelector((state) => state.data.posts);

  const aaaa = () => {
    dispatch(fetchSearchPostQuery(searchValue))
    console.log('click');
  }
  console.log(userInfo);
  return (
    <header className="header grid grid-cols-auto ">
      <div className="header__button grid justify-self-end  py-4 px-4">
        {/* {userInfo?.isLogin ? (
          <Link to="account">
            <div className="flex items-center gap-3">
              <img
                src={require("../../img/login.png")}
                alt="Logo"
                className="w-10"
              />
              <span className="label text-xl font-semibold text-slate-500">
                {userInfo.name !== undefined ? (
                  userInfo.name
                ) : (
                  <span> User </span>
                )}
              </span>
            </div>
          </Link>
        ) : (
          <Link to="login">
            <Button title="Авторизация" className="w-48" />
          </Link>
        )} */}
      </div>
      <div className="header__title grid justify-self-center py-4">
        <p className="text-center text-xl md:text-2xl font-semibold text-slate-500 px-1 leading-tight">
          Справочник по самостоятельному ремонту и замене запчастей
        </p>
      </div>
      <div className="header__search grid container lg:grid-cols-6 sm:grid-cols-1  justify-self-center pl-10 gap-2">
        <Input
          type="text"
          className="lg:col-start-2 lg:col-span-3 border border-blue-500 px-4 py-2 font-semibold"
          placeholder="В разработке, не тыкать!"
          value={searchValue}
          onChangeHandler={(e) => setSearchValue(e.target.value)}
        />
        <Button title="Поиск" className="w-48" onClickHandler={()=>{aaaa()}}></Button>
      </div>
      <div className="hidden md:flex md:pl-120">
      {location.pathname !== "/" && <Breadcrumb />}
      </div>
    </header>
  );
};

export default Header;
