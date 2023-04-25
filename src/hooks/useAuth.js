import { useSelector } from "react-redux";
import {selectIsRefreshing, selectIsLoggedIn ,selectUserName} from 'redux/auth'

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    userName: useSelector(selectUserName),
  };
};