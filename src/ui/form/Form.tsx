import { useState, FC } from "react";
import { Link } from "react-router-dom";
import Button from "ui/button/button";
import Input from "ui/input/input";

type TForm = {
  buttonTitle: string;
  title: string;
  onClickHandler: (email: string, password: string) => void;
};

const Form: FC<TForm> = ({ title, onClickHandler, buttonTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center py-3">
      <span className="flex justify-center text-xl font-semibold pb-4">
        {title}
      </span>
      <Input
        type="email"
        placeholder="Почта"
        value={email}
        onChangeHandler={(e) => setEmail(e.target.value)}
        className=" w-80 my-2"
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChangeHandler={(e) => setPassword(e.target.value)}
        className=" w-80 my-2"
      />
      <div className="py-4 flex gap-7">
        <Link to="../">
          <Button
            title="На главную"
            className="w-36 justify-self-center p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded-xl"
          />
        </Link>
        <Button
          title={buttonTitle}
          onClickHandler={() => onClickHandler(email, password)}
          className="w-36 justify-self-center p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded-xl"
        ></Button>
      </div>
    </div>
  );
};

export default Form;
