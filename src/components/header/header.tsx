import Button from "../../ui/button/button";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Input from "../../ui/input/input";
import { useState } from "react";
import { fetchSearchPostQuery } from "../../services/reducers/dataSlice";
import Modal from "react-modal";

const Header = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const postsSearchData = useAppSelector((state) => state.data.posts);

  const submitFormHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchSearchPostQuery(searchValue));
    openModalhandler();
  };

  const openModalhandler = () => {
    setIsOpen(true);
  };

  const closeModalhandler = () => {
    setIsOpen(false);
  };

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
        )} */}
        <Link to="login">
          <Button title="Авторизация" className="w-48" />
        </Link>
      </div>
      <div className="header__title grid justify-self-center py-4">
        <p className="text-center text-xl md:text-2xl font-semibold text-slate-500 px-1 leading-tight">
          Справочник по самостоятельному ремонту и замене запчастей
        </p>
      </div>
      <div className="header__search grid justify-self-center pl-10 gap-2">
        <form
          onSubmit={(e) => {
            submitFormHandler(e);
          }}
        >
          <Input
            type="text"
            className="border border-blue-500 px-72 py-2 font-semibold"
            placeholder="Поиск по постам"
            value={searchValue}
            onChangeHandler={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
      <div className="hidden md:flex md:pl-120">
        {location.pathname !== "/" && <Breadcrumb />}
      </div>
      <div className="overflow-auto overscroll-auto">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModalhandler}
        className="rounded m-auto border border-slate-500 w-150 "
      >
        {postsSearchData && postsSearchData.length >= 1 ? (
          <>
            {postsSearchData.map((item: any) => (
              <Link to='/'>
              <section className="border-2 border-slate-500 hover:border-blue-500 rounded m-1 p-2" key={item.id}>
                <div className="text-center font-semibold text-md  hover:text-blue-500">{item.title}</div>
                <div className="text-slate-500" dangerouslySetInnerHTML={{ __html: `${item.text.substring(0, 100) + "..."}` }}></div>
              </section>
              </Link>
            ))}
          </>
        ) : (
          <div className="text-center py-5">
            К сожалению по вашему запросу посты не найдены
          </div>
        )}
      </Modal>
      </div>

    </header>
  );
};

export default Header;
