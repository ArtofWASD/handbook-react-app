
import { useState } from "react";
import MyInput from "../../ui/input/input";
import { useAppDispatch } from "../../utils/hooks";

const UpdateUserInfo = () => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");

  return (
    <div className="flex flex-col items-center">
      <div>UpadateUserInfo</div>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <MyInput
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
