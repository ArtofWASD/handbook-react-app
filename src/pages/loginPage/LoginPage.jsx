import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "services/reducers/userSlice";
import Form from "ui/form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <>
      <Form
        title="Введите ваш логин и пароль"
        buttonTitle="Войти"
        onClickHandler={loginHandler}
      />
      <span className='flex justify-center text-xl font-semibold'>
        Нет учётной записи ? <Link to="/register" className="text-blue-700 px-2">Регистрация</Link>
      </span>
    </>
  );
};

export default Login;
