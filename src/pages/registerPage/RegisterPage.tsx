import { Link, useNavigate } from "react-router-dom";
import { setUser } from "services/reducers/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "ui/input/input";
import Button from "ui/button/button";
import { useState } from "react";
import { useAppDispatch } from "utils/hooks";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const registerHandler = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
      })
      .catch(console.error);
  };
  return (
    <>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          registerHandler(email, password);
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
          onClickHandler={() => registerHandler(email, password)}
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
