import { FC } from "react";
type TInput = {
  type: string;
  value: string;
  placeholder: string;
  onChangeHandler: (e:any) => void;
  className: string;
};
const Input: FC<TInput> = ({
  type,
  value,
  placeholder,
  onChangeHandler,
  className,
}) => {
  return <input type={type} value={value} placeholder={placeholder} onChange={onChangeHandler} className={`border-2 rounded-2xl h-10 p2 text-center `+ className}/>;
};

export default Input;
