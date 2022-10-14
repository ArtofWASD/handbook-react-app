import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "services/reducers/userSlice";
import Form from "ui/form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return (
    <Form
      title="Register"
      onClickHandler={registerHandler}
      buttonTitle="Зарегистрироваться"
    />
  );
};

export default Register;
