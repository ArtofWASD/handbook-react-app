import { FC } from "react";
import "./modal.css";
type TModal = {
  active: boolean;
  setActive: (arg:boolean) => void;
};
const Modal: FC<TModal> = ({ active, setActive }) => {
  const closeIcon = require("../../img/close.svg");
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__title flex items-center">
          <div className="text-center text-xl font-semibold px-48">Войти</div>
          <img
            className="h-5"
            src={closeIcon}
            alt=""
            onClick={() => setActive(false)}
          />
        </div>
        <form
          action=""
          method="get"
          className="modal__form grid grid-cols-1 gap-4 py-4"
        >
          <input
            type="text"
            placeholder="Login"
            className="border-2 rounded h-10 w-52 p-2 justify-self-center"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-2 rounded h-10 w-52 p-2 justify-self-center"
          />
          <button
            type="submit"
            className=" w-52 justify-self-center p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded"
          >
            Вход
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
