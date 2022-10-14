import Modal from "../../ui/modal/Modal";
import { useState } from "react";
import Button from "../../ui/button/button";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const location = useLocation();

  return (
    <header className="header grid grid-cols-auto ">
      <div className="header__button grid justify-self-end  py-4 px-4">
        <Link to="login">
          <Button title="Авторизация" />
        </Link>
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
        <button className="bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">
          Поиск
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      {location.pathname !== "/" && <Breadcrumb />}
    </header>
  );
};

export default Header;
