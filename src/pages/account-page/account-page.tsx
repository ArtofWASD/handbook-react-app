import Button from "../../ui/button/button";
import { useAppDispatch } from "../../utils/hooks";
import { Link, useNavigate } from "react-router-dom";
import UpdateUserInfo from "../../components/update-user-info/update-user-info";

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  return (
    <>
      <div className="text-2xl text-center py-4">accountPage</div>
      <UpdateUserInfo />
      <div className="flex justify-center gap-3 pt-48">
        <Button title="Выход" className="w-48" />
        <Link to="/">
          <Button title="На Главную" className="w-48" />
        </Link>
      </div>
    </>
  );
};

export default Account;
