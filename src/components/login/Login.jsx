import { useDispatch } from "react-redux";
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
    </>
  );
};

export default Login;
