import Button from "../../ui/button/button";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Input from "../../ui/input/input";
import { FormEvent, useState } from "react";
import {
  clearCurrentPost,
  clearPostsArray,
  fetchSearchPostQuery,
} from "../../services/reducers/dataSlice";
import PartsPostsPreview from "../parts-posts-preview/parts-posts-preview";
import { Dialog } from "@headlessui/react";
import Modal from "../modal/Modal";

const Header = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const postsSearchData = useAppSelector((state) => state.data.posts);
  const postSearchStatus = useAppSelector(
    (state) => state.data.postsFetchStatus,
  );

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchSearchPostQuery(searchValue));
    setIsOpen(true);
    dispatch(clearCurrentPost());
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
      <div className="header__search grid justify-self-center">
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
        <div className="hidden md:flex justify-self-start">
          {location.pathname !== "/" && <Breadcrumb />}
        </div>
      </div>
      <div>
        <Modal
          isOpen={isOpen}
          isModalOpenHandler={() => {
            setIsOpen(false);
          }}
        >
          {postsSearchData && postsSearchData.length >= 1 ? (
            <div onClick={() => closeModalHandler()}>
              <Dialog.Title className="text-center py-2 font-semibold text-md">
                Результаты поиска по запросу : {searchValue}
              </Dialog.Title>
              {postsSearchData.map((item) => (
                <PartsPostsPreview
                  key={item.id}
                  data={item}
                  route={`post/${item.title}`}
                />
              ))}
            </div>
          ) : (
            <div>
              {postSearchStatus == "Loading" ? (
                <div className="text-center py-2 font-semibold text-md">
                  Загружаем посты по вашему запросу.
                </div>
              ) : (
                <div className="text-center py-2 font-semibold text-md">
                  Увы по вашему запросу:
                  <span className="font-bold"> {searchValue}</span>, посты не
                  найдены !
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </header>
  );
};

export default Header;
