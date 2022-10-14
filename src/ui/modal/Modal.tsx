import { FC } from "react";
import "./modal.css";

type TModal = {
  active: boolean;
  setActive: (arg: boolean) => void;
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
          <img
            className="h-5"
            src={closeIcon}
            alt=""
            onClick={() => setActive(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
