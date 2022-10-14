import { useState, FC } from "react";
import { Link } from "react-router-dom";
import Button from "ui/button/button";

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
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 rounded-2xl h-10 w-80 p-2 justify-self-center text-center my-1"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 rounded-2xl h-10 w-80 p-2 justify-self-center text-center my-1"
      />
      <div className="py-4 flex gap-2">
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
