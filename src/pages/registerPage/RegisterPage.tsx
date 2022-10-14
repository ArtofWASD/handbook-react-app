import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "services/reducers/userSlice";
import Form from "ui/form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = (email:string, password:string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return (
    <Form
      title="Регистрация нового пользователя"
      onClickHandler={registerHandler}
      buttonTitle="Регистрация"
    />
  );
};

export default Register;
