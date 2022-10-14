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
    <div>
      <span className="flex justify-center text-xl font-semibold">{title}</span>
      <form
        action=""
        method="get"
        className="modal__form grid grid-cols-1 gap-4 py-4"
      >
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded h-10 w-52 p-2 justify-self-center"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 rounded h-10 w-52 p-2 justify-self-center"
        />
        <button
          type="submit"
          className=" w-52 justify-self-center p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded"
          onClick={() => onClickHandler(email, password)}
        >
          {buttonTitle}
        </button>
      </form>
    </div>
  );
};

export default Form;
