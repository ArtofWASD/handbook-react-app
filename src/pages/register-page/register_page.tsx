import { Link, useNavigate } from "react-router-dom";
import Input from "../../ui/input/input";
import Button from "../../ui/button/button";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../utils/hooks";
import { createUser } from "../../services/reducers/userSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userData = { 
    name: userName,
    password: userPassword,
    email: userEmail
  }

  const registerUserHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createUser(userData))
    alert('Спасибо за регистрацию')
  }

  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          registerUserHandler(e)
        }}
        className=" flex flex-col items-center"
      >
        <Input
          type="name"
          placeholder="Ваше имя"
          value={userName}
          onChangeHandler={(e) => setUserName(e.target.value)}
          className=" w-80 my-2"
        />
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
