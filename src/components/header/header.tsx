import Button from "../../ui/button/button";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "utils/hooks";

const Header = () => {
  const location = useLocation();
  const isUserLogin = useAppSelector((state) => state.user.isLogin);
  console.log(isUserLogin);

  return (
    <header className="header grid grid-cols-auto ">
      <div className="header__button grid justify-self-end  py-4 px-4">
        {isUserLogin ? (
          <>
            <Link to="account">
              <Button title="Личный кабинет" className="w-48" />
            </Link>
          </>
        ) : (
          <>
            <Link to="login">
              <Button title="Авторизация" className="w-48" />
            </Link>
          </>
        )}
      </div>
      <div className="header__title grid justify-self-center py-4">
        <p className="text-center text-2xl font-semibold text-slate-500">
          Справочник по самостоятельному ремонту и замене запчастей
        </p>
      </div>
      <div className="header__search grid container lg:grid-cols-6 sm:grid-cols-1  justify-self-center px-10 gap-2">
        <input
          type="text"
          className="lg:col-start-2 lg:col-span-3 border border-blue-500 rounded px-4 py-2 font-semibold"
          placeholder="Номер запчасти или название"
        />
        <Button title="Поиск" className="w-48"></Button>
      </div>
      {location.pathname !== "/" && <Breadcrumb />}
    </header>
  );
};

export default Header;
