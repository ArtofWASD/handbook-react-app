import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/input/input";
import Button from "../../ui/button/button";
import { useState } from "react";
import { useAppDispatch } from "../../utils/hooks";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        className=" flex flex-col items-center"
      >
        <Input
          type="name"
          placeholder="Ваше имя"
          value={name}
          onChangeHandler={(e) => setName(e.target.value)}
          className=" w-80 my-2"
        />
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
        <Button
          title="Зарегестрироваться"
          className="w-48 my-2"
        ></Button>
      </form>
      <div className="flex justify-center text-xl font-semibold py-4">
        <span>
          Вернуться на
          <Link to="/" className="text-blue-700 px-2">
            главную
          </Link>
        </span>
      </div>
    </>
  );
};

export default Register;
