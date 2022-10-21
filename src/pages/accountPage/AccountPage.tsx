import Button from "ui/button/button";
import { useAppDispatch } from "utils/hooks";
import { removeUser } from "services/reducers/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="text-2xl text-center py-4">accountPage</div>
      <div className="flex justify-center gap-3 pt-48">
        <Button title="Выход" onClickHandler={logOut} className="w-48" />
        <Link to="/">
          <Button title="На Главную" className="w-48" />
        </Link>
      </div>
    </>
  );
};

export default Account;
