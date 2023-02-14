import { FC } from "react";

type TButton = {
  title: string;
  onClickHandler?: () => void;
  className?: string;
};

const Button: FC<TButton> = ({ title, onClickHandler, className }) => {
  return (
    <button className={`p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded-xl ` + className} onClick={onClickHandler}>
      {title}
    </button>
  );
};
export default Button;
