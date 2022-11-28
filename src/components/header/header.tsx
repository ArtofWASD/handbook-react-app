import Button from "../../ui/button/button";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Input from "../../ui/input/input";
import { useState } from "react";
import { clearPostsArray, fetchSearchPostQuery } from "../../services/reducers/dataSlice";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const postsSearchData: any = useAppSelector((state) => state.data.posts);

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    dispatch(fetchSearchPostQuery(searchValue));
    setIsOpen(true)
  };

  const closeModalHandler = () => {
    setIsOpen(false)
    clearPostsArray()
  }

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
      <div>
        <Dialog
          open={isOpen}
          onClose={() => closeModalHandler()}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="mx-auto w-150 rounded bg-white">
                <Dialog.Title className="text-center py-2 font-semibold text-md">
                  Результаты поиска
                </Dialog.Title>
                {postsSearchData && postsSearchData.length >= 1 ? (
                  <>
                    {postsSearchData.map((item: any) => (
                      <Link to={`${item.title}`} key={item.id} onClick={()=>{closeModalHandler()}}>
                        <section className="border-2 border-slate-500 hover:border-blue-500 rounded m-1 p-2">
                          <div className="text-center font-semibold text-md">
                            {item.title}
                          </div>
                          <div
                            className="text-slate-500"
                            dangerouslySetInnerHTML={{
                              __html: `${item.text.substring(0, 200) + "..."}`,
                            }}
                          ></div>
                        </section>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Dialog.Title className="text-center py-2 font-semibold text-md">
                    Увы по вашему запросу, посты не найдены !
                  </Dialog.Title>
                )}
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
