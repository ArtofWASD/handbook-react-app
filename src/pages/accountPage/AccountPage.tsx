import React from "react";
import Button from "ui/button/button";
import { useAppDispatch } from "utils/hooks";
import { removeUser } from "services/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <>
      <div className="text-2xl text-center py-4">accountPage</div>
      <Button title="Выход" onClickHandler={logOut} className="w-48" />
    </>
  );
};

export default Account;
