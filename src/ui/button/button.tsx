import { FC } from "react";

type TButton = {
  title: string;
  onClickHandler?: () => void;
  className: string;
};

const Button: FC<TButton> = ({ title, onClickHandler, className }) => {
  return (
    <button className={className} onClick={onClickHandler}>
      {title}
    </button>
  );
};
export default Button;
