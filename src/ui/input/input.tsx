import { AnyAction } from "@reduxjs/toolkit";
import { FC, forwardRef } from "react";

type TInput = {
  type: string;
  value: string;
  placeholder: string;
  onChangeHandler: (e: AnyAction) => void;
  className: string;
  ref:any
};
const MyInput: FC<TInput> = forwardRef(function MyInput(props, ref: any) {  
  return (
    <input
      ref={ref}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      className={`border-2 rounded-xl h-10 p2 text-center ` + props.className}
    />
  );
})

export default MyInput;
