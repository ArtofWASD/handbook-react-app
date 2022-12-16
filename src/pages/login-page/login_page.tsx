import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {sighInUser } from "../../services/reducers/userSlice";
import Input from "../../ui/input/input";
import { FormEvent, useState } from "react";
import Button from "../../ui/button/button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userLoginData = {
    email: userEmail,
    password: userPassword
  }

  const userLoginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(sighInUser(userLoginData))
  }
  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          userLoginHandler(e)
        }}
        className=" flex flex-col items-center"
      >
        <Input
          type="email"
          placeholder="Почта"
          value={userEmail}
          onChangeHandler={(e) => setUserEmail(e.target.value)}
          className=" w-80 my-2"
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={userPassword}
          onChangeHandler={(e) => setUserPassword(e.target.value)}
          className=" w-80 my-2"
        />
        <Button
          title="Войти"
          className="w-36 my-2"
        ></Button>
      </form>
      <div className="flex flex-col items-center text-xl font-semibold py-4">
        {/* <span>
          Нет учётной записи ?
          <Link to="/register" className="text-blue-700 px-2">
            Зарегестрируйтесь
          </Link>
        </span> */}
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

export default Login;
