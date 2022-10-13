import { FC } from "react";

type TButton = { title: string; onClickHandler?: () => void };

const Button: FC<TButton> = ({ title, onClickHandler }) => {
  return (
    <>
      <button
        className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 p-2 border hover:border-blue-500 rounded"
        onClick={onClickHandler}
        title={title}
      >
        {title}
      </button>
    </>
  );
};
export default Button;
