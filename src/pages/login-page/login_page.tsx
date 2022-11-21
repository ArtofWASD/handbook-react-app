import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../services/reducers/userSlice";
import Input from "../../ui/input/input";
import { useState } from "react";
import Button from "../../ui/button/button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (email: string, password: string) => {
  };

  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(email, password);
          navigate("/");
        }}
        className=" flex flex-col items-center"
      >
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
          title="Войти"
          onClickHandler={() => loginHandler(email, password)}
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
