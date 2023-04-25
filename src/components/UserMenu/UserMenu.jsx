import { useDispatch, } from "react-redux";
import { logOut } from "redux/auth";
import  {useAuth}  from 'hooks/useAuth';


export default function UserMenu() {
  const dispatch = useDispatch();
  const {userName} = useAuth();

  return (
    <>
      <p>Welcome back {userName}</p>
      <button type='button' onClick={()=> dispatch(logOut())}>Logout</button>
    </>
  );
}
