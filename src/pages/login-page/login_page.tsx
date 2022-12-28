import { Link, useNavigate } from "react-router-dom";
import { sighInUser } from "../../services/reducers/userSlice";
import MyInput from "../../ui/input/input";
import { FormEvent, useState } from "react";
import Button from "../../ui/button/button";
import { useAppDispatch } from "../../utils/hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const userLoginData = {
    email: userEmail,
    password: userPassword,
  };

  const userLoginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sighInUser(userLoginData));
  };
  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          userLoginHandler(e);
        }}
        className=" flex flex-col items-center"
      >
        <MyInput
          type="email"
          placeholder="Почта"
          value={userEmail}
          onChangeHandler={(e) => setUserEmail(e.target.value)}
          className=" w-80 my-2"
        />
        <MyInput
          type="password"
          placeholder="Пароль"
          value={userPassword}
          onChangeHandler={(e) => setUserPassword(e.target.value)}
          className=" w-80 my-2"
        />
        <Button title="Войти" className="w-36 my-2"></Button>
      </form>
      <div className="flex flex-col items-center text-xl font-semibold py-4">
        <span>
          Нет учётной записи ?
          <Link to="/register" className="text-blue-700 px-2">
            Зарегестрируйтесь
          </Link>
        </span>
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
