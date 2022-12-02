import Button from "../../ui/button/button";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Input from "../../ui/input/input";
import { useState } from "react";
import {
  clearCurrentPost,
  clearPostsArray,
  fetchSearchPostQuery,
} from "../../services/reducers/dataSlice";
import { Dialog } from "@headlessui/react";
import PartsPostsPreview from "../parts-posts-preview/parts-posts-preview";

const Header = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const postsSearchData: any = useAppSelector((state: any) => state.data.posts);
  const postSearchStatus: string = useAppSelector(
    (state: any) => state.data.postsFetchStatus,
  );
  

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    dispatch(fetchSearchPostQuery(searchValue));
    setIsOpen(true);
    dispatch(clearCurrentPost())
  };

  const closeModalHandler = () => {
    setIsOpen(false);
    dispatch(clearPostsArray());
    setSearchValue("");
  };

  return (
    <header className="header grid grid-cols-auto ">
      <div className="header__button grid justify-self-end  py-4 px-4">
        <Link to="login">
          <Button title="Авторизация" className="w-48" />
        </Link>
      </div>
      <div className="header__title grid justify-self-center py-4">
        <p className="text-center text-xl md:text-2xl font-semibold text-slate-500 px-1 leading-tight">
          Справочник по самостоятельному ремонту и замене запчастей
        </p>
      </div>
      <div className="header__search grid justify-self-center gap-2">
        <form
          onSubmit={(e) => {
            submitFormHandler(e);
          }}
        >
          <Input
            type="text"
            className="border border-blue-500 px-14 sm:px-24 md:px-48 lg:px-72 py-2 font-semibold"
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
            <div className="flex min-h-full items-center justify-center">
              <Dialog.Panel className="mx-auto max-w-full rounded bg-white px-4">
                <Dialog.Title className="text-center py-2 font-semibold text-md">
                  Результаты поиска по запросу : {searchValue}
                </Dialog.Title>
                {postsSearchData && postsSearchData.length >= 1 ? (
                  <div onClick={() =>closeModalHandler()}>
                    {postsSearchData.map((item: any) => (
                      <PartsPostsPreview
                        key={item.id}
                        data={item}
                        route={`post/${item.title}`}

                      />
                    ))}
                  </div>
                ) : (
                  <div className="">
                    {postSearchStatus == "Loading" ? (
                      <Dialog.Title className="text-center py-2 font-semibold text-md">
                        Загружаем посты по вашему запросу.
                      </Dialog.Title>
                    ) : (
                      <Dialog.Title className="text-center py-2 font-semibold text-md">
                            Увы по вашему запросу: <span className="font-bold"> {searchValue}</span>, посты не найдены !
                      </Dialog.Title>
                    )}
                  </div>
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
