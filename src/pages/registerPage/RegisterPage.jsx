import { useDispatch } from "react-redux";
import { setUser } from "services/reducers/userSlice";
import Form from "ui/form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const dispatch = useDispatch();
  const registerHandler = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
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
