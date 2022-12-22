import { Dialog } from "@headlessui/react";
import { FormEvent, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchSearchPostQuery,
  clearCurrentPost,
  clearPostsArray,
} from "../../services/reducers/dataSlice";
import MyInput from "../../ui/input/input";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Modal from "../modal/Modal";
import PartsPostsPreview from "../parts-posts-preview/parts-posts-preview";
import Breadcrumb from "../breadcrumbs/breadcrumbs";

const PostSearch = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const postsSearchData = useAppSelector((state) => state.data.posts);
  const postSearchStatus = useAppSelector(
    (state) => state.data.postsFetchStatus,
  );
  const searchRef = useRef(null);

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
    <>
      <div className="search_bar grid justify-self-center">
        <form
          onSubmit={(e) => {
            submitFormHandler(e);
          }}
        >
          <MyInput
            ref={searchRef}
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
    </>
  );
};

export default PostSearch;
