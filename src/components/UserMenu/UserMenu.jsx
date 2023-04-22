import { useDispatch, useSelector } from "react-redux";
import { selectUserName, logOut } from "redux/auth";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <>
      <p>Welcome back {name}</p>
      <button type='button' onClick={()=> dispatch(logOut())}>Logout</button>
    </>
  );
}
