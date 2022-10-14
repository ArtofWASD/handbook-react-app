import { useState, FC } from "react";

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
      <span className="flex justify-center text-xl font-semibold">{title}</span>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 rounded h-10 w-72 p-2 justify-self-center text-center my-1"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 rounded h-10 w-72 p-2 justify-self-center text-center my-1"
      />
      <button
        type="submit"
        className=" w-52 justify-self-center p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded"
        onClick={() => onClickHandler(email, password)}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default Form;
