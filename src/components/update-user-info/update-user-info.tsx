import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { setUser } from "services/reducers/userSlice";
import Input from "ui/input/input";
import { useAppDispatch } from "utils/hooks";

const UpdateUserInfo = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");

  const updateProfileHandler = () => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => {
          dispatch(setUser({ name: auth.currentUser?.displayName }));
        })
        .catch((error) => {});
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div>UpadateUserInfo</div>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          updateProfileHandler();
        }}
      >
        <Input
          type="text"
          placeholder="Ваше имя"
          value={userName}
          onChangeHandler={(e) => setUserName(e.target.value)}
          className=" w-80 my-2"
        />
      </form>
    </div>
  );
};

export default UpdateUserInfo;
